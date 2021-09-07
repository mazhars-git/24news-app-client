import React from 'react';
import sliderImg_1 from '../../images/slider/aa.jpg';
import sliderImg_2 from '../../images/slider/b.jpg';
import sliderImg_3 from '../../images/slider/cc.jpg';
import '../CSS/Slider.css';

const Slider = () => {
    return (
        <div className="container">
            <div className="row">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={sliderImg_1} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block slider-content">
                                <h3>Crypto Billionaire Changpeng Zhao.</h3>
                                <p>Crypto Billionaire Changpeng Zhao To Cease Some Binance Services In Singapore Amid Regulatory Scrutiny</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={sliderImg_2} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block slider-content">
                                <h3>Schools and colleges are ...</h3>
                                <p>The decision came during an inter-ministerial meeting at the Secretariat in Dhaka this afternoon.</p>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <img src={sliderImg_3} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block slider-content">
                                <h3>Billionaire .... Philippine Airlines</h3>
                                <p>Philippine Airlines—controlled by billionaire Lucio Tan—made its much-anticipated bankruptcy filing in the U.S.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;