import React, { useState } from 'react';

const Contact = () => {

    const [input, setInput] = useState({name: '', email: ''})

    let name, value
    const getInputData = (e) =>{
          
          name = e.target.name
          value = e.target.value

          setInput({...input, [name]:value})
    }

    const submitInput = async (e) =>{
        e.preventDefault()
        const {name, email} =  input
         
        if(name && email){
     
        const res = await fetch(
         'https://signinform-c8b53-default-rtdb.firebaseio.com/signInDataRecords.json',{
             
             method: "POST",
             headers: {
                 "Content-Type" : "application/json",
             },
             body: JSON.stringify({
                 name, 
                 email   
             }),
         }
         );
     
         if(res){
             setInput({
             name: '',
             email: ''
         })
             alert('Data stored')
         }else{
             alert('Response is fail')
         }
         
       }else{
           alert('Please fill data')
     }
     
     }
     

    return (
        <>
           <div className='container'>
             <div>
             <form onSubmit={submitInput}>
                <h2>Sign in</h2>
                <div class="input-container">
                    <i class="fa fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="Username" onChange={getInputData}  name="name" value={input.name}/>
                </div>

                <div class="input-container">
                    <i class="fa fa-envelope icon"></i>
                    <input class="input-field" type="text" placeholder="Email" onChange={getInputData}  name="email" value={input.email}/>
                </div>
  
                <button type="submit" class="btn">Register</button>
            </form>
             </div>
           </div>
        </>
    );
};

export default Contact;