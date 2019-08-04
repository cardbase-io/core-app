// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyAuykaODPgLjOR3ccvGWXSyzMqpXSJqkB4",
  authDomain: "cardbaseio.firebaseapp.com",
  databaseURL: "https://cardbaseio.firebaseio.com",
  projectId: "cardbaseio",
  storageBucket: "",
  messagingSenderId: "447150572756",
  appId: "1:447150572756:web:07464b54135aefe0"
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
