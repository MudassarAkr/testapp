"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  logo?: string
  showSignup?: boolean
  activeTab?: string
}

export function NavBar({ items, className, logo = "UserLens", showSignup = true, activeTab: externalActiveTab }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0].name)
  const activeTab = externalActiveTab || internalActiveTab
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pt-6 px-6",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#4B086D] to-[#ACC0FE] bg-clip-text text-transparent">
            {logo}
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setInternalActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                  "text-foreground/80 hover:text-primary",
                  isActive && "bg-muted text-primary",
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>

        {/* Signin Button */}
        {showSignup && (
          <Link href="#signin">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-[#4B086D] text-white text-sm font-semibold rounded-full shadow-lg hover:bg-[#6B28A0] transition-colors hidden md:block"
            >
              Sign In
            </motion.button>
          </Link>
        )}
      </div>
    </div>
  )
}
