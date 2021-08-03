import React from 'react'

const FirstHome = () => {
  // items
state = [
  {
    icon: 'fas fa-shopping-basket';
    item: 'EasyMarket with Yammie';
  },
  {
    icon: 'fas fa-pizza-slice';
    item: 'Fast Foods & Drinks';
  },
  {
    icon: 'far fa-money-bill-alt';
    item: 'Supermarket';
  },
  {
    icon: 'fas fa-headphones-alt';
    item: 'Phones and Accessories';
  },
  {
    icon: 'fas fa-plug';
    item: 'Electronics';
  },
  {
    icon: 'fas fa-tshirt';
    item: 'Clothes and Shoes';
  },
  {
    icon: 'fas fa-utensils';
    item: 'Kitchen & Utensils';
  },
  {
    icon: 'fas fa-desktop';
    item: 'Computing & Accessories';
  },
  {
    icon: 'fas fa-child';
    item: 'Kids Section';
  },
  {
    icon: 'fas fa-bath';
    item: 'Cleaning, Healthy & Beauty';
  },
  {
    icon: 'fas fa-print';
    item: 'stationery';
  },
]

  // center
slide = [
  {
    img: '../img/what.jpg'
  },
  {
    img: '../img/what1.jpg'
  },
  {
    img: '../img/what3.jpg'
  },
  {
    img: '../img/what4.jpg'
  },
]


return (
  <div className='container' id='first-home'>
    <div className='sections'>

      <div className='item-card'>
        <div className='items'>
          <i className={}></i>
          <p>{}</p>
        </div>
      </div>

      <div className='slide-card'>

      </div>

      <div className='ad-card'>

      </div>
    </div>
  </div>
)
}

export default FirstHome
