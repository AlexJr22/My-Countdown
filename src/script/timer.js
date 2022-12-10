
const Timer = {
  clock: document.getElementById('clock'),

  Minutes: Number,
  Secunds: Number,

  start() {
    
    setInterval(this.timer, 1000);

  },

  timer(min=90 , sec=21) {

    this.Minutes = min;
    this.Secunds = sec;
    
    this.clock.innerHTML = `${Minutes}:${Secunds}`
    console.log(this.Minutes, this.Secunds);
  },
    
}

export { Timer };