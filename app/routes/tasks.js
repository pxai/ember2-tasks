import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            id: 1,
            title: 'Communicate',
            category: 'todo',
            difficulty: 2,
            description: 'Task todo'
        }, {
            id: 2,
            title: 'Work hard',
            category: 'doing',
            difficulty: 5,
            description: 'Task todo'
        }, {
            id: 3,
            title: 'Start',
            category: 'done',
            difficulty: 10,
            description: 'Task done already'
         }];
    }
});
