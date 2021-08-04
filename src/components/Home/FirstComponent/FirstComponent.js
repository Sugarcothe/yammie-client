import React from 'react';
import './FirstComponent.scss';


const FirstComponent = () => {
  
  // items
const items = [
  {
    icon: 'fas fa-shopping-basket',
    item: 'EasyMarket with Yammie',
  },
  {
    icon: 'fas fa-pizza-slice',
    item: 'Fast Foods & Drinks',
  },
  {
    icon: 'fas fa-cart-arrow-down',
    item: 'Supermarket',
  },
  {
    icon: 'fas fa-headphones-alt',
    item: 'Phones and Accessories',
  },
  {
    icon: 'fas fa-plug',
    item: 'Electronics',
  },
  {
    icon: 'fas fa-tshirt',
    item: 'Clothes and Shoes',
  },
  {
    icon: 'fas fa-utensils',
    item: 'Kitchen & Utensils',
  },
  {
    icon: 'fas fa-desktop',
    item: 'Computing & Accessories',
  },
  {
    icon: 'fas fa-child',
    item: 'Kids Section',
  },
  {
    icon: 'fas fa-bath',
    item: 'Cleaning, Healthy & Beauty',
  },
  {
    icon: 'fas fa-print',
    item: 'stationery',
  },
]

  // center
const slides = [
  {
    img: 'assets/what.jpeg'
  },
  {
    img: 'assets/what1.jpeg'
  },
  {
    img: 'assets/what3.jpeg'
  },
  {
    img: 'assets/what4.jpeg'
  },
]


return (
  
  <div className='container' id='first-home'>
    <div className='sections'>
      
        <div className='item-card'>
        {items.map((d) => (
          <div className='items'>
            <i class={d.icon}></i>
            <p>{d.item}</p>
          </div>
        ))}
      </div>

      
      <div className='slide-card'>
          <div className='ad-covers'>
            <img src='assets/what4.jpeg' alt='this'/> 
          </div>
      </div>
    
      <div className='ad-card'>
        <div className='ad-covers'>
          <img src='assets/lady.gif' alt='shoopers'/>
        </div>
        <div className='ad-covers'>
          <img src='assets/shoopers.gif' alt='shoopers'/>
        </div>
      </div>
    </div>
  </div>
)
}

export default FirstComponent;
