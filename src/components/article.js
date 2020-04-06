import React, { PureComponent } from 'react';

import ArticleComments from './article-comments';

class Article extends PureComponent {
  state = {
  	hasError: false
  }
  componentDidCatch(err) {
  	console.log('---', err)
  	this.setState({
  		hasError: true
  	})
  }
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    return(
      <div>
        <div>
          <h3>{article.title}</h3>
          <button id = {article.id} onClick = {toggleOpen}>{isOpen ? 'closed' : 'open'}</button>
        </div>
          {isOpen && <section>
            <p>{article.text}</p>
            {this.comments}
          </section>}
      </div>
    );
  }
  get comments() {
    const { article, toggleOpen } = this.props;
    return this.state.hasError ? <p> Some Error in this article </p> : 
        <ArticleComments
          comments = {article.comments}
          toggleOpen = {toggleOpen}
        />
  }
}

export default Article;
