// promise = object that encapsulates the result of an asynchronous operation. It let asynchronous methods return values as if they were synchronous methods.
//           "A promise to return something in the future."
//           2 arguments; resolve and reject. if the synchronous process (callback) is successful invoke resolve callback else invoke reject
//           Promises have a STATE, 'pending' then: 'fulfilled' or 'rejected'
//           the result is what can be returned
//           2 parts 'producung' code & 'consuming' code

// producung code
const promise = new Promise((resolve, reject) => {
  let fileLoaded = true;
  if(fileLoaded){
    resolve("File loaded");
  } else {
    reject("File NOT loaded");
  }
});

// consuming code