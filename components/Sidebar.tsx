'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  user?: any; // Adjust this type according to your requirements
}

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="w-[24px] h-[24px] max-xl:w-[14px] max-xl:h-[14px]" // Corrected Tailwind classes
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link flex items-center gap-2', { 'bg-bank-gradient': isActive })}
            >
              <div className="relative w-6 h-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn('object-contain', { 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        USER
      </nav>
      FOOTER
    </section>
  )
}

export default Sidebar;



