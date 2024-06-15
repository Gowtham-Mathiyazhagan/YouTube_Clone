import axios from "axios";

export async function callBack(options) {
  try {
    const response = await axios.request(options);
    // console.log(response);
    return response.data.items;
  } catch (error) {
    console.error(error);
  }
}

const obj = {
  name: 'Dave',
  showThis: function() {
      console.log(name);
  }
};
obj.showThis(); // { name: 'Dave', showThis: [Function: showThis] }
