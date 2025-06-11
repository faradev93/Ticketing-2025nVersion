export function register(username, fullName, password) {
  return fetch("http://test.joo.nz/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      fullName: fullName,
      password: password,
    }),
  });
  //   .then((data) => data.json());
}

export function SignoutBTN() {
  localStorage.removeItem("token");
  localStorage.removeItem("user_email");
  navigate("/login");
  toast.success("Successfully logged out.");
}
