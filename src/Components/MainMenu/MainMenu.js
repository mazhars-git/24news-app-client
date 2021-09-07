import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CSS/MainMenu.css';

const MainMenu = () => {
    return (
        <section className="container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                        <a class="navbar-brand text-danger" style={{fontWeight: '700', fontSize: '40px'}} href="/">24News</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse box" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">International</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Latest News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Lifestyle</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/addNews">Post News</a>
                            </li>
                        </ul>
                        
                        <div class="search-box">
                            <span class="icon"><FontAwesomeIcon icon={faSearch} /></span>
                            <input type="search" id="search" placeholder="Search..." />
                        </div>
                        
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default MainMenu;