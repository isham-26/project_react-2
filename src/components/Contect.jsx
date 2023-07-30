import React, { useState } from "react";
import "../styles/Contect.css"
import Footer from "./Footer";
const Contect=({setdata}) => {
    const [form,setForm]=useState({});
    const handle=(e) =>{
        e.preventDefault();
        setdata(form)
        setForm(
            {
                Name:"",
                email:"",
                text:"",
                feedback:"",
            }
        );
        
        
       
    }
    return(
        <>
        <div className="contact">
            <div className="form">
                <form onSubmit={(e)=>{handle(e)}}>
                    <div >
                        <label>Name:</label>
                        <input type="text" value={form.Name} placeholder="Abc" onChange={(e)=>{
                            setForm({...form,Name:e.target.value})
                        }}/>
                    </div>
                    <div >
                        <label>Email:</label>
                        <input type="email"  value={form.email} placeholder="Abc@gmail.com" onChange={(e)=>{
                            setForm({...form,email:e.target.value})
                        }}/>
                    </div>
                    <div>
                        <label>Text:</label>
                        <input type="text" value={form.text} placeholder="Tell us about your problem..." onChange={(e)=>{
                            setForm({...form,text:e.target.value})
                        }}/>
                    </div>
                    <div>
                        <label>Feedback:</label>
                        <input type="text" value={form.feedback} placeholder="Typing" onChange={(e)=>{
                            setForm({...form,feedback:e.target.value})
                        }}/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contect;