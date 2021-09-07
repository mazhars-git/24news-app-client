import React from 'react';
import MainMenu from '../MainMenu/MainMenu';

const PostNews = () => {
    
    return (
        <section className="container">
            <MainMenu />

            <h2 className="text-center py-3">Add Your Product</h2>

            <form class="row g-3 w-50 m-auto pb-4">
                <div class="">
                    <label for="newsTitle" class="form-label">News Title</label>
                    <input type="text" class="form-control mb-3" id="newsTitle" placeholder="Enter title Here"/>

                    <label for="author" class="form-label">Author</label>
                    <input type="text" class="form-control mb-3" id="author" placeholder="Author Name"/>

                    <label for="category" class="form-label">Category</label>
                    <input type="text" class="form-control mb-3" id="category" placeholder="News Category"/>
                
                    <label for="description" class="form-label">News description</label>
                    <textarea rows="4" maxLength="250" type="text" class="form-control mb-3" id="description" placeholder="News Description" rows="3" />
                    
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Upload image</label>
                        <input class="form-control mb-3" type="file" id="formFileMultiple" multiple />
                    </div>
    
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary">Add Product</button>
                    <button type="submit" class="btn btn-primary">Back to Home</button>
                </div>
            </form>
        </section>
    );
};

export default PostNews;