import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.get('store').findRecord('task', params.id);
    }
});
