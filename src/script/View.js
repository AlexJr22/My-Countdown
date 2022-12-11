const View = {
 
  render({ minutes, secunds }) {
    document.body.innerHTML = `
      <div id="clock">${minutes}:${secunds}</div>
    `;
  },
  
}

export { View };