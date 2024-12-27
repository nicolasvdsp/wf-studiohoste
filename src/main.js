import { DotLottiePlayer } from 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';

import './scss/app.scss';
import customAnimations from './features/animations';
import noCursor from './features/cursor';
import popupVimeoPlayer from './features/vimeo';

customAnimations();
noCursor();
popupVimeoPlayer();

let badge = document.querySelector(".w-webflow-badge");
badge.style.setProperty('display', 'none', 'important');