import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import SyringeModel from "@/components/models/SyringeModel";
import { CLINIC_IMAGES } from "@/utils/skinSenceImages";

export default function AboutPage() {
  return (
    <>
      <ModelStage
        model={<SyringeModel color="#c6a15b" />}
        fixed={{
          sm: { y: 0.55, scale: 0.78 },
          scroll: { rotate: 360, tilt: 10, scale: 0.08, x: 0.05 }
        }}
      />

      <div id="about" data-webild-section="AboutHero" className="relative z-[45] pt-32 pb-20">
        <div className="mx-auto w-[var(--container)] px-[var(--gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B] mb-4">
              01 / Rreth nesh
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-foreground leading-none tracking-tight">
              Skin Sence
              <span className="block italic text-[#C6A15B] text-4xl md:text-6xl mt-2 font-serif font-light">
                Precizion, elegancë dhe përkushtim
              </span>
            </h1>
            <p className="mt-8 text-xl font-serif text-foreground/90 leading-relaxed italic">
              "Sepse bukuria e vërtetë nuk ndryshohet. Ajo përsoset."
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-border/80 pt-12">
            <div className="space-y-6 text-foreground/80 leading-relaxed text-base">
              <p className="text-lg text-foreground font-sans">
                Skin Sence është një klinikë estetike private në Tiranë, e themeluar në vitin 2024.
              </p>
              <p>
                Infermierja me më shumë se 10 vite përvojë klinike ofron kujdes profesional, individual dhe të saktë për çdo pacient.
              </p>
              <p>
                Stili ynë i punës bazohet në elegancë, diskrecion dhe ruajtjen e bukurisë natyrale. Ne besojmë në një qasje të rafinuar ku secili trajtim adaptohet me kujdes për të nxjerrë në pah karakteristikat tuaja unike.
              </p>
            </div>

            <div className="bg-[#201510]/80 border border-[#3b281d] p-8 space-y-6">
              <h3 className="font-serif text-2xl text-[#C6A15B]">Standardet tona klinike</h3>
              <ul className="space-y-4 font-sans text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A15B] font-mono">01.</span>
                  <div>
                    <strong className="text-foreground block font-medium">Përvojë klinike 10+ vjeçare</strong>
                    Kujdes profesional me njohuri të thella në estetikën moderne.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A15B] font-mono">02.</span>
                  <div>
                    <strong className="text-foreground block font-medium">Konsultë e detajuar paraprake</strong>
                    Çdo trajtim nis me analizë të imtësishme të lëkurës.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A15B] font-mono">03.</span>
                  <div>
                    <strong className="text-foreground block font-medium">Privatësi dhe ambient luksoz</strong>
                    Hapësirë e qetë dhe diskrete në zemër të Tiranës.
                  </div>
                </li>
              </ul>
              <div className="pt-4 border-t border-border/40">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-[#C6A15B] text-[#0D0806] font-mono text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-[#b08d49] transition-colors"
                >
                  Rezervo konsultë
                </a>
              </div>
            </div>
          </div>

          {/* Authentic Clinic Gallery Grid featuring all photos */}
          <div className="mt-20 border-t border-border/80 pt-16">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B]">Galerie e Klinikës</p>
                <h2 className="font-serif text-3xl md:text-5xl text-foreground font-normal mt-2">
                  Eleganca dhe precizioni në çdo detaj
                </h2>
              </div>
              <p className="text-sm font-serif italic text-[#C6A15B] mt-2 md:mt-0">Tiranë • Zi-Kafe Moderne</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.windowView} alt="Pamja nga Klinika" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Pamja nga Klinika</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Skin Sence Tiranë</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.products} alt="Produkte Dermato-Kozmetike" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Dermato-Kozmetikë Premium</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Bio-Kolagjen & Gua Sha</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.interior} alt="Klinika Skin Sence" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Ambienti Luksoz</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Dizajn Dark-Brown</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:pt-8">
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.moodboard} alt="Moodboard Aesthetic" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Vashezat / Moodboard</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Light, Clean & Optimistic</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.brandingCard} alt="skinSence by Arsa Tota" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">skinSence by Arsa Tota</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Identitet & Elegancë</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.prpPlasma} alt="Trajtimi me Plazmë PRP" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Trajtimi me Plazmë (PRP)</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Centrifugë Mjekësore</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.facialCare} alt="Kujdes i Avancuar" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Foto-Trajtim & Hidratim</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Kujdes i Fytyrës</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.treatment} alt="Kujdes Klinik" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Kujdesi Klinik</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">10+ Vite Përvojë</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
