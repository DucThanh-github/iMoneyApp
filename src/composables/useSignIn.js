import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const error = ref(null);
const isPending = ref(false);
async function signin(email, password) {
  try {
    error.value = null;
    isPending.value = true;
    const respone = await signInWithEmailAndPassword(
      projectAuth,
      email,
      password
    );
    console.log(respone);
    return respone;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useSignIn() {
  return { signin, error, isPending };
}
