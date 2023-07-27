'use client';

import React, { useState } from 'react';
import Cards from './cards';
import Details from './details';

const Home = ({ serverData }) => {

    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])

    console.log("serverData", serverData)

    const getData = (d, isActive = false) => {
        setData(d)
        setOpen(isActive)
    }



    return (
        <>
            {
                open ? <Details data={data} /> : <Cards getPropData={getData} />
            }
        </>
    );
};

// export async function getServerSideProps() {
//     // Fetch data from an external API or any data source
//     const response = await fetch(`'https://mocki.io/v1/cec7731b-141c-4d04-90e1-f376a0328b5c'`)
//     const data = await response.json();

//     // Return the data as props
//     return {
//         props: {
//             serverData: data,
//         },
//     };
// }

export default Home;






