// -----------------------------------------------------------------------------
// Marks Media Communication — site content
// Source of facts: markspr.com (Home, About, Services, Public Relations, Events,
// Clients, Contact). Copy has been lightly rewritten for grammar and clarity
// while preserving the original meaning and facts. No new claims were added.
// -----------------------------------------------------------------------------

export const company = {
  name: 'Marks Media Communication',
  legalName: 'Marks Media Communication',
  shortName: 'Marks Media',
  tagline: 'Get the attention you deserve',
  taglineDisplay: ['Get the', 'attention', 'you deserve'],
  positioning:
    'A Public Relations and Advertising agency in the Deccan region of India with more than 40 years of experience.',
  intro:
    'Marks Media Communication is a trademark Public Relations and Advertising agency in the Deccan region of India, with a history spanning more than 40 years. We build reputation, identity and image for private and public institutions through research, precise planning and strategic communication.',
  social: [
    'https://www.youtube.com/c/MarksMediaCommunications',
    'https://www.instagram.com/marksmediacommunications',
    'https://www.linkedin.com/company/marks-media-communications/',
  ],
}

// Social profiles, in display order. `platform` maps to a Lucide icon in the UI.
export const socialLinks = [
  {
    platform: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/c/MarksMediaCommunications',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/marksmediacommunications',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/marks-media-communications/',
  },
]

export const contact = {
  person: 'S. Mirza',
  mobile: '9052618482',
  office: '040-66466778',
  fax: '040-66466779',
  email: 'sultan.pr@gmail.com',
  addressLines: [
    '1-C, Atlas, Opposite Rainbow Children’s Hospital',
    'Road No. 10, Banjara Hills',
    'Hyderabad, Telangana, India — 500034',
  ],
  addressShort: 'Road No. 10, Banjara Hills, Hyderabad',
}

export const about = {
  heading: ['We are', 'Marks Media', 'Communication'],
  stats: [
    { value: '40+', label: 'Years of experience' },
    { value: '750+', label: 'Brands served in India' },
    { value: 'Deccan', label: 'Region of India, based in Hyderabad' },
  ],
  lead:
    'Marks Media Communication is a media house that specialises in Public Relations and Advertising, based at Banjara Hills, Road No. 10, Hyderabad.',
  paragraphs: [
    'The agency is one of the oldest PR practices in South India, with experience cumulating over 40 years. Our work spans corporate reputation, public relations, celebrity management, image management, concept promotions, advertising, branding and crisis management.',
    'We work through an extensive network that reaches beyond regional boundaries, serving a wide list of clients in India and internationally across the modern era of marketing and communication. Over 750 brands in India have been served, alongside international clients.',
    'Our approach is built on effective PR — creating and planning promotional ideas across communication channels to improve how a client is perceived and to strengthen its relationship with its target audience.',
    'Our strategies and campaigns are designed to build, enhance and magnify branding, corporate identity, celebrity management and image building — for both private and public institutions — through comprehensive research, precise planning and expert scrutiny of market demands.',
  ],
  culture:
    'Our culture is built to bring out the best in every client brief — with integrity, passion and creativity, and a clear read of a competitive market. We are known for an original and inventive approach to strategy, and for a team that excels at changing the way people think and delivering breakthrough results.',
  objective:
    'Our objective is to emphasise excellence through the intrinsic transformation of client demand and market environment — to create a remarkable future by uncovering potential, critical insight and storytelling, through communication that is compelling, effective and engaging.',
}

