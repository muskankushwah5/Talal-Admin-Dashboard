import React, { useEffect, useState } from 'react';



import {Header} from '../Components'
import Card from '../Components/Card/Card';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

  const userData = (JSON.parse(localStorage.getItem("adminUser")));

    const navigate = useNavigate();

    if(!userData){
        navigate("/login");
    }

  const [data,setData] = useState([]);

  const [homeslider,setHomeslider] = useState(null);
    
  const [about,setAbout] = useState([]);

  const [Portfolio,setPortfolio] = useState([]);

  const [testimonial,setTestimonial] = useState([]);

  const [services,setServices] = useState([]);

  const [gallery,setGallery] = useState([]);

  useEffect(()=>{
    toast.loading("Loading Home Slider Images");
    const response = axios.get("http://localhost:8000/get-boxes",{
      params:{
        main_type:"home",
        sub_type : "homeslider"
      }
    }).then((res)=>{
      toast.dismiss();
      setHomeslider(res.data.data); 
    }).catch((err)=>{

        toast.error(err.message)
    });

    toast.loading("Loading Home About Div");
    const response2 = axios.get("http://localhost:8000/get-boxes",{
      params:{
        main_type:"home",
        sub_type : "portfolios"
      }
    }).then((res)=>{
      toast.dismiss();
      setPortfolio(res.data.data); 
    }).catch((err)=>{
        toast.error(err.message)
    });

    toast.loading("Loading Home Services Div");
    const response3 = axios.get("http://localhost:8000/get-boxes",{
      params:{
        main_type:"home",
        sub_type : "services"
      }
    }).then((res)=>{
      toast.dismiss();
      console.log(res.data.data);
      setServices(res.data.data); 
    }).catch((err)=>{
        toast.error(err.message)
    });

    toast.loading("Loading Home testimonial Div");
    const response4 = axios.get("http://localhost:8000/get-boxes",{
      params:{
        main_type:"home",
        sub_type : "testimonials"
      }
    }).then((res)=>{
      toast.dismiss();
      setTestimonial(res.data.data); 
    }).catch((err)=>{
        toast.error(err.message)
    });

    toast.loading("Loading Home gallery Div");
    const response5 = axios.get("http://localhost:8000/get-boxes",{
      params:{
        main_type:"home",
        sub_type : "gallery"
      }
    }).then((res)=>{
      toast.dismiss();
      setGallery(res.data.data); 
    }).catch((err)=>{
        toast.error(err.message)
    });

    toast.loading("Loading Home gallery Div");
    const response6 = axios.get("http://localhost:8000/get-boxes",{
      params:{
        main_type:"home",
        sub_type : "dataCredentials"
      }
    }).then((res)=>{
      toast.dismiss();
      setData(res.data.data); 
    }).catch((err)=>{
        toast.error(err.message)
    });

  },[]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Home Page" />
      <div style={{width:"100%",height:"100%"}}>
      <div className='home-page-home-slider-add-button'>
      <h1>Home Slider</h1>
      <button><a href={`/add/?main_type=home&&sub_type=homeslider`}> Add Home Page +</a></button>
      </div>
      <div className='home-page-home-slider-div'>{homeslider?.map((images,index)=>{
        return <Card isContent={0} image={images.img} boxData={images}/>;
      })}</div>
       
        <div className='home-page-home-slider-add-button'>
        <h1>Portfolio</h1>
        <button><a href={`/add/?main_type=home&&sub_type=portfolios`}> Add Portfolio +</a></button>
        </div>
        <div className='home-page-home-slider-div'>{Portfolio?.map((images,index)=>{
          return <Card isContent={2} image={images.img} content={images._doc.data} boxData={images}/>;
        })}</div>
         <div className='home-page-home-slider-add-button'>
        <h1>Services</h1>
        <button><a href={`/add/?main_type=home&&sub_type=services`}> Add Services +</a></button>
        </div>
        <div className='home-page-home-slider-div'>{services.map((images,index)=>{return <Card isContent={1} content={images._doc.data} boxData={images}/>})}</div>
        <div className='home-page-home-slider-add-button'>
        <h1>Testimonials</h1>
        <button><a href={`/add/?main_type=home&&sub_type=testimonials`}> Add Testimonial +</a></button>
        </div>
        <div className='home-page-home-slider-div'>{testimonial.map((images,index)=>{return <Card isContent={0} image={images.img} boxData={images}/>})}</div>
        <div className='home-page-home-slider-add-button'>
        <h1>Data Credentials</h1>
        <button><a href={`/add/?main_type=home&&sub_type=dataCredentials`}> Add Data +</a></button>
        </div>
        <div className='home-page-home-slider-div'>{data.map((images,index)=>{return <Card isContent={1} content={images._doc.data} boxData={images}/>})}</div>
      </div>
      <div className='home-page-home-slider-add-button'>
      <h1>Gallery</h1>
      <button><a href={`/add/?main_type=home&&sub_type=gallery`}> Add Gallery +</a></button>
      </div>
      <div className='home-page-home-slider-div'>{gallery.map((images,index)=>{return <Card isContent={2} content={images._doc.data} image={images.img} boxData={images}/>})}</div>
    </div>
  );
};
export default HomePage;