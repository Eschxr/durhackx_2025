import darkLogo from "@/assets/logos/main_dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";

export function Logo() {
  return (
    // <div className="relative h-8 max-w-[10.847rem]">
    <div className="relative h-36">
      <Image
        src={logo}
        fill
        className="dark:hidden"
        alt="I/WE logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="I/WE logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
