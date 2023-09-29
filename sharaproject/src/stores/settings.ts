import { defineStore } from "pinia";

export const settings = defineStore("settings", {
  state: () => ({
    locale: document.cookie.split('=')[2] || 'EN',
  }),
  actions: {
  },
});
