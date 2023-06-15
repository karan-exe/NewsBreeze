import React from "react";
const NewsItem =(props)=> {
        let{title,description,imageurl,newsurl} =props;
        return(
            <div>
                <div className="card my-3" style={{width:"18rem"}}>
                    <img src={!imageurl?"https://static.toiimg.com/thumb/msid-100753427,width-1070,height-580,imgsize-79262,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg":imageurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsurl} target= "_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}  
export default NewsItem