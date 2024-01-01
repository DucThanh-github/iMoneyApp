import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ref as ref1 } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "./useUser";

const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref1(null);
  const filePath = ref1(null);
  const url = ref1(null);
  async function upLoadFile(file) {
    error.value = null;
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    console.log("filePath: ", filePath.value);
    const fileRef = ref(projectStorage, filePath.value);

    try {
      const respone = await uploadBytes(fileRef, file);

      url.value = await getDownloadURL(fileRef, filePath.value);
      console.log("respone", respone);
      return url.value;
    } catch (err) {
      error.value = err.message;
      console.log("err", error.value);
    }
  }
  return {
    upLoadFile,
    filePath,
    error,
    url,
  };
};
export default useStorage;
