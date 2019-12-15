import React, { Component } from 'react';
import { Card, CardBody ,Row,CardTitle} from "reactstrap";
import {getAllProducts} from '../../../helpers/Api'
import Product from './Product'
import FrontSpinner from './FrontSpinner'

class ProductList extends Component {
    state = {
        products: [],
        isLoading:true
    }

    componentDidMount = async () => {
        let reponse = await getAllProducts()
        this.setState({
            products:reponse,
            isLoading: false
        })
    }
    render() {
        return (
            <>
                {this.state.isLoading && <FrontSpinner/>}
               {!this.state.isLoading && <Card>
                    <CardTitle><h2 className="text-center">Products</h2></CardTitle>
                    <CardBody>
                        <Row>
                            {this.state.products && this.state.products.map((item,i) => <Product products={item} key={i}/>) }
                        </Row>
                    </CardBody>
                </Card>}
            </>
        );
    }
}

export default ProductList;