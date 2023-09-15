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
    .reduce((acc, [key, ...value]) => {
      acc[key] = value.join("=");
      return acc;
    }, {});
  const envAsJson = JSON.stringify(envAsObj, null, 2);
  outputJson.textContent = envAsJson;
});
