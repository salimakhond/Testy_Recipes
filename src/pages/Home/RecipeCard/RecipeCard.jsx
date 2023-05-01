import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const RecipeCard = ({ recipe }) => {
    const { chefName, img } = recipe;

    console.log(recipe)
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Img className='mb-5 mt-4' variant="top" src={img} />
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default RecipeCard;