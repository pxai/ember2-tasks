import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        delete: function() {
            const task = this.store.peekRecord('task', this.get('model').get('id'));
            task.destroyRecord(); 

            this.transitionToRoute('tasks');
        },
        cancel: function () {
            this.transitionToRoute('tasks');
        }
    }
});