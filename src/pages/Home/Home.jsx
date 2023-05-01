import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard/RecipeCard';

const Home = () => {

    const recipes = useLoaderData();

    return (
        <>
            <Banner></Banner>
            {
                recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>)
            }
        </>
    );
};

export default Home;