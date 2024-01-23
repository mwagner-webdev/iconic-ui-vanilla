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
        box-shadow: 0.3rem 0.3rem 0.5rem var(--outer-shadow-color), -0.2rem -0.2rem 0.4rem var(--white);
        color: var(--foreground);
        text-transform: uppercase;
      }
      .button-inner:hover {
        color: var(--iconic-invert);
      }
      .button-inner:active {
        box-shadow: 0rem 0rem 0rem var(--outer-shadow-color), -0rem -0rem 0rem var(--white), inset 0.2rem 0.2rem 0.5rem var(--outer-shadow-color), inset -0.2rem -0.2rem 0.5rem var(--white);
      }
      button, button:hover, button:active, button:focus {
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Poppins", sans-serif;
        background: transparent;
      }
      .action {
        background: linear-gradient(
          330deg,
          var(--primary-dark) 0%,
          var(--primary) 50%,
          var(--primary-light) 100%
        );
        color: #fff;
      }
      .action:hover, .action:active {
        color: var(--black);
      }
      .action:active {
        box-shadow: 0rem 0rem 0rem var(--outer-shadow-color), -0rem -0rem 0rem var(--white), inset 0.2rem 0.2rem 0.5rem var(--primary-dark), inset -0.2rem -0.2rem 0.5rem var(--primary);
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
    if (name === "iconic-style" && newValue === "action") {
      this.shadow.querySelector(".button-inner")?.classList.add("action");
      //this.style.setProperty("--background", "var(--primary)");
      //this.style.setProperty("--foreground", "var(--grey-light-1)");
      //this.style.setProperty("--outer-shadow-color", "var(--grey-light-1)");
      /*this.style.setProperty("--background-light", "var(--primary-light)");
      this.style.setProperty("--background-dark", "var(--primary-dark)");
      */
    }
  }
}

export function createButton() {
  return new Button();
}

customElements.define("iconic-button", Button);
