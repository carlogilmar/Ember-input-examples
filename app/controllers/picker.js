import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  appName: 'Ember Twiddle',
  //country:'US',
  //allCountries:[{code:'UK'},{code:'US'}]
  selectedCountries: Ember.computed.filterBy('model.AllCountries','isSelected',true),
  init(){
    this._super(...arguments);
   // this.set('AllCountries',[{"code":"US", "name":"USA"}]);
    //this.set('countries',["US", "CA"]);
  }
});
