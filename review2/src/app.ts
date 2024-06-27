interface Address {
  street: string;
  city: string;
  // ... other fields
}

interface User {
  id: number;
  name: string;
  address: Address;
  // ... other fields
}

async function fetchAllUsers(): Promise<User[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

function createUserDropdown(users: User[]) {
  const dropdown = document.getElementById("userDropdown") as HTMLSelectElement;
  users.forEach((user) => {
    const option = document.createElement("option");
    option.value = user.id.toString();
    option.textContent = user.name;
    dropdown.appendChild(option);
  });
}

function displayUserDetails(user: User) {
  const userDetails = document.getElementById("userDetails") as HTMLDivElement;
  userDetails.innerHTML = `<p>Name: ${user.name}</p><p>Address: ${user.address.street}, ${user.address.city}</p>`;
  // ... other details
}

async function onUserSelect() {
  const dropdown = document.getElementById("userDropdown") as HTMLSelectElement;
  const selectedUserId = parseInt(dropdown.value, 10);
  const users = await fetchAllUsers();
  const selectedUser = users.find((user) => user.id === selectedUserId);
  if (selectedUser) {
    displayUserDetails(selectedUser);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const users = await fetchAllUsers();
  createUserDropdown(users);

  const dropdown = document.getElementById("userDropdown") as HTMLSelectElement;
  dropdown.addEventListener("change", onUserSelect);
});
