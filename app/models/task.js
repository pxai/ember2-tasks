import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    category: DS.attr(),
    difficulty: DS.attr(),
    description: DS.attr()
});