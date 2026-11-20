import { Outlet } from "react-router-dom";
import NavbarMenuPill from "@/components/navbars/NavbarMenuPill";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarMenuPill
          brand="Skin Sence"
          mark="•"
          navItems={[
            {
              name: "Ballina",
              href: "/"
            },
            {
              name: "Rreth nesh",
              href: "/rreth-nesh"
            },
            {
              name: "Shërbimet",
              href: "/sherbimet"
            },
            {
              name: "Para dhe pas",
              href: "/para-dhe-pas"
            },
            {
              name: "Kontakt",
              href: "/kontakt"
            }
          ]}
          contact={{
            text: "Rezervo tani",
            href: "/kontakt"
          }}
          menuText="Menu"
          closeText="Mbyll"
        />
      </header>
      
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>

      {/* Floating round green WhatsApp button fixed at bottom right */}
      <a
        href="https://wa.me/355600000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Na kontaktoni në WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
      >
        <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.86 5.86L2.6 21.4a.75.75 0 00.93.93l3.54-1.26A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.006 17.5a7.94 7.94 0 01-4.04-1.1l-.29-.17-2.39.85.86-2.33-.19-.3A7.952 7.952 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-7.994 8zM16.1 13.98c-.28-.14-1.65-.81-1.9-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.34.21-.62.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.8 1.16 3c.14.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.11-.26-.18-.54-.32z"/>
        </svg>
      </a>

      <footer data-webild-section="Footer" data-section="footer" className="relative z-[45]">
        <div className="kit-glass mx-auto flex w-[var(--container)] flex-col px-[1.375rem] pt-[2.5rem] pb-[2rem] lg:px-[clamp(2rem,3.5vw,3.5rem)] lg:pt-[3.5rem]">
          {/* Main Footer Brand Header */}
          <div className="border-b border-border pb-8 mb-10">
            <h2 className="text-4xl font-serif text-[#C6A15B] tracking-tight">Skin Sence</h2>
            <p className="mt-2 text-sm text-foreground/80 italic font-serif">
              Sepse bukuria e vërtetë nuk ndryshohet. Ajo përsoset.
            </p>
          </div>

          {/* 4 Column Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 font-sans text-sm">
            {/* Col 1: Rreth Klinikës */}
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#C6A15B]">Rreth Klinikës</h3>
              <p className="text-muted-foreground leading-relaxed">
                Skin Sence është klinikë estetike private në Tiranë, e themeluar në vitin 2024.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Infermierja me më shumë se 10 vite përvojë klinike ofron kujdes profesional e individual.
              </p>
            </div>

            {/* Col 2: Lundrimi */}
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#C6A15B]">Lundrimi</h3>
              <ul className="flex flex-col gap-2">
                <li><a href="/" className="hover:text-[#C6A15B] transition-colors">Ballina</a></li>
                <li><a href="/rreth-nesh" className="hover:text-[#C6A15B] transition-colors">Rreth nesh</a></li>
                <li><a href="/sherbimet" className="hover:text-[#C6A15B] transition-colors">Shërbimet</a></li>
                <li><a href="/para-dhe-pas" className="hover:text-[#C6A15B] transition-colors">Para dhe pas</a></li>
                <li><a href="/kontakt" className="hover:text-[#C6A15B] transition-colors">Kontakt</a></li>
              </ul>
            </div>

            {/* Col 3: Trajtimet */}
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#C6A15B]">Trajtimet</h3>
              <ul className="flex flex-col gap-2 text-muted-foreground">
                <li><a href="/sherbimet" className="hover:text-foreground transition-colors">Mezoterapia</a></li>
                <li><a href="/sherbimet" className="hover:text-foreground transition-colors">Lifting skulptural</a></li>
                <li><a href="/sherbimet" className="hover:text-foreground transition-colors">Rinovimi i lëkurës</a></li>
                <li><a href="/sherbimet" className="hover:text-foreground transition-colors">Kujdesi i fytyrës</a></li>
                <li><a href="/sherbimet" className="hover:text-foreground transition-colors">Konsultë estetike</a></li>
              </ul>
            </div>

            {/* Col 4: Kontakt & Orari */}
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-[#C6A15B]">Kontakt & Informacion</h3>
              <p className="text-muted-foreground">Vendndodhja: Tiranë, Shqipëri</p>
              <p className="text-muted-foreground">Orari: Me rezervim paraprak</p>
              <p className="text-xs text-[#C6A15B] italic font-serif mt-1">
                Konsulta është e detyrueshme për çdo procedurë.
              </p>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-muted-foreground gap-4">
            <p>© 2026 Skin Sence. Të gjitha të drejtat e rezervuara.</p>
            <p className="italic text-foreground/60">Tiranë, Shqipëri</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
