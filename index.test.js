import { describe, it } from 'node:test'
import assert from 'assert'
import DebugConsoleLogs from './index.js'

describe('debugConsoleLogs', () => {
  describe('constructor', () => {
    it('should initialize with default values', () => {
      const logger = new DebugConsoleLogs()
      assert.strictEqual(logger._nameSpace, 'debug-console-logs')
      assert.strictEqual(logger._isDebug, false)
    })

    it('should initialize with custom values', () => {
      const logger = new DebugConsoleLogs({ nameSpace: 'custom-namespace' })
      assert.strictEqual(logger._nameSpace, 'custom-namespace')
      assert.strictEqual(logger._isDebug, false)
    })
  })

  describe('isDebug', () => {
    it('should return true if process.env.DEBUG is "*"', () => {
      process.env.DEBUG = '*'
      const logger = new DebugConsoleLogs()
      assert.strictEqual(logger._isDebug, true)
    })

    it('should return true if process.env.DEBUG includes the namespace', () => {
      process.env.DEBUG = 'namespace1,namespace2'
      const logger = new DebugConsoleLogs({ nameSpace: 'namespace1' })
      assert.strictEqual(logger._isDebug, true)
    })

    it('should return false if process.env.DEBUG does not include the namespace', () => {
      process.env.DEBUG = 'namespace1,namespace2'
      const logger = new DebugConsoleLogs({ nameSpace: 'foo' })
      assert.strictEqual(logger._isDebug, false)
    })

    it('should return true if localStorage has the browser key set to "1"', () => {
      global.window = { localStorage: { getItem: () => '1' } }
      const logger = new DebugConsoleLogs()
      assert.strictEqual(logger._isDebug, true)
    })

    it('should return false if localStorage does not have the browser key set to "1"', () => {
      global.window = { localStorage: { getItem: () => undefined } }
      const logger = new DebugConsoleLogs()
      assert.strictEqual(logger._isDebug, false)
    })

    it('should return true if explicitly enabled', () => {
      global.window = { localStorage: { getItem: () => undefined } }
      const logger = new DebugConsoleLogs({ enable: true })
      assert.strictEqual(logger._isDebug, true)
    })
  })
})
