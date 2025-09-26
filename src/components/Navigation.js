import { HomeIcon, BriefcaseIcon, CodeIcon, UserIcon, MailIcon } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

export default function Navigation() {
  const items = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "About", url: "#about", icon: UserIcon },
    { name: "Projects", url: "#projects", icon: CodeIcon },
    { name: "Skills", url: "#skills", icon: BriefcaseIcon },
    { name: "Contact", url: "#contact", icon: MailIcon },
  ];

  return (
    <header>
      <NavBar
        items={items}
        className="[&_*]:!transition-none"
      />
    </header>
  );
}