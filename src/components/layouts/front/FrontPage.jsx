import React, { Component } from 'react';
import NavComponent from '../../NavComponent';
import {Route} from 'react-router-dom'
import ReviewPage from './ReviewPage'
import {Container} from 'reactstrap'
import ProductList from './ProductList';

class FrontPage extends Component {
    render() {
        return (
            <div>
                <NavComponent/>
                <Container>
                    <ProductList/>
                </Container>
            </div>
        );
    }
}

export default FrontPage;