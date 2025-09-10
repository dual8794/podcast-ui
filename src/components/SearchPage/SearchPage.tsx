"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { ItunesResult, ItunesSearchResponse } from "@/types/response.types";
import {
  Sidebar,
  SearchBar,
  PodcastCard,
  ScrollableContainer,
  Loader,
  EpisodeContainer,
} from "@/components";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import MobileSidebar from "@/components/MobileSidebar/MobileSidebar";
import useGetSearchItunesQuery from "@/services/useGetSearchItunesQuery";
import { getAuthorColor } from "@/utils/authorColors";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const term = searchParams?.get("q") || "";

  const { data, isLoading } = useGetSearchItunesQuery(term);
  const results = (data as ItunesSearchResponse) || {
    podcasts: [],
    episodes: [],
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString() || "");
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value || "";
    const queryString = createQueryString("q", value);
    router.push(`${pathname}?${queryString}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = (formData.get("search") as string) || "";
    const queryString = createQueryString("q", searchValue);
    router.push(`${pathname}?${queryString}`);
  };

  return (
    <div className="bg-primary text-white min-h-screen flex">
      {/* Mobile Header */}
      <MobileHeader
        value={term}
        onChange={handleTermChange}
        onSearch={handleSearch}
        onMenuToggle={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Desktop Sidebar */}
      <Sidebar />

      <main className="overflow-x-hidden mt-2 space-y-6 lg:ml-[225px] w-full pt-16 lg:pt-2 px-4 lg:px-0">
        {/* Search */}
        <SearchBar
          value={term}
          onChange={handleTermChange}
          onSearch={handleSearch}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Top Podcasts */}
            <section className="px-0 lg:px-4">
              <ScrollableContainer
                className="pt-5"
                title={`Top podcasts for ${term}`}
              >
                {results?.podcasts?.map(
                  (p: ItunesResult, index: number) =>
                    p.kind === "podcast" && (
                      <div
                        key={p.id || `podcast-${index}`}
                        className="w-58 flex-shrink-0"
                      >
                        <PodcastCard
                          title={p.collectionName || ""}
                          author={p.artistName || ""}
                          image={p.artworkUrl600 || ""}
                          accentColor={getAuthorColor(p.artistName || "")}
                        />
                      </div>
                    )
                )}
              </ScrollableContainer>
            </section>
            {/* Top Episodes */}
            <section className="px-0 lg:px-4">
              <EpisodeContainer
                title={`Top episodes for ${term}`}
                episodes={results?.episodes || []}
              />
            </section>
          </>
        )}
      </main>
    </div>
  );
}
