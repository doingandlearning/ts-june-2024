import { fetchData } from "./api";
import { Category, ApiResponse } from "./types";

const appElement = document.getElementById("app");

const createUI = () => {
  if (!appElement) return;

  const select = document.createElement("select");
  Object.values(Category).forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });

  const input = document.createElement("input");
  input.type = "text";
  input.value = "1";

  const button = document.createElement("button");
  button.textContent = "Fetch Data";

  const resultDiv = document.createElement("div");

  button.addEventListener("click", async () => {
    try {
      const data = await fetchData(select.value as Category, input.value);
      resultDiv.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      resultDiv.textContent = "Failed to fetch data";
    }
  });

  appElement.appendChild(select);
  appElement.appendChild(input);
  appElement.appendChild(button);
  appElement.appendChild(resultDiv);
};

createUI();
