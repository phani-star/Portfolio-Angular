
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/cover",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/cover"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/education"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/certifications"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/cover",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24653, hash: '4de66e173ce59817df35561e512511430fa50b490d139be0ec2d3b79f7b4aeb8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17106, hash: 'fe4fdf7c4aa36dc61d8794a6a643333b6ad77b4b0dbdff08e030cfdd95be8364', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'education/index.html': {size: 107535, hash: '00d56e8ed5f0ed9146c9c45c8030eba2e5e3c7fd4d7e78bec1505f54dbe1e39e', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'cover/index.html': {size: 102321, hash: 'dca59ba2a8c1717e63934ce28775338b821380fa4d535446bd65582aeb47b22f', text: () => import('./assets-chunks/cover_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 127018, hash: 'd17353cea6a528382bd810c2e674726b2bab61c9c5fd3180fe0b7413c64404ad', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 103993, hash: 'a2d864afedc1f7c69a0d86857191595d659d366d5a67baa2dc956748195943ef', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'certifications/index.html': {size: 105862, hash: '17c8454b9ddc828f192dcf16b1d40bf83f881f21863a8baa93892ca05ab11fcc', text: () => import('./assets-chunks/certifications_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 141870, hash: '7c455d5c1471059a470652c1fcba388687ab291548617c08c8e9a5e3915582ce', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 159789, hash: '8b4f77c399110cb42d3f71907b0eae0fc26ca93c96bb5318e94fe789682824c0', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 160154, hash: 'b473f8d81bc5e35bb2d959ce7c9a574867c22fdfe2adbf86db87b9039bf0084d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
