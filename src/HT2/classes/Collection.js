class Collection {
  constructor() {
    this.collection = {};
  }
  createItem(props) {
    const {id} = props;
    if(!this.collection[id]) {
      this.collection[id] = props;
    } else throw new Error('user exist');
  }
  getItem(id) {
    if(this.collection[id] && !this.collection[id].isDeleted) return this.collection[id];
  }
  deleteItem(id) {
    if(!this.collection[id]) return;
    this.collection[id].isDeleted = true;
    return true;
  }
  updateItem(props) {
    const {id} = props;
    if (this.isItemExist(id)) {
      const params = Object.entries(props);
      params.forEach(paramValue => {
        const [param, value] = paramValue;
        this.collection[id][param] = value;
      });
      return true;
    }
    return false;
  }
  isItemExist(id) {
    return Boolean(this.collection[id]);
  }
}
export default Collection;
