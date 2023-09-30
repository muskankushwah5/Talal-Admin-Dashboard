import React, { useEffect, useState } from 'react';



import {Header} from '../Components'
import Card from '../Components/Card/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const AboutPage = () => {

  const userData = (JSON.parse(localStorage.getItem("adminUser")));

  const navigate = useNavigate();

  if(!userData){
      navigate("/login");
  }

  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        toast.loading("Fetching...");
        const response = await axios.get("http://localhost:8000/get-boxes", {
          params: {
            main_type: "about",
            sub_type: "about"
          }
        });
        toast.dismiss();
        const data = response.data.data;
        setAbout(data);
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };

    fetchData(); // Call the async function here
  }, []);

  console.log(about);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="About Page" />
      <div style={{width:"100%",height:"100%"}}>
      <div className='home-page-home-slider-add-button'>
      <h1>About Page Image</h1>
      </div>
      <div className='home-page-home-slider-div'>
      
       {about.map((item,index)=>{
        return <Card isContent={0} image={item.img} boxData={item}/>
       })}
      </div>
      <div className='home-page-home-slider-add-button'>
      <h1>About Page Content</h1>
      </div>
      <div className='home-page-home-slider-div'>
       {about.map((item,index)=>{
        return <Card isContent={1} content={item._doc.data} boxData={item}/>
       })}
      </div>
      <div className='home-page-home-slider-add-button'>
      <h1>About Page Vision and Mission</h1>
      </div>
      <div className='home-page-home-slider-div'>
      {about.map((item,index)=>{
        return <Card isContent={1} content={item._doc.icon1_data} boxData={item} isIcon={1}/>
       })}
       {about.map((item,index)=>{
        return <Card isContent={1} content={item._doc.icon2_data} boxData={item} isIcon={2}/>
       })}
      </div>
      <div className='home-page-home-slider-div'>

      
      </div>
      </div>
    </div>
  );
};
export default AboutPage;