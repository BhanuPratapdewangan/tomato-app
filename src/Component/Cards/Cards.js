// rafce
import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({ data }) => {
    return (
        <div className='card-style container'>
            {
                data.map((element, key) => {
                    return (
                        <div key={element.id}>
                            <div id='card'>
                                <Card.Img id='card-img-top' variant="top" src={element.imgdata} />
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='dise-name'>
                                            <div className='text-dark rname' >{element.rname}</div>
                                            <div>{element.address}</div>
                                        </div>
                                        <div className='dise-name'>
                                            <div className='rating text-light ms-4'>{element.rating} ★</div>
                                            <div> <span>{element.price}</span></div>
                                            <div className='text-dark'>27 min</div>
                                        </div>
                                    </div>
                                    <p className='border mt-1'></p>
                                    <div className='dise-name d-flex justify-content-between'>
                                        <div>{}</div>
                                        <div>{element.somedata}</div>
                                        <div>{}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;