import { Outlet } from "react-router-dom";
import NavbarMenuPill from "@/components/navbars/NavbarMenuPill";
import FooterWordmarkLanding from "@/components/sections/footer/FooterWordmarkLanding";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarMenuPill
          brand="Skin Sence"
          navItems={[
            {
              name: "Ballina",
              href: "#hero"
            },
            {
              name: "Rreth nesh",
              href: "#hero"
            },
            {
              name: "Shërbimet",
              href: "#services"
            },
            {
              name: "Para dhe pas",
              href: "#gallery"
            },
            {
              name: "Kontakt",
              href: "#contact"
            }
          ]}
          contact={{
            text: "Rezervo tani",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer" className="relative z-[45]">
        <FooterWordmarkLanding
          brand="Skin Sence"
          links={[
            {
              text: "Politika e privatësisë",
              href: "#"
            },
            {
              text: "Kontakt",
              href: "#contact"
            }
          ]}
          tagline="Sepse bukuria e vërtetë nuk ndryshohet. Ajo përsoset."
          copyright="© 2026 Skin Sence. Të gjitha të drejtat e rezervuara."
        />
      </footer>
    </div>
  );
}
