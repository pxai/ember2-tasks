import Route from '@ember/routing/route';

export default Route.extend({
    templateName: 'tasks',
    model(params) {
        console.log("Do we have params? ", params);
        return this.get('store').findAll('task');
    }
});
