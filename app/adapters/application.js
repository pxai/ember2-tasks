import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',

    urlForFindAll(modelName, snapshot) {
        return `${this.namespace}/tasks.json`;
    },
    urlForFindRecord(id, modelName, snapshot) {
        return `${this.namespace}/tasks/${id}.json`;
    }
});
