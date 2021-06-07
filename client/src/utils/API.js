// This code is meant to serve as a mock fetch from an API.
// import getDummyData from "../tests/test-data";

// export const getMenu = new Promise(function (resolve) {
//   setTimeout(() => {
//     resolve(getDummyData());
//   }, 1000);
// });
import axios from 'axios'

export const getMenu = async function () {
  try {
      return await axios.get('http://localhost:4000/api/items')
      .then((res) => res.data)
  } catch (e) {
    console.error(e)
  }
}