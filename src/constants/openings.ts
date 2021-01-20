export enum Role {
  design,
  frontend,
  backend
}

export interface Opening {
  id: string;
  role: Role;
  title: string;
  location: string;
  description: string;
}

export interface Openings {
  frontEndDeveloper: Readonly<Opening>;
  solidityDeveloper: Readonly<Opening>;
  designer: Readonly<Opening>;
  rustDeveloper: Readonly<Opening>;
  walken: Readonly<Opening>;
}

export const openings: Openings = {
  frontEndDeveloper: {
    id: '1',
    role: Role.frontend,
    title: 'Full Stack Engineer',
    location: 'Victoria - Vancouver - Remote (+/- 3 hrs PST)',
    description: 'MetaLab is primarily PST-based so the candidate applying for this role must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. We have a small (and growing!) team in Europe — plus global clients — so we resource teams in the same time zone together when. We have a small (and growing!) team in Europe — plus global crole must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. '
  },
  solidityDeveloper: {
    id: '2',
    role: Role.backend,
    title: 'Solidity Developer',
    location: 'Remote (GMT +0 Time Zone)',
    description: 'MetaLab is primarily PST-based so the candidate applying for this role must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. We have a small (and growing!) team in Europe — plus global clients — so we resource teams in the same time zone together when. We have a small (and growing!) team in Europe — plus global crole must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. '
  },
  designer: {
    id: '3',
    role: Role.design,
    title: 'Product Designer',
    location: 'Remote / Vancouver / Victoria',
    description: 'MetaLab is primarily PST-based so the candidate applying for this role must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. We have a small (and growing!) team in Europe — plus global clients — so we resource teams in the same time zone together when. We have a small (and growing!) team in Europe — plus global crole must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. '
  },
  rustDeveloper: {
    id: '4',
    role: Role.backend,
    title: 'Rust Developer (WASM)',
    location: 'Remote / Vancouver / Victoria',
    description: 'MetaLab is primarily PST-based so the candidate applying for this role must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. We have a small (and growing!) team in Europe — plus global clients — so we resource teams in the same time zone together when. We have a small (and growing!) team in Europe — plus global crole must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. '
  },
  walken: {
    id: '5',
    role: Role.design,
    title: 'Christopher Walken Impersonator',
    location: 'Remote (GMT +0 Time Zone)',
    description: 'MetaLab is primarily PST-based so the candidate applying for this role must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. We have a small (and growing!) team in Europe — plus global clients — so we resource teams in the same time zone together when. We have a small (and growing!) team in Europe — plus global crole must be comfortable with ~2hrs overlap during their workday (often 4-6:30pm GMT), operating autonomously in the other hours. '
  },
}