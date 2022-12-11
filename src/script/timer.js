import { View } from "./View.js";

const Timer = {
  timer: 7 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSecunds: time => time % 60,

  // formatando os minutos e segundos
  formatTime: time => String(time).padStart(2, "0"),
  
  start() {
    Timer.currentTime = Timer.timer;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    
    Timer.currentTime -= 1;

    View.render({
      minutes: `${Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))}`,
      secunds: `${Timer.formatTime(Timer.timeToSecunds(Timer.currentTime))}`,
    });


    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      Timer.start();
    };

  },
    
}
 
export { Timer };