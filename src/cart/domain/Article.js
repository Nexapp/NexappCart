import { Record } from 'immutable';

// Can be converted to a class if we need to add domain-specific methods.
const Article = new Record({
  label: undefined,
  price: undefined,
  quantity: undefined,
});

export default Article;
