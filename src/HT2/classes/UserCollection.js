import Collection from './Collection';
class UserCollection extends Collection {
  constructor() {
    super();
  }
  getAutoSuggestUsers(loginSubstring, limit) {
    const users = Object.entries(this.collection);
    const result = [];
    users.forEach(idAndProps => {
      const [,props] = idAndProps;
      if (props.login.indexOf(loginSubstring) > -1 && !props.isDeleted) {
        result.push(props);
      }
    });
    return this.filterByLogin(result).slice(0, limit > result.length ? result.length: limit);
  }
  filterByLogin(userArr) {
    if (!userArr || !userArr.length) return [];
    
    return userArr.sort((userA, userB) =>  userA.login - userB.login);
  }

}
export default new UserCollection();