import Component from '@ember/component';
import Ember from 'ember';

const { TextField } = Ember;

export default TextField.extend({
  attributeBindings: ['type'],
  type: 'checkbox'
});

