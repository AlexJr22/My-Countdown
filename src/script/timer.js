
const Timer = {
  clock: document.getElementById('clock'),

  minutes: 60,
  secunds: 20,

  init(min=this.minutes, sec=this.secunds) {
    setInterval(() => {
      this.timer(min, sec);
    }, 1000);
  },
  
  timer(min, sec) {
    
    console.log('Passou aqui!!')

      if (sec > 0 ) {
        sec -= 1;
        
        if (sec == 0) {
          min -= 1;
          sec = 60;
        };

        
      };
      if (sec < 10) {
        this.clock.innerHTML = `${min}:0${sec}`;
      };
      if (min < 10) {
        this.clock.innerHTML = `0${min}:0${sec}`;
      };
      console.log('Passou aqui também!')
  },
    
}

export { Timer };