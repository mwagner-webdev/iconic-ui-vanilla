export default class IconicComponent extends HTMLElement {
  protected shadow: ShadowRoot;

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: 'open' });
  }

  protected html(content: TemplateStringsArray, ...values: any[]): void {
    const str = this.formattedTemplateString(content, values);
    this.shadow.innerHTML += str;
  }

  protected css(content: TemplateStringsArray, ...values: any[]) {
    const str = this.formattedTemplateString(content, values);
    const style = document.createElement('style');
    style.textContent = str;
    this.shadow.appendChild(style);
  }

  private formattedTemplateString(content: TemplateStringsArray, values: any[]) {
    return content.reduce((result, string, i) => {
      return result + string + (values[i] || '');
    }, '');
  }
}
