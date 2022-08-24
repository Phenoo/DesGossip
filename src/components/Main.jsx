import React from 'react'
import Opinons from './Opinons'
import Latest from './Latest'
import Subscribe from './Subscribe'
import SearchForm from './SearchForm'
import Categories from './Categories'



const Main = () => {

  return (
    <>
    <section>
      <div className="flex">
        <SearchForm />
        <Categories  />
      </div>
      <div className="home">
        <Opinons />
        <Latest />
      </div>
    </section>
    <Subscribe />
    </>
  )
}

export default Main