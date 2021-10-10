# KrushnaPathalogy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Publishing to Github Pages

1. You just need a github repository to host on github and make sure that you pushed the latest code.
2. Install github pages tool for angular by using, npm install -g angular-cli-ghpages .
3. Here deploying code in github pages is quite easy, Just need to make sure one thing, when you build your code, use--base-href tag. Build command here will be 
> ng build --prod --base-href https://<username>.github.io/<reponame>/ .
4. Run angular-cli-ghpages -d dist/krushna-pathalogy/ --no-silent to deploy your project. -d tag take the location for build stored, in dist file.
5. This command will create a new branch gh-pages in your repository and automatically push the dist build in that branch.
6. Just navigate to https://<username>.github.io/<reponame>/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
