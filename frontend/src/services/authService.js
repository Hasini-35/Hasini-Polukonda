// src/services/authService.js
export const loginUser = (email, password) => {
  // Simulate login
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);
  if (user) return true;
  return false;
};

export const registerUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.find(u => u.email === email)) return false;
  users.push({ email, password });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

export const logoutUser = () => {
  // For simulation, we just clear a flag
  localStorage.removeItem("currentUser");
};
