import { writable } from "svelte/store";

type OgStore = {
  banner: string;
  description: string;
  name: string;
  url: string;
};

const ogStore = writable<OgStore>({
  banner: "",
  description: "",
  name: "",
  url: "",
});

export default ogStore;
