import React from 'react'
import Button from './Generics/Button'

import img_ServiceLines from '../assets/img/services/white-squiggly-lines-services.svg'

const Services = () => {
  return (
    <section className="our-services">

        <div className="design-lines-services">
            <img src={img_ServiceLines} alt="" />
        </div>

        <div className="container">

            <div className="c-top">
                <div className="top-wrapper">
                    <p className="orange-txt">Our Services</p>
                    <h2 className="services-title">We Provide The Best Service For Consulting</h2>
                </div>

                <div className="spacer-rgt"></div>
            </div>

            <div className="c-middle">
                <div className="grid-container">
                    <a className="grid-item" href="services.html">
                        <div className="box-line">_______</div>
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-arw-r"><i className="fa-light fa-arrow-right"></i></div>
                    </a>

                    <a className="grid-item" href="services.html">
                        <div className="box-line">_______</div>
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-arw-r"><i className="fa-light fa-arrow-right"></i></div>
                    </a>

                    <a className="grid-item" href="services.html">
                        <div className="box-line">_______</div>
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-arw-r"><i className="fa-light fa-arrow-right"></i></div>
                    </a>

                    <a className="grid-item" href="services.html">
                        <div className="box-line">_______</div>
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="btn-arw-r"><i className="fa-light fa-arrow-right"></i></div>
                    </a>
                </div>

            </div>

            <div className="c-btm">
                <Button type="transparent-fat" title="Browse Service" url="/Services" />
            </div>

        </div>

    </section>
  )
}

export default Services