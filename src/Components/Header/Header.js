import React from 'react';
import '../CSS/Header.css';

const Header = () => {
    return (
        <section className="container mt-2">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                            <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news">
                                <span class="d-flex align-items-center">&nbsp;Live News</span>
                            </div>
                            <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> 
                                <a href="#"> PECE exams likely in November</a> 
                                <span class="dot"></span> 
                                <a href="#"> Remove Bangladesh from red-listed Covid-19 countries: Momen to UK foreign secretary </a> 
                                <span class="dot"></span> 
                                <a href="#">Who are the Taliban and how did they take control of Afghanistan so swiftly? </a> 
                                <span class="dot"></span> 
                                <a href="#">Who are the Taliban and how did they take control of Afghanistan so swiftly? </a> 
                            </marquee>
                        </div>
                    </div>
                </div>


        </section>
    );
};

export default Header;