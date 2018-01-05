import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set('checkedItemsSet', new Set());
  },
  actions: {
    onCheck(item) {
			console.log("on checking");
			console.log(item);
      var checkedItemsSet = this.get('checkedItemsSet');
      if (checkedItemsSet.has(item)) {
        checkedItemsSet.delete(item);
				console.log(checkedItemsSet);
      } else {
        checkedItemsSet.add(item);
				console.log(checkedItemsSet);
      }
    }
  }
});
