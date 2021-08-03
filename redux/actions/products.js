import {
  START_FEATCH_PRODUCTS,
  FEATCH_PRODUCTS_SUCCESS,
  START_FEATCH_PRODUCT,
  FEATCH_PRODUCT_SUCCESS,
  SET_FILTERS_OUTPUT,
  SET_SORT_BY,
  SET_PRODUCT_IMAGES,
  SET_PRODUCT_COLOR,
  SELECT_ALL_CHECKE,
  CLEAR_ALL_CHECKE,
} from '../types';
import axios from 'axios';

export const setProducts = () => async (dispatch, getState) => {
  const { gender, directory } = getState().navigation;
  const { filterOutput, sort } = getState().products;
  dispatch({
    type: START_FEATCH_PRODUCTS,
  });
  try {
    const params = new URLSearchParams();
    const removeFields = [];
    gender && params.append('gender', gender);
    directory && params.append('category', directory);

    if (filterOutput.brands.length > 0) {
      params.append('brand', filterOutput.brands);
      removeFields.push('brands');
    }
    if (filterOutput.colors.length > 0) {
      params.append('color', filterOutput.colors);
      removeFields.push('colors');
    }
    if (filterOutput.sizes.length > 0) {
      params.append('size', filterOutput.sizes);
      removeFields.push('sizes');
    }
    if (filterOutput.productType.length > 0) {
      params.append('productType', filterOutput.productType);
      removeFields.push('productType');
    }

    if (filterOutput.priceRange.length > 0) {
      params.append('priceRange', filterOutput.priceRange);
      removeFields.push('price');
    }

    if (sort) {
      params.append('sort', sort);
    }

    const res = await axios.get('/api/v2/products/', {
      params,
    });

    removeFields.forEach((param) => delete res.data.filterElements[param]);

    dispatch({
      type: FEATCH_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setProduct = (id) => async (dispatch) => {
  dispatch({
    type: START_FEATCH_PRODUCT,
  });
  try {
    const res = await axios.get(`/api/v2/products/${id}`);
    dispatch({
      type: FEATCH_PRODUCT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const setFilteredProducts =
  (filterOutputName, filterOutputValue) => async (dispatch, getState) => {
    const { filterOutput } = getState().products;

    const filterOutputEl = { ...filterOutput };

    const isEx = filterOutputEl[filterOutputName].findIndex((e) => {
      return e === filterOutputValue;
    });
    isEx === -1
      ? filterOutputEl[filterOutputName].push(filterOutputValue)
      : filterOutputEl[filterOutputName].splice(isEx, 1);

    dispatch({
      type: SET_FILTERS_OUTPUT,
      payload: filterOutputEl,
    });
    dispatch(setProducts());
  };

export const setAllFilters = (filterOutputName) => (dispatch, getState) => {
  const { filterElements } = getState().products;
  const filterEl = filterElements[filterOutputName];
  const filterCheck = [];
  filterEl.forEach((e) => {
    filterCheck.push(e.title);
  });
  dispatch({
    type: SELECT_ALL_CHECKE,
    payload: { [filterOutputName]: filterCheck },
  });
  dispatch(setProducts());
};

export const clearAllFilters = (filterOutputName) => (dispatch) => {
  dispatch({
    type: CLEAR_ALL_CHECKE,
    payload: { [filterOutputName]: [] },
  });
  dispatch(setProducts());
};

export const setProductsPriceRange = (priceRange) => (dispatch) => {
  dispatch({
    type: SET_FILTERS_OUTPUT,
    payload: { priceRange },
  });
  dispatch(setProducts());
};

export const submitSortBy = (sortBy) => (dispatch) => {
  dispatch({
    type: SET_SORT_BY,
    payload: sortBy,
  });
  dispatch(setProducts());
};

export const setProductImages = (images) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT_IMAGES,
    payload: images,
  });
};

export const setProductColor = (productColor) => (dispatch) => {
  dispatch({
    type: SET_PRODUCT_COLOR,
    payload: productColor,
  });
};

export const setProductImagesColor = (productColor) => (dispatch, getState) => {
  const allImages = getState().products.product.images;

  const images = allImages.find((image) => image.imagesColor === productColor);

  dispatch({
    type: SET_PRODUCT_IMAGES,
    payload: images,
  });
};
