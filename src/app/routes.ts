import { AboutComponent } from './pages/main/about/about.component';
import { ContactComponent } from './pages/footer/contact/contact.component';
import { CguComponent } from './pages/footer/components/cgu/cgu.component';
import { FaqComponent } from './pages/footer/faq/faq.component';
import { HelpComponent } from './pages/footer/help/help.component';
import { MapComponent } from './pages/footer/map/map.component';
import { LandingPageComponent } from './home/landing-page.component';
import { PortfolioComponent } from './pages/main/portfolio/portfolio.component';
import { ServicesComponent } from './pages/main/components/supplies/services.component';

export const MAIN_LINKS = [
  {
    path: '',
    label: 'accueil',
    component: LandingPageComponent,
    desc: 'Page de garde',
    icon: 'house',
  },
  {
    path: '/services',
    label: 'services',
    component: ServicesComponent,
    desc: 'Les services proposés',
    icon: 'user-tie',
  },
  // {path:"/skills", label: "compétences", component: SkillsComponent, desc:"Le savoir-faire de l'auteur", icon: "graduation-cap"},
  {
    path: '/portfolio',
    label: 'portfolio',
    component: PortfolioComponent,
    desc: "les créations de l'auteur",
    icon: 'tasks',
  },
  {
    path: '/about',
    label: 'à propos',
    component: AboutComponent,
    desc: 'qui suis-je?',
    icon: 'person-circle-question',
  },
];
export const FOOTER_LINKS = [
  {
    path: '/footer/map',
    label: 'plan du site',
    component: MapComponent,
    desc: 'la structure du site',
    icon: 'sitemap',
  },
  {
    path: '/footer/contact',
    label: 'contactez-moi',
    component: ContactComponent,
    desc: "contacter l'auteur",
    icon: 'envelope',
  },
  {
    path: '/footer/cgu',
    label: 'conditions',
    component: CguComponent,
    desc: "les conditions générales d'utilisation",
    icon: 'map',
  },
  {
    path: '/footer/help',
    label: 'aide',
    component: HelpComponent,
    desc: "Un peu d'aide ne fait de mal à personne",
    icon: 'circle-question',
  },
  {
    path: '/footer/faq',
    label: 'foire aux questions',
    component: FaqComponent,
    desc: 'Des questions? Quelques réponses',
    icon: 'question',
  },
];

export const SOCIAL_LINKS = [
  {
    path: 'https://github.com/fabagile/',
    label: 'mon github',
    img: 'assets/pictures/github.png',
    icon: 'github',
    iconColor: 'github',
  },
  {
    path: 'https://www.linkedin.com/in/fabrice-riquet-bba4bb19a/',
    label: 'mon lien linkedin',
    img: 'assets/pictures/linkedin.png',
    icon: 'linkedin',
    iconColor: 'linkedin',
  },
  {
    path: 'https://twitter.com/FabezioC/',
    label: 'mon twitter',
    img: 'assets/pictures/tweeter-logo-png-clip-art.png',
    icon: 'twitter',
    iconColor: 'twitter',
  },
  {
    path: 'https://www.facebook.com/fabrice.riquet.735/',
    label: 'mon lien facebook',
    img: 'assets/pictures/facebook.png',
    icon: 'facebook',
    iconColor: 'facebook',
  },
  {
    path: 'https://www.youtube.com/channel/UCwWwnCR0iNZpkjSOGiE3ZFg/',
    label: 'mon lien youtube',
    img: 'assets/pictures/facebook.png',
    icon: 'youtube',
    iconColor: 'youtube',
  },
];
