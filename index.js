export default class DebugConsoleLogs {
  constructor({
    nameSpace = 'debug-console-logs',
    browserKey = '__debug__',
    enable = false
  } = {}) {
    this._nameSpace = nameSpace
    this._isDebug = enable || DebugConsoleLogs.isDebug(nameSpace, browserKey)
  }

  static isDebug(nameSpace, browserKey) {
    if (typeof window === 'undefined') {
      if (process.env.DEBUG === '*') return true
      return (
        (process.env.DEBUG &&
          process.env.DEBUG.split(',').includes(nameSpace)) ||
        false
      )
    }

    return (
      (window.localStorage &&
        window.localStorage.getItem(browserKey) === '1') ||
      false
    )
  }

  _printLogs(mode, args) {
    if (this._isDebug) console[mode](`[${this._nameSpace}]: `, ...args)
  }

  log(...args) {
    this._printLogs('log', args)
  }

  error(...args) {
    this._printLogs('error', args)
  }
}
