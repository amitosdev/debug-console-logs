export default class DebugConsoleLogs {
  /**
   * Constructs a new DebugConsoleLogs instance.
   *
   * @param nameSpace The namespace used for the debug console logs, defaulting to 'debug-console-logs'.
   * @param browserKey The key used to check in the browser's localStorage for debug enabling, defaulting to '__debug__'.
   */
  constructor(nameSpace?: string, browserKey?: string)

  /**
   * Determines whether debugging is enabled based on environment settings or browser localStorage.
   *
   * @param nameSpace The namespace to check against environment settings or browser's localStorage.
   * @param browserKey The key to check in the browser's localStorage for enabling debug.
   * @returns A boolean indicating if debug mode is enabled.
   */
  static isDebug(nameSpace: string, browserKey: string): boolean

  /**
   * Logs a message to the console in debug mode.
   *
   * @param args The message or objects to log.
   */
  log(...args: any[]): void

  /**
   * Logs an error to the console in debug mode.
   *
   * @param args The error message or objects to log.
   */
  error(...args: any[]): void

  private _printLogs(mode: 'log' | 'error', args: any[]): void
}
