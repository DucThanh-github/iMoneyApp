import { ref } from "vue";
import { projectStore } from "@/configs/firebase";
import { collection, addDoc } from "firebase/firestore";

const useCollection = (name) => {
  const error = ref(null);
  async function addRecord(record) {
    error.value = null;
    try {
      const respone = await addDoc(collection(projectStore, name), record);
      console.log("respone", respone);
      return respone;
    } catch (err) {
      error.value = err.message;
      console.log("err", error.value);
    }
  }
  return {
    addRecord,
    error,
  };
};
export default useCollection;
