import React from 'react'
import FeaturesBox from './Generics/FeaturesBox'
import img_Handshake from '../assets/img/features/handshake.svg'
import img_Lightbulb from '../assets/img/features/lightbulb.svg'
import img_Graph from '../assets/img/features/graph.svg'
import img_Factory from '../assets/img/features/factory.svg'

const Features = () => {
  return (
    <section className="features">
        <div id="features-container" className="container">

            <div className="box-left">
                <p className="orange-txt">Features</p>
                <h2 className="box-title">Our Accounting is trusted by thousands of companies</h2>
                <a className="btn-yellow" href="services.html">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            
            <div className="box-right grid-container">
                <FeaturesBox CName="gi1 grid-item" img={img_Handshake} title="Business Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox CName="gi2 grid-item" img={img_Lightbulb} title="Startup Business" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox CName="gi3 grid-item" img={img_Graph} title="Financial Advice" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
                <FeaturesBox CName="gi4 grid-item" img={img_Factory} title="Risk Management" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />

            </div>

        </div>

    </section>

  )
}

export default Features