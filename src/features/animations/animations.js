import distordItemsOnHover from './distortonhover';
import allGsapAnimations from './gsapanimations';
import animateHeader from './headeranimation';
import smoothscrolling from './scroll';

function customAnimations() {
  distordItemsOnHover();
  animateHeader();
  allGsapAnimations();
  smoothscrolling();
}

export default customAnimations;