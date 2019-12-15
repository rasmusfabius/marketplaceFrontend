import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {EditProducts} from '../../../helpers/Api'

class EditProduct extends Component {
    state= {
        product:{
            name: this.props.product.name,
            description: this.props.product.description,
            brand: this.props.product.brand,
            imageUrl: this.props.product.imageUrl,
            price:this.props.product.price,
            category:this.props.product.category
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
        let request = await EditProducts(this.state.product,this.props.product._id)
        this.props.cancel()
    }

  render() {
      let {name, description, brand, imageUrl, price, category} = this.state.product
    return (
      <div>
          <h2 className="text-center"> Edit Product</h2>
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
              type="text"
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
              type="url"
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
              type="number"
              name="price"
              id="price"
              value={price}
              placeholder="price"
              onChange={this.handleInput}
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
            />
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}> Edit</Button>
        </Form>
      </div>
    );
  }
}

export default EditProduct;
