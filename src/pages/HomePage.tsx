import HeroShapeSplit from "@/components/sections/hero/HeroShapeSplit";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";
import ServicesGhostList from "@/components/sections/features/ServicesGhostList";
import PricingScopeColumns from "@/components/sections/pricing/PricingScopeColumns";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import FaqHairlineIndex from "@/components/sections/faq/FaqHairlineIndex";
import ContactUnderlineForm from "@/components/sections/contact/ContactUnderlineForm";
import ModelStage from "@/components/kit/ModelStage";
import LoaderWordmarkHandoff from "@/components/loaders/LoaderWordmarkHandoff";

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
          tag="Estetikë Moderne"
          title="Skin Sence"
          description="Zbulo bukurinë tënde natyrale me elegancë dhe përkujdesje të saktë."
          primaryButton={{
            text: "Rezervo konsultë",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Shiko trajtimet",
            href: "#services"
          }}
          scrollLabel="Zbrisni më poshtë"
          introDelay={1.7}
        />
      </div>

      <div id="gallery" data-webild-section="GalleryWordPanels" data-webild-section-id="GalleryWordPanels-1" data-section="gallery" className="relative z-[45]" data-scene>
        <GalleryWordPanels
          label="02 / Qasja jonë"
          title="Rezultate elegante dhe harmonike"
          items={[
            {
              title: "Hapësira",
              category: "Ambienti luksoz",
              description: "Hapësirë me ndriçim të ngrohtë dhe stil luksoz për përkujdesjen tuaj estetike në Tiranë.",
              imageSrc: "https://img.b2bpic.net/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797653.jpg",
              imageAlt: "Modern office space with futuristic decor and furniture"
            },
            {
              title: "Precizioni",
              category: "Detajet elegante",
              description: "Forma dhe konture të rafinuara me precizion të lartë dhe kujdes të personalizuar.",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-argan-oil-arrangement_23-2148955759.jpg",
              imageAlt: "Front view argan oil arrangement"
            },
            {
              title: "Kujdesi",
              category: "Qasja mjekësore",
              description: "Profesionalizëm klinik me përvojë dhjetëvjeçare në fushën e estetikës moderne.",
              imageSrc: "https://img.b2bpic.net/free-photo/pretty-woman-home-takes-photo-selfie-mirror-mobile-phone-stories-posts-social-media-wearing-black-summer-swimsuit_343596-6377.jpg",
              imageAlt: "Pretty woman at home takes photo selfie in mirror on mobile phone for stories and posts in social media, wearing black summer swimsuit"
            },
            {
              title: "Harmonia",
              category: "Kujdesi natyral",
              description: "Rezultate harmonike që nxjerrin në pah bukurinë natyrale me elegancë dhe përkushtim.",
              imageSrc: "https://img.b2bpic.net/free-photo/healthy-jojoba-oil-composition_23-2149047757.jpg",
              imageAlt: "Healthy jojoba oil composition"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="ServicesGhostList" data-webild-section-id="ServicesGhostList-1" data-section="services" className="relative z-[45]">
        <ServicesGhostList
          tag="Ekspertiza jonë"
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
                href: "#contact"
              }
            }
          ]}
          description="Çdo trajtim planifikohet rreth lëkurës sate dhe rezultatit që dëshironi."
        />
      </div>

      <div id="pricing" data-webild-section="PricingScopeColumns" data-webild-section-id="PricingScopeColumns-1" data-section="pricing" className="relative z-[45]">
        <PricingScopeColumns
          tag="Qasja jonë"
          title="Plan i personalizuar"
          description="Çdo trajtim planifikohet me vëmendje ndaj detajeve për të nxjerrë në pah bukurinë tënde natyrale."
          items={[
            {
              title: "Mezoterapia",
              description: "Mikroinjeksione të drejtuara që çojnë vitamina dhe acid hialuronik.",
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
                href: "#contact"
              }
            },
            {
              title: "Lifting",
              description: "Teknikë jokirurgjikale që ngren dhe skulpturon konturet e fytyrës.",
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
                href: "#contact"
              }
            },
            {
              title: "Rinovimi",
              description: "Trajtime rinovuese me teknika të avancuara për ton të njëtrajtshëm.",
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
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialPortraitQuote" data-webild-section-id="TestimonialPortraitQuote-1" data-section="testimonial" className="relative z-[45]">
        <TestimonialPortraitQuote
          label="Para dhe pas"
          title="Bukuria e përsosur"
          items={[
            {
              quote: "Një qasje shumë profesionale dhe rezultate që ndihen natyrale. Rezultatet ndryshojnë nga personi në person.",
              name: "Rina Shehu",
              role: "Kliente",
              imageSrc: "https://img.b2bpic.net/free-photo/world-cancer-day-awareness-with-patient_23-2151249710.jpg",
              imageAlt: "World cancer day awareness with patient"
            },
            {
              quote: "Skin Sence është vendi ku ndjehem e sigurt për fytyrën time. Infermierja është e mrekullueshme dhe shumë e saktë.",
              name: "Dafina Krasniqi",
              role: "Kliente",
              imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-woman-lavander-field_1303-24143.jpg",
              imageAlt: "Portrait of young woman in a lavander field"
            },
            {
              quote: "Rezultate të rafinuara dhe kujdes maksimal ndaj detajeve. Klinika më e mirë në Tiranë për trajtime estetike.",
              name: "Blerta Hysa",
              role: "Kliente",
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-cute-caucasian-young-girl-with-snowwhite-smile-dark-hair-white-background-people-free-time-concept_197531-31402.jpg",
              imageAlt: "Closeup of cute caucasian young girl with snowwhite smile and dark hair on white background People and free time concept"
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
              label: "Adresa e email-it",
              type: "email",
              placeholder: "info@skinsence.al",
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
            "Konsultë"
          ]}
          button={{
            text: "Rezervo tani"
          }}
        />
      </div>
    </>
  );
}
