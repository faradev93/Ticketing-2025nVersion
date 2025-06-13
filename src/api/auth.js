import toast from "react-hot-toast";

export const signOutUser = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_email");

  navigate("/login");
  toast.success("Successfully logged out.");
};
