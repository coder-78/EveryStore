const initialState = {
    isFetchingGetProductData : false,
    productData : [],

    isFetchingSaveData : false,
    saveDataValue: {
        Name: "",
        Username: "",
        Password: "",
    }
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case "REQUEST_PRODUCT_GET_DATA":
            return {...state, isFetchingGetProductData: true};

        case "SUCCESS_PRODUCT_GET_DATA":
            return {...state, productData: action.payload, isFetchingGetProductData: false};

            case "REQUEST_SAVE_DATA":
                return {...state, isFetchingSaveData: true};

        case "SUCCESS_SAVE_DATA":
            return {...state, saveDataValue: {
                Name: action.payload.Name,
                Username: action.payload.Username,
                Password: action.payload.Password
            },
            isFetchingSaveData: false
         }

        default: 
        return state;
    }
}


export default UserReducer;