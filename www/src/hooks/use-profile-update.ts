import api from "@/lib/api";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfile = (): any => {
  return useMutation({
    mutationFn: (data) => {
      const response = api.post(`/user/profile/update`, data);

      return response;
    },
    onSuccess: () => {
      // update the user profile.
      console.log("Profile updated");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
