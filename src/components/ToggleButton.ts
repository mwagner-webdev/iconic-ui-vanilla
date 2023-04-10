import IconicComponent from "../IconicComponent";

export default class ToggleButton extends IconicComponent {
  checkbox: HTMLInputElement | null;

  constructor() {
    super();

    const id = this.attributeByName("id")?.value;
    if (!id) {
      console.warn("No ID specified!");
    }
    let label: Element | null = null;
    if (id) {
      label = this.findLabel(id);

      if (label) {
        label.remove();
      }
    }

    this.css`
      .switch {
        box-sizing: border-box;

        grid-column: 1/2;
        display: grid;
        grid-template-columns: repeat(2, -webkit-min-content);
        grid-template-columns: repeat(2, min-content);
        justify-self: center;
      }
      .switch input {
        display: none;
      }
      .switch-track {
        width: 6rem;
      }
      .switch span {
        display: flex;
        align-items: center;
        width: 100%;
        height: 3rem;
        box-shadow: 0.3rem 0.3rem 0.6rem var(--grey-light-2),
          -0.2rem -0.2rem 0.5rem var(--white);
        background: rgba(255, 255, 255, 0);
        position: relative;
        cursor: pointer;
        border-radius: 1.6rem;
      }
      .switch-track span::after {
        content: "";
        position: absolute;
        left: 0.4rem;
        width: 2.1rem;
        height: 2.1rem;
        border-radius: 50%;
        background: var(--grey-dark);
        transition: all 0.4s ease;
      }
      .switch-track span::before {
        content: "";
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(
          330deg,
          var(--primary-dark) 0%,
          var(--primary) 50%,
          var(--primary-light) 100%
        );
        opacity: 0;
        transition: all 0.4s ease;
      }
      .switch input:checked ~ span::before {
        opacity: 1;
      }
      .switch input:checked ~ span::after {
        left: 57%;
        background: var(--grey-light-1);
      }
      label {
        display: block;
        margin-top: 1em;
      }
    `;

    this.html`
      <div class="switch">
        <div class="switch-track">
          <input id="${id}" type="checkbox">
          <span></span>
          ${label ? `<label for="${id}">${label.innerHTML}</label>` : ``}
        </div>
      </div>
    `;

    this.checkbox = this.shadow.querySelector("input");
    this.shadow.querySelector("span")?.addEventListener("click", () => {
      if (this.checkbox) {
        this.checkbox.checked = !this.checkbox.checked;
      }
    });
  }

  findLabel(id: string) {
    return this.parentElement?.querySelector(`label[for='${id}']`) ?? null;
  }

  private attributeByName(name: string) {
    return Array.from(this.attributes).find((attr) => attr.name === name);
  }
}

export function createToggleButton() {
  return new ToggleButton();
}

customElements.define("iconic-toggle-button", ToggleButton);
