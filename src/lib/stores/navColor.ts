import { writable } from "svelte/store";

type NavColor =
  | "frontend"
  | "backend"
  | "fullstack"
  | "devops"
  | "design"
  | "methodology"
  | "misc";

const navColor = writable<NavColor>("frontend");

export default navColor;
