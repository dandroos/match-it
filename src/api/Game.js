import uniqid from "uniqid";

class Game {
  constructor(props) {
    this.id = uniqid();
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCollectionId(id) {
    this.collectionId = id;
  }

  getCollectionId() {
    return this.collectionId;
  }

  saveGame() {
    // do something
  }
}
