import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addProducts} from '../../../helpers/Api'

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
            product:newProduct
        })
    }

    handleSubmit = async () => {
        let request = await addProducts(this.state.product)
    }

  render() {
      const {name, description, brand, imageUrl, price, category} = this.state.product
      const {cancel} = this.props
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
              required
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
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Brand</Label>
            <Input
              type="text"
              name="brand"
              id="brand"
              value={brand}
              placeholder="brand"
              onChange={this.handleInput}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Image</Label>
            <Input
              type="url"
              name="imageUrl"
              id="imageUrl"
              value={imageUrl}
              placeholder="imageUrl"
              onChange={this.handleInput}
            />
            <Input type="file"/>
          </FormGroup>
          <FormGroup>
            <Label for="description">Price</Label>
            <Input
              type="number"
              name="price"
              id="price"
              value={price}
              placeholder="price"
              onChange={this.handleInput}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Input
              type="text"
              name="category"
              id="category"
              value={category}
              placeholder="category"
              onChange={this.handleInput}
              required
            />
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}> Add</Button>
          <Button color="warning" onClick={cancel}> Cancel</Button>
        </Form>
      </div>
    );
  }
}

export default AddProduct;
