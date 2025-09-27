import { HomeIcon, LayersIcon, RocketIcon, UserIcon, SendIcon } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

export default function Navigation() {
  const items = [
    { name: "Home", url: "#home", icon: HomeIcon },
    { name: "About", url: "#about", icon: UserIcon },
    { name: "Projects", url: "#projects", icon: RocketIcon },
    { name: "Stack", url: "#skills", icon: LayersIcon },
    { name: "Contact", url: "#contact", icon: SendIcon },
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