// Detail services — these have their own SEO routes.
export const services = [
  {
    slug: 'media-relations',
    title: 'Media Relations',
    summary: 'The bridge between your message and the audience it is meant for.',
    body: [
      'Information is power. In today’s world of technology and information, media plays a crucial role in defining opinions and perspectives.',
      'Marks Media Communication treats media relations as a pivotal part of reaching out and building relationships with the public. The firm’s long-standing rapport with the media has repeatedly proven valuable — it is the bridge that delivers a concise message to the right audience.',
    ],
  },
  {
    slug: 'press-release',
    title: 'Press Release',
    summary: 'Source copy that shapes the story before it is written.',
    body: [
      'The press release is the most important document for establishing and shaping news stories and angles, and it serves as primary source copy for news outlets.',
      'Our professional team of writers studies the history, objectives and expectations of each client, uses the appropriate terminology, and sends a precise message after a detailed analysis of the target audience and the medium of communication.',
    ],
  },
  {
    slug: 'brand-management',
    title: 'Brand Management',
    summary: 'Turning a product into a brand the market recognises.',
    body: [
      'A product becomes a brand only after it earns the essence of success.',
      'Marks Media Communication is known for tracing out and formulating effective, powerful strategies and campaigns that add up to efficient branding — delivering on the promise made to customers through the company name, its unique selling proposition, its logo and the qualities that reflect its standing in the market.',
    ],
  },
  {
    slug: 'corporate-pr',
    title: 'Corporate P.R',
    summary: 'Communication across every internal and external channel.',
    body: [
      'Corporate PR carries many platforms for communication, across two primary channels — internal and external — that disseminate information to different publics.',
      'At Marks Media Communication it is designed to enhance corporate image by exploring different scenarios and providing pragmatic solutions: corporate strategy, corporate planning, employee-driven performance and creative sales campaigns.',
      'A company with a powerful corporate image attracts investors, motivates employees and translates into revenue. Publishing and updating a company’s objectives, ethics and achievements provides transparency and lays the foundation for growth.',
    ],
  },
  {
    slug: 'product-launch',
    title: 'Product Launch',
    summary: 'Research-led launches built on the merits of the product.',
    body: [
      'Companies launch products every day. Marks Media Communication is regarded as the brainwave behind a launch.',
      'Our teams gather information at scale, tracing out the merits and USP that showcase the superior nature of the product and its relationship to competitor products — market scenario, target audience, the favourable season, and the appropriate theme and idea for the launch.',
    ],
  },
  {
    slug: 'advertising',
    title: 'Advertising',
    summary: 'Print, electronic and outdoor — complete advertising solutions.',
    body: [
      'Advertising serves a critical purpose in business. It introduces products, creates awareness, carries corporate social responsibility initiatives and builds brand and product recall.',
      'Marks Media works across print media, electronic media and outdoor media, with experienced designers, copywriters and marketing professionals delivering complete advertising solutions.',
    ],
  },
  {
    slug: 'event-management',
    title: 'Event Management',
    summary: 'Planned, coordinated, monitored and evaluated to the last detail.',
    body: [
      'Event management is a booming industry, and Marks Media Communication knows the tricks of the trade — an open-minded approach that makes each experience memorable.',
      'Through long-standing ties across many industries, we plan, coordinate, monitor and evaluate events, including risk management and adherence to ethical and legal guidelines. Attention to detail is what makes your drive for success our passion — from arranging the location to inviting the celebrity.',
    ],
  },
  {
    slug: 'celebrity-management',
    title: 'Celebrity Management',
    summary: 'A large roster of celebrities for launches, shows and brand roles.',
    body: [
      'Marks Media Communication works with a large roster of celebrities.',
      'Whether you need a celebrity for a product launch or a brand ambassador for your brand, we arrange talent for product launches, shows, inaugurations, events, collection launches and brand ambassador roles.',
    ],
  },
]

// Shown on the Services page as a closing statement (no detail route on the
// original site).
export const anyEvent = {
  title: 'Any Event, Any Industry',
  summary:
    'Long-standing ties across many industries mean there are few briefs and few sectors Marks Media Communication has not planned and delivered.',
}

