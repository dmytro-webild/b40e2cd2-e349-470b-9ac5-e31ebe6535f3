export const CLINIC_IMAGES = {
  interior: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243549-w68azau5.jpg",
  treatment: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243550-0oxoix87.jpg",
  brandingCard: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243550-23bqaj13.jpg",
  equipment: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243552-lprouhpe.jpg",
  facialResult: "https://storage.googleapis.com/webild/users/user_3MMxWLUp3sVVfig1aLCXxRfOj3I/uploaded-1795176243552-gieku2a8.jpg"
} as const;

export const GALLERY_ITEMS = [
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
