import React from 'react';
import SingleAdThumbnail from '../SingleAdThumbnail';
import './AdThumbnails.scss';
import { Row } from 'react-bootstrap';


export default class AdThumbnails extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div className="thumbnails">
            <Row>
            {data.map(item => {
                return (
                    <SingleAdThumbnail title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        key={item.title}
                    />
                )
            })}
            </Row>
            </div>
        )
    }
}