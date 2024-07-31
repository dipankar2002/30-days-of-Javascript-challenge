/*
  Activity 5: Graceful Error Handling in Fetch :-
      Task 8: Use the 'fetch' API to request data from an invalid URL and handle the error using '.catch()'. Log an appropriate error message to the console.
      Task 9: Use the 'fetch' API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
*/

// task 1
const validUrl = 'https://api.restful-api.dev/objects';
const invalidUrl = 'https://invalid-url.example';

fetch(validUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  const fetchApi1 = (validUrl) => {
    return new Promise((resolve,reject) => {
      resolve(()=> {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
    })
  }

// Task 2
const fetchApi2 = async (validUrl) => {
  const data = await fetch(validUrl);
  const parseData = data.json();
  try {
    if(!data.ok) {
      throw new Error('Network response was not ok');
    }
    return parseData;
  } catch(err) {
    console.log(err.message);
  }
}

fetchApi(validUrl);

