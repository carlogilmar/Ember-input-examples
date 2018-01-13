import Component from '@ember/component';

export default Component.extend({
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
    }
  }
});
