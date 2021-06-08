// This code is meant to serve as a mock fetch from an API.
import getDummyData from "../tests/test-data";

export const getMenu = new Promise(function (resolve) {
  setTimeout(() => {
    resolve(getDummyData());
  }, 1000);
});
