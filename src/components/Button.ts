import IconicComponent from "../IconicComponent";

export default class Button extends IconicComponent {
  static get observedAttributes() {
    return ["iconic-style"];
  }

  constructor() {
    super();

    this.style.setProperty("--background", "var(--grey-light-1)");
    this.style.setProperty("--background-light", "var(--grey-light-0)");
    this.style.setProperty("--background-dark", "var(--grey-light-2)");
    this.style.setProperty("--foreground", "var(--primary)");
    this.style.setProperty("--foreground-highlight", "var(--white)");


    this.css`
      .button-inner {
        margin: 0;
        width: 15rem;
        height: 4rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s ease;

        background: var(--background);
        box-shadow: inset 0.2rem 0.2rem 1rem var(--background-light),
          inset -0.2rem -0.2rem 1rem var(--background-dark),
          0.3rem 0.3rem 0.6rem var(--grey-light-2),
          -0.2rem -0.2rem 0.5rem var(--white);
        color: var(--foreground);
        text-transform: uppercase;
      }
      .button-inner:hover {
        color: var(--foreground-highlight);
      }
      .button-inner:active {
        box-shadow: inset 0.2rem 0.2rem 1rem var(--background-dark),
          inset -0.2rem -0.2rem 1rem var(--background-light);
      }
      button, button:hover, button:active, button:focus {
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        background: transparent;
      }
    `;

    this.html`
      <button type="button">
        <p class="button-inner">${this.innerHTML}</p>
      </button>
    `;
  }
  attributeChangedCallback(name: string, _: any, newValue: string) {
    console.log(name, _, newValue);
    if (name === "iconic-style") {
      this.style.setProperty("--background", "var(--primary)");
      this.style.setProperty("--background-light", "var(--primary-light)");
      this.style.setProperty("--background-dark", "var(--primary-dark)");
      this.style.setProperty("--foreground", "var(--grey-light-1)");
    }
  }
}

export function createButton() {
  return new Button();
}

customElements.define("iconic-button", Button);
