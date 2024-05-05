import { page } from "$app/stores";
import { navColor } from "$stores";
import { Link } from "$lib";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Skills", href: "/skills" },
  { name: "Uses", href: "/uses" },
  { name: "Blog", href: "/blog" },
];

let navEl: HTMLElement | null = null;

function isScrolling(distance = 300) {
  const pastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const scrollDistance = Math.abs(currentScrollY - pastScrollY);

    if (window.innerWidth >= 1000) {
      if (currentScrollY > pastScrollY && scrollDistance >= distance) {
        navEl?.classList.add("is-hidden");
      } else if (currentScrollY < pastScrollY && scrollDistance >= distance) {
        navEl?.classList.remove("is-hidden");
      }
    }
  });
  return "up";
}
