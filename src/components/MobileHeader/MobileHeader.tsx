import Image from "next/image";
import logo from "@/assets/logo.svg";
import { MoreVertical } from "@/assets";
import Input from "../Input/Input";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

interface MobileHeaderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onMenuToggle: () => void;
}

export default function MobileHeader({
  value,
  onChange,
  onSearch,
  onMenuToggle,
}: MobileHeaderProps) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-border px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="Logo" width={35} height={35} />
        </div>

        {/* Search Input */}
        <form onSubmit={onSearch} className="flex-1 max-w-sm">
          <Input
            type="text"
            placeholder="Search podcasts..."
            size="sm"
            className="w-full text-center border-[#5a5b65] bg-transparent text-text-primary placeholder-text-secondary focus:border-[#7B7BEF] focus:bg-secondary"
            value={value}
            onChange={onChange}
          />
        </form>

        {/* Menu Trigger */}
        <div className="flex-shrink-0">
          <DropdownMenu
            width="w-[200px]"
            trigger={
              <button
                onClick={onMenuToggle}
                className="p-2 rounded-full focus:bg-[#0e0f1a] text-text-primary hover:bg-secondary/20 transition-colors"
                aria-label="Menu"
              >
                <MoreVertical />
              </button>
            }
            items={[
              {
                label: "Home",
                onClick: () => {},
              },
              {
                label: "Discover",
                onClick: () => {},
                divider: true,
              },
              {
                label: "My Queue",
                onClick: () => {},
              },
              {
                label: "My Podcasts",
                onClick: () => {},
              },
              {
                label: "Recents",
                onClick: () => {},
                divider: true,
              },
              {
                label: "Settings",
                onClick: () => {},
              },
              {
                label: "About Podbay",
                onClick: () => {},
              },
              {
                label: "Privacy",
                onClick: () => {},
              },
              {
                label: "Terms",
                onClick: () => {},
                divider: true,
              },
              {
                label: "Contact & Feedback",
                onClick: () => {},
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
