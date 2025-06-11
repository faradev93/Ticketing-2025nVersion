import toast from "react-hot-toast";

export const signOutUser = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_email");
  for (let k in kk) {
    console.log(object);
  }
  navigate("/login");
  toast.success("Successfully logged out.");
};
