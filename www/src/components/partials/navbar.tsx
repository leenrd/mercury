"use client";

import AnimatedBackground from "@/components/ui/animated-bg";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Github,
  LifeBuoy,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Wrapper from "./wrapper";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const TABS = [
    {
      href: "/market",
      label: "Markets",
    },
    {
      href: "/overview",
      label: "Overview",
    },
    {
      href: "/vault",
      label: "Vault",
    },
    {
      href: "/transactions",
      label: "Transactions",
    },
  ];

  const DROPLINKS = [
    {
      href: "/settings",
      label: "Settings",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full border-b text-primary font-base bg-background/90 backdrop-blur-lg">
      <Wrapper className="flex items-center justify-between">
        <section className="flex gap-3 items-center">
          <div className="flex items-center justify-center">
            <Image src="/favicon.ico" width={29} height={29} alt="logo" />
          </div>
          <AnimatedBackground
            defaultValue={TABS[0].label}
            className="rounded-md bg-foreground/10"
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            enableHover
          >
            {TABS.map((tab, index) => (
              <Link href={tab.href} key={index} data-id={tab} scroll={false}>
                <button
                  type="button"
                  className={cn(
                    "px-2.5 py-1.5 text-primary/90 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-zinc-50",
                    {
                      "text-primary font-medium": path === tab.href,
                    }
                  )}
                >
                  {tab.label}
                </button>
              </Link>
            ))}
          </AnimatedBackground>
        </section>

        <section id="user_drop-down">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center">
                <Settings className="mr-2 h-[18px] w-[18px] stroke-primary/45" />
                <ChevronDown
                  className="h-5 w-5 stroke-primary/45"
                  strokeWidth={2.25}
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <Link href={DROPLINKS[0].href} scroll={false}>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <Link href={"https://github.com/leenrd/mercury"}>
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
