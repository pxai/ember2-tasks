import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save: function() {
            const task = this.store.createRecord('task', {
                title: this.get('title'),
                description: this.get('description'),
                difficulty: this.get('difficulty'),
                type: 'todo'
            });

            this.clear(task);
            this.transitionToRoute('tasks');
        }
    },
    clear(task) {
        this.set('title','');
        this.set('description','');
        this.set('difficulty','');
        this.set('type','');
        task.save();
    }
});