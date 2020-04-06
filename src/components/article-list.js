import React from 'react';
import accordion from '../decorators/accordion';
import Article from './article';

const ArticleList = ({articles, toggleOpenItem, openItemId })  => {
  return articles.map((article) => (
  	<li key={article.id} className="li-test">
  	  <Article
  	    article = {article}
  	    isOpen = {openItemId === article.id}
  	    toggleOpen = {toggleOpenItem}
  	  />
  	</li>
	));
  // toggleOpenArticle = articleId => () => this.setState({ articleId })
  // memoizing toggleOpenArticle = ( {target} ) => this.setState({ articleId: target.id })
}

export default accordion(ArticleList);
