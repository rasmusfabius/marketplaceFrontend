import React, { Component } from "react";

class singleProduct extends Component {
  render() {
      let {product} = this.props
    return (
        <>
            <td scope="col">{product._id}</td>
                    <td scope="col"> {product.name}</td>
                    <td scope="col">{product.description}</td>
                    <td scope="col"> {product.category}</td>
                    <td scope="col">{product.imageUrl}</td>
                    <td scope="col"> {product.price}</td>
                    <td scope="col">Edit</td>
                    <td scope="col">Delete</td>
        </>
    );
  }
}

export default singleProduct;
