import React from 'react'

const Showcase = () => {
  return (

<section className="showcase">

    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes</p>
            <a className="btn-yellow" href="contact.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transparent" href="services.html">Learn More<i
                    className="fa-regular fa-arrow-up-right"></i></a>

        </div>
        <img src="images/showcase/man-in-suit.png" alt="showcase image of a man in a suit with a tablet" />
    </div>

    <img className="showcase-lines" src="images/showcase/showcase-squiggle.svg"
        alt="two  wavy lines of grey color intersecting in a pattern" />

</section>

  )
}

export default Showcase