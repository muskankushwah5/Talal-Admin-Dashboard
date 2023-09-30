import React from 'react';
import {Header} from '../Components'
import './About.css';
import Card from '../Components/Card/Card';

const TestimonialData = [
  {
    isHome : 0,
    data : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    img : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img2 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
  },
  {
    isHome : 0,
    data : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    img : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img2 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
  },
  {
    isHome : 0,
    data : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    img : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img2 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
  },
  {
    isHome : 0,
    data : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    img : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img2 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
  },
  {
    isHome : 0,
    data : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    img : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img2 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
  },
  {
    isHome : 0,
    data : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    img : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_img2 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
    icon_data1 : "https://www.bing.com/images/search?q=image&id=11FB148F024C4BD1B6BD13651E1A5C150B71463C&FORM=IQFRBA",
  }
];
const Testimonial = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Testimonial" />
      <div className='home-page-home-slider-add-button'>
      <h1>About Us</h1>
      </div>
      <div className='home-page-home-slider-div'>
      {TestimonialData.map((data,index)=>{
        
        return <Card isContent={2} image={data.img} data={data.data}/>
       
      })}
      </div>
      </div>
  );
};
export default Testimonial;