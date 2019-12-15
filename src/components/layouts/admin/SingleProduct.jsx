import React, { Component } from "react";
import {Button} from 'reactstrap'
import {deleteProduct} from '../../../helpers/Api'

class SingleProduct extends Component {

  displayEditForm = () => {
    this.props.setProductToEdit(this.props.product)
    console.log(this.props.product)
    this.props.setEditState()
  }

  deleteProduct = async () => {
    let response = await deleteProduct(this.props.product._id)
  }
  render() {
    let { product } = this.props;
    return (
      <>
        <tr>
          <th scope="row">{product._id}</th>
          <td> {product.name}</td>
          <td>{product.description}</td>
          <td> {product.category}</td>
          <td>
            {" "}
            <img
              src={product.imageUrl}
              width="40"
              style={{ height: "auto" }}
              alt=""
            ></img>
          </td>
          <td> {product.price}</td>
          <td> <Button outline color="warning" onClick={this.displayEditForm}>Edit</Button></td>
          <td><Button outline color="danger" onClick={this.deleteProduct}>Delete </Button></td>
        </tr>
      </>
    );
  }
}

export default SingleProduct;
