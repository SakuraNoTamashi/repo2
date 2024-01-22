import bwmap from './backgrounds/bw-map.jpeg';
import nairobi from './backgrounds/nairobi.png';
import whiteabstract from './backgrounds/white-abstract.png';
import worldmap from './backgrounds/world-map.png';
import codingBC from './backgrounds/coding.jpg'

import logo from './logo/logo-black.png';
import logotext from './logo/logo-text-black.png';

import shaq from './personal/shaq.png';
import coverPic from './personal/coverPic.png';

import backend from './icons/backend.png';
import ux from './icons/android-logo.png';
import ai from './icons/ai-icon-png-5.png';
import vr from './icons/vr-glasses.png';
import frontend from './icons/frontend.png';
import prototyping from './icons/prototyping.png';
import github from './icons/github.png';
import close from './icons/close.png';
import download from './icons/download.png';
import downloadHover from './icons/downloadHover.png';
import pineapple from './icons/pineapple.png';
import pineappleHover from './icons/pineappleHover.png';
import menu from './icons/menu.png';
import resume from './icons/resume.png';
import send from './icons/send.png';
import sendHover from './icons/sendHover.png';
import robotics from './icons/robotics.png'
import dscience from './icons/science.png';
import dbscience from './icons/dbengineering.png';
import devops from './icons/devops.png';
import cloud from './icons/server.png';
import automation from './icons/robotic-process-automation.png';

import css from './tech/css.png';
import docker from './tech/docker.png';
import figma from './tech/figma.png';
import git from './tech/git.png';
import html from './tech/html.png';
import javascript from './tech/javascript.png';
import nodejs from './tech/nodejs.png';
import reactjs from './tech/reactjs.png';
import redux from './tech/redux.png';
import tailwind from './tech/tailwind.png';
import typescript from './tech/typescript.png';
import graphql from './tech/graphql.png';
import postgresql from './tech/postgresql.png';
import rubyrails from './tech/rubyrails.png';
import arduino from './tech/arduino.png';
import cpp from './tech/c-.png';
import cs from './tech/c-sharp.png';
import laravel from './tech/laravel.png'; 
import unity from './tech/unity.png';
import solidW from './tech/solidworks.png';
import sass from './tech/sass.png';
import python from './tech/python.png';
import flutter from './tech/flutter.png';
import php from './tech/php.png';
import dart from './tech/Dart-logo.png';
import vuejs from './tech/vuejs.png'
import firebase from './tech/firebase.png';
import dotNet from './tech/dotNet.png';
import mysql from './tech/mysql.png';
import mariaDB from './tech/mariaDB.png';
import strapi from './tech/strapi.png';
import wpress from './tech/Wordpress_Blue_logo.png';
import lightsail from './tech/lightsail.png';
import aws from './tech/aws.png';
import ec2 from './tech/ec2.png';
import cpanel from './tech/cpanel.png';
import plesk from './tech/pelsk.png';

import coverhunt from './company/coverhunt.png';
import dcc from './company/dcc.png';
import kelhel from './company/kelhel.png';
import microverse from './company/microverse.png';
import atg from './company/advance.png';
import vclair from './company/vert-clair.png';
import workana from './company/workana.png';
import bdo from './company/BDO_logo.jpeg';


import engHv from './resumes/Juan Arango CV ENG.pdf';



import helpingHand from './projects/helpingHand.png';
import deliveryGoo from  './projects/deliveryGoo.png';
import factoryTv from './projects/factorytv.png';
import projectTrading from './projects/projectTrading.png';
import rubi5 from './projects/rubi5.png';
import colombianFixers from './projects/ColombianFixers.png';
import dayOff from './projects/dayOff/dayOff.png';


import leaderboard from './projects/leaderboard.png';
import math from './projects/math-magicians.png';
import movie from './projects/movie-metro.png';
import nyeusi from './projects/nyeusi.png';
import space from './projects/space-hub.png';



import empathy from './softSkills/emociones.png';
import creativity from './softSkills/creatividad.png';
import conflictResolution from './softSkills/la-resolucion-de-conflictos.png';
import leadership from './softSkills/lider.png';
import continuousLearning from './softSkills/libro.png';
import adaptability from './softSkills/adaptacion.png';
import criticalThinking from './softSkills/design-thinking.png';
import communication from './softSkills/online-communication.png';
import teamWork from './softSkills/trabajo-en-equipo.png';
import problemSolving from './softSkills/solucion.png'
import negotiation from './softSkills/apreton-de-manos.png';
import presentation from './softSkills/presentacion.png';


let imageContext = import.meta.globEager('./projects/deliveryGoo/*.+(png|jpg|jpeg|gif|svg)');
const deliveryGooGallery = Object.keys(imageContext).map((key) => imageContext[key].default);

 imageContext = import.meta.globEager('./projects/projectTrading/*.+(png|jpg|jpeg|gif|svg)');
const projectTradingGallery = Object.keys(imageContext).map((key) => imageContext[key].default);

 imageContext = import.meta.globEager('./projects/helpingHand/*.+(png|jpg|jpeg|gif|svg)');
const helpingHandGallery = Object.keys(imageContext).map((key) => imageContext[key].default);

 imageContext = import.meta.globEager('./projects/rubi5/*.+(png|jpg|jpeg|gif|svg)');
const Rubi5Gallery = Object.keys(imageContext).map((key) => imageContext[key].default);
 imageContext = import.meta.globEager('./projects/factorymobile/*.+(png|jpg|jpeg|gif|svg)');
const factoryMobileGallery = Object.keys(imageContext).map((key) => imageContext[key].default);

 imageContext = import.meta.globEager('./projects/dayOff/*.+(png|jpg|jpeg|gif|svg)');
const dayOffGallery = Object.keys(imageContext).map((key) => imageContext[key].default);



export {
  deliveryGooGallery,
  projectTradingGallery,
  helpingHandGallery,
  Rubi5Gallery,
  factoryMobileGallery,
  bdo,
  dayOff,
dayOffGallery,

  wpress,
  strapi,
  firebase,
  mysql,
  mariaDB,
  ec2,
  lightsail,
  plesk,
  aws,
  cpanel,

  dotNet,
  empathy,
  problemSolving,
  creativity,
  negotiation,
  presentation,
  conflictResolution,
  leadership,
  continuousLearning,
  adaptability,
  criticalThinking,
  communication,
  teamWork,
  bwmap,
  codingBC,
  nairobi,
  whiteabstract,
  worldmap,
  logo,
  logotext,
  workana,
  helpingHand,
  shaq,
  backend,
  automation,
  vuejs,
  ux,
  ai,
  coverPic,
  dbscience,
  vclair,
  dscience,
  cloud,
  devops,
  vr,
  robotics,
  frontend,
  prototyping,
  github,
  close,
  download,
  downloadHover,
  pineapple,
  pineappleHover,
  dart,
  engHv,
  atg,
  menu,
  resume,
  send,
  sendHover,
  css,
  docker,
  figma,
  git,
  graphql,
  html,
  javascript,
  nodejs,
  arduino,
  laravel,
  solidW,
  php,
  python,
  sass,
  cpp,
  cs,
  flutter,unity,
  postgresql,
  rubyrails,
  reactjs,
  redux,
  tailwind,
  typescript,

  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  colombianFixers,
  factoryTv,
  projectTrading,
  deliveryGoo,
  rubi5
};
