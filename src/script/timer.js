import { View } from "./View.js";

const Timer = {
  timer: 5,
  currentTime: 0,
  interval: null,

  start() {
    Timer.currentTime = Timer.timer;
    Timer.interval = setInterval(Timer.countdown, 1000);

 
    
  },

  countdown() {

    // console.log(Timer.currentTime);
    Timer.currentTime -= 1;

    View.render({
      minutes: '09',
      secunds: '18',
    })
    
    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      Timer.start();
    };

  },
    
}
 
export { Timer };