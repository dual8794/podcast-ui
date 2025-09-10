import Image from "next/image";
import { useEffect } from "react";
import logo from "@/assets/logo.svg";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const menuItems = [
    {
      label: "Home",
      icon: (
        <Image
          src="https://podbay.fm/static/images/menu/home-line.svg"
          alt="Home"
          width={18}
          height={16}
        />
      ),
    },
    {
      label: "Discover",
      icon: (
        <Image
          src="https://podbay.fm/static/images/menu/discover-line.svg"
          alt="Discover"
          width={18}
          height={16}
        />
      ),
    },
  ];

  const myStuffMenuItems = [
    {
      label: "My Queue",
      icon: (
        <Image
          src="https://podbay.fm/static/images/menu/my-queue-line.svg"
          alt="My Queue"
          width={18}
          height={16}
        />
      ),
    },
    {
      label: "My Podcasts",
      icon: (
        <Image
          src="https://podbay.fm/static/images/menu/my-podcasts-line.svg"
          alt="My Podcasts"
          width={18}
          height={16}
        />
      ),
    },
    {
      label: "Recents",
      icon: (
        <Image
          src="https://podbay.fm/static/images/menu/recents-line.svg"
          alt="Recents"
          width={18}
          height={16}
        />
      ),
    },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isOpen &&
        !target.closest(".mobile-sidebar") &&
        !target.closest(".mobile-header")
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`lg:hidden mobile-sidebar fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-sidebar border-r border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Image src={logo} alt="Logo" width={45} height={45} />
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/20 transition-colors text-white"
                >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase text-text-secondary px-3 mb-3">
                Your Stuff
              </p>
              <div className="space-y-2">
                {myStuffMenuItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/20 transition-colors text-white"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <p className="text-xs text-text-secondary">
              Podbay v2.9.6 by Fancy Soups.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
