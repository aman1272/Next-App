'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Stack, Button } from '@mui/material';
// import Link from 'next/link'
import { getData } from './api/mockApi';


const Cards = ({ getPropData }) => {
    const [data, setData] = useState([])

    useEffect(async () => {
        getData()
            .then((response) => response)
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const handleClick = (product) => {
        getPropData(product, true)
    }
    
    return (
        <>
            <Stack
                direction={{ xs: 'column', sm: 'row', md: 'row' }}
                justifyContent={{ xs: 'flex-start', sm: 'center', md: 'center' }}
                // spacing={{ xs: 1, sm: 2, md: 2 }}
                alignItems="center"
                sx={{ flexWrap: 'wrap', gap: 2 }}
            >
                {data.map((product) => (
                    <Card key={product.id} className='cursor_pointer'>
                        <CardContent className="text-center" style={{ height: "300px", width: "320px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <img
                                    src={product.url}
                                    alt="image not available"
                                    style={{ height: "200px", width: "200px" }}
                                />
                            </div>
                            <div>
                                <Typography variant="h6" gutterBottom component="div">
                                    {product.title.shortTitle}
                                </Typography>
                            </div>
                            <div>
                                {/* <Link
                                    href={{
                                        pathname: '/Details',
                                        query: { data: product }
                                    }}
                                > */}
                                <Button variant="contained" value={product} className='btn' onClick={() => handleClick(product)} >View Detail</Button>
                                {/* </Link> */}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </>
    );
};

export default Cards;






