console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  const response = await fetch(url, {
    headers: { "x-api-key": "reqres-free-v1" },
  });
  const contentType = response.headers.get("content-type");
  console.log(contentType);
  /*   if (!response.ok) {
    return { error: `HTTP Error: ${response.status}` };
  } */
  return await response.json();
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    try {
      const result = await fetchUserData(endpoint.url);

      if (result.error) {
        if (endpoint.name === "Invalid API link") {
          errorElement.textContent = "Ungültiger API-Link!";
          userElement.innerHTML = "Keine Daten verfügbar.";
        } else {
          errorElement.textContent = result.error;
          userElement.innerHTML = "No user data available.";
        }
      } else {
        const user = result.data;
        userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
        errorElement.textContent = "";
      }
    } catch (error) {
      errorElement.textContent = "Ein unerwarteter Fehler ist aufgetreten";
      userElement.textContent = 404;
    }
  });
});
