import HeroShapeSplit from "@/components/sections/hero/HeroShapeSplit";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";
import ServicesGhostList from "@/components/sections/features/ServicesGhostList";
import PricingScopeColumns from "@/components/sections/pricing/PricingScopeColumns";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import FaqHairlineIndex from "@/components/sections/faq/FaqHairlineIndex";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import ModelStage from "@/components/kit/ModelStage";
import LoaderWordmarkHandoff from "@/components/loaders/LoaderWordmarkHandoff";
import { CLINIC_IMAGES, GALLERY_ITEMS } from "@/utils/skinSenceImages";

export default function HomePage() {
  return (
    <>
      <ModelStage
        shape="ribbon"
        fixed={{
          sm: {
            y: 0.8,
            scale: 0.7
          },
          scroll: {
            rotate: 540,
            tilt: 14,
            scale: 0.08,
            x: 0.05
          }
        }}
        dpr={{
          lg: 1.5,
          sm: 1.25
        }}
      />

      <LoaderWordmarkHandoff
        brand="Skin Sence"
      />

      <div id="hero" data-webild-section="HeroShapeSplit" data-webild-section-id="HeroShapeSplit-1" data-section="hero" className="relative z-[45]">
        <HeroShapeSplit
          tag="Estetikë Moderne • Tiranë"
          title="Skin Sence"
          description="Një qasje luksoze dhe e rafinuar ndaj estetikës moderne, ku precizioni dhe eleganca takohen për të nxjerrë në pah bukurinë tuaj natyrale."
          primaryButton={{
            text: "Rezervo konsultë",
            href: "/kontakt"
          }}
          secondaryButton={{
            text: "Shiko trajtimet",
            href: "/sherbimet"
          }}
          scrollLabel="Zbrisni më poshtë"
          introDelay={1.7}
        />
      </div>

      <div id="about" data-webild-section="AboutSection" data-section="about" className="relative z-[45] py-20 bg-background">
        <div className="mx-auto w-[var(--container)] px-[var(--gutter)]">
          <div className="border-t border-b border-border/80 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B]">01 / Rreth klinikës</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground font-normal leading-tight">
                Sepse bukuria e vërtetë nuk ndryshohet.
                <span className="block italic text-[#C6A15B] mt-1">Ajo përsoset.</span>
              </h2>
              <p className="text-foreground/80 font-sans text-base leading-relaxed">
                Skin Sence është një klinikë estetike private në Tiranë, e themeluar në vitin 2024. Infermierja me më shumë se 10 vite përvojë klinike ofron kujdes profesional, individual dhe të saktë për çdo pacient.
              </p>
              <p className="text-sm italic font-serif text-[#C6A15B]">
                Stili ynë i punës bazohet në elegancë, diskrecion dhe ruajtjen e bukurisë natyrale.
              </p>
              <div className="pt-2">
                <a
                  href="/rreth-nesh"
                  className="inline-flex items-center justify-center bg-transparent border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B]/10 font-mono text-xs uppercase tracking-widest px-6 py-3 font-semibold transition-colors"
                >
                  Mësoni më shumë për ne
                </a>
              </div>
            </div>

            {/* Featured Image Grid from attached assets */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden border border-[#3b281d] bg-[#201510]">
                <img
                  src={CLINIC_IMAGES.brandingCard}
                  alt="skinSence by Arsa Tota"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono uppercase text-[#C6A15B]">
                  skinSence by Arsa Tota
                </div>
              </div>
              <div className="relative group overflow-hidden border border-[#3b281d] bg-[#201510]">
                <img
                  src={CLINIC_IMAGES.treatment}
                  alt="Kujdesi estetik"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono uppercase text-[#C6A15B]">
                  Kujdes Klinik 10+ Vite
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" data-webild-section="ServicesGhostList" data-webild-section-id="ServicesGhostList-1" data-section="services" className="relative z-[45]">
        <ServicesGhostList
          tag="02 / Ekspertiza jonë"
          items={[
            {
              title: "Mezoterapia",
              description: "Mikroinjeksione me vitamina e acid hialuronik për lëkurë të hidratuar dhe me shkëlqim."
            },
            {
              title: "Lifting skulptural",
              description: "Teknikë jokirurgjikale që ngren dhe skulpturon konturet për pamje natyrale e të ngritur."
            },
            {
              title: "Rinovimi i lëkurës",
              description: "Trajtime rinovuese me teknika të avancuara për ton më të njëtrajtshëm e freski."
            },
            {
              title: "Kujdesi i fytyrës",
              description: "Pastrim i thellë dhe ushqim i personalizuar për të ruajtur freskinë e lëkurës."
            },
            {
              title: "Konsultë estetike",
              description: "Vlerësim i detajuar i lëkurës dhe plan individual për nevojat tuaja natyrale.",
              button: {
                text: "Rezervo tani",
                href: "/kontakt"
              }
            }
          ]}
          description="Çdo trajtim planifikohet rreth lëkurës sate dhe rezultatit që dëshironi."
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWordPanels" data-webild-section-id="GalleryWordPanels-1" data-section="gallery" className="relative z-[45]" data-scene>
        <GalleryWordPanels
          label="03 / Qasja jonë"
          title="Rezultate elegante dhe harmonike"
          items={GALLERY_ITEMS.slice(0, 4)}
        />
      </div>

      {/* Editorial Photo Strip showcasing all 5 clinic assets */}
      <div id="editorial-photos" className="relative z-[45] py-16 border-y border-border/80 bg-[#160e0a]">
        <div className="mx-auto w-[var(--container)] px-[var(--gutter)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B]">Galerie Ekskluzive</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-1">Ambienti dhe Procedurat Skin Sence</h2>
            </div>
            <p className="text-sm font-serif italic text-[#C6A15B] mt-2 md:mt-0">Tiranë, Shqipëri • 2026</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="group relative overflow-hidden border border-[#3b281d] bg-[#201510] aspect-[3/4]">
              <img src={CLINIC_IMAGES.interior} alt="Ambienti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-mono text-[#C6A15B] uppercase">Ambienti</span>
            </div>
            <div className="group relative overflow-hidden border border-[#3b281d] bg-[#201510] aspect-[3/4]">
              <img src={CLINIC_IMAGES.treatment} alt="Procedura" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-mono text-[#C6A15B] uppercase">Kujdes Klinik</span>
            </div>
            <div className="group relative overflow-hidden border border-[#3b281d] bg-[#201510] aspect-[3/4]">
              <img src={CLINIC_IMAGES.brandingCard} alt="Identiteti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-mono text-[#C6A15B] uppercase">Branding</span>
            </div>
            <div className="group relative overflow-hidden border border-[#3b281d] bg-[#201510] aspect-[3/4]">
              <img src={CLINIC_IMAGES.equipment} alt="Pajisjet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-mono text-[#C6A15B] uppercase">Pajisje</span>
            </div>
            <div className="group relative overflow-hidden border border-[#3b281d] bg-[#201510] aspect-[3/4]">
              <img src={CLINIC_IMAGES.facialResult} alt="Rezultati" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-mono text-[#C6A15B] uppercase">Rezultat</span>
            </div>
          </div>
        </div>
      </div>

      <div id="pricing" data-webild-section="PricingScopeColumns" data-webild-section-id="PricingScopeColumns-1" data-section="pricing" className="relative z-[45]">
        <PricingScopeColumns
          tag="04 / Qasja jonë"
          title="Plan i personalizuar"
          description="Çdo trajtim planifikohet me vëmendje ndaj detajeve për të nxjerrë në pah bukurinë tënde natyrale."
          items={[
            {
              title: "Mezoterapia",
              description: "Mikroinjeksione me vitamina e acid hialuronik për lëkurë të hidratuar dhe me shkëlqim.",
              price: "Konsultë",
              period: "Plan individual",
              specs: [
                {
                  label: "Konsulta",
                  value: "E plotë me analizë"
                },
                {
                  label: "Planifikimi",
                  value: "Për lëkurën tuaj"
                },
                {
                  label: "Teknika",
                  value: "Bashkëkohore"
                },
                {
                  label: "Përvojë",
                  value: "10+ vjet klinike"
                }
              ],
              button: {
                text: "Rezervo tani",
                href: "/kontakt"
              }
            },
            {
              title: "Lifting skulptural",
              description: "Teknikë jokirurgjikale që ngren dhe skulpturon konturet për pamje natyrale e të ngritur.",
              price: "Konsultë",
              period: "Plan individual",
              specs: [
                {
                  label: "Konsulta",
                  value: "E plotë me analizë"
                },
                {
                  label: "Planifikimi",
                  value: "Për lëkurën tuaj"
                },
                {
                  label: "Teknika",
                  value: "Jokirurgjikale"
                },
                {
                  label: "Përvojë",
                  value: "10+ vjet klinike"
                }
              ],
              button: {
                text: "Rezervo tani",
                href: "/kontakt"
              }
            },
            {
              title: "Rinovimi i lëkurës",
              description: "Trajtime rinovuese me teknika të avancuara për ton më të njëtrajtshëm e freski.",
              price: "Konsultë",
              period: "Plan individual",
              specs: [
                {
                  label: "Konsulta",
                  value: "E plotë me analizë"
                },
                {
                  label: "Planifikimi",
                  value: "Për lëkurën tuaj"
                },
                {
                  label: "Teknika",
                  value: "E avancuar"
                },
                {
                  label: "Përvojë",
                  value: "10+ vjet klinike"
                }
              ],
              button: {
                text: "Rezervo tani",
                href: "/kontakt"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="05 / Para dhe pas"
          title="Bukuria e përsosur"
          items={[
            {
              quote: "Një qasje shumë profesionale dhe rezultate që ndihen natyrale. Rezultatet ndryshojnë nga personi në person.",
              name: "Rina Shehu",
              role: "Kliente",
              imageSrc: CLINIC_IMAGES.facialResult,
              imageAlt: "Rina Shehu"
            },
            {
              quote: "Skin Sence është vendi ku ndjehem e sigurt për fytyrën time. Infermierja është e mrekullueshme dhe shumë e saktë.",
              name: "Dafina Krasniqi",
              role: "Kliente",
              imageSrc: CLINIC_IMAGES.treatment,
              imageAlt: "Dafina Krasniqi"
            },
            {
              quote: "Rezultate të rafinuara dhe kujdes maksimal ndaj detajeve. Klinika më e mirë në Tiranë për trajtime estetike.",
              name: "Blerta Hysa",
              role: "Kliente",
              imageSrc: CLINIC_IMAGES.interior,
              imageAlt: "Blerta Hysa"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqHairlineIndex" data-webild-section-id="FaqHairlineIndex-1" data-section="faq" className="relative z-[45]">
        <FaqHairlineIndex
          tag="06 / INFORMACION"
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
              description: "Kjo varet nga lloji i procedurës, por shumica kërkojnë pak ditë."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactUnderlineForm" data-webild-section-id="ContactUnderlineForm-1" data-section="contact" className="relative z-[45]">
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
              placeholder: "+355 6X XX XX XXX",
              required: true
            },
            {
              name: "message",
              label: "Mesazhi juaj",
              type: "textarea",
              placeholder: "Tregoni më shumë për kërkesën tuaj",
              required: false
            }
          ]}
          servicesLabel="Zgjidhni trajtimin"
          services={[
            "Mezoterapia",
            "Lifting skulptural",
            "Rinovim lëkure",
            "Kujdesi i fytyrës",
            "Konsultë estetike"
          ]}
          button={{
            text: "Rezervo tani"
          }}
        />
      </div>
    </>
  );
}
