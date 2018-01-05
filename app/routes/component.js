import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      { id: 1, name: 'permission 1' },
      { id: 2, name: 'permission 2' },
      { id: 3, name: 'permission 3' }
      ];
  },


});
