import { Component } from '@angular/core';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CguComponent } from './pages/footer/cgu/cgu.component';
import { FaqComponent } from './pages/footer/faq/faq.component';
import { HelpComponent } from './pages/footer/help/help.component';
import { MapComponent } from './pages/footer/map/map.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { SkillsComponent } from './pages/skills/skills.component';

export const routes = [
  { path: '', title: 'accueil', icon: 'house' },
  { path: 'services', title: 'services', icon: 'user-tie' },
  { path: 'skills', title: 'compétences', icon: 'graduation-cap' },
  { path: 'portfolio', title: 'portfolio', icon: 'tasks' },
  { path: 'contact', title: 'contactez-moi', icon: 'envelope' },
  { path: 'about', title: 'à propos', icon: 'info' },
];
export const NAVBAR_LINKS = [
  { path: '', title: 'accueil', icon: 'house' },
  { path: 'services', title: 'services', icon: 'user-tie' },
  { path: 'skills', title: 'compétences', icon: 'graduation-cap' },
  { path: 'portfolio', title: 'portfolio', icon: 'tasks' },
  { path: 'contact', title: 'contactez-moi', icon: 'envelope' },
  { path: 'about', title: 'à propos', icon: 'info' },
];
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
    path: '/contact',
    label: 'contactez-moi',
    component: ContactComponent,
    desc: "contacter l'auteur",
    icon: 'envelope',
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
    path: '/about',
    label: 'à propos',
    component: AboutComponent,
    desc: 'qui suis-je?',
    icon: 'person-circle-question',
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
export const PAGE_LINKS = [
  { path: 'footer/map', label: 'plan du site', img: '', icon: '' },
  { path: 'footer/cgu', label: 'conditions', img: '', icon: '' },
  { path: 'footer/help', label: 'aide', img: '', icon: '' },
  { path: 'footer/faq', label: 'foire aux questions', img: '', icon: '' },
];

export const SOCIAL_LINKS = [
  {
    path: 'https://github.com/fabagile/',
    label: 'mon github',
    img: 'assets/pictures/github.png',
    icon: 'github',
    iconColor: 'dark',
  },
  {
    path: 'https://www.linkedin.com/in/fabrice-riquet-bba4bb19a/',
    label: 'mon lien linkedin',
    img: 'assets/pictures/linkedin.png',
    icon: 'linkedin',
    iconColor: 'info',
  },
  {
    path: 'https://twitter.com/FabezioC/',
    label: 'mon twitter',
    img: 'assets/pictures/tweeter-logo-png-clip-art.png',
    icon: 'twitter',
    iconColor: 'primary',
  },
  {
    path: 'https://www.facebook.com/fabrice.riquet.735/',
    label: 'mon lien facebook',
    img: 'assets/pictures/facebook.png',
    icon: 'facebook',
    iconColor: 'primary',
  },
  {
    path: 'https://www.youtube.com/channel/UCwWwnCR0iNZpkjSOGiE3ZFg/',
    label: 'mon lien youtube',
    img: 'assets/pictures/facebook.png',
    icon: 'youtube',
    iconColor: 'danger',
  },
];
