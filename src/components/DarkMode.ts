export default class DarkMode extends HTMLElement {
  static get observedAttributes() {
    return ["enabled"];
  }

  constructor() {
    super();
  }

  get enabled() {
    return (this.getAttribute("enabled") ?? "false") !== "false";
  }

  set enabled(value: boolean) {
    this.setAttribute("enabled", value.toString());
  }

  attributeChangedCallback(name: string, _: any, newValue: string) {
    if (name === "enabled" && newValue !== "false") {
      this.style.setProperty("--primary-light", "#af8f30");
      this.style.setProperty("--primary", "#d56e15");
      this.style.setProperty("--primary-dark", "#5a3d05");
      this.style.setProperty("--white", "#e7b877");
      this.style.setProperty("--black", "#000000");
      this.style.setProperty("--grey-light-0", "#cd7b1d62");
      this.style.setProperty("--grey-light-1", "#1c1d20");
      this.style.setProperty("--grey-light-2", "#383126");
      this.style.setProperty("--grey-light-3", "#c1d0de");
      this.style.setProperty("--grey-dark", "#625548");
      this.style.setProperty("--accordion-bg", "#1d1e1f");
      this.style.setProperty("--bg-light", "#ffffffc6");
      this.style.setProperty("--foreground-default", "#fefefe");

      this.style.setProperty("background-color", "var(--accordion-bg)");
    } else {
      this.style.setProperty("--primary-light", "#88c9ff");
      this.style.setProperty("--primary", "#549bfc");
      this.style.setProperty("--primary-dark", "#0c71e9");
      this.style.setProperty("--white", "#ffffff");
      this.style.setProperty("--black", "#000000");
      this.style.setProperty("--grey-light-0", "#eff3fa");
      this.style.setProperty("--grey-light-1", "#e4ebf5");
      this.style.setProperty("--grey-light-2", "#c8d0e7");
      this.style.setProperty("--grey-light-3", "#bec8e4");
      this.style.setProperty("--grey-dark", "#9baacf");
      this.style.setProperty("--accordion-bg", "#e4ebf5");
      this.style.setProperty("--bg-light", "#ffffff33");
      this.style.setProperty("--foreground-default", "var(--black)");

      this.style.setProperty("background-color", "transparent");
    }
  }
}

export function createDarkMode() {
  return new DarkMode();
}

customElements.define("iconic-dark-mode", DarkMode);
