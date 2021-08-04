import { helper } from '@ember/component/helper';
const categoryTypes = [
  "todo", "doing"
];
export function taskCategoryType([categoryType]) {
  if (categoryTypes.includes(categoryType)) {
    return 'Not done';
  }

  return 'Not done';
}

export default helper(taskCategoryType);

