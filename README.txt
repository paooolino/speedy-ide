USAGE
======
npm run open
	Starts webpack-dev-server & open the app in the browser.
	
npm start
	Starts webpack-dev-server without opening browser tabs.
	
npm run build
	Builds the app with webpack.

GLOBAL DEPENDENCIES
====================
npm install -g webpack
npm install -g webpack-dev-server
npm install -g mocha

NPM PACKAGES
=============
PRODUCTION:
react, react-dom
  The ReactJS library.

DEV:
babel-loader, babel-core
  Use babel with webpack

babel-preset-react, babel-preset-es2015
  Presets for translating JSX and es2015 features

babel-register
  Babel for mocha

concurrently
	Used to allow parallel execution of multiple npm scripts at once.
	
opn
	Used to automatically open the browser in node scripts.
	