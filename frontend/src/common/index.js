const backenedConnect = "http://localhost:8000";

const Summayapi = {
  signUp: {
    url: `${backenedConnect}/api/Signup`,
    method: "POST",
  },
  login: {
    url: `${backenedConnect}/api/login`,
    method: "POST",
  },
  current_user: {
    url: `${backenedConnect}/api/user-detail`,
    method: "GET",
  },
  Logout:{
    url:`${backenedConnect}/api/logout`,
    method: "GET",
  },
  alluser:{
    url:`${backenedConnect}/api/all-user`,
    method: "GET",
  },
  updateuser:{
    url:`${backenedConnect}/api/updateuser`,
    method: "POST",
  },
  uploadProduct:{
    url:`${backenedConnect}/api/upload-product`,
    method: "POST",
  },
  allProduct:{
    url:`${backenedConnect}/api/get-product`,
    method: "GET",
  },
  updateProduct:{
    url:`${backenedConnect}/api/update-product`,
    method: "POST",
  },
  CategoryProduct:{
    url:`${backenedConnect}/api/get-categoryProduct`,
    method: "GET",
  },
  CategorywiseProduct:{
    url:`${backenedConnect}/api/category-product`,
    method: "POST",
  },
  ProductDetails:{
    url:`${backenedConnect}/api/product-detail`,
    method: "POST",
  },
  addtocart:{
    url:`${backenedConnect}/api/add-tocart`,
    method: "POST",
  },
  cartitem:{
    url:`${backenedConnect}/api/cartitem`,
    method: "GET",
  },
  cartview:{
    url:`${backenedConnect}/api/viewcart-item`,
    method: "GET",
  },
  updatecart:{
    url:`${backenedConnect}/api/updatecart-view`,
    method: "POST",
  },
  deletecart:{
    url:`${backenedConnect}/api/deletecart-view`,
    method: "POST",
  },
  Search:{
    url:`${backenedConnect}/api/search-product`,
    method: "GET",
  },
  filterproduct:{
    url:`${backenedConnect}/api/filter-product`,
    method: "POST",
  },
};

export default Summayapi;
