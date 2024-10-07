import Summayapi from "../common"
export const fetchcategorywise=async(category)=>{
     const response=await fetch(Summayapi.CategorywiseProduct.url,{
        method: Summayapi.CategorywiseProduct.method,
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            category:category
        })
     })
     const dataresponse=await response.json()
      return dataresponse
}