// Additional practice areas covered on the Public Relations page.
export const publicRelations = {
  heading: ['Public', 'Relations'],
  definition:
    'Public Relations is the practice of shaping and maintaining the image of a company, an organisation or an individual in the eyes of its publics — communicating with different sectors of the public to influence attitudes and opinions in the interest of a person, a product or an idea.',
  role:
    'PR is a major tool in the present market for building the right image of a client. Marks Media Communication creates the strategies, concepts and ideas that build that image.',
  method: {
    title: 'How we do it',
    steps: [
      'Create a plan with clear goals and objectives.',
      'Define the target audiences and the target messages.',
      'Align the media relations programme with your other marketing communications.',
      'Establish in advance how the success of the programme will be measured.',
    ],
  },
  practices: [
    {
      title: 'Media Relations',
      text: 'As the most experienced firm in the region, we treat media relations as one of the most important aspects of PR — maintaining positive relations with the media so that a client receives a positive response from its target group.',
    },
    {
      title: 'Media Monitoring Services',
      text: 'A clipping service scans thousands of newspapers, magazines and websites and monitors television talk shows and news programmes for mentions of your company or product. Supplying key words keeps you up to date on your industry and your competition, and the clippings let you judge whether your news is reaching its target audience and whether the PR plan is working.',
    },
    {
      title: 'Press Release',
      text: 'The most valuable releases help establish a client as a source — they are about developing trends in an industry and carry information the media would otherwise find hard to obtain. Our writers interact with the client first to understand how it wants to present itself, then build the release after thorough analysis.',
    },
    {
      title: 'Brand Management',
      text: 'Brand management begins with understanding what “brand” really means — defined by the leaders of a company and reaching all the way to the people who create the product and interface with customers. We manage the whole company through the brand, with concepts and strategies that make the brand read as “branded”.',
    },
    {
      title: 'Event Management',
      text: 'A specialised team handles every aspect of an event — from arranging the location to inviting the celebrity — with planning, coordination, monitoring and evaluation throughout.',
    },
    {
      title: 'Product Launch',
      text: 'Extensive research into the product, its competitors and the target audience produces a considered plan for a successful launch.',
    },
    {
      title: 'Corporate P.R',
      text: 'The basic aim of any organisation is to enhance its corporate image. We take an extensive view of the client and its overall corporate strategy, planning, management and performance — a strong corporate image is the base on which a company’s standing is built.',
    },
    {
      title: 'Celebrity Management',
      text: 'Marks Media Communication has a large number of celebrities associated with it — for product launches, shows, inaugurations, events, collection launches and brand ambassador roles.',
    },
    {
      title: 'Advertising',
      text: 'As an experienced advertising and PR firm we work across print, electronic and outdoor media, with designers, copywriters and marketing researchers providing complete advertising solutions.',
    },
    {
      title: 'Concept Promotions',
      text: 'We provide powerful, compelling solutions and a variety of concepts to help clients promote with ease. Once the strategy is in motion we activate the client’s publicity and generate sales.',
    },
    {
      title: 'Crisis Management',
      text: 'A crisis is not always bad — a difficult moment can be an opportunity to reach a large audience with your perspective. We analyse scenarios that could damage a business, its corporate image or product credibility, and devise a researched plan to prevent miscommunication and disinformation. When something does go wrong, we help clients counteract the situation with quick, effective, tested measures — from the media to their publics.',
    },
  ],
}

// Event names are taken verbatim from markspr.com/events (spellings of public
// figures corrected). No dates are shown because the original site does not
// publish them. The tag is derived from the event name itself.
export const events = [
  {
    slug: 'actress-taapsee-launch',
    title: 'Actress Taapsee at a Launch',
    tag: 'Celebrity Launch',
    related: 'celebrity-management',
  },
  {
    slug: 'world-rose-day-celebrations',
    title: 'World Rose Day Celebrations',
    tag: 'Public Relations',
    related: 'event-management',
  },
  { slug: 'hi-life-launch', title: 'Hi-Life Launch', tag: 'Launch', related: 'product-launch' },
  {
    slug: 'angela-krislinzki-samsung-event',
    title: 'Actress Angela Krislinzki at a Samsung Event',
    tag: 'Celebrity Event',
    related: 'celebrity-management',
  },
  {
    slug: 'lic-press-meet',
    title: 'Press Meet by LIC',
    tag: 'Press Meet',
    related: 'media-relations',
  },
  { slug: 'start-up', title: 'Start-Up', tag: 'Public Relations', related: 'corporate-pr' },
  {
    slug: 'jayant-sinha-bizav-india-awards-bangalore',
    title:
      'Shri Jayant Sinha, Minister of State for Civil Aviation, at BizAV India Awards, Bangalore',
    seoTitle: 'Jayant Sinha at BizAV India Awards, Bangalore',
    tag: 'Awards',
    related: 'event-management',
  },
  {
    slug: 'rana-daggubati-unveiling',
    title: 'Actor Rana Daggubati at an Unveiling',
    tag: 'Celebrity Event',
    related: 'celebrity-management',
  },
  {
    slug: 'bishan-singh-bedi-media-event',
    title: 'Cricketer Bishan Singh Bedi at a Media Event',
    tag: 'Media Event',
    related: 'media-relations',
  },
  {
    slug: 'pv-sindhu-vizag-steel-brand-ambassador',
    title: 'P.V. Sindhu announced as Brand Ambassador of RINL – Vizag Steel Plant',
    tag: 'Brand Ambassador',
    related: 'celebrity-management',
  },
  {
    slug: 'iphex-pharmexcil-press-meet',
    title: 'Press Meet for IPHEX by Pharmexcil — KTR unveils',
    tag: 'Press Meet',
    related: 'media-relations',
  },
  {
    slug: 'pharmexcil-bdma-press-meet',
    title: 'Press Meet by Pharmexcil & BDMA',
    tag: 'Press Meet',
    related: 'media-relations',
  },
  {
    slug: 'e-health-card-amala-akkineni',
    title: 'e-Health Card unveiled by Amala Akkineni',
    tag: 'Unveiling',
    related: 'product-launch',
  },
  {
    slug: 'bizav-india-awards-hyderabad',
    title: 'BizAV India Awards, Hyderabad',
    tag: 'Awards',
    related: 'event-management',
  },
  {
    slug: 'tcei-best-pr-award',
    title: 'Best PR Award to Marks Media Communication by TCEI',
    tag: 'Recognition',
    related: 'public-relations',
  },
  {
    slug: 'bajaj-electronics-lucky-draw',
    title: 'Bajaj Electronics — Lucky Draw Events',
    tag: 'Event Management',
    related: 'event-management',
  },
  {
    slug: 'justice-kurian-joseph-environment-management',
    title: 'Justice Kurian Joseph at the World Congress on Environment Management',
    tag: 'Public Relations',
    related: 'media-relations',
  },
  {
    slug: 'rashmi-shetty-book-launch',
    title: 'Dr. Rashmi Shetty’s book unveiled by Actor Nagarjuna and Actor Rana Daggubati',
    seoTitle: 'Dr. Rashmi Shetty book launch',
    tag: 'Book Launch',
    related: 'product-launch',
  },
]

