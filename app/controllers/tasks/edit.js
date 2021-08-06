import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function() {
            this.get('model').save();
            this.transitionToRoute('tasks.detail', this.get('model'));
        },
        edit: function() {
            this.set('isEditing', true);
        }
    }
});