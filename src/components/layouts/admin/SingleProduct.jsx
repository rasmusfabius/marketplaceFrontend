import React, { Component } from "react";

class SingleProduct extends Component {
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
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </>
    );
  }
}

export default SingleProduct;