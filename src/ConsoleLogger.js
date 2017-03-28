class Logger {
  constructor(message) {
    this.message = message;
  }

  logToConsole() {
    console.log(this.message);
  }
}

export default Logger;