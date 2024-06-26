export default class DebugConsoleLogs {
  /**
   * Constructs a new DebugConsoleLogs instance.
   *
   * @param options The options for the constructor.
   * @param options.nameSpace The namespace used for the debug console logs, defaulting to 'debug-console-logs'.
   * @param options.browserKey The key used to check in the browser's localStorage for debug enabling, defaulting to '__debug__'.
   * @param options.enable A boolean to explicitly enable debug mode, defaulting to false.
   */
  constructor(options?: {
    nameSpace?: string
    browserKey?: string
    enable?: boolean
  })

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
