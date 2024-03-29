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
    const {setProductToEdit, setEditState} = this.props
    return (
      <>
        {this.state.products.length > 0 ? (
          <Table className="my-4" dark>
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
                  <SingleProduct product={item} key={i} setEditState={setEditState} setProductToEdit={setProductToEdit}/>
                ))}
            </tbody>
          </Table>
        ) : (
          <h3> No product in stock yet</h3>
        )}
      </>
    );
  }
}

export default DisplayProducts;
