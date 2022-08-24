import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading';
import { useGlobalContext } from '../utils/context'
import ReactPaginate from 'react-paginate';
import Moment from 'moment'



const PER_PAGE = 10;


const Opinons = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const {newsdata, loading} = useGlobalContext();

  if(loading){
      return <Loading/> 
  }
  if (newsdata.length < 10) {
    return (
      <Loading />
    )
  }
  const handleClick = ({selected: selectedPage}) => {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = newsdata.slice(offset, offset + PER_PAGE).map((item, index) => {
      const {title, author,publishedAt, description, image} = item;
      const formatDate = Moment(publishedAt).format("MMM Do YY");
      console.log(newsdata)

      return (
        <Link to={`/posts/${index}`} key={index} className="post" >
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="text">
              <h5>{formatDate}</h5>
              <h4>{title}</h4>
              <p>{description}</p>
              <h6>By {author} </h6>
            </div>
        </Link>
      )
    });

  const pageCount = Math.ceil(newsdata.length / PER_PAGE);




  return (
    <>
    <div className="flex column">
      <div className="post-container">
        {currentPageData}
      </div>
      <ReactPaginate 
          previousLabel={"previous"} 
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={handleClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
    </div>
    </>
  )
}

export default Opinons

