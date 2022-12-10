import { Timer } from "./timer.js";

const Clock = Timer.clock;

Clock.innerHTML = `${Timer.minutes}:${Timer.secunds}`;
