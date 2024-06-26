import Link from "next/link";
import { SiteBrand } from "./site-brand";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const navs = [
  {
    label: "Todo",
    href: "/todo",
  },
  {
    label: "Pomodoro",
    href: "/pomodoro",
  },
  {
    label: "Timer",
    href: "/timer",
  },
  {
    label: "Workflow",
    href: "/workflow",
  },
];

export function SiteHeader() {
  return (
    <header className="w-full bg-background">
      <nav className="max-w-3xl px-4 py-2 mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Link href={"/"}>
            <SiteBrand />
          </Link>

          <div className="hidden md:block">
            {navs.map((nav, id) => {
              return (
                <Link
                  key={id}
                  href={nav.href}
                  className={cn(
                    buttonVariants({
                      variant: "link", className:"text-base"
                    })
                  )}
                >
                  {nav.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
