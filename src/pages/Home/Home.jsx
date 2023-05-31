import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard/RecipeCard';
import News from './News/News';
import About from './About/About';

const Home = () => {

    const recipes = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <div className='row mt-5 pt-5 pb-5 mb-5'>
                <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                    <div className='text-center'>
                        <h2 className='fw-bold mb-3'>Our Special Chef</h2>
                        <p className='mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ea voluptates porro exercitationem! Eius natus cumque, odio cupiditate dolor autem sint labore, officiis aliquam similique, est alias officia! Illo asperiores.</p>
                    </div>
                </div>
                {
                    recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
                }
            </div>
            <About></About>
            <News></News>
        </>
    );
};

export default Home;