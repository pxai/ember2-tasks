import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function() {
            const title = this.get('title');
            const description= this.get('description');
            const difficulty= this.get('difficulty');
            const type = 'todo';

            console.log(title, description, difficulty, type);
            const task = this.store.createRecord('task', {
                    title,
                    description,
                    difficulty,
                    type
            });

            this.set('title','');
            this.set('description','');
            this.set('difficulty','');
            this.set('type','');
            task.save();
    
            this.transitionToRoute('tasks');
        }
    }
});