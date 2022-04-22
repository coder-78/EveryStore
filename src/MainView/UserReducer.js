const initialState = {
    isFetchingGetProductData : false,
    productData : []
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case "REQUEST_PRODUCT_GET_DATA":
            return {...state, isFetchingGetProductData: true};

        case "SUCCESS_PRODUCT_GET_DATA":
            return {...state, productData: action.payload, isFetchingGetProductData: false};

        default: 
        return state;
    }
}


export default UserReducer;