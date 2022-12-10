
const Timer = {
  clock: document.getElementById('clock'),

  minutes: 60,
  secunds: 20,

  myFunctionTest() {
    console.log(this.secunds)
    console.log(this.minutes)
  },
}

export { Timer };