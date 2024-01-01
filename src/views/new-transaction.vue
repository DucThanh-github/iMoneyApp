<template>
  <form @submit.prevent="onSubmit">
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="text-xs font-semibold text-dark">Total</span>
                <input
                  class="text-4xl text-dark outline-none w-full mt-1"
                  type="text"
                  name=""
                  id="total"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-xl text-dark outline-none w-full"
                  type="text"
                  name=""
                  id="category"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10">
                  <i class="t2ico t2ico-document text-2xl" />
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-dark outline-none w-full"
                  type="text"
                  name=""
                  id="note"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl" />
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <!--                <div class="text-dark w-full">{{ new Date() }}</div>-->
                <VueDatePicker
                  v-model="time"
                  :enable-time-picker="false"
                  disabled-times
                  auto-apply
                >
                  <template #dp-input="{ value }">
                    <input
                      id="time"
                      readonly
                      type="text"
                      :value="value"
                      class="border-none focus:outline-none"
                    />
                  </template>
                </VueDatePicker>
              </div>
            </label>
          </div>

          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl" />
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="isMoreDetail">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <button
              class="w-full text-primary font-semibold"
              @click="isMoreDetail = false"
            >
              More detail
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!isMoreDetail" class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="location" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-location text-2xl" />
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <input
                  class="text-dark outline-none w-full mt-1"
                  type="text"
                  name=""
                  id="location"
                  placeholder="Select a location"
                  v-model="location"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="withPerson" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-users text-2xl" />
                </span>
              </div>
              <div class="flex-1 py-2">
                <input
                  class="text-dark outline-none w-full mt-1"
                  type="text"
                  name=""
                  id="location"
                  placeholder="With person"
                  v-model="person"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!isMoreDetail" class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label
              for="uploadPhotos"
              class="flex items-center text-primary font-semibold"
            >
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end">
                  <i class="t2ico t2ico-camera text-2xl" />
                </span>
              </div>
              <div class="flex-1">
                <span>Upload Photos</span>
                <input
                  id="uploadPhotos"
                  class="w-0 h-0 overflow-hidden absolute"
                  type="file"
                  @change="onChangeFile"
                />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div v-if="errorFile" class="text-red py-3">{{ errorFile }}</div>
    </div>
  </form>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, watch } from "vue";
import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
import { useStore } from "@/stores";

export default {
  components: { VueDatePicker },
  setup() {
    const { getUser } = useUser();
    const isMoreDetail = ref(true);
    const { error, addRecord } = useCollection("transactions");
    const { upLoadFile, url } = useStorage("transactions");
    const store = useStore();

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const location = ref("");
    const person = ref("");
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(event) {
      errorFile.value = null;
      const selected = event.target.files[0];
      const typeFile = ["image/png", "image/jpg"];

      if (selected && typeFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please select a file type png or jpg";
        console.log(errorFile.value);
      }
    }
    async function onSubmit() {
      if (file.value) await upLoadFile(file.value);
      console.log("url dowload", url.value);
      const { user } = getUser();
      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        location: location.value,
        person: person.value,
        userid: user.value.uid,
        thumbnail: url.value,
      };
      await addRecord(transaction);

      console.log("error", error);
      console.log("created");
    }
    watch(
      () => store.stateRightButton,
      () => {
        console.log("onsubmit");
        onSubmit();
      }
    );
    return {
      onSubmit,
      onChangeFile,
      VueDatePicker,
      errorFile,
      isMoreDetail,
      total,
      category,
      note,
      time,
      location,
      person,
    };
  },
};
</script>
