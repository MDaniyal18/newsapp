import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1

        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5376157b980140baa3ebfa06374bd5da&page=1&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData.articles,
         totalResults: parsedData.totalResults})
    }
    

    handlePrevtClick = async ()=>{     
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5376157b980140baa3ebfa06374bd5da&page=${this.state.page - 1} &pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      // this.setState({})
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })

    }
    handleNextClick = async ()=>{
      if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))
      {

      }
      else
      {
          let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=5376157b980140baa3ebfa06374bd5da&page=${this.state.page + 1} &pageSize=${this.props.pageSize}`;
          let data = await fetch(url);
          let parsedData = await data.json();
          
          this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
          })
      }
      

    }


  render() {
    return (
      <div className='container my-4'>
        <h1 className="text-center">Top Headlines</h1>
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title= {element.title?element.title:""} description= {element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
            
            <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevtClick}> &larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            
        </div>
        
      </div>
    )
  }
}

export default News