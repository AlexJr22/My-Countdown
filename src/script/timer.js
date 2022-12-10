
const Timer = {
  clock: document.getElementById('clock'),
  timer: 0.1 * 60,
  currentTime: 0,
  interval: null,

  start() {
    Timer.currentTime = Timer.timer;

    Timer.interval = setInterval(Timer.countdown, 1000)
  },

  countdown() {

    console.log(Timer.currentTime)
    Timer.currentTime -= 1

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval)
    }
  },
    
}
 
export { Timer };