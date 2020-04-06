import { findDOMNode } from 'react-dom';
import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

import ArticleChart from './components/article-chart';
import ArticleList from './components/article-list';
import UserForm from './components/user-form';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: null
    }
  }
 
  componentDidMount() {
    axios.get('http://localhost:3030/articles').then(res => {
      this.setState({articles: res.data})
    })

  }
  render(){
    return(
      <div>
         <UserForm />
         {this.preRender}
         <ArticleChart />
      </div>
    );
  }
  get preRender() {
    const {articles} = this.state;
    if(articles)  {
      return (
        <React.Fragment>
          <Select options = {this.options}/>
          <ul>
	          <ArticleList ref = {this.setArticleListRef}  articles = {articles}/>
	        </ul>
        </React.Fragment>
      )
    } else {
      return <h1>loading...</h1>
    }
  }
  get options() {
    const {articles} = this.state;
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }
  setArticleListRef = ref => {
    console.log('ArticleList ref', ref, findDOMNode(ref));
  }
}

export default App;

