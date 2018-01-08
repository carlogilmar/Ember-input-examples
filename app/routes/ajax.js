import Route from '@ember/routing/route';

export default Route.extend({
	actions:{

	go:function(){
		console.log("go");
		this.transitionTo("checkbox");
	},

	ajax:function(){
      var request = new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.ajax({
          type: 'GET',
          url: 'http://emailerv2.modulusuno.com/show',
          success: function (data) {
            resolve(data);
          },
          error: function (request, textStatus, error) {
            reject(error);
          }
        });
      });

      //TODO: Make a redirect
      request.then(function(response) {
        console.log("Se hizo bien");
				alert("good");
      }, function(error) {
        console.log("No Se hizo bien");
        console.log(error);
				alert("bad");
      });

			this.transitionTo("application");
	}

	}
});
