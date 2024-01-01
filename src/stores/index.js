import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    stateRightButton: 0,
  }),
  actions: {
    onClickRightBtn() {
      console.log("onClickRightBtn", this.stateRightButton);
      if (this.stateRightButton === 0) {
        this.stateRightButton = 1;
      } else {
        this.stateRightButton = 0;
      }
    },
  },
});
