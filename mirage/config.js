export default function() {
  this.namespace = '/api';

  this.get('/tasks', function(schema) {
    return schema.tasks.all();
  });

  this.get('/tasks/:id', (schema, request) => {
    return schema.tasks.find(request.params.id);
  });

  this.post('/tasks', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).task;

    return schema.tasks.create(attrs);
  });

  this.patch('/tasks/:id', (schema, request) => {
    const id = request.params.id;
    const attrs = JSON.parse(request.requestBody).data.attributes;

    return  schema.tasks.find(id).update(attrs);
  });

  this.del('/tasks/:id', (schema, request) => {
    let task = schema.tasks.find(request.params.id);

    task.destroy();
  });

}