import React from 'react';
import emailjs from 'emailjs-com';

const submit = (e) =>{
    e.preventDefault();
    emailjs
    .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
    )
    .then(
        (result) => {
            console.log(result.text);
            alert("Success");
        },
        (error) => {
            console.log(error.text);
            alert("Failed ", error);
        }
    );
};

const isValidEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

const ContactForm = () => {

    return(
        <div className="contact-wrapper">
            
            <div className="form-wrapper">
                <form onSubmit={submit}>
                    <input className="name-input" type="text" name="name" placeholder="Name" required></input><br></br>

                    <input className="email-input" type="email" name="email" placeholder="Email" required></input>

                    <textarea className="message" name="message" rows="5" placeholder="Type your email here..."></textarea><br></br>

                    <button type="submit" value="Send" className="send-button" onClick={isValidEmail} required>Send</button>
                </form>
            </div>

            <div className="info">
                <p className="info-bold">Contact:</p>
                <p className="info-light">stp40@case.edu</p>
                <p className="info-bold">Based in:</p>
                <p className="info-light">Cleveland, OH</p>
                <p className="info-light">Feel free to contact over career aspects, <br></br>
                    or if you just want to have a chat!</p>
            </div>
        </div>
    );
    

}

require('dotenv').config()
export default ContactForm;