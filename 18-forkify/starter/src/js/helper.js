import { TIMEOUT_SEC } from "./config";

export const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// const AJAX = async (url, uploadData) => {
//   if (uploadData) {
//     const options = {
//       method: "POST",
//       body: JSON.stringify(uploadData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     return Promise.race([
//       fetch(`${url}`, options),
//       timeout(TIMEOUT_SEC),
//     ]);
//   } return Promise.race([fetch(`${url}`), timeout(TIMEOUT_SEC)]);
// };

export const getJSON = async (url) => {
  try {
    const res = await Promise.race([fetch(`${url}`), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} status: ${res.status}`);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const sendJSON = async (url, uploadData) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(uploadData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await Promise.race([
      fetch(`${url}`, options),
      timeout(TIMEOUT_SEC),
    ]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} status: ${res.status}`);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
