import express from "express";
import { Signup } from "../controllers/userSignup.js";
import { login } from "../controllers/userLogin.js";
import { auth } from "../middleware/auth.js";
import { userdetail } from "../controllers/userdetail.js";
import { logout } from "../controllers/logout.js";
import { alluser } from "../controllers/alluser.js";
import UpdateUser from '../controllers/UpdateUser.js'
import { UploadProductController } from "../controllers/uploadProduct.js";
import { getproduct } from "../controllers/getProduct.js";
import { updateProduct } from "../controllers/UpdateProduct.js";
import { getCategoryProduct } from "../controllers/getCategoryProduct.js";
import { getCategoryWiseProduct } from "../controllers/getCategorywiseproduct.js";
import { getProductDetails } from "../controllers/getProductdetails.js";
import { addtocart } from "../controllers/addtocart.js";
import { countproduct } from "../controllers/countproduct.js";
import { cartview } from "../controllers/cartView.js";
import { updateAddToCartProduct } from "../controllers/updateAddToCart.js";
import { deleteAddToCartProduct } from "../controllers/deleteAddToCart.js";
import { searchProduct } from "../controllers/searchProduct.js";
import { filterProductController } from "../controllers/filterproduct.js";
import { paymentcontrol } from "../controllers/order/paymentController.js";

const router = express.Router();

router.route("/Signup").post(Signup);
router.route("/login").post(login);
router.route("/user-detail").get(auth, userdetail);
router.route("/logout").get(logout);
//admin pannel
router.route("/all-user").get(auth, alluser);
router.route("/updateuser").post(auth ,UpdateUser);

//product
router.route("/upload-product").post(auth,UploadProductController)
router.route("/get-product").get(getproduct);
router.route("/update-product").post(auth,updateProduct);
router.route("/get-categoryproduct").get(getCategoryProduct);
router.route("/category-product").post(getCategoryWiseProduct);
router.route("/product-detail").post(getProductDetails);
router.route("/search-product").get(searchProduct);
router.route("/filter-product").post(filterProductController);

// user add to cart
router.route("/add-tocart").post(auth,addtocart);
router.route("/cartitem").get(auth,countproduct);
router.route("/viewcart-item").get(auth,cartview);
router.route("/updatecart-view").post(auth,updateAddToCartProduct);
router.route("/deletecart-view").post(auth,deleteAddToCartProduct);

//payment and order
router.route("/checkout").post(auth,paymentcontrol);


export default router;
