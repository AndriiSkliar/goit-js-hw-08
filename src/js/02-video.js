import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const LOCALSTORAGE_KEY = "videoplayer-current-time";

function onPlay(value) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(value.seconds));
}

  player.on('timeupdate', throttle(onPlay, 1000));
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
