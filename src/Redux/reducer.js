
import {FILTER_PROD,GET_PROD,ERR_PROD,REQ_PROD,SORT_PROD} from "./actionTypes"
const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type)
  {
    case REQ_PROD:
      return {
        ...state,
        isLoading: true,
        isError: false,
        filterData: [],
        products: [],
      };
    case ERR_PROD:
      return {
        ...state,
        isLoading: false,
        isError: true,
        filterData: [],
        products: [],
      };
    case GET_PROD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: payload,
      };
    case SORT_PROD:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        
        
        products: state.products.sort((a, b) => {
          
          if (payload === "asc") {
            return a.price - b.price;
          } 
          else 
          {
            return b.price - a.price;
          }

        }),
      };
    case FILTER_PROD:
      return {

        ...state,
        isLoading: false,
        isError: false,
        filterData: state.products.filter((item) => {
         
         
          return item.category === payload;
        }),
      };
    default:
      return state;

  }
};
export { reducer };
