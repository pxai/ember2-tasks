import Route from '@ember/routing/route';

export default Route.extend({
    templateName: 'tasks',
    model() {
        return this.get('store').findAll('task');
    }
});
