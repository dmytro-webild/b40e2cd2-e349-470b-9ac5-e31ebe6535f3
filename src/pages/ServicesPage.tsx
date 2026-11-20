import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import { CLINIC_IMAGES } from "@/utils/skinSenceImages";

const treatments = [
  {
    num: "01",
    title: "Mezoterapia",
    description: "Mikroinjeksione me vitamina, ceramide e acid hialuronik për lëkurë të hidratuar dhe me shkëlqim natyral.",
    details: "Aplikim preciz i serumeve ushqyese me aparaturë profesionale që penetrojnë thellë për rigjenerim të plotë.",
    imageSrc: CLINIC_IMAGES.nanoNeedling
  },
  {
    num: "02",
    title: "Lifting skulptural i fytyrës",
    description: "Teknikë jokirurgjikale që ngren dhe skulpturon konturet e fytyrës për pamje natyrale e të ngritur.",
    details: "Nxit forcimin e strukturës së fytyrës me mjete dhe teknika klinike pa ndërhyrje invazive.",
    imageSrc: CLINIC_IMAGES.clinicalProcedure
  },
  {
    num: "03",
    title: "Rinovimi i lëkurës",
    description: "Trajtime rinovuese me teknika të avancuara për ton më të njëtrajtshëm e freski natyrale.",
    details: "Përmirëson teksturën e lëkurës dhe unifikon tonin përmes protokolleve të kujdesshme klinike.",
    imageSrc: CLINIC_IMAGES.facialCareDetailed
  },
  {
    num: "04",
    title: "Trajtime kundër plakjes",
    description: "Rigjenerim i thellë dhe ushqim mjekësor për të reduktuar shenjat e kohës dhe stimuluar kolagjenin.",
    details: "Formulime premium dhe kujdes individual për të ruajtur elasticitetin dhe rininë e lëkurës.",
    imageSrc: CLINIC_IMAGES.products
  },
  {
    num: "05",
    title: "Protokolle të personalizuara të lëkurës",
    description: "Analizë individuale e lëkurës dhe planifikim i detajuar i përshtatur plotësisht me nevojat tuaja.",
    details: "Vlerësim i imtësishëm nga infermierja me 10+ vite përvojë klinike në ambientin tonë privat në Tiranë.",
    imageSrc: CLINIC_IMAGES.windowView
  }
];

export default function ServicesPage() {
  return (
    <>
      <ModelStage
        src="https://storage.googleapis.com/webild/default/models/serum-bottle/model.657623fd5442.glb"
        scale={1.22}
        fixed={{
          sm: { y: 0.55, scale: 0.78 },
          scroll: { rotate: 540, tilt: 14, scale: 0.08, x: 0.05 }
        }}
      />

      <div id="services" data-webild-section="ServicesPage" className="relative z-[45] pt-32 pb-24">
        <div className="mx-auto w-[var(--container)] px-[var(--gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[#C6A15B] mb-4">
              02 / Ekspertiza jonë
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-normal text-foreground leading-none tracking-tight">
              Shërbimet estetike
              <span className="block italic text-[#C6A15B] text-3xl md:text-5xl mt-3 font-serif font-light">
                Çdo trajtim planifikohet rreth lëkurës sate
              </span>
            </h1>
            <p className="mt-6 text-foreground/80 max-w-xl text-base">
              Çdo procedurë realizohet me precizion klinik dhe me përkushtim ndaj ruajtjes së bukurisë suaj natyrale.
            </p>
          </motion.div>

          <div className="mt-16 space-y-8">
            {treatments.map((t, idx) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#201510]/80 border border-[#3b281d] p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#C6A15B]/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full md:w-auto">
                  <div className="w-full sm:w-36 h-28 shrink-0 overflow-hidden border border-[#3b281d] bg-[#160e0a]">
                    <img src={t.imageSrc} alt={t.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#C6A15B] tracking-widest">{t.num}</span>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground font-normal">{t.title}</h3>
                    </div>
                    <p className="text-sm text-[#C6A15B] font-serif italic">
                      "{t.description}"
                    </p>
                    <p className="text-xs text-foreground/70 font-sans">
                      {t.details}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <a
                    href="/kontakt"
                    className="inline-flex w-full md:w-auto items-center justify-center bg-[#C6A15B] text-[#0D0806] font-mono text-xs uppercase tracking-widest px-6 py-3 font-semibold hover:bg-[#b08d49] transition-colors"
                  >
                    Rezervo tani
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-[#201510]/80 border border-[#3b281d] p-8 text-center max-w-2xl mx-auto">
            <h4 className="font-serif text-2xl text-[#C6A15B] mb-2">Konsultë e detyrueshme</h4>
            <p className="text-sm text-foreground/80 font-sans">
              Çdo trajtim personalizohet pas një konsultimi të detajuar. Infermierja me 10+ vite përvojë klinike garanton që çdo procedurë i përshtatet plotësisht nevojave tuaja.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
