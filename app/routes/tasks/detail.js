import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log("Edit> Do we have params? ", params);
        return this.get('store').findRecord('task', params.id);
    }
});
