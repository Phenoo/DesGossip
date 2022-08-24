import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading';
import { useGlobalContext } from '../utils/context'
import Moment from 'moment'
const SinglePost = () => {
  const { index } = useParams();
  const {newsdata} = useGlobalContext();
  const item = newsdata[index];
  const {title, author, description, urlToImage, publishedAt, url, content} = item;
  const formatDate = Moment(publishedAt).format("MMM Do YY");

  if(item.length < 0) {
    return <Loading />
  }

  return (
    <section>
      <div className="link">
        <Link to='/' className='btn'>
          back home
        </Link>
      </div>
      <div key={index} className="singlepost column">
        <h1>{title}</h1>
        <div className="image">
          <img src={urlToImage} alt={title} />
          </div>
          <div className="text">
            <h4>{description}</h4>
            <div className="flex-div">
              <h6>By {author} </h6>
              <h5>
                {formatDate}
              </h5>
            </div>
            <div className="content">
            <p>{content}</p>

            <a href={url}>
              read further here
            </a>
          </div>
          </div>
        </div>
    </section>
  )
}

export default SinglePost