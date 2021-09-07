import React from 'react';
import '../CSS/Category.css';

const Category = () => {
    return (
        <section>
            <div className="category">
                <ul>
                    <li><a href="">Sports</a></li>
                    <li><a href="">International</a></li>
                    <li><a href="">Business</a></li>
                    <li><a href="">National</a></li>
                    <li><a href="">Lifestyle</a></li>
                    <li><a href="">Covid-19</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Category;