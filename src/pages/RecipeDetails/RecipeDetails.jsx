import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {

    const recipeDetails = useLoaderData();
    console.log(recipeDetails)
    const { id, chefName, img, experience, number,bio, like, recipe } = recipeDetails;

    return (
        <Card className='my-5'>
            <Card.Body>
                <Card.Img className='mb-3' style={{ height: '600px' }} variant="top" src={img} />
                <Card.Title style={{ color: '#919699', fontSize: '28px', fontWeight: '700' }}>Chef Name : <span style={{ color: '#49a0ad' }}> {chefName}</span></Card.Title>
                <p style={{color: '#919699'}}>Description : {bio} </p>
                <p style={{color: '#919699', fontSize:'22px', fontWeight: '600', marginBottom: '10px' }}>Numbers of Like : {like}</p>
                <p style={{ color: '#919699', fontSize:'22px', fontWeight: '600', marginBottom: '10px'  }}>Numbers of recipes : {number} Recipes</p>
                <p style={{ color: '#919699', fontSize:'22px', fontWeight: '600', marginBottom: '30px' }}>Experience : {experience}</p>
                
            </Card.Body>
        </Card>
    );
};

export default RecipeDetails;