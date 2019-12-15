let {REACT_APP_GET_ALL_PRODUCTS} = process.env
export const getAllProducts = async () => {
    let request = await fetch(REACT_APP_GET_ALL_PRODUCTS)
    return await request.json()
}

export const addProducts = async (product) => {
    const postInit = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },

        body: JSON.stringify(product)
    }
    let request = await fetch(REACT_APP_GET_ALL_PRODUCTS,postInit)
    return await request.json()
}

export const EditProducts = async (product,id) => {
    const postInit = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },

        body: JSON.stringify(product)
    }
    let request = await fetch(REACT_APP_GET_ALL_PRODUCTS + id,postInit)
    return await request.json()
}

export const deleteProduct = async id => {
    let request = await fetch(`${REACT_APP_GET_ALL_PRODUCTS}${id}`, {
        method: 'DELETE'
    })
    return await request.json()
} 