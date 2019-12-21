interface IDefault {
  size: "small" | "medium" | "large";
  textPosition: "left" | "right" | "default";
}

class WebSwitch {
  private _elem: Element;
  private _hasChangeEvent: boolean;
  private _switchElement: Element;

  private default: IDefault = {
    size: "medium",
    textPosition: "default"
  };

  constructor(elem, options: IDefault) {
    const opts = Object.assign({}, this.default, options);
    console.log(opts);
    this._elem = elem;
    this._hasChangeEvent = false;
    this.addSwitchElement(opts);
  }

  private addSwitchElement(options: IDefault) {
    const elem = document.createElement("span");
    elem.classList.add("web-switch");
    elem.classList.add(options.size);
    this._switchElement = elem;

    let wrapper: HTMLLabelElement = null;
    if (this._elem.parentElement.nodeName == "LABEL") {
      wrapper = this._elem.parentElement as HTMLLabelElement;
      this._elem.remove();
      const childSpan = document.createElement("span");
      childSpan.innerHTML = wrapper.innerHTML;
      wrapper.innerHTML = "";
      wrapper.appendChild(childSpan);
    } else {
      wrapper = document.createElement("label");
      this._elem.insertAdjacentElement("beforebegin", wrapper);
    }

    wrapper.classList.add("web-switch-wrapper");
    if (options.textPosition !== "default") {
      wrapper.classList.add(`text-position-${options.textPosition}`);
    }

    wrapper.insertAdjacentElement("afterbegin", this._elem);
    this._elem.insertAdjacentElement("afterend", this._switchElement);
  }
}

if (window["WebSwitch"] == undefined) window["WebSwitch"] = WebSwitch;
