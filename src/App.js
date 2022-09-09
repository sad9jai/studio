
import './App.css';
import React, {useState} from 'react';

function App() {
  const [data, setData] = useState({
    name: "",
    product: "",
    price: "",
  })


  const { name, product, price} = data

  const handleChange = (e) =>
  setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://v1.nocodeapi.com/sad9jai777/google_sheets/WDXBNbjImAjpeocJ?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, product, price, new Date().toLocaleDateString()]]),
      })
      setData({...data, name: "", product: "", price:""});
    } catch (err) {
      console.log(err)
    }

   
  };


  return (
    <div className= "mid-box">
   
      <h1 style = {{fontSize : "20px" }}> Claim 錢</h1>
      <br></br>
    
      <form  onSubmit={handleSubmit} >
        <label>Your Name</label>
        <input type = "text" className='form-control'
          name = "name"
          onChange={handleChange} value = {name}
          autoComplete = "off"
          />
        
        <br></br>
        <label>Product Name 
        </label><input type = "text"  className='form-control' name = "product"
        onChange={handleChange} value= {product} autoComplete = "off" />
        
        <br></br>
        <label>Price</label>
        <input type = "text"  className='form-control' name = "price"
         value={price} onChange={handleChange} autoComplete = "off"/>
        
        
        <div>
          <button type = "submit" className='btn'> Submit</button>
        </div>



      </form>


    </div>
  );
}

export default App;
