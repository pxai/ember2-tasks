import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function() {

            var d = this.get('model');
            console.log("Saving stuff: ", d);
            d.set("date",new Date());
            d.save();
            this.set('isEditing', false);
        },
        edit: function() {
            this.set('isEditing', true);
        }
    }
});