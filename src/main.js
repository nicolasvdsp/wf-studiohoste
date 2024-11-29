import { DotLottiePlayer } from 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';

import './scss/app.scss';
import distordItemsOnHover from './features/animations';
import noCursor from './features/cursor';
import popupVimeoPlayer from './features/vimeo';

distordItemsOnHover();
noCursor();
popupVimeoPlayer();