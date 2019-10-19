import { Product } from "../product/Product";
import React from 'react';

const images = [ "https://images-na.ssl-images-amazon.com/images/I/51pQOiQpY5L._UX679_.jpg" , 
"https://ssfr.tidebuy.com/images/product/14/14009/14009333_2.jpg",
"https://images.yaoota.com/B6eMG357KC7kDNvg3WI56wUs-yE=/trim/yaootaweb-production/media/crawledproductimages/577045e3ae6d47d4d4ad912957929325b306c497.jpg",
"https://i1.adis.ws/i/boohooamplience/dzz11660_mid%2520blue_xl?$product_page_main_magic_zoom$",
"https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8375987/2019/2/22/1e7669b5-ce31-426d-8378-2051d723f1231550830927269-Campus-Sutra-Men-Blue-Slim-Fit-Mid-Rise-Mildly-Distressed-St-1.jpg",
"https://img.jimmyjazz.com/images/f_auto/q_auto/t_lp/product/DECWB184-LBL-blue-1/Decibel-Shredded-Denim-Jeans"]; 

const elements = [{
    title: 'Super Slim Jean' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
},
{
    title: 'Berschka Jean' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
},
{
    title: 'Zara Jean' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
},
{
    title: 'Ralph Lauren Jean' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
},
{
    title: 'Zara Jean' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
},
{
    title: 'H&M' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
},
{
    title: 'Zara Jean' , 
    description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.'
} 
];
export class ListProducts extends React.Component {

    /**
     * Render method
     */
    render(){
        return  (<div>{elements.map((value, index) => {
            return this.getProduct(index)
          })}
          </div>);
    }

    /**
     * This method will return a Product based on the index passed in parameter. 
     * @param {*} index 
     */
    getProduct(index){
        const randomImage = Math.floor(Math.random() * Math.floor(images.length -1));
        const randomPrice = Math.floor(Math.random() * Math.floor(98));
        return <Product onAddItem = {this.props.onAddItem} id = {index} key={index} image={images[randomImage]} price={randomPrice} title={elements[index].title} description={elements[index].description} />
    }
}