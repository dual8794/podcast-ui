import Button from "../Button/Button";
import Input from "../Input/Input";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { ChevronLeft, ChevronRight, MoreVertical } from "@/assets";

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="hidden lg:flex flex-row w-full items-center gap-2 px-4">
      <div className="flex flex-row gap-2">
        <ChevronLeft width={28} height={28} />
        <ChevronRight width={28} height={28} />
      </div>
      <form onSubmit={onSearch} className="w-full">
        <Input
          type="text"
          placeholder="Search through over 70 million podcasts and episodes..."
          size="sm"
          className="w-full text-center border-[#5a5b65] bg-transparent text-text-primary placeholder-text-secondary focus:border-[#7B7BEF]  focus:bg-secondary"
          value={value}
          onChange={onChange}
        />
      </form>
      <div className="flex flex-row gap-2 w-55 justify-end items-center">
        <Button variant="primary" size="sm" className="text-xs">
          Log in
        </Button>
        <Button variant="primary" size="sm" className="text-xs">
          Sign up
        </Button>

        <DropdownMenu
          width="w-[200px]"
          trigger={
            <button
              className="p-1 rounded-full focus:bg-[#0e0f1a] text-text-primary"
              aria-label="Menu"
            >
              <MoreVertical />
            </button>
          }
          items={[
            {
              label: `Settings`,
              onClick: () => {},
              divider: true,
            },
            {
              label: `About Podbay`,
              onClick: () => {},
            },
            {
              label: `Waht's New`,
              onClick: () => {},
            },
            {
              label: `Podcaster FAQ`,
              onClick: () => {},
            },
            {
              label: `Privacy`,
              onClick: () => {},
            },
            {
              label: `Terms`,
              onClick: () => {},
              divider: true,
            },
            {
              label: `Contact & Feedback`,
              onClick: () => {},
            },
            {
              label: `Clear Data...`,
              onClick: () => {},
            },
          ]}
        />
      </div>
    </div>
  );
}
