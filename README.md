# Debug Console Logs

`debugConsoleLogs` is a simple JavaScript logging utility designed to facilitate debugging in both Node.js and browser environments. It allows conditional logging based on environment variables or localStorage settings, making it ideal for development and debugging purposes.

## Installation

To install `debugConsoleLogs`, run the following command:

```bash
npm install debug-console-logs
```

## Usage

First, import the `debugConsoleLogs` class into your project:

```javascript
import debugConsoleLogs from 'debug-console-logs';
```

Then, create an instance of the logger:

```javascript
const logger = new debugConsoleLogs();
```

### Basic Logging

To log messages, use the `log` and `error` methods:

```javascript
logger.log('This is a log message');
logger.error('This is an error message');
```

### Enabling Debug Mode

- In Node.js, set the `DEBUG` environment variable to enable logging:

```bash
  DEBUG=* node your-script.js
```

- In the browser, set the localStorage key (default `__debug__`) to `'1'`:

```javascript
localStorage.setItem('__debug__', '1');
 ```

## API

### `debugConsoleLogs(nameSpace = 'debug-console-logs', browserKey = '__debug__')`

- `nameSpace`: A string to identify the logger's namespace (default: 'debug-console-logs').
- `browserKey`: A key used in localStorage to toggle debug mode in the browser (default: '__debug__').

### `log(...args)`

Logs messages to the console if debug mode is enabled.

### `error(...args)`

Logs error messages to the console if debug mode is enabled.

## Testing

This module includes tests written using Node's built-in `test` module and `assert` library. To run the tests, execute:

```bash
node test/debugConsoleLogs.test.js
```
