# The Dependency Injection Course - Practical Challenge

## Description

This is a simple project written in ~~vanilla JS~~ TypeScript for learning how to work with dependencies using an IoC container.

## Task Description

For passing the practical part, you need to update the project using IoC Container. IoC Container is already created, so don’t worry just use it.

The project contains three services: Logger, HTTP, and Users. 
- `Logger` doesn’t have any dependencies.
- `HTTP` service has *Logger* and *config* as dependencies.
- `Users` class depends on *HTTP* and *config*.


To complete the task, you have to perform the following steps:
- fork this repo;
- check [ioc-lite](https://www.npmjs.com/package/ioc-lite) library documentation;
- rewrite project to automate manage dependencies with IoC Container;
- create a PR in your own repo and send the link to the course professor;

Hints: 
- there is already created ioc file;
- you need to specify the static property `$inject` in classes to define dependencies;
- again, read the [documentation](https://www.npmjs.com/package/ioc-lite);
- change the code only in the `src` folder;
- in case any questions please reach out to Nazar Bulych;


## Running project
- `$ yarn install`
- `$ yarn start`
- Navigate to [localhost:8080](http://localhost:8080/) (you can change the port in `config.json`)