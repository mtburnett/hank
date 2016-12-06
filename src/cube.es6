class Square {
  constructor(width = 1, height = 1) {
    this.width = width;
    this.height = height;
  }
  setName(newName) {
    this.name = newName;
  }
  getName() {
    return this.name;
  }
  getArea() {
    return this.height * this.width;
  }
  setWidth(newWidth) {
    this.width = newWidth;
  }
  setHeight(newHeight) {
    this.height = newHeight;
  }
}

export default class Cube extends Square {
  constructor(width = 1, height = 1, depth = 1) {
    super();
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
  setDepth(depth) {
    this.depth = depth;
  }
  getVolume() {
    return this.width * this.height * this.depth;
  }
}
