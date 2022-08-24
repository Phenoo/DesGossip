import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../utils/context'
import Moment from 'moment'

const Latest = () => {
  const {latestNews } = useGlobalContext();
  return (
    <aside>
      <h2 className="tophead">
          latest news
      </h2>
      <div className="latest-container">
      {
        latestNews.map((item, index) => {
          const {title, urlToImage, publishedAt} = item;
            const formatDate = Moment(publishedAt).format("MMM Do YY");


          return (
            <Link to={`/latestposts/${index}`} className="latest-post" key={index}>
              <div className="text">
                <h6>
                  {formatDate}
                </h6>
                <h4> 
                  {title}
                </h4>
              </div>
              <div className="image">
                <img src={urlToImage} alt={title} />
              </div>
            </Link>
          )
        })
      }
    </div>
    </aside>
  )
}

export default Latest