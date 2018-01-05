import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
			{ username:'carlogilmar1', profile:'teacher1', campus:'GDL1'},
			{ username:'carlogilmar2', profile:'teacher2', campus:'GDL2'},
			{ username:'carlogilmar3', profile:'teacher3', campus:'GDL3'},
			{ username:'carlogilmar4', profile:'teacher4', campus:'GDL4'}
      ];
  },

  actions: {
    notifyChecked: function(user) {
			console.log(user.username);
    },

		getList:function(){
			console.log("Agaarro la lista aqui");
			var list = this.get('usersForLoad');
			console.log(list);
		}
  }
});
