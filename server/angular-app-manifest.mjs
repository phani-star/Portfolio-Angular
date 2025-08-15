
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio-Angular/cover",
    "route": "/Portfolio-Angular"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/cover"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/skills"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/projects"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/education"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/experience"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/certifications"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio-Angular/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio-Angular/cover",
    "route": "/Portfolio-Angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24671, hash: 'acc5c6fb687a4f38e970bfe6a8cea4c197e8c230b05cd57c5bc65f2fae6afb52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17124, hash: '4735b8b0181e9677310ccee967b3149b05fef1ad65eb4dea823edf34fd091dcf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'cover/index.html': {size: 102627, hash: 'b43448559a7233ffb39b6eb0d2a894eaaad7df3fcda8448e7496c5952d172627', text: () => import('./assets-chunks/cover_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 104293, hash: '634c6ef052896d069db7656d8dee12e935bf50a58fccddf8e8ca5e963d8f7452', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 107841, hash: 'bd53dab50c9872ca55f61de3ac832e3c282eae95bd18d83a786c3fface07b5d4', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 106168, hash: '36b9ab3747b3fd0e7d2cee311406e7691a56c69ba5ee1f680595319e7165c9f1', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 144126, hash: '633dbc9a6603247e4150f03ee32d0f63f5cc6eb87d4bb0d6567cc3c33828ebc3', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 127324, hash: 'ced09dcba5a3b14dd22a74e90fbd805561dfec0a94dbead465bf60c92e726604', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 162840, hash: 'e71e25386cfbe6cc45d58012d8dfec1b96caac237449f0d7746563fc7f80e846', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 163595, hash: 'b50aecb5e822472dfcb23df96787f532d8693980e975a7ce4d9fba84145a4008', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
