import React,{ useState } from 'react';
export default function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [check,setCheckbox] = useState(false);
  const [radio,setRadiobutton] = useState(false);
  const validateForm = (e)=>{
     e.preventDefault();
     if(name === "" || email === "" || message === ""){
        return alert("Please fill all the fields");
     }
     if(!email.includes("@") || !email.includes(".") || email.indexOf("@") > email.lastIndexOf(".")){
        return alert("Please enter a valid email");
     }
     if(message.length < 10){
        return alert("Message should be at least 10 characters long");
     }
     alert("Form submitted successfully");
  }
  return (
    <div>
      <h1>CONTACT US</h1>
      <form onSubmit={validateForm}>
        <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        required /><br/><br/>
        <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
        required /><br/><br/>
        <textarea 
        placeholder="Enter your message" 
        value={message} 
        onChange={(e)=>setMessage(e.target.value)}
        required></textarea><br/><br/>
        <input
        type="checkbox"
        value={check}
        onChange={(e)=>setCheckbox(e.target.value)}
        required></input><ul>Yes</ul><br/>
        {/* <input
        type="check"
        value={check}
        onChange={(e)=>setCheckbox(e.target.value)}
        required></input><br/><br/> */}
        <input
        type="radio"
        value={radio}
        onChange={(e)=>setRadiobutton(e.target.value)}
        required></input><ul>YES</ul><br/>
        {/* <input
        type="radio"
        value={radio}
        onChange={(e)=>setRadiobutton(e.target.value)}
        required>That</input><br/><br/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}