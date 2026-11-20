export const CLINIC_IMAGES = {
  // Initial 5 clinic assets
  interior: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243549-w68azau5.jpg",
  treatment: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243550-0oxoix87.jpg",
  brandingCard: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243550-23bqaj13.jpg",
  equipment: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243552-lprouhpe.jpg",
  facialResult: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243552-gieku2a8.jpg",

  // 2nd batch assets
  windowView: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470474-m2cac33c.jpg",
  moodboard: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470475-ijglkxbs.jpg",
  products: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470476-h3kh2ojj.jpg",
  prpPlasma: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470476-9vul3ope.jpg",
  facialCare: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176470477-d25ewqsf.jpg",

  // 3rd batch before/after asset
  beforeAfterPores: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176652197-wknzgsmv.jpg",

  // 4th batch (5 new official photos)
  sesdermaProducts: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795179863012-vnwm1wit.jpg",
  nanoNeedling: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795179863013-1vloanfo.jpg",
  deepExtraction: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795179863014-bloxi2u1.jpg",
  brandLogoSquare: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795179863014-o03o9vgz.jpg",
  clinicalProcedure: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795179863014-sxd8fsb5.jpg"
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
    title: "Pastrim Mjekësor me Ekstraktor",
    category: "Dermatologji Estetike",
    description: "Eliminim me precizion mikro-mjekësor i komedoneve dhe poreve të bllokuara me doreza sterile e mjete profesionale.",
    imageSrc: CLINIC_IMAGES.deepExtraction,
    imageAlt: "Pastrimi i thellë i poreve me ekstraktor"
  },
  {
    title: "Linja Sesderma & Medi-Derma",
    category: "Produkte Dermato-Kozmetike",
    description: "Formulime mjekësore Reti-Age, C-Vit, Factor G dhe Hidraderm Hyal për ushqimin dhe rinovimin e lëkurës.",
    imageSrc: CLINIC_IMAGES.sesdermaProducts,
    imageAlt: "Linja e produkteve mjekësore dermato-estetike Sesderma"
  },
  {
    title: "Mezo & Nanoneedling",
    category: "Rinovim i Avancuar",
    description: "Penetrim i thellë i serumeve ushqyese përmes aparateve estetike me mikro-aplikues në lëkurë.",
    imageSrc: CLINIC_IMAGES.nanoNeedling,
    imageAlt: "Trajtimi me mikro-gjilpëra dhe nanoneedling në ballë"
  },
  {
    title: "skinSence by Arsa Tota",
    category: "Identiteti Zyrtar",
    description: "Logoja dhe identiteti vizual i klinikës sonë private me stilin luksoz zi-kafe në Tiranë.",
    imageSrc: CLINIC_IMAGES.brandLogoSquare,
    imageAlt: "Logoja zyrtare skinSence by Arsa Tota"
  },
  {
    title: "Kujdes Klinik Profesional",
    category: "Infermiere me 10+ Vite Përvojë",
    description: "Procedura të certifikuara estetike të realizuara me përkushtim, kujdes higjenik dhe rezultate natyrale.",
    imageSrc: CLINIC_IMAGES.clinicalProcedure,
    imageAlt: "Procedura klinike estetike në Skin Sence"
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
