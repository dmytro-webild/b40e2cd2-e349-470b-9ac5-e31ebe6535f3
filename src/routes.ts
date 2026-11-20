export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Ballina', pageFile: 'HomePage' },
  { path: '/rreth-nesh', label: 'Rreth nesh', pageFile: 'AboutPage' },
  { path: '/sherbimet', label: 'Shërbimet', pageFile: 'ServicesPage' },
  { path: '/para-dhe-pas', label: 'Para dhe pas', pageFile: 'BeforeAfterPage' },
  { path: '/kontakt', label: 'Kontakt', pageFile: 'ContactPage' },
];
