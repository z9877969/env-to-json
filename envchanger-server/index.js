const { axios } = window;

const form = document.querySelector("form");
const jsonWrapper = document.querySelector(".output-wrapper");
const outputJson = jsonWrapper.querySelector(".output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = e.currentTarget["input-env"];
  if (!value) return;
  const envAsObj = value
    .trim()
    .split("\n")
    .map((el) => el.split("=").map((el) => el.trim()))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
  const envAsJson = JSON.stringify(envAsObj, null, 2);
  outputJson.textContent = envAsJson;
});

// const BASE_URL = "http://localhost:4040";
// console.dir(axios.post("http://localhost:4040"));
// const p = new Promise((resolve, reject) => {
//     console.dir(window.axios)
// })

// axios.default.baseURL = BASE_URL;

// const postEnvFile = async (file) => {
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       console.log(evt.target.result);
//     };
//     reader.readAsText(file);

//     try {
//         // const json = axios.post('/file', )
//     } catch (error) {

//     }
// }
