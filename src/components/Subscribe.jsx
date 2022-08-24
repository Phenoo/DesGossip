import React from 'react'
import SubscribeImg from './subscribe.jpeg'
const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="image">
        <img src={SubscribeImg} alt="sub" />
      </div>
      <div className="text">
        <div className="outline">
          <h5>
            newsletter
          </h5>
          <h5>thursdays</h5>
        </div>
        <h4>
          by the way
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quos neque quaerat laboriosam, expedita deleniti. Vitae accusamus doloribus et a consequatur, unde cupiditate? Temporibus qui officiis unde ad, ipsum in!
        </p>
        <button>
          Sign up
        </button>
      </div>
    </section>
  )
}

export default Subscribe