// Client names taken from markspr.com/clients. Order preserved from the source.
// `slug` is the filename stem for an optional official logo dropped into
// src/assets/clients/ (e.g. dabur.svg). When no logo file exists the name is
// shown as text — see src/components/ClientGrid.jsx and
// src/assets/clients/README.md.
export const clients = [
  { name: 'Coupon', slug: 'coupon' },
  { name: 'Hytex', slug: 'hytex' },
  { name: 'Dabur', slug: 'dabur' },
  { name: 'Neerus', slug: 'neerus' },
  { name: 'Manepally', slug: 'manepally' },
  { name: 'Sunshine Hospitals', slug: 'sunshine-hospitals' },
  { name: 'Mebaz', slug: 'mebaz' },
  { name: 'Bajaj Electronics', slug: 'bajaj-electronics' },
  { name: 'BKT', slug: 'bkt' },
  { name: 'Ceramic Pro', slug: 'ceramic-pro' },
  { name: 'Creamstone', slug: 'creamstone' },
  { name: 'Desire Hyderabad', slug: 'desire-hyderabad' },
  { name: 'Forum Sujana Mall', slug: 'forum-sujana-mall' },
  { name: 'Glam Fashion Week', slug: 'glam-fashion-week' },
  { name: 'GNI', slug: 'gni' },
  { name: 'Hi-Life Exhibition', slug: 'hi-life-exhibition' },
  { name: 'Hiya Jewellers', slug: 'hiya-jewellers' },
  { name: 'Hollywood Footwear', slug: 'hollywood-footwear' },
  { name: 'IIOO', slug: 'iioo' },
  { name: 'India Med Expo', slug: 'india-med-expo' },
  { name: 'Jahapanah', slug: 'jahapanah' },
  { name: 'Jaipur Jewels', slug: 'jaipur-jewels' },
  { name: 'Kaira', slug: 'kaira' },
  { name: 'Kalamandir Foundation', slug: 'kalamandir-foundation' },
  { name: 'Kalasha', slug: 'kalasha' },
  { name: 'KSR', slug: 'ksr' },
  { name: 'KWC', slug: 'kwc' },
  { name: 'Manepally Jewellers', slug: 'manepally-jewellers' },
  { name: 'Pharmexcil', slug: 'pharmexcil' },
  { name: 'PMJ', slug: 'pmj' },
]

export const network = {
  heading: ['A network that', 'reaches beyond', 'the region'],
  intro:
    'Marks Media Communication works from the Deccan region of India through a network that reaches beyond regional boundaries — media, industry and celebrity relationships built over four decades.',
  points: [
    {
      value: '40+',
      title: 'Years in practice',
      text: 'One of the oldest PR practices in South India, with experience cumulating over 40 years.',
    },
    {
      value: '750+',
      title: 'Brands served in India',
      text: 'Over 750 brands served in India, alongside international clients across the modern marketing era.',
    },
    {
      value: '3',
      title: 'Advertising media',
      text: 'Working relationships across print media, electronic media and outdoor media (hoardings).',
    },
    {
      value: 'PR + Ads',
      title: 'A single media house',
      text: 'Public Relations and Advertising under one roof — corporate reputation, branding, events, celebrity and crisis management.',
    },
  ],
}

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Public Relations', to: '/public-relations' },
  { label: 'Events', to: '/events' },
  { label: 'Network', to: '/network' },
  { label: 'Clients', to: '/clients' },
  { label: 'Contact', to: '/contact' },
]

