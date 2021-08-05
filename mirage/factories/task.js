import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    title(i) {
        return `Title ${i}`;
      },
      description(i) {
        return `Description ${i}`;
      },   
      difficulty: 1,
      category: 'todo',
});
