# @dworac/logger

This is a powerful logging library for your TypeScript Node.js applications. It provides several methods to easily log informational, success, and error messages with corresponding colors for better readability in your console.

## Installation

To install this library, you can simply use npm or yarn:

```bash
npm install @dworac/logger
```
or
```bash
yarn add @dworac/logger
```

## Usage

Below is an example of how you can use the logger in your TypeScript files:

```ts
import Logger from '@dworac/logger';

// Log an informational message
Logger.logInfo('Hello World!');

// Log a success message
Logger.logSuccess('Operation successful!');

// Log an error message
Logger.logError('An error occurred!');
```

Each method logs the time the message was logged and highlights the prefix corresponding to the log type.

## Development

This library is built with TypeScript. You can use the following commands to build and run the project:

- `yarn build`: Build the project for production.
- `yarn build:dev`: Build the project for development.
- `yarn start`: Start the built project.
- `yarn start:dev`: Start the project in development mode with nodemon.
- `yarn lint`: Lint the project.
- `yarn lint:fix`: Lint and fix the project.

## Test

Jest is used as the testing framework for this library. Use the following command to run the tests:

```bash
yarn test
```

## Contributing
If you have any suggestions or improvements, please feel free to create a pull request or submit an issue.

## License
This project is licensed under the MIT license. Please see the LICENSE file for more information.


