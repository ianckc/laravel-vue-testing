## No longer receiving security updates

Install Laravel

laravel new project-name

Install Laravel UI

composer require laravel/ui

Generate Vue scaffolding

php artisan ui vue

npm install

npm run dev

Install testing packages

npm install --save-dev @vue/test-utils mocha mochapack jsdom jsdom-global expect moxios

Create the tests directory

tests/Vue

Add a setup file to tests/Vue

require('jsdom-global')()
global.expect = require('expect');

Add the test script to package.json

"test": "mochapack --webpack-config node_modules/laravel-mix/setup/webpack.config.js --require tests/Vue/setup.js tests/Vue/**/*.spec.js"

Create tests and run them

npm test
