import React, { useState } from "react";

// Validation functions
const validateName=(name)=>{
    if(!name) return "Name is required";
    if (name.lenght <2) return 'Name must be at least 2 characters';
    return '';
};
const validateEmail=(email)=>{
    if(!email) return "Email is required";
    const emailRegex =/[\s@]+@[\s@]+\.[\s@]+/;
    if (emailRegex.test(email)) return 'Email is invalid';
    return '';
};

const validateAge=(age)=>{
    if(!age) return "Age is required";
    const ageNum =Number(age);
    if (isNaN(ageNum)) return 'Age must be a number';
    if (ageNum<18) return 'You must be at least 18'
    return '';
};

function RegistrationForm(){
    // Form field state
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[age, setAge]=useState("");

    // Error state(used later)
    const[nameError, setNameError]=useState("");
    const[emailError, setEmailError]=useState("");
    const[ageError, setAgeError]=useState("");

    const[success, setSuccess]=useState(false);

    // Submit handler (basic, no validation yet)
    const handleSubmit=(e)=>{
        e.preventDefault(); 

        const nameErr=validateName(name);
        const emailErr=validateName(email);
        const ageErr=validateName(age);

        setNameError(nameErr);
        setEmailError(emailErr);
        setAgeError(ageErr);

        if (nameErr || emailErr || ageErr) {
            setSuccess(false); //stop successs if errors exist
            return;
        }
        setSuccess(true);

        setName("");
        setEmail("");
        setAge("");

        alert("Form submitted successfully!");
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Name" value={name} onChange={(e)=>{ const value=e.target.value; setName(value); setNameError(validateName(value)); }}></input>
                {nameError && <p style={{color:"red"}}>{nameError}</p>}
            </div>

            <div>
                <input type='email' placeholder="Email" value={email} onChange={(e)=>{ const value=e.target.value; setEmail(value); setEmailError(validateEmail(value)); }}></input>
                {emailError && <p style={{color:"red"}}>{emailError}</p>}
            </div>

            <div>
                <input type='number' placeholder="Age" value={age} onChange={(e)=>{ const value=e.target.value; setAge(value); setAgeError(validateAge(value)); }}></input>
                {ageError && <p style={{color:"red"}}>{ageError}</p>}
            </div>

            <button type='submit'>Submit</button>

            {success && <p style={{color:'green'}}> Registration successfull!</p>}
        </form>
    );

}

export default RegistrationForm;