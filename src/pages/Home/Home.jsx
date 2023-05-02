import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard/RecipeCard';
import News from './News/News';

const Home = () => {

    const recipes = useLoaderData();

    return (
        <>
            <Banner></Banner>
            <div className='row mb-5'>
                {
                    recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
                }
            </div>
            <News></News>
        </>
    );
};

export default Home;