
import React, { useEffect, useState } from 'react';



import {Header} from '../Components'
import Card from '../Components/Card/Card';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const BarPage = () => {

  const userData = (JSON.parse(localStorage.getItem("adminUser")));

  const navigate = useNavigate();

  if(!userData){
      navigate("/login");
  }

  const [Footer , setFoot ] = useState([]);
  const [Navbar , setNav] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        toast.loading("Fetching .... ");
        const response = await axios.get("http://localhost:8000/get-boxes", {
          params: {
            main_type: "bar",
            sub_type: "bar"
          }
        });
        toast.dismiss();
        const data = response.data.data;
        setFoot(data);
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };

    const fetchDataTwo = async () => {
        try {
          toast.loading("Fetching .... ");
          const response = await axios.get("http://localhost:8000/get-boxes", {
            params: {
              main_type: "nav",
              sub_type: "nav"
            }
          });
          const data = response.data.data;
          toast.dismiss();
          setNav(data);
        } catch (err) {
          console.log(err.message);
          toast.error(err.message);
        }
      };

    fetchData(); // Call the async function here
    fetchDataTwo();
  }, []);


  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Bar Page" />
      <div style={{width:"100%",height:"100%"}}>
      <div className='home-page-home-slider-add-button'>
      <h1>Navbar </h1>
      <a href={`/add/?main_type=nav&sub_type=nav`}><button className="edit-button">Add Item+</button></a>
      </div>
      <div className='home-page-home-slider-div'>
      
       {Navbar.map((item,index)=>{
        return <Card isContent={1} image={item.img} content={item._doc.data} boxData={item}/>
       })}
      </div>
      <div className='home-page-home-slider-add-button'>
      <h1>Footer</h1>
      <a href={`/add/?main_type=bar&sub_type=bar`}><button className="edit-button">Add Item+</button></a>
      </div>
      <div className='home-page-home-slider-div'>
      
       {Footer.map((item,index)=>{
        return <Card isContent={1} image={item.img} content={item._doc.data} boxData={item}/>
       })}
      </div>
      
      </div>
    </div>
  );
};
export default BarPage;