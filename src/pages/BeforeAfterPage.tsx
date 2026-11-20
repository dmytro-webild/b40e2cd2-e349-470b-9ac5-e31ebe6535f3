import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";

export default function BeforeAfterPage() {
  return (
    <>
      <ModelStage
        shape="ribbon"
        fixed={{
          sm: { y: 0.8, scale: 0.7 },
          scroll: { rotate: 450, tilt: 12, scale: 0.08, x: 0.05 }
        }}
      />

      <div id="gallery" data-webild-section="BeforeAfterPage" className="relative z-[45] pt-32 pb-20">
        <div className="mx-auto w-[var(--container)] px-[var(--gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B] mb-4">
              03 / Portofoli ynë
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-foreground leading-none tracking-tight">
              Para dhe pas
              <span className="block italic text-[#C6A15B] text-3xl md:text-5xl mt-3 font-serif font-light">
                Harmoni natyrale dhe transformim i rafinuar
              </span>
            </h1>
            <p className="mt-4 text-[#C6A15B] font-serif italic text-base">
              * Rezultatet ndryshojnë nga personi në person.
            </p>
          </motion.div>

          <div className="mt-12">
            <GalleryWordPanels
              label="Rezultate estetike"
              title="Transformime harmonike"
              items={[
                {
                  title: "Mezoterapia",
                  category: "Hidratim i thellë",
                  description: "Rikthim i shkëlqimit natyral dhe hidratim intensiv i lëkurës. Rezultatet ndryshojnë nga personi në person.",
                  imageSrc: "https://img.b2bpic.net/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797653.jpg",
                  imageAlt: "Mezoterapia trajtim"
                },
                {
                  title: "Lifting Skulptural",
                  category: "Skulpturim konturesh",
                  description: "Forcim i linjave të fytyrës dhe ngritje natyrale. Rezultatet ndryshojnë nga personi në person.",
                  imageSrc: "https://img.b2bpic.net/free-photo/front-view-argan-oil-arrangement_23-2148955759.jpg",
                  imageAlt: "Lifting skulptural"
                },
                {
                  title: "Rinovim Lëkure",
                  category: "Freski e teksturës",
                  description: "Rigjallërim i shtresave kutanike për ton më të njëtrajtshëm. Rezultatet ndryshojnë nga personi në person.",
                  imageSrc: "https://img.b2bpic.net/free-photo/pretty-woman-home-takes-photo-selfie-mirror-mobile-phone-stories-posts-social-media-wearing-black-summer-swimsuit_343596-6377.jpg",
                  imageAlt: "Rinovim lëkure"
                },
                {
                  title: "Kujdesi i Fytyrës",
                  category: "Ritual i personalizuar",
                  description: "Pastrim i thellë dhe ushqim me përbërës aktivë. Rezultatet ndryshojnë nga personi në person.",
                  imageSrc: "https://img.b2bpic.net/free-photo/healthy-jojoba-oil-composition_23-2149047757.jpg",
                  imageAlt: "Kujdesi i fytyrës"
                }
              ]}
            />
          </div>

          <div className="mt-16">
            <TestimonialPortraitQuote
              label="Eksperiencat e pacienteve"
              title="Vlerësimet për Skin Sence"
              items={[
                {
                  quote: "Një qasje shumë profesionale dhe rezultate që ndihen natyrale. Rezultatet ndryshojnë nga personi në person.",
                  name: "Rina Shehu",
                  role: "Kliente",
                  imageSrc: "https://img.b2bpic.net/free-photo/world-cancer-day-awareness-with-patient_23-2151249710.jpg",
                  imageAlt: "Rina Shehu"
                },
                {
                  quote: "Skin Sence është vendi ku ndjehem e sigurt për fytyrën time. Infermierja është e mrekullueshme dhe shumë e saktë.",
                  name: "Dafina Krasniqi",
                  role: "Kliente",
                  imageSrc: "https://img.b2bpic.net/free-photo/portrait-young-woman-lavander-field_1303-24143.jpg",
                  imageAlt: "Dafina Krasniqi"
                },
                {
                  quote: "Rezultate të rafinuara dhe kujdes maksimal ndaj detajeve. Klinika më e mirë në Tiranë për trajtime estetike.",
                  name: "Blerta Hysa",
                  role: "Kliente",
                  imageSrc: "https://img.b2bpic.net/free-photo/closeup-cute-caucasian-young-girl-with-snowwhite-smile-dark-hair-white-background-people-free-time-concept_197531-31402.jpg",
                  imageAlt: "Blerta Hysa"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
