export default class Section {
    constructor({items, renderer},elementSelector) {
        this._items = items;
        this._renderer = renderer;
        this._element = document.querySelector(elementSelector);
    };

    // create elements for rendering on the page
    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItem(item) {
        this._element.prepend(this._renderer(item));
    }
};