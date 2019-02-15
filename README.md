# Angular to Android APK

Test Project to convert Angular Webapp into Android APK with Cordova.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.
Other Specs:<br>
Node: 10.15.0<br>
OS: darwin x64<br>
Angular: 7.2.4<br>

## Setup Project

`npm i` to install node_modules

`cordova add platfrom android` to add android to cordova platform

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the /src source files.

## Build APK

Run `ng build --prod --aot` to build the project.

Run `cordova build android` to build cordova project

Make sure your virutal device is turned on and run `cordova emulate android`

Now your android APK should start in your android virtual device

## Build signed APK for release

For building your APK to run on your real device (or launch in play store) read my full tutorial on medium.com (here)

