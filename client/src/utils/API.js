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
    return await axios
      .get('http://localhost:4000/api/items')
      .then((res) => res.data)
  } catch (e) {
    console.error(e)
  }
}

export const addMenuItem = async function (item) {
  try {
    const data = JSON.stringify({ item: item })
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }

    return await axios
      .post('http://localhost:4000/api/items', data, config)
      .then((res) => console.log(res))
  } catch (e) {
    console.error(e)
  }
}

export const deleteMenuItem = async function (id) {
  try {
    return await axios
      .delete(`http://localhost:4000/api/items/${id}`)
      .then((res) => console.log(res))
  } catch (e) {
    console.error(e)
  }
}
