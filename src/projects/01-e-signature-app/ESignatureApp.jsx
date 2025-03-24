import { useState } from "react";
import React from "react";
import Title from "../components/Title";


const ESignatureApp = () => {
  const [name,setName]= useState("Your Signature");
  const [date,setDate]=useState("");
  const [age,setAge]=useState("Enter your age")

            // !!!!!!!!!!-------Functions----------!!!!!!!!!!
  const handleNameChange =(e)=>{
// console.log(e.target.value)
setName((e.target.value))
  }
  const handleDateChange =(e)=>{
    // console.log(e.target.value)
    setDate((e.target.value))
      }
      const handleAgeChange =(e)=>{
        // console.log(e.target.value)
        setAge((e.target.value))
          }
  // const inputStyle={
  //  border: "none",
  //  borderBottom:"2px dotted",
  //  outLine:"none",
  //  padding:".35rem 0",
  // };
  document.body.style.background="#eee"
  return (
    <div className="container text-center">
      {/* <Title classes={"title"} text={"Name"} /> */}
      <Title style={{marginBottom:"1rem"}} classes={"title"} text={ name} />
      <Title  style={{marginTop:"1rem"}} classes={"main-title mb-4"} text={!date ? "DoB" : date} />
      <Title  classes={"main-title mb-4"} text={!age ? "enter your age" : age} />

      <p style={{marginTop:"2rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis <br />
        commodi aut illo distinctio eligendi, assumenda maxime pariatur quaerat <br />
        deserunt et natus voluptatem, dignissimos doloremque eum praesentium <br />
        corrupti quasi. Molestiae.
      </p>
      <footer
      className="d-flex"
      style={{
        justifyContent:"space-around",
        position:"relative",
        top:"40vh",
      }}
      >
      <input type="date" value={date} style={{margin: "40px", position: "relative",left: "-20px", padding: "5px 5px 5px 5px"}}  onChange={handleDateChange}/>
      <input type="text" value={name} style={{margin: "40px", position: "relative",left: "20px", padding: "5px 5px 5px 5px"}} onChange={handleNameChange} />
      <input type="text" value={age} style={{position:"relative", left:"90px",padding: ""}}  onChange={handleAgeChange} />
      </footer>
      
      
    </div>
  );
};

export default ESignatureApp;
