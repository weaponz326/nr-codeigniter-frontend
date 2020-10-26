// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:8000/",                // url for application backend
  personalUrl: "http://localhost:8001/",            // url for personal backend
  hospitalUrl: "http://localhost:8002/",            // url for hospital backend
  restaurantUrl: "http://localhost:8003/",          // url for restaurant backend
  schoolUrl: "http://localhost:8004/",              // url for school backend
  enterpriseUrl: "http://localhost:8005/",          // url for enterprise backend
  hotelUrl: "http://localhost:8006/",               // url for hotel backend
  shopUrl: "http://localhost:8007/",                // url for shop backend
  productionUrl: "http://localhost:8008/"           // url for production backend
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
