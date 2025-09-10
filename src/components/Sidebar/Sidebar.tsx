import Image from "next/image";
import logo from "@/assets/logo.svg";

export default function Sidebar() {
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

  return (
    <div className="hidden lg:block fixed min-h-screen border-r-[1px] border-border bg-sidebar w-[225px]">
      <div className="pt-[18px] pl-[18px] mb-[25px]">
        <Image src={logo} alt="Logo" width={45} height={45} />
      </div>
      <aside className="flex flex-col justify-between text-[14px]">
        <nav className="pr-[5px] ml-[3px]">
          {menuItems.map((item) => (
            <div
              className="flex flex-row  pt-[10px] pb-[10px] pr-[15px] pl-[15px]"
              key={item.label}
            >
              <div className="mr-[8px] ml-[3px]">{item.icon}</div>
              <a
                aria-label={item.label}
                key={item.label}
                href="#"
                className="block font-weight-500 text-white hover:text-accent"
              >
                {item.label}
              </a>
            </div>
          ))}
          <p className="text-[12px] font-bold uppercase text-text-secondary pl-[15px] mt-[20px] ml-[3px] mb-[5px]">
            your stuff
          </p>
          {myStuffMenuItems.map((item) => (
            <div
              className="flex flex-row  pt-[10px] pb-[10px] pr-[15px] pl-[15px] "
              key={item.label}
            >
              <div className="mr-[8px] ml-[3px]">{item.icon}</div>
              <a
                aria-label={item.label}
                key={item.label}
                href="#"
                className="block font-weight-500 text-white hover:text-accent"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>
        {/* sidebar footer */}
        <p className="text-xs text-text-secondary fixed bottom-[10px] left-[10px]">
          Podbay v2.9.6 by Fancy Soups.
        </p>
      </aside>
    </div>
  );
}
