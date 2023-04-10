import IconicComponent from "../IconicComponent";

export default class Button extends IconicComponent {
  constructor() {
    super();

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

        background: var(--primary);
        box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-light),
          inset -0.2rem -0.2rem 1rem var(--primary-dark),
          0.3rem 0.3rem 0.6rem var(--grey-light-2),
          -0.2rem -0.2rem 0.5rem var(--white);
        color: var(--grey-light-1);
        text-transform: uppercase;
      }
      .button-inner:hover {
        color: var(--white);
      }
      .button-inner:active {
        box-shadow: inset 0.2rem 0.2rem 1rem var(--primary-dark),
          inset -0.2rem -0.2rem 1rem var(--primary-light);
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
}

export function createButton() {
  return new Button();
}

customElements.define("iconic-button", Button);
