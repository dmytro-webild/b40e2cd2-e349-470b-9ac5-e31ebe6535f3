import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import TestimonialPortraitQuote from "@/components/sections/testimonial/TestimonialPortraitQuote";
import GalleryWordPanels from "@/components/sections/gallery/GalleryWordPanels";
import SyringeModel from "@/components/models/SyringeModel";
import { CLINIC_IMAGES, GALLERY_ITEMS } from "@/utils/skinSenceImages";

export default function BeforeAfterPage() {
  return (
    <>
      <ModelStage
        model={<SyringeModel color="#c6a15b" />}
        fixed={{
          sm: { y: 0.55, scale: 0.78 },
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
              items={GALLERY_ITEMS.slice(0, 6)}
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
                  imageSrc: CLINIC_IMAGES.moodboard,
                  imageAlt: "Rina Shehu"
                },
                {
                  quote: "Skin Sence është vendi ku ndjehem e sigurt për fytyrën time. Infermierja është e mrekullueshme dhe shumë e saktë.",
                  name: "Dafina Krasniqi",
                  role: "Kliente",
                  imageSrc: CLINIC_IMAGES.facialCare,
                  imageAlt: "Dafina Krasniqi"
                },
                {
                  quote: "Rezultate të rafinuara dhe kujdes maksimal ndaj detajeve. Klinika më e mirë në Tiranë për trajtime estetike.",
                  name: "Blerta Hysa",
                  role: "Kliente",
                  imageSrc: CLINIC_IMAGES.windowView,
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
