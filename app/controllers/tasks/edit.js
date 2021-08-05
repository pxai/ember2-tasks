import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function() {

            var d = this.get('model');
            console.log("Saving stuff: ", d);
            d.set("date",new Date());
            console.log("about to save ", d);
            d.save();
            console.log("Savied? ", d);
            this.set('isEditing', false);
        },
        edit: function() {
            this.set('isEditing', true);
        }
    }
});