import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
// import { signOut } from "firebase/auth";
const error = ref(null);
async function logout() {
  error.value = false;
  try {
    // const respone = await signOut(projectAuth);
    const respone = await projectAuth.signOut();
    return respone;
  } catch (err) {
    error.value = err.message;
  }
}
export function useLogout() {
  return { logout, error };
}
