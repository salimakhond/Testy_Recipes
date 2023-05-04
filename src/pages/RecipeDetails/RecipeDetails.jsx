import React, { useState } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast, { Toaster } from 'react-hot-toast';


const RecipeDetails = () => {

    const recipeDetails = useLoaderData();
    const { id, chefName, img, experience, number, bio, like, recipe } = recipeDetails;

    const [disable, setDisable] = useState(false);

    const handleFavoriteBtn = () => {
        toast.success('This Recipe Is Your Favorite!', { autoClose: 500 })
        setDisable(true)
    }

    return (
        <Card className='my-5'>
            <Card.Body>
                <Card.Img className='mb-3' style={{ height: '450px' }} variant="top" src={img} />
                <Card.Title style={{ color: '#919699', fontSize: '28px', fontWeight: '700' }}>Chef Name : <span style={{ color: '#49a0ad' }}> {chefName}</span></Card.Title>
                <p style={{ color: '#919699' }}>Description : {bio} </p>
                <p style={{ color: '#919699', fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Numbers of Like : {like}</p>
                <p style={{ color: '#919699', fontSize: '22px', fontWeight: '600', marginBottom: '10px' }}>Numbers of recipes : {number} Recipes</p>
                <p style={{ color: '#919699', fontSize: '22px', fontWeight: '600', marginBottom: '30px' }}>Experience : {experience}</p>
                {
                    recipe.map(r => <Table responsive key={r.id} striped bordered hover>
                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th colSpan={5}>{r.name}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Ingredients</th>
                                {
                                    r.ingredients.map(ingredient => <td key={ingredient}>{ingredient}</td>)
                                }
                            </tr>
                            <tr>
                                <th>Cooking Method</th>
                                {
                                    r.steps.map(step => <td key={step}>{step}</td>)
                                }
                            </tr>
                            <tr>
                                <th>Rating</th>
                                <td className='d-flex align-items-center' colSpan={5}>{r.rating} 
                                <Rating className='ms-2' style={{ maxWidth: 150 }} value={r.rating || 0} readOnly />
                                </td>
                            </tr>
                        </tbody>
                    </Table>)
                }
                <Button onClick={handleFavoriteBtn} disabled={disable} variant="success">Favorite</Button>
                <Toaster />
            </Card.Body>
        </Card>
    );
};

export default RecipeDetails;