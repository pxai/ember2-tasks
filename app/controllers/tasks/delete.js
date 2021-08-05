import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delete: function() {
            this.get('model').deleteRecord();
            this.transitionToRoute('tasks');
            this.get('model').save();
        },
        cancel: function () {
            this.transitionToRoute('tasks');
        }
    }
});