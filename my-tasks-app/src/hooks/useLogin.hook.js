//Login user in server post request
import { useMutation } from "@tanstack/react-query"; //to send request to server

const loginUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      console.log("User login successful.", response);
    },
    onError: (error) => {
      console.log("Error authenticating", error);
    },
  });
}
