import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import { CLINIC_IMAGES } from "@/utils/skinSenceImages";

export default function AboutPage() {
  return (
    <>
      <ModelStage
        src="https://storage.googleapis.com/webild/default/models/serum-bottle/model.657623fd5442.glb"
        scale={1.22}
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
                Skin Sence është një klinikë estetike private në Tiranë, e themeluar nga infermierja estetike Arsa Tota.
              </p>
              <p>
                Me më shumë se 10 vite përvojë klinike, Arsa Tota ofron kujdes profesional, individual dhe të saktë për çdo pacient që kërkon rigjallërimin natyral të lëkurës.
              </p>
              <p>
                Stili ynë i punës bazohet në elegancë, diskrecion dhe ruajtjen e harmonisë natyrale të fytyrës. Ne besojmë në një qasje të rafinuar ku secili trajtim adaptohet me precizion mjekësor.
              </p>
            </div>

            <div className="bg-[#201510]/80 border border-[#3b281d] p-8 space-y-6">
              <h3 className="font-serif text-2xl text-[#C6A15B]">Standardet tona klinike</h3>
              <ul className="space-y-4 font-sans text-sm text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A15B] font-mono">01.</span>
                  <div>
                    <strong className="text-foreground block font-medium">Përvojë klinike 10+ vjeçare</strong>
                    Kujdes profesional nga infermierja estetike Arsa Tota me njohuri të thella mjekësore.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A15B] font-mono">02.</span>
                  <div>
                    <strong className="text-foreground block font-medium">Inovacion & Ekspertizë Ndërkombëtare</strong>
                    Pjesëmarrëse në kongreset botërore të Alma Lasers me teknologjitë më të avancuara.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C6A15B] font-mono">03.</span>
                  <div>
                    <strong className="text-foreground block font-medium">Privatësi dhe ambient luksoz</strong>
                    Hapësirë e qetë dhe diskrete në zemër të Tiranës për përkujdesjen tuaj vetjake.
                  </div>
                </li>
              </ul>
              <div className="pt-4 border-t border-border/40">
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center bg-[#C6A15B] text-[#0D0806] font-mono text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-[#b08d49] transition-colors"
                >
                  Rezervo konsultë me Arsa Tota
                </a>
              </div>
            </div>
          </div>

          {/* Dedicated Section: Themeluesja Arsa Tota */}
          <div id="themeluesja" data-webild-section="FounderSection" className="mt-20 border-t border-border/80 pt-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B] mb-2">
                  02 / Themeluesja & Ekspertja
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-normal text-foreground leading-tight">
                  Arsa Tota
                </h2>
                <p className="text-lg md:text-xl text-[#C6A15B] font-serif italic mt-1 font-light">
                  Infermiere Estetike & Themeluese e Skin Sence
                </p>
              </div>
              <p className="text-sm font-sans text-foreground/80 max-w-md mt-4 md:mt-0 leading-relaxed">
                "Kujdesi për lëkurën është arti i zbulimit të bukurisë natyrale përmes precizionit mjekësor dhe përkushtimit njerëzor."
              </p>
            </div>

            {/* 3 Founder Portrait Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group shadow-xl">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={CLINIC_IMAGES.founderRedCarpet}
                    alt="Arsa Tota - Themeluesja e Skin Sence"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-[#201510] border-t border-[#3b281d]">
                  <p className="font-serif text-xl text-foreground font-medium">Arsa Tota</p>
                  <p className="text-xs font-mono text-[#C6A15B] uppercase tracking-wider mt-1 font-semibold">
                    Themeluese & Përfaqësuese
                  </p>
                  <p className="text-xs text-foreground/80 mt-3 leading-relaxed font-sans">
                    Në tapetin e kuq të kongresit ndërkombëtar të teknologjisë estetike Alma, duke përfaqësuar me dinjitet standardet më të larta të klinikës Skin Sence.
                  </p>
                </div>
              </div>

              <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group shadow-xl">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={CLINIC_IMAGES.founderTreatmentCare}
                    alt="Arsa Tota gjatë trajtimit estetik"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-[#201510] border-t border-[#3b281d]">
                  <p className="font-serif text-xl text-foreground font-medium">Kujdes Klinik me Ringlight</p>
                  <p className="text-xs font-mono text-[#C6A15B] uppercase tracking-wider mt-1 font-semibold">
                    Procedura me Precizion Mjekësor
                  </p>
                  <p className="text-xs text-foreground/80 mt-3 leading-relaxed font-sans">
                    Arsa Tota gjatë ekzekutimit të procedurës me ndriçim profesional ringlight, higjienë absolute dhe përkushtim maksimal për rezultate harmonike.
                  </p>
                </div>
              </div>

              <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group shadow-xl">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={CLINIC_IMAGES.founderAlmaStage}
                    alt="Arsa Tota në Kongresin Ndërkombëtar Alma Lasers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-[#201510] border-t border-[#3b281d]">
                  <p className="font-serif text-xl text-foreground font-medium">Përvojë & Kongrese Botërore</p>
                  <p className="text-xs font-mono text-[#C6A15B] uppercase tracking-wider mt-1 font-semibold">
                    Kongresi Ndërkombëtar Alma
                  </p>
                  <p className="text-xs text-foreground/80 mt-3 leading-relaxed font-sans">
                    Trajnime ndërkombëtare të nivelit të lartë në kongreset botërore, duke sjellë metodat më inovative për pacientët në Tiranë.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Clinic Gallery Grid featuring all photos */}
          <div className="mt-20 border-t border-border/80 pt-16">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B]">03 / Galerie e Klinikës</p>
                <h2 className="font-serif text-3xl md:text-5xl text-foreground font-normal mt-2">
                  Eleganca dhe precizioni në çdo detaj
                </h2>
              </div>
              <p className="text-sm font-serif italic text-[#C6A15B] mt-2 md:mt-0">Tiranë • Zi-Kafe Moderne</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-6">
                <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.founderRedCarpet} alt="Arsa Tota - Themeluesja e Skin Sence" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Arsa Tota — Themeluesja</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Në Kongresin Ndërkombëtar Alma</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.sesdermaProducts} alt="Trajtime Kundër Plakjes" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Dermato-Kozmetikë Mjekësore</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Trajtime Kundër Plakjes</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.deepExtraction} alt="Protokolle të Personalizuara" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Protokolle të Personalizuara</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Kujdes Klinik i Detajuar</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.windowView} alt="Pamja nga Klinika" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Pamja nga Dritarja</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Skin Sence Tiranë</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.products} alt="Produkte Dermato-Kozmetike" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Produkte Premium & Gua Sha</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Bio-Kolagjen & Kujdes</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 md:pt-8">
                <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.spongeTreatment} alt="Procedurë me Ringlight" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Procedurë me Ringlight</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Kujdes Klinik i Detajuar</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.facialCareDetailed} alt="Trajtim i Detajuar Fytyre" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Trajtim i Personalizuar</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Teknika Mjekësore Fytyre</p>
                  </div>
                </div>
                <div className="border border-[#C6A15B]/50 bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.nanoNeedling} alt="Mezoterapia" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Aplikim i Mezoterapisë</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Penetrim i Thellë Qelizor</p>
                  </div>
                </div>
                <div className="border border-[#C6A15B]/50 bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.brandLogoSquare} alt="skinSence by Arsa Tota" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">skinSence by Arsa Tota</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Identitet & Brand Zyrtar</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.moodboard} alt="Moodboard Aesthetic" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Elegancë & Moodboard</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Estetikë Moderne</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.clinicArchedWindow} alt="Studio me Dritare me Hark" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Studio me Dritare me Hark</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Ambienti Skin Sence Studio</p>
                  </div>
                </div>
                <div className="border border-[#C6A15B] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.treatmentEquipmentClose} alt="Teknologji Mjekësore & Pajisje" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Teknologji Klinike Avancuar</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Pajisje Moderne Estetike</p>
                  </div>
                </div>
                <div className="border border-[#C6A15B]/50 bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.clinicalProcedure} alt="Procedurë Estetike Klinike" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Kujdes Klinik i Avancuar</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Procedurë e Certifikuar</p>
                  </div>
                </div>
                <div className="border border-[#3b281d] bg-[#201510] overflow-hidden group">
                  <img src={CLINIC_IMAGES.prpPlasma} alt="Lifting Skulptural i Fytyrës" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-4 bg-[#201510]">
                    <p className="font-serif text-lg text-foreground">Lifting Skulptural i Fytyrës</p>
                    <p className="text-xs font-mono text-[#C6A15B] uppercase mt-1">Teknikë Jokirurgjikale</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
