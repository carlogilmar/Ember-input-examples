import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  actions:{
    notifyNow:function(){
      console.log("Holi");
      this.toast.info('Hello there!');
    }
  }
});
