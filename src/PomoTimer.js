export class PomoTimer {
  constructor(durationInSeconds) {
    this.duration = durationInSeconds * 1000;
    this.startTime = null;
    this.endTime = null;
  }

  start() {
    this.startTime = Date.now();
    this.endTime = this.startTime + this.duration;
  }

  getRemainingSeconds() {
    if (!this.startTime) return Math.round(this.duration / 1000);

    const now = Date.now();
    const remainingMs = this.endTime - now;

    return Math.max(0, Math.round(remainingMs / 1000));
  }
}
