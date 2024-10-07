import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import Horizontalcart from '../components/Horizontalcart'
import Verticalcart from '../components/VerticalProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>
      <Horizontalcart category={"airpodes"}heading={"Top Airpodes"}/>
      <Horizontalcart category={"watches"}heading={"Popular watches"}/>
      {/* horizontal view */}
      <Verticalcart category={"mobiles"} heading={"Mobiles"}/>
      <Verticalcart category={"Mouse"} heading={"Mouse"}/>
      <Verticalcart category={"televisions"} heading={"Televisions"}/>
      <Verticalcart category={"camera"} heading={"Camera & Photography"}/>
      <Verticalcart category={"earphones"} heading={"Wired Earphones"}/>
      <Verticalcart category={"speakers"} heading={"Bluetooth Speakers"}/>
      <Verticalcart category={"refrigerator"} heading={"Refrigerator"}/>
      <Verticalcart category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home