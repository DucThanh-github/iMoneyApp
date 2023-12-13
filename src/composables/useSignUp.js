import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const error = ref(null);
const isPending = ref(false);
async function signup(email, password, fullName) {
  isPending.value = true;
  error.value = false;
  try {
    const respone = await createUserWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    updateProfile(respone.user, { displayName: fullName });
    if (!respone) throw new Error("Create User failed");
    return respone;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignUp() {
  return {
    signup,
    error,
    isPending,
  };
}
