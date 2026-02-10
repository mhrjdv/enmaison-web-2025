"use client";
import { usePathname, useRouter } from "next/navigation";
import { Home, Briefcase, Image, BookOpen, Info, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

const navTabs = [
  { title: "Home", icon: Home, link: "/" },
  { title: "Portfolio", icon: Briefcase, link: "/projects" },
  { title: "Gallery", icon: Image, link: "/gallery" },
  { type: "separator" },
  { title: "Studio", icon: Info, link: "/about" },
  { title: "Journal", icon: BookOpen, link: "/blogs" },
  { title: "Contact", icon: Mail, link: "/contact" },
];

export default function MobileDock() {
  const pathname = usePathname();
  const router = useRouter();

  const handleTabChange = (index) => {
    if (index === null) return;
    // Find the actual tab (skip separators when mapping index)
    const tab = navTabs[index];
    if (tab && tab.link) {
      router.push(tab.link);
    }
  };

  // Find the active tab index based on current pathname
  const activeIndex = navTabs.findIndex(
    (tab) => tab.link && (tab.link === pathname || (tab.link !== "/" && pathname.startsWith(tab.link)))
  );

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center lg:hidden px-4">
      <ExpandableTabs
        tabs={navTabs}
        activeColor="text-[#c9a44a]"
        className="border-[#1a3a2a]/20 bg-white/95 backdrop-blur-xl shadow-2xl"
        onChange={handleTabChange}
      />
    </div>
  );
}
