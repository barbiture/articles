import React, { Component } from 'react';
// impoer d3 from 'd3'

class ArticleChart extends Component {

  render(){
    return <div id="d3" ref = {this.setContainerRef} /> ;
  }

  componentDidUpdate(oldProps) {

  }

  setContainerRef = ref => {
    console.log('REF', ref)
    if(ref) {
      this.containerRef = ref;
    }
  }

  componentWillUnmount() {
    // remove all d3 junk
  }
}

export default ArticleChart;
