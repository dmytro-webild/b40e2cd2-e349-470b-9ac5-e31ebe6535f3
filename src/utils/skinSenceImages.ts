export const CLINIC_IMAGES = {
  // Initial 5 clinic assets
  interior: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243549-w68azau5.jpg",
  treatment: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243550-0oxoix87.jpg",
  brandingCard: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243550-23bqaj13.jpg",
  equipment: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243552-lprouhpe.jpg",
  facialResult: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243552-gieku2a8.jpg",

  // New 5 photographic assets
  windowView: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470474-m2cac33c.jpg",
  moodboard: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470475-ijglkxbs.jpg",
  products: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470476-h3kh2ojj.jpg",
  prpPlasma: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470476-9vul3ope.jpg",
  facialCare: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470477-d25ewqsf.jpg",

  // Latest uploaded before/after asset
  beforeAfterPores: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176652197-wknzgsmv.jpg"
} as const;

export const GALLERY_ITEMS = [
  {
    title: "Rezultate Reale Para & Pas",
    category: "Pastrim i Thellë i Poreve",
    description: "Transformim i dukshëm nga poret e mbushura me pika të zeza në një hundë të pastër e të lëmuar. Rezultate reale klinike.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176652197-wknzgsmv.jpg",
    imageAlt: "Foto Para dhe Pas - Pastrimi i thellë i poreve në Skin Sence"
  },
  {
    title: "Pamja nga Klinika",
    category: "Skin Sence Tiranë",
    description: "Pamje panoramike e qytetit të Tiranës nga dritaret me hark të ambientit tonë privat e të qetë.",
    imageSrc: CLINIC_IMAGES.windowView,
    imageAlt: "Pamje nga dritarja e klinikës Skin Sence në Tiranë"
  },
  {
    title: "Moodboard & Filozofi",
    category: "Vashezat / Light & Clean",
    description: "Qasje e pastër, e dritshme dhe optimiste për të nxjerrë në pah bukurinë natyrale të çdo pacienteje.",
    imageSrc: CLINIC_IMAGES.moodboard,
    imageAlt: "Moodboard i estetikës moderne Skin Sence"
  },
  {
    title: "Dermato-Kozmetikë Premium",
    category: "Ushqim & Hidratim",
    description: "Përdorim i produkteve më cilësore: maska me bio-kolagjen, gurë Gua Sha dhe formula të certifikuara.",
    imageSrc: CLINIC_IMAGES.products,
    imageAlt: "Produkte dermato-estetike dhe maska Bio Collagen"
  },
  {
    title: "Trajtimi me Plazmë (PRP)",
    category: "Teknikë Laboratorike",
    description: "Përgatitje me centrifugë mjekësore për stimulimin e rigjenerimit të lëkurës me plazmë autologe.",
    imageSrc: CLINIC_IMAGES.prpPlasma,
    imageAlt: "Koleksioni i plazmës në centrifugë për trajtimin PRP"
  },
  {
    title: "Foto-Trajtim & Hidratim",
    category: "Rinovim i Avancuar",
    description: "Kujdes i personalizuar me teknologji me dritë për rigjallërimin e thellë të lëkurës.",
    imageSrc: CLINIC_IMAGES.facialCare,
    imageAlt: "Kujdesi estetik për fytyrën me dritë"
  },
  {
    title: "Ambienti Luksoz",
    category: "Skin Sence Tiranë",
    description: "Hapësirë me dizajn modern dark-brown, ndriçim të ngrohtë dhe ambient të dedikuar për përkujdesjen tuaj estetike.",
    imageSrc: CLINIC_IMAGES.interior,
    imageAlt: "Ambienti i brendshëm i klinikës Skin Sence në Tiranë"
  },
  {
    title: "Teknika Mjekësore",
    category: "Përvojë 10+ Vjeçare",
    description: "Kujdes profesional me precizion të lartë klinik nga infermierja me mbi 10 vite përvojë në fushat më të avancuara të estetikës.",
    imageSrc: CLINIC_IMAGES.treatment,
    imageAlt: "Infermierja gjatë realizimit të trajtimit estetik"
  },
  {
    title: "Branding & Identiteti",
    category: "skinSence by Arsa Tota",
    description: "Detaje luksoze dhe përkushtim maksimal ndaj standardeve më të larta të cilësisë dhe diskrecionit.",
    imageSrc: CLINIC_IMAGES.brandingCard,
    imageAlt: "Kartëvizita Skin Sence by Arsa Tota"
  },
  {
    title: "Precizion & Teknologji",
    category: "Pajisje Avancuara",
    description: "Pajisje estetike moderne për trajtime të sigurta, natyrale dhe pa ndërhyrje invazive.",
    imageSrc: CLINIC_IMAGES.equipment,
    imageAlt: "Pajisjet mjekësore estetike në Skin Sence"
  },
  {
    title: "Bukuri Natyrale",
    category: "Rezultate Harmonike",
    description: "Lëkurë e freskët, e hidratuar dhe me shkëlqim të plotë natyral. Rezultatet ndryshojnë nga personi në person.",
    imageSrc: CLINIC_IMAGES.facialResult,
    imageAlt: "Kujdesi për lëkurën në Skin Sence"
  }
];
