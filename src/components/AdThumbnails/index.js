import React from 'react';
import SingleAdThumbnail from '../SingleAdThumbnail';
import './AdThumbnails.scss';
import { Row } from 'react-bootstrap';

const data = [
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
    {
        title: 'Yamaha Guitar',
        description: 'Yamaha acoustic six string guitar',
        price: "10, 000",   

    },
]

export default class AdThumbnails extends React.Component {
    render() {

        return (
            <Row>
            {data.map(item => {
                return (
                    <SingleAdThumbnail title={item.title}
                                        description={item.description}
                                        price={item.price}
                    />
                )
            })}
            </Row>
        )
    }
}