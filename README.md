# Angular RX Todo

A Todo application to provide a starting point for Angular applications that use Material design and @ngrx

This application is based on this starter application:

https://github.com/ngrx/example-app

This starter application has been merged in at the beginning of development.
Once merged, I place a folder in src called 'goatstone'. This folder is where I
will place the majority, if not all, of my source files.

### Install

```bash
# clone the repo
git clone https://github.com/JoseHerminioCollas/anglar-rx-todo


# change directory to repo
cd anglar-rx-todo

# Use npm or yarn to install the dependencies:
npm install

# OR
yarn

# set the baseUrl in tsconfig.json to enable absolute paths in files
For example on my Linux set up I have this
"baseUrl": "/home/goat/projects/angular-rx-todo/src/",
So I can refer to my libraries like so:

goatstone/todo/todo.component.ts

My distinct files will reside, mostly in the goatstone folder

# start the server
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser
