import React, { Component } from "react";
import NavComponent from "../../NavComponent";
import { Container, Row, Col, Button } from "reactstrap";
import DisplayProducts from "./DisplayProducts";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

class BackOffice extends Component {
  state = {
    isAdding: false,
    isEditing: false,
    productToEdit: undefined
  };

  changeStateIsAdding = () => {
    this.setState({
      isAdding: !this.state.isAdding
    });
  };

  changeStateIsEditing = () => {
    this.setState({
      isAdding: !this.state.isEditing
    });
  };

  setProductToEdit = product => {
    this.setState({
      productToEdit: product
    });
  };

  render() {
    const { isEditing, isAdding, productToEdit } = this.state;
    return (
      <>
        <NavComponent />
        <Container>
          <Row>
            <Col md="2"></Col>
            <Col md="8">
              {!isAdding && !isEditing && (
                <Button
                  outline
                  color="primary"
                  onClick={this.changeStateIsAdding}
                >
                  Add{" "}
                </Button>
              )}
              {isAdding && !isEditing && <AddProduct cancel={this.changeStateIsAdding}/>}
              {productToEdit && <EditProduct product={productToEdit} cancel={this.changeStateIsEditing}/>}
            </Col>
            <Col md="2"></Col>
          </Row>
          <Row>
            <Col>
              <DisplayProducts setProductToEdit={this.setProductToEdit} setEditState={this.changeStateIsEditing}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

}
export default BackOffice;
