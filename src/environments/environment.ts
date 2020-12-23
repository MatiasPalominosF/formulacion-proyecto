// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// WARNING - Values under "firebase" and value of "googleApiKey" needs to be replaced from your own accounts
// If left as is, it firbase and google map related functionality will not work on LIVE instance.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB-LeL2-iMC0uVRN1znuH3BvVuFESrZ6hI",
    authDomain: "proyectopasteleria-8a8e3.firebaseapp.com",
    databaseURL: "https://proyectopasteleria-8a8e3.firebaseio.com",
    projectId: "proyectopasteleria-8a8e3",
    storageBucket: "proyectopasteleria-8a8e3.appspot.com",
    messagingSenderId: "136402622882",
    appId: "1:136402622882:web:534ef6a95fab8dc108fafb",
    measurementId: "G-V8H2D0GJZ2"
  },
  googleApiKey: 'AIzaSyAIIYOxA7qeetFz6TuR1Qewc0Rrjhzx7ZU',
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
