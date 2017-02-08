import React, { PropTypes } from 'react';
import Article from '../domain/Article';

function ArticleListItem({ article }) {
  return (
    <p>{`${article.quantity}x ${article.label} (${article.price}$)`}</p>
  );
}

ArticleListItem.propTypes = {
  article: PropTypes.instanceOf(Article).isRequired
};

export default ArticleListItem;
