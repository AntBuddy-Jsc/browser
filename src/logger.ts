class Logger {
  debugModeEnabled: boolean;

  constructor(debugModeEnabled?: boolean) {
    this.debugModeEnabled = !!debugModeEnabled;
  }

  debug(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.debug('[@antbuddy/browser]', ...args);
  }

  log(...args: any) {
    if (!this.debugModeEnabled) {
      return;
    }

    console.log('[@antbuddy/browser]', ...args);
  }

  info(...args: any) {
    console.info('[@antbuddy/browser]', ...args);
  }

  warn(...args: any) {
    console.warn('[@antbuddy/browser]', ...args);
  }

  error(...args: any) {
    console.error('[@antbuddy/browser]', ...args);
  }
}

export default Logger;
