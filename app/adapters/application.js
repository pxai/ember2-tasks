import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',

   /* urlForFindAll(modelName, snapshot) {
        return `/api/tasks.json`;
    },
    urlForFindRecord(id, modelName, snapshot) {
        return `/api/tasks/${id}.json`;
    }*/
});
