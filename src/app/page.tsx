"use client";
import { Suspense } from "react";
import { Loader, SearchPage } from "@/components";

export default function HomePage() {
  return (
    <Suspense fallback={<Loader />}>
      <SearchPage />
    </Suspense>
  );
}
