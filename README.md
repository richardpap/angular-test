# AngularTest

## The Task

Create a simple angular application which applies the following:

Contains a list page (pre-built): This should display any kind of list (movies, music, games, etc) via fetching the data form some public api to using the getListData() function, which is in the api.service file under the src/app/services folder.

Contains a details page (pre-build): a secondary page where the user will se detailed informations about the item which was selected on the previous list page. Please use the getDetailsData() function in the api.service file, which can be found the src/app/services folder for this purpose.

Apply some kind of design as well - based on your preferences. Feel free to use bootstrap or any other frameworks / libraries.

The implementation is completely up to you. You can use any 3rd party or any ES5/ES6 features.

Unit test are pre-created for the application, your development must pass the test and follow their guidance in terms of implementation. A git hook will run the tests on a pre-commit event ensuring the correct implementation. Please do not bypass them.

Once you've done, open a pull-request with the following branch pattern: test/surname-lastname

Happy coding!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
