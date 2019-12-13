import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addProduct} from '../../../helpers/Api'

class AddProduct extends Component {
    state= {
        product:{
            name: '',
            description: '',
            brand: '',
            imageUrl: '',
            price:0,
            category:''
        }
    }

    handleInput = (event) => {
        let {name, value} = event.target
        let newProduct = this.state.product
        newProduct[name] = value
        this.setState({
            products:newProduct
        })
    }
    handleSubmit = async () => {
        await addProduct(this.state.product)
    }
  render() {
      let {name, description, brand, imageUrl, price, category} = this.state.product
    return (
      <div>
          <h2 className="text-center"> Add Product</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="name"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              value={description}
              placeholder="description"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Brand</Label>
            <Input
              type="textarea"
              name="brand"
              id="brand"
              value={brand}
              placeholder="brand"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Image</Label>
            <Input
              type="textarea"
              name="imageUrl"
              id="imageUrl"
              value={imageUrl}
              placeholder="imageUrl"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Price</Label>
            <Input
              type="textarea"
              name="price"
              id="price"
              value={price}
              placeholder="price"
              onChange={this.handleInput}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Category</Label>
            <Input
              type="textarea"
              name="category:"
              id="category:"
              value={category:}
              placeholder="category:"
              onChange={this.handleInput}
            />
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}> Add</Button>
        </Form>
      </div>
    );
  }
}

export default AddProduct;
