import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return {
			'AllCountries':[{"code":"US",name:'US',isSelected:false}, {code:'USA',"name":"USA",isSelected:true}],
		}
	}
});
