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
import { motion } from "framer-motion";

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
        className="bg-white/95 dark:bg-enmaison-dark-green/95 border border-enmaison-gold/20 dark:border-enmaison-gold/30 shadow-2xl max-w-[92%] mx-auto gap-4 py-2 px-2 backdrop-blur-md"
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
                  ? 'bg-enmaison-gold/20 dark:bg-enmaison-gold/30'
                  : 'hover:bg-enmaison-gold/10 dark:hover:bg-enmaison-gold/20'} transition-colors duration-300`}
              >
                <Icon
                  className={`size-6 ${isActive
                    ? 'text-enmaison-green dark:text-enmaison-gold'
                    : 'text-enmaison-teal dark:text-enmaison-cream hover:text-enmaison-green dark:hover:text-enmaison-gold'} transition-colors duration-300`}
                />
              </DockIcon>
            </Link>
          );
        })}
      </Dock>
    </motion.div>
  );
}
