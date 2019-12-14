import React, { Component } from "react";
import { Table } from "reactstrap";
import { getAllProducts } from "../../../helpers/Api";
import SingleProduct from "./SingleProduct";

class DisplayProducts extends Component {
  state = {
    products: [],
    isLoading: true
  };

  componentDidMount = async () => {
    let allProduct = await getAllProducts();
    this.setState({
      products: allProduct,
      isLoading: false
    });
  };

  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products &&
              this.state.products.map((item, i) => (
                <SingleProduct product={item} key={i} />
              ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default DisplayProducts;
