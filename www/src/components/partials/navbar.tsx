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

const Navbar = () => {
  const TABS = ["Account", "Vault", "Transactions", "Optimize", "Markets"];

  return (
    <nav className="fixed w-full flex items-center justify-between py-2 px-10 border-b text-primary font-base bg-background/20 backdrop-blur-lg">
      <section className="flex gap-3 items-center">
        <div className="h-5 w-5 bg-primary rounded-tr-lg rounded-bl-lg"></div>
        <AnimatedBackground
          defaultValue={TABS[0]}
          className="rounded-md bg-foreground/10"
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          enableHover
        >
          {TABS.map((tab, index) => (
            <button
              key={index}
              data-id={tab}
              type="button"
              className="px-2.5 py-1.5 text-primary/80 transition-colors duration-300 hover:text-primary dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {tab}
            </button>
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
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
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
    </nav>
  );
};

export default Navbar;
