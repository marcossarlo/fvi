import test from 'node:test';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// Barra secundaria debajo del navbar principal
export const secondaryNavData = {
  leftLinks: [
    { text: 'Títulos', href: getPermalink('/titulos') },
    { text: 'Promotores', href: getPermalink('/promotores') },
    { text: 'Empleo', href: getPermalink('/empleo') },
    { text: 'FAQs', href: getPermalink('/faqs') },
    { text: 'Contactos', href: getPermalink('/contactos') },
  ],
  rightLinks: [
    { text: 'Login', href: getPermalink('/login') },
    { text: 'Registro', href: getPermalink('/registro') },
  ],
};

export const headerData = {
  links: [
    {
      text: 'El Instituto',
      links: [
        {
          text: 'Conócenos',
          href: getPermalink('/conocenos'),
        },
        {
          text: 'Nuestro Director',
          href: getPermalink('/director'),
        },
        {
          text: 'Consejo Académico Internacional',
          href: getPermalink('/consejo-academico-internacional'),
        },
        {
          text: 'Comité de Dirección',
          href: getPermalink('/comite-direccion'),
        },
        {
          text: 'Profesorado e Investigación',
          href: getPermalink('/profesorado-investigacion'),
        },
        {
          text: 'Acreditación y Reconocimiento',
          href: getPermalink('/acreditacion-reconocimiento'),
        },
        {
          text: 'Empleo en el Instituto',
          href: getPermalink('/empleo-instituto'),
        },
        {
          text: 'Fondo Verde y su acción social',
          href: getPermalink('/fondo-verde-accion-social'),
        },
      ]
    },
    {
      text: 'Homes',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'Descargar', href: 'https://github.com/arthelokyo/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/fondo-verde-internacional' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/fondoverde' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/fondoverde' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/fondo.verde/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
  ©2003 <span class="text-gray-500">FONDOVERDE</span>. Todos los derechos Reservados.
  `,
};
