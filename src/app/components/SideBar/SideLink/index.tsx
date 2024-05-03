'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideLinkProps {
  href: string;
  icon: string;
  children: React.ReactNode;
}

export default function SideLink({ href, icon, children }: SideLinkProps) {
  const pathName = usePathname();
  if (pathName === href) icon += "-active";
  return (
    <Link 
      className={`
        w-full flex gap-6 items-center p-2 rounded-md
        ${pathName === href ? "bg-gray-100" : ""}
      `}
      href={href}
    >
      <Image src={`/icons/${icon}.png`} alt="icon" width={20} height={20} />
      {children}
    </Link>
  );
}