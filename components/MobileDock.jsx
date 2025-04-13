"use client";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TbHome,
  TbPhotoSearch,
  TbInfoCircle,
  TbLayoutGrid,
  TbMailFast,
  TbBook
} from "react-icons/tb";
import { motion } from "motion/react";

const navItems = [
  { name: "HOME", link: "/", icon: TbHome },
  { name: "PROJECTS", link: "/projects", icon: TbPhotoSearch },
  { name: "ABOUT", link: "/about", icon: TbInfoCircle },
  { name: "GALLERY", link: "/gallery", icon: TbLayoutGrid },
  { name: "BLOGS", link: "/blogs", icon: TbBook },
  { name: "CONTACT", link: "/contact", icon: TbMailFast },
];

export default function MobileDock() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-4 left-0 right-0 z-50 sm:hidden"
    >
      <Dock
        className="bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-800 shadow-xl max-w-[92%] mx-auto gap-4 py-2 px-2"
        iconSize={40}
        iconMagnification={56}
        iconDistance={100}
      >
        {navItems.map((item, index) => {
          const isActive = pathname === item.link;
          const Icon = item.icon;

          return (
            <Link href={item.link} key={index}>
              <DockIcon
                className={`${isActive
                  ? 'bg-gray-100 dark:bg-gray-800'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
              >
                <Icon
                  className={`size-6 ${isActive
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 dark:text-gray-400'}`}
                />
              </DockIcon>
            </Link>
          );
        })}
      </Dock>
    </motion.div>
  );
}
