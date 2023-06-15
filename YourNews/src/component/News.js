import React from "react";
import { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../component/Spinner";
import PropTypes from 'prop-types'
const News= (props)=>{
    const[articles, setArticles]=useState([])
    const[loading, setLoading]=useState(true)
    const[page, setPage]=useState(1)
    const[totalResults, setTotalResults]=useState(0)

    
    const updateNews= async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b6eeb42f5a2d46279b38bc3c29c844a8&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
       
        let data= await fetch(url);
        let parsedData=await data.json();
        // this.setState({
        //     loading:false
        // })
        console.log(parsedData);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

      useEffect(()=>{
       updateNews();
      },[])
    

     const handleNextClick=async()=>{
        console.log("next clicked")
        setArticles(parsedData.articles)
        setPage(page+1);
        updateNews();
    }
      const handlePrevClick=async()=>{
        setArticles(parsedData.articles)
        setPage(page-1);
        updateNews();
      }

     const fetchMoreData= async()=>{
        // this.setState({page:this.state.page+1})
        setPage(page+1) 
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b6eeb42f5a2d46279b38bc3c29c844a8&page=${page}&pagesize=${props.pageSize}`;
       setLoading(true)
        
        let data= await fetch(url);
        let parsedData=await data.json();
        setLoading(false)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      }
       return (
        <>
            <h1 style={{textAlign:"center", color:"white"}}>{`NewsBreeze-Top ${props.category} Headlines!`}</h1>
                {loading && <Spinner/>} 
                <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>}
                >
                <div className="container">
                <div className="row">
                {articles.map((element,index)=>{
                    return (<div key={index} className="col-md-4">
                            <NewsItem title={element.title==undefined? "Failed to load title":element.title.slice(0,44)} description={element.description? element.description.slice(0,88):" "} imageurl={element.urlToImage==null?"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png":element.urlToImage} newsurl={element.url} />
                    </div>
                    )
                })}
                </div>
                </div>
                </InfiniteScroll>
                {/* <div className="conatainer d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr; previous</button>
                    <button disabled={(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize))} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div> */}
            </>
       
       ) 
   
}
News.defaultProps={
    country: 'in',
    pageSize: 8,
    category:'general',

}
News.propTypes={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}  
    

export default News;