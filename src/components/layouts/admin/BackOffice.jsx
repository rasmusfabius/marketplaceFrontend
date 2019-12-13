import React, { Component } from 'react';
import NavComponent from '../../NavComponent';
import {Container, Row, Col} from 'reactstrap'

class BackOffice extends Component {
    state = {
        isAdding: false,
        isEdditing:false
    }
    render() {
        return (
            <>
                <NavComponent/>
                <Component>
                    <Row>

                    </Row>
                </Component>
            </>
        );
    }
}

export default BackOffice;