import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  author:DS.attr(),
  topic:DS.attr(),
  question:DS.attr(),
  timeStamp:DS.attr()

});
