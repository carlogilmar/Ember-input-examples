import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
						{campusCode:"01", campusDescription:"CDMX1"},
						{campusCode:"02", campusDescription:"CDMX2"},
						{campusCode:"03", campusDescription:"CDMX3"},
						{campusCode:"04", campusDescription:"CDMX4"}
					];
  },
  actions: {
    selectTagType(value) {
      console.log(value);
			var select = this.get('select');
			console.log(select);
    }
  }
});
