import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delete: function() {
            const task = this.store.peekRecord('task', this.get('model').get('id'));
            console.log("About to delete: ", task, task.get('id'));
            task.destroyRecord(); 

            this.transitionToRoute('tasks');
        },
        cancel: function () {
            this.transitionToRoute('tasks');
        }
    }
});