import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const RecipeCard = ({ recipe }) => {
    const { id, chefName, img, experience, number, like } = recipe;

    return (

        <div className='col-12 col-md-6 mt-5'>
            <Card>
                <Card.Body>
                    <Card.Img className='mb-3' style={{height: '350px'}} variant="top" src={img} />
                    <Card.Title style={{ color: '#919699', fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>Chef Name : <span style={{ color: '#49a0ad' }}> {chefName}</span></Card.Title>
                    <p style={{ color: '#919699', fontSize:'22px', fontWeight: '600', marginBottom: '8px'}}>Experience : {experience}</p>
                    <p style={{ color: '#919699', fontSize:'22px', fontWeight: '600', marginBottom: '8px'}}>Numbers of recipes : {number} Recipes</p>
                    <p style={{color: '#919699', fontSize:'22px', fontWeight: '600', marginBottom: '8px'}}>Numbers of Like : {like}</p>
                    <Button className='mt-3' variant="primary"><Link className='fw-semibold fs-5 text-decoration-none text-white' to={`/recipe/${id}`}>View Recipes</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;