let {REACT_APP_GET_ALL_PRODUCTS} = process.env
export const getAllProducts = async () => {
    let request = await fetch(REACT_APP_GET_ALL_PRODUCTS)
    return await request.json()
}

export const addProduct = async (product) => {
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