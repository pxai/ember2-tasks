import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        console.log("This is edit ", params);
        return this.get('store').findRecord('task', params.id);
    }
});
