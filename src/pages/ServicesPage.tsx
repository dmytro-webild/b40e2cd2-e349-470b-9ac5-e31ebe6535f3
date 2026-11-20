import { motion } from "motion/react";
import ModelStage from "@/components/kit/ModelStage";
import SyringeModel from "@/components/models/SyringeModel";
import { CLINIC_IMAGES } from "@/utils/skinSenceImages";

const treatments = [
  {
    num: "01",
    title: "Mezoterapia",
    description: "Mikroinjeksione me vitamina e acid hialuronik për lëkurë të hidratuar dhe me shkëlqim.",
    details: "Trajtim i rafinuar me produkte dermato-kozmetike premium me bio-kolagjen që ushqejnë shtresat e thella të lëkurës.",
    imageSrc: CLINIC_IMAGES.products
  },
  {
    num: "02",
    title: "Lifting skulptural",
    description: "Teknikë jokirurgjikale që ngren dhe skulpturon konturet për pamje natyrale e të ngritur.",
    details: "Nxit forcimin e strukturës së fytyrës pa ndërhyrje invazive, duke ruajtur simetrinë dhe harmoninë natyrale.",
    imageSrc: CLINIC_IMAGES.moodboard
  },
  {
    num: "03",
    title: "Trajtimi me Plazmë (PRP)",
    description: "Trajtime rinovuese me plazmë autologe për ton më të njëtrajtshëm e rigjenerim qelizor.",
    details: "Proces laboratorik me centrifugë mjekësore që përdor plazmën tuaj për stimulimin e kolagjenit natyral.",
    imageSrc: CLINIC_IMAGES.prpPlasma
  },
  {
    num: "04",
    title: "Kujdesi i fytyrës",
    description: "Pastrim i thellë dhe ushqim i personalizuar me fototrajtim për të ruajtur freskinë e lëkurës.",
    details: "Ritual kujdesi me produkte cilësore dhe teknologji me dritë për eliminimin e papastërtive dhe mbrojtjen e barrierës.",
    imageSrc: CLINIC_IMAGES.facialCare
  },
  {
    num: "05",
    title: "Konsultë estetike",
    description: "Vlerësim i detajuar i lëkurës dhe plan individual për nevojat tuaja natyrale.",
    details: "Analizë e imtësishme nga infermierja me 10+ vite përvojë klinike në ambientin tonë me pamje nga Tirana.",
    imageSrc: CLINIC_IMAGES.windowView
  }
];

export default function ServicesPage() {
  return (
    <>
      <ModelStage
        model={<SyringeModel color="#c6a15b" />}
        fixed={{
          sm: { y: 0.8, scale: 0.7 },
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
