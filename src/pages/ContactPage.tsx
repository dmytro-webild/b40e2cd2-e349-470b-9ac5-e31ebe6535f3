import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import SyringeModel from "@/components/models/SyringeModel";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import FaqHairlineIndex from "@/components/sections/faq/FaqHairlineIndex";

export default function ContactPage() {
  return (
    <>
      <ModelStage
        model={<SyringeModel />}
        scale={1.22}
        fixed={{
          sm: { y: 0.55, scale: 0.78 },
          scroll: { rotate: 540, tilt: 14, scale: 0.08, x: 0.05 }
        }}
      />

      <div id="contact" data-webild-section="ContactPage" className="relative z-[45] pt-32 pb-20">
        <div className="mx-auto w-[var(--container)] px-[var(--gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mb-12"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B] mb-4">
              04 / Na kontaktoni
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-foreground leading-none tracking-tight">
              Rezervoni konsultën tuaj
              <span className="block italic text-[#C6A15B] text-3xl md:text-5xl mt-3 font-serif font-light">
                Kujdes individual dhe i personalizuar
              </span>
            </h1>
            <p className="mt-4 text-foreground/80 font-sans text-base">
              Konsulta paraprake është e detyrueshme për çdo procedurë. Ju mirëpresim në klinikën tonë në Tiranë.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <ContactUnderlineForm
                title="Rezervoni konsultën tuaj"
                fields={[
                  {
                    name: "name",
                    label: "Emri dhe Mbiemri",
                    placeholder: "Shkruani emrin tuaj të plotë",
                    required: true
                  },
                  {
                    name: "email",
                    label: "Adresa e email-it ose telefoni",
                    type: "text",
                    placeholder: "+355696939612",
                    required: true
                  },
                  {
                    name: "message",
                    label: "Mesazhi juaj",
                    type: "textarea",
                    placeholder: "Tregoni më shumë për kërkesën tuaj ose datën e preferuar...",
                    required: false
                  }
                ]}
                servicesLabel="Zgjidhni trajtimin e dëshiruar"
                services={[
                  "Mezoterapia",
                  "Lifting skulptural i fytyrës",
                  "Rinovimi i lëkurës",
                  "Trajtime kundër plakjes",
                  "Protokolle të personalizuara të lëkurës"
                ]}
                button={{
                  text: "Dërgo kërkesën"
                }}
              />
            </div>

            <div className="bg-[#201510]/80 border border-[#3b281d] p-8 space-y-8 font-sans">
              <div>
                <h3 className="font-serif text-2xl text-[#C6A15B] mb-2">SkinSence By ARSA TOTA</h3>
                <p className="text-sm text-foreground/70 italic font-serif">
                  Klinikë estetike private në Tiranë. Themeluar në vitin 2024.
                </p>
              </div>

              <div className="space-y-4 text-sm text-foreground/80">
                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-[#C6A15B] mb-1">
                    Vendndodhja
                  </strong>
                  <p>Tiranë, Shqipëri</p>
                </div>

                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-[#C6A15B] mb-1">
                    Kontakti
                  </strong>
                  <p>Telefon: +355696939612</p>
                  <p>Email: arsatota@icloud.com</p>
                </div>

                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-[#C6A15B] mb-1">
                    Orari i punës
                  </strong>
                  <p>E hënë – E premte 09:00 – 19:00</p>
                  <p>E shtunë 10:00 – 16:00</p>
                  <p>E diel Mbyllur</p>
                </div>

                <div>
                  <strong className="block font-mono text-xs uppercase tracking-wider text-[#C6A15B] mb-1">
                    Përvoja klinike
                  </strong>
                  <p>Infermierja ka më shumë se 10 vite përvojë klinike.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/40">
                <a
                  href="https://wa.me/355696939612"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-mono text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-[#20bd5a] transition-colors"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.86 5.86L2.6 21.4a.75.75 0 00.93.93l3.54-1.26A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.006 17.5a7.94 7.94 0 01-4.04-1.1l-.29-.17-2.39.85.86-2.33-.19-.3A7.952 7.952 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-7.994 8zM16.1 13.98c-.28-.14-1.65-.81-1.9-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.34.21-.62.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.49.07-.75.35-.26.28-1 1-1 2.43s1.02 2.8 1.16 3c.14.19 2.01 3.07 4.88 4.3.68.29 1.21.46 1.63.6.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.11-.26-.18-.54-.32z"/>
                  </svg>
                  Bisedoni në WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <FaqHairlineIndex
              tag="INFORMACION"
              title="Pyetje të shpeshta"
              items={[
                {
                  title: "A janë të dhimbshme trajtimet?",
                  description: "Përdorim teknika për minimizimin e shqetësimit gjatë çdo procedure."
                },
                {
                  title: "Kur i shoh rezultatet?",
                  description: "Rezultatet fillojnë të shihen pas periudhës së rikuperimit sipas trajtimit. Rezultatet ndryshojnë nga personi në person."
                },
                {
                  title: "A nevojitet konsultë paraprake?",
                  description: "Po, çdo trajtim personalizohet pas një konsultimi të detajuar."
                },
                {
                  title: "Sa zgjat rikuperimi?",
                  description: "Kjo varet nga lloji di procedurës, por shumica kërkojnë pak ditë."
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
