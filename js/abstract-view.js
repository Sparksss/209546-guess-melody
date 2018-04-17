class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get template() {
    throw new Error(`Template is required`);
  }

  render() {
    const parser = document.createElement(`template`);
    parser.innerHTML = this.template;
    return parser.content;
  }

  bind() {
    throw new Error(`Method add handlers is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }
}

export default AbstractView;
