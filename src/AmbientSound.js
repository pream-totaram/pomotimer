import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const playSound = require('play-sound');

export class AmbientSound {
  constructor(filepath) {
    this.filepath = filepath;
    this.player = playSound();
    this.process = null;
  }

  play() {
    this.process = this.player.play(this.filepath, (err) => {
      if (err && !err.killed) {
        // ignore errors (e.g., no audio player available)
      }
    });
  }

  stop() {
    if (this.process) {
      this.process.kill();
      this.process = null;
    }
  }

  getFilePath() {
    return this.filepath;
  }
}
