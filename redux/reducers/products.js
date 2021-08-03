import {
  START_FEATCH_PRODUCTS,
  START_FEATCH_PRODUCT,
  FEATCH_PRODUCTS_SUCCESS,
  FEATCH_PRODUCT_SUCCESS,
  SET_FILTERS_OUTPUT,
  SET_SORT_BY,
  SET_PRODUCT_IMAGES,
  SET_PRODUCT_COLOR,
  SELECT_ALL_CHECKE,
  CLEAR_ALL_CHECKE,
} from '../types';

const initialState = {
  products: [],
  product: {},
  productImages: {},
  productColor: '',
  similarProducts: [],
  filterElements: {},
  loading: false,
  filterOutput: {
    brands: [],
    colors: [],
    sizes: [],
    productType: [],
    priceRange: [],
  },
  sort: 'newProduct',
};

export default function products(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FEATCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...payload.data],
        filterElements: { ...state.filterElements, ...payload.filterElements },
        loading: false,
      };
    case FEATCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload.data,
        similarProducts: payload.similarProducts,
        loading: false,
      };
    case SET_FILTERS_OUTPUT:
    case SELECT_ALL_CHECKE:
    case CLEAR_ALL_CHECKE:
      return {
        ...state,
        filterOutput: { ...state.filterOutput, ...payload },
      };

    case START_FEATCH_PRODUCTS:
    case START_FEATCH_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sort: payload,
      };
    case SET_PRODUCT_IMAGES:
      return {
        ...state,
        productImages: payload,
      };
    case SET_PRODUCT_COLOR:
      return {
        ...state,
        productColor: payload,
      };
    default:
      return state;
  }
}
