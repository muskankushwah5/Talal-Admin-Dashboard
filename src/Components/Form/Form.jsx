import React, { useState } from 'react';
import './NineFieldForm.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const NineFieldForm = () => {

    const location = useLocation();

    const userData = (JSON.parse(localStorage.getItem("adminUser")));

    const navigate = useNavigate();

    if(!userData){
        navigate("/login");
    }

    const queryParams = new URLSearchParams(location.search);

    // Access individual query parameters by name
    const main = queryParams.get('main_type');
    const sub = queryParams.get('sub_type');

  const [SelectedImage,setSelectedImage] = useState("");
  const [imageSelected,setImageSelected]=useState(false);
  const [Image,setImage] = useState("");
  const [form2Data, setFormData] = useState({
    main_type:main || "" ,
    sub_type: sub || '',
    data: '',
    icon1_data: '',
    icon2_data: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
          // Create a blob URL for the selected file
          const blobUrl = URL.createObjectURL(file);
          setSelectedImage(blobUrl); // Set selectedImage state with blob URL
        }
        setImageSelected(true);
     
    } else {
      setFormData({
        ...form2Data,
        [name]: value,
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(imageSelected === true){
    const fromdata = new FormData();
    fromdata.append("main_type",form2Data.main_type);
    fromdata.append("sub_type",form2Data.sub_type);
    fromdata.append("data",form2Data.data);
    fromdata.append("icon1_data",form2Data.icon1_data);
    fromdata.append("icon2_data",form2Data.icon2_data);
    fromdata.append("img",Image);
    axios.post("http://localhost:8000/api/add-data",fromdata).then((res)=>{
        console.log(res);
        setSelectedImage("");
        setImage("");
        setImageSelected(false);
        alert("Successfully uploaded");
    }).catch((err)=>{
        alert(err.message)
    })
   }
   else{

    const fromdata = new FormData();
    console.log(form2Data);
    fromdata.append("main_type",form2Data.main_type);
    fromdata.append("sub_type",form2Data.sub_type);
    fromdata.append("data",form2Data.data);
    fromdata.append("icon1_data",form2Data.icon1_data);
    fromdata.append("icon2_data",form2Data.icon2_data);
    fromdata.append("img","");
    toast.loading("Submitting....");
    axios.post("http://localhost:8000/api/add-data-only",form2Data).then((res)=>{
        console.log(res);
        setSelectedImage("");
        toast.dismiss();
        setImage("");
        alert("Successfully uploaded");
    }).catch((err)=>{
        toast.error(err.message)
    })
   }
  };


  return (
    <div className="nine-field-form-container">
      <h2>Nine Field Form with Image Upload</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="field1">Main Type:</label>
          <input
            type="text"
            id="main_type"
            name="main_type"
            value={form2Data.main_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="field1">Sub Type:</label>
          <input
            type="text"
            id="sub_type"
            name="sub_type"
            value={form2Data.sub_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="field1">Data:</label>
          <input
            type="text"
            id="data"
            name="data"
            value={form2Data.data}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-field">
          <label htmlFor="field1">icon1_data:</label>
          <input
            type="text"
            id="icon1_data"
            name="icon1_data"
            value={form2Data.icon1_data}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-field">
          <label htmlFor="field1">icon2_data:</label>
          <input
            type="text"
            id="icon2_data"
            name="icon2_data"
            value={form2Data.icon2_data}
            onChange={handleChange}
            
          />
        </div>
       
        {SelectedImage && (
            <div className="form-field">
            <img src={SelectedImage}/>
          </div>
        )}
       
        <div className="form-field">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Allow only image files
            onChange={handleChange}
            
          />
        </div>
        <div className="form-field">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NineFieldForm;
