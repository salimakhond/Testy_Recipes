import React from 'react';
import './News.css'
import news1 from '../../../assets/news1.jpg';
import news2 from '../../../assets/news2.jpg';
import news3 from '../../../assets/news3.jpg';
import news4 from '../../../assets/news4.jpg';

const News = () => {
    return (
        <div className='latest-news'>
            <h2 className='text-center fw-bold mb-5'>Lates article & news</h2>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-3 mb-5'>
                    <div className="card">
                        <img src={news1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">How to Peel Hard Boiled Eggs Perfectly, Every Single Time</a></h5>
                            <p className="post-date">May 2, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-5'>
                    <div className="card">
                        <img src={news2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Of Course Ina Garten’s Ice Cream Hack Is Totally Brilliant</a></h5>
                            <p className="post-date">May 2, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card">
                        <img src={news3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Passover Seder for $25? Totally Possible</a></h5>
                            <p className="post-date">May 2, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card">
                        <img src={news4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Salad Freaks Unite—Our Cookbook Is Finally Here</a></h5>
                            <p className="post-date">May 2, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default News;