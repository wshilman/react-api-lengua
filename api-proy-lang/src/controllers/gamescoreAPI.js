import urlWebServices from './webServices.js';

export const createUser = async function (user) {
  let url = urlWebServices.createUser;
  try {
      let response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:3000',
          },
          body: JSON.stringify({
              firstName: user.firstName,
              lastName: user.lastName,
              score: user.score
          }),
      });
      if (response.status === 200) {
          let data = await response.json();
          return data;
      }
      else {
          return 201
      }
  }
  catch (e) {
      console.log(e)
      return 404
  }
}

export const findUser = async function (user) {
  let url = urlWebServices.findUser;
  try {
      let response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:3000',
          },
          body: JSON.stringify({
              firstName: user.firstName,
              lastName: user.lastName
          }),
      });
      if (response.status === 200) {
          let data = await response.json();
          return data;
      }
      else {
          return 201
      }
  }
  catch (e) {
      console.log(e)
      return 404
  }
}

export const listUsers = async function () {
  let url = urlWebServices.listUsers;
  try {
      let response = await fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': 'http://localhost:3000',
          },
      });
      if (response.status === 200) {
          let data = await response.json();
          return data;
      }
      else {
          return 201
      }
  }
  catch (e) {
      console.log(e)
      return 404
  }
}