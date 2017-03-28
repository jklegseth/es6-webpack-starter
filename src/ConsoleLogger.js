/** Class logger */
class Logger {
  /**
   * Constructor
   * @param  {string} message
  */
  constructor(message) {
    this.message = message;
  }

  /**
   * Logs to console
  */
  logToConsole() {
    console.log(this.message);
  }
}

export default Logger;
