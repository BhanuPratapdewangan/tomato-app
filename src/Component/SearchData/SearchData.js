import React, { useEffect, useState } from 'react'
import FoodData from '../FootData/FoodData.js';
import Form from 'react-bootstrap/Form';
import Cards from '../Cards/Cards.js';
import Skeletonn from '../SkeletonEffect/Skeleton.js';
const SearchData = () => {

    const [fdata, setFData] = useState(FoodData);

    const [copyData, setCopyData] = useState([]);
    const [notFound, setNotFound] = useState('Data not found');
    // console.log(copyData);

    const changeData = (e) => {
        // console.log(e);
        let getChangeData = e.toLowerCase();    
        if(getChangeData == '')
        {
            setCopyData(fdata);
        } else
        {
            let storeData = copyData.filter((element, key) => {
               return element.rname.toLowerCase().match(getChangeData);
            })

            setCopyData(storeData);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setCopyData(FoodData);
        },3500)
    },[])

    return (
        <>
            <div className='container mt-4 d-flex flex-wrap justify-content-between'>
                <h3 className='logo'>TOMATO</h3>
                <h3 className='side-text'>Searching Filter app</h3>
            </div>

            <Form className='mt-4 d-flex justify-content-center'>
                <Form.Group className=" mx-2 col-lg-3">
                    <Form.Control type="text" onChange={(e)=> changeData(e.target.value)} placeholder='Searching restaurant' />
                </Form.Group>
            </Form>

            <section className='container mt-5'>
                <h4>Restaurant in Hyderabad Open Now</h4>
            </section>

            <div className='container mt-5'>
                {(copyData && copyData.length) ? <Cards data={copyData} /> : <Skeletonn skeletonData={fdata}/> }
            </div>
        </>
    )
}

export default SearchData;