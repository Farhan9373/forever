import React, { useContext, useEffect, useRef, useState } from "react";
import { fetchcategorywise } from "../helpers/fetchcategorywise";
import displayINRCurrency from "../helpers/indianCurrency";
import { Link } from "react-router-dom";
import { addtocart } from "../helpers/addtocart";
import context from "../context";
import scroltop from "../helpers/scrooltop";


export const CategroyWiseProductDisplay = ({ category, heading }) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const loadingList = new Array(13).fill(null);
  const [scroll,setScroll] = useState(0)
  const { fetchusercart } = useContext(context)

  const handleAddToCart = async(e,id)=>{
     await addtocart(e,id)
     fetchusercart()
  }
  const fetchdata = async () => {
    setloading(true);
    try {
      const categoryProduct = await fetchcategorywise(category);
      setdata(categoryProduct?.data || []); // Fallback to empty array
    } catch (error) {
      console.error("Error fetching category data:", error);
      setdata([]); // Set to empty array on error
    } finally {
      setloading(false);
    }
  };
  
  useEffect(() => {
    fetchdata();
  }, [])
 
  return (
    <div className="container mx-auto px-4 my-6 relative">
      <h2 className="text-2xl font-semibold py-4">{heading}</h2>

      <div
        className=" grid grid-cols-[repeat(auto-fit,minmax(300px,320px))] justify-between md:gap-6 overflow-scroll scrollbar-none transition-all"
        
      >
        

        {loading
          ? loadingList.map((product, index) => {
              return (
                <div className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex ">
                  <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse"></div>
                  <div className="p-4 grid w-full gap-2">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-slate-200 animate-pulse p-1 rounded-full"></h2>
                    <p className="capitalize text-slate-500 p-1 bg-slate-200 animate-pulse rounded-full"></p>
                    <div className="flex gap-3 w-full">
                      <p className="text-red-600 font-medium p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
                      <p className="text-slate-500 line-through p-1 bg-slate-200 w-full animate-pulse rounded-full"></p>
                    </div>
                    <button className="text-sm  text-white px-3 py-0.5 rounded-full w-full bg-slate-200 animate-pulse"></button>
                  </div>
                </div>
              );
            })
          : data.map((product, index) => {
              return (
                <Link
                  to={"/product/" + product?._id}
                  className="w-full min-w-[280px] md:min-w-[320px]  max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow " onClick={scroltop}
                >
                  <div className="bg-slate-200 mix-blend-multiply h-48 flex justify-center items-center p-4 min-w-[280px] md:min-w-[145px]">
                    <img
                      src={product.productImage[0]}
                      className="object-scale-down  mix-blend-multiply h-full hover:scale-110 transition-all"
                    />
                  </div>
                  <div className="p-4 grid gap-3">
                    <h2 className="font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black">
                      {product?.productName}
                    </h2>
                    <p className="capitalize text-slate-500">
                      {product?.category}
                    </p>
                    <div className="flex gap-3">
                      <p className="text-red-600 font-medium">
                        {displayINRCurrency(product?.sellingPrice)}
                      </p>
                      <p className="text-slate-500 line-through">
                        {displayINRCurrency(product?.price)}
                      </p>
                    </div>
                    <button
                      className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full"
                      onClick={(e)=>handleAddToCart(e,product?._id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};


