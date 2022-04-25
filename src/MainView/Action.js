// import { data } from "autoprefixer";
import axios from "axios";

// Get Data
export const getProductData = () => {
  return (dispatch) => {
    dispatch(requestProductGetData());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(successProductGetData(res.data));
      })
      .catch((error) => {
        dispatch(errorProductGetData());
      });
  };
};

export const requestProductGetData = () => {
  return {
    type: "REQUEST_PRODUCT_GET_DATA",
  };
};

export const successProductGetData = (data) => {
  return {
    type: "SUCCESS_PRODUCT_GET_DATA",
    payload: data,
  };
};

export const errorProductGetData = () => {
  return {
    type: "ERROR_PRODUCT_GET_DATA",
  };
};


export const saveData = (data) => {
  return (dispatch) => {
    dispatch(requestSaveData())
    dispatch(successSaveData(data))
  }  
}

export const requestSaveData = () => {
  return {
    type: "REQUEST_SAVE_DATA",
  }
}

export const successSaveData = (data) => {
  return {
    type: "SUCCESS_SAVE_DATA",
    payload: data,
  }
}