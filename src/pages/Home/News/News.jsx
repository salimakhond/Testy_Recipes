import React from 'react';
import './News.css'
import news1 from '../../../assets/news1.jpg';
import news2 from '../../../assets/news2.jpg';
import news3 from '../../../assets/news3.jpg';
import news4 from '../../../assets/news4.jpg';

const News = () => {
    return (
        <div className='latest-news pb-lg-5 pb-5 mb-lg-5'>
            <div className='row'>
                <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 mb-5'>
                    <div className='text-center'>
                        <h2 className='fw-bold mb-3'>Lates article & news</h2>
                        <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea voluptates porro exercitationem! Eius natus cumque, odio cupiditate dolor autem sint labore, officiis aliquam similique, est alias officia! Illo, asperiores.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-4 mb-lg-0'>
                    <div className="card">
                        <img src={news1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">How to Peel Hard Boiled Eggs Perfectly, Every Single Time</a></h5>
                            <p className="post-date">May 2, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-4 mb-lg-0'>
                    <div className="card">
                        <img src={news2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"><a href="#">Of Course Ina Garten’s Ice Cream Hack Is Totally Brilliant</a></h5>
                            <p className="post-date">May 2, 2023</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-3 mb-4 mb-md-0 mb-lg-0'>
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