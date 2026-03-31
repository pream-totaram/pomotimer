export class AmbientSound {
  constructor(filepath) { }

  play() {
    throw new Error("This method must be implemented")
  }

  stop() {
    throw new Error("This method must be implemented")
  }

  getFilePath() {
    throw new Error("This method must be implemented")
  }
}
