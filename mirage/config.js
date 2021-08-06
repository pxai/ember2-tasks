export default function() {

let tasks = [{
  type: 'tasks',
  id: 1,
  attributes: {
    title: 'Communicate',
    category: 'todo',
    difficulty: 2,
    description: 'Task todo'
  }
}, {
  type: 'tasks',
  id: 2,
  attributes: {
    title: 'Work hard',
    category: 'doing',
    difficulty: 5,
    description: 'Task todo'
  }
}, {
  type: 'tasks',
  id: 3,
  attributes: {
    title: 'Start',
    category: 'done',
    difficulty: 10,
    description: 'Task done already'
   }
}];

  this.namespace = '/api';

  this.get('/tasks', function(schema) {
    return schema.tasks.all();
  });

  this.get('/tasks/:id', (schema, request) => {
    return schema.tasks.find(request.params.id);
  });

  this.post('/tasks', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).task;
    console.log("Creating a new task: ", attrs)
    return schema.tasks.create(attrs);
  });

  this.patch('/tasks/:id', (schema, request) => {
    const id = request.params.id;
    const attrs = JSON.parse(request.requestBody).data.attributes;
    console.log("Updating a new task: ", attrs)
    return  schema.tasks.find(id).update(attrs);
  });

  this.del('/tasks/:id', (schema, request) => {
    let task = schema.tasks.find(request.params.id);
    console.log("About to delete mirage!! ",task, request.params.id);
    task.destroy();
  });

}