export const siteUrl = 'https://markspr.com'

// -----------------------------------------------------------------------------
// SEO metadata — one unique entry per static route.
// -----------------------------------------------------------------------------
export const seo = {
  home: {
    title: 'Marks Media Communication | Public Relations & Advertising Agency',
    description:
      'Marks Media Communication is a public relations and advertising agency in Hyderabad with more than 40 years of experience across media relations, branding, corporate PR, advertising, events and celebrity management.',
    keywords:
      'public relations agency, PR agency Hyderabad, advertising agency Hyderabad, media relations, corporate PR, brand management, media communications',
  },
  about: {
    title: 'About Marks Media Communication | 40+ Years of PR & Advertising',
    description:
      'One of the oldest public relations agencies in South India — Marks Media Communication specialises in PR, advertising, branding, image management and crisis management from Banjara Hills, Hyderabad.',
    keywords:
      'about Marks Media Communication, PR agency Hyderabad, advertising agency Deccan, corporate reputation, image management, oldest PR agency South India',
  },
  services: {
    title: 'PR & Advertising Services | Marks Media Communication',
    description:
      'Media relations, press releases, brand management, corporate PR, product launches, advertising, event management and celebrity management from a PR agency with more than 40 years of experience.',
    keywords:
      'PR services, advertising services, media relations, press release, brand management, corporate PR, product launch, event management, celebrity management',
  },
  publicRelations: {
    title: 'Public Relations Agency | Media Relations & Crisis Management',
    description:
      'Public relations that shapes and protects reputation — media relations, media monitoring, press releases, brand management, corporate PR, concept promotions and crisis management in Hyderabad.',
    keywords:
      'public relations agency, media relations, media monitoring, press release, crisis management, concept promotions, corporate PR Hyderabad',
  },
  events: {
    title: 'Events & Media Events | Marks Media Communication',
    description:
      'Press meets, product launches, unveilings, award ceremonies and celebrity appearances managed by Marks Media Communication, a public relations and advertising agency in Hyderabad.',
    keywords:
      'event management agency, media events, press meet, product launch, celebrity appearances, award ceremonies Hyderabad',
  },
  network: {
    title: 'Our Network | Media, Industry & Celebrity Relationships',
    description:
      'Marks Media Communication works from the Deccan region of India through media, industry and celebrity relationships built over more than 40 years, across print, electronic and outdoor media.',
    keywords:
      'PR network, media relationships, celebrity management, advertising media, Deccan region PR agency',
  },
  clients: {
    title: 'Our Clients | Marks Media Communication',
    description:
      'A selection of the brands and institutions Marks Media Communication has worked with across India in public relations, advertising and events.',
    keywords: 'PR agency clients, advertising agency clients, Marks Media Communication clients',
  },
  contact: {
    title: 'Contact Marks Media Communication | PR Agency in Hyderabad',
    description:
      'Talk to Marks Media Communication — 1-C, Atlas, Road No. 10, Banjara Hills, Hyderabad. Public relations and advertising with more than 40 years of experience.',
    keywords:
      'contact PR agency Hyderabad, advertising agency Banjara Hills, Marks Media Communication contact',
  },
  notFound: {
    title: 'Page Not Found | Marks Media Communication',
    description: 'The page you were looking for could not be found.',
  },
}

// Absolute URL helpers -------------------------------------------------------
export const absUrl = (path = '/') => `${siteUrl}${path === '/' ? '' : path}`
export const ogImage = `${siteUrl}/og-image.png`

// Organization / LocalBusiness structured data (shared) ---------------------
export const organizationSchema = {
  '@type': ['Organization', 'LocalBusiness'],
  '@id': `${siteUrl}/#organization`,
  name: company.name,
  legalName: company.legalName,
  alternateName: 'Marks PR',
  description: company.positioning,
  url: `${siteUrl}/`,
  logo: `${siteUrl}/logo.png`,
  image: ogImage,
  email: contact.email,
  telephone: '+91-40-66466778',
  faxNumber: '+91-40-66466779',
  slogan: company.tagline,
  foundingLocation: 'Hyderabad, Telangana, India',
  areaServed: 'IN',
  address: {
    '@type': 'PostalAddress',
    streetAddress: "1-C, Atlas, Opposite Rainbow Children's Hospital, Road No. 10, Banjara Hills",
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500034',
    addressCountry: 'IN',
  },
  ...(company.social.length ? { sameAs: company.social } : {}),
}

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: company.name,
  url: `${siteUrl}/`,
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en',
}
