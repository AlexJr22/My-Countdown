
const Tempo = {
  tempo: 7 * 60,
  interval: null,

  tempoEmMinutos: tempo => Math.floor(tempo / 60),
  tempoEmSegundos: tempo => tempo % 60,

  iniciar() {
    Tempo.interval = setInterval(Tempo.cronometro, 1000);
  },

  cronometro() {
    
    Tempo.render();
    
    Tempo.tempo -= 1;
    
    if(Tempo.tempo === -1) {
      clearInterval(Tempo.interval);
      Tempo.iniciar();
      Tempo.tempo = 5;
    };

  },

  render() {
    document.body.innerHTML = `<div id="clock">${
      String(Tempo.tempoEmMinutos(Tempo.tempo)).padStart(2, "0")
    }:${
      String(Tempo.tempoEmSegundos(Tempo.tempo)).padStart(2, "0")
    }</div>`;
  },
};

Tempo.iniciar();
