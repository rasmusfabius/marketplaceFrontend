import React, { Component } from 'react';
import NavComponent from '../../NavComponent';
import {Container, Row, Col} from 'reactstrap'
import DisplayProducts from './DisplayProducts';

class BackOffice extends Component {
    state = {
        isAdding: false,
        isEdditing:false
    }
    render() {
        return (
            <>
                <NavComponent/>
                <Container>
                    <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                            
                        </Col>                        
                        <Col md="2"></Col>                        
                    </Row>
                    <Row>
                        <Col>
                            <DisplayProducts/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default BackOffice;