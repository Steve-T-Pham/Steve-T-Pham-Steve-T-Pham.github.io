import React from 'react';

const ContactForm = () => {

    return(
        <form className="contact">
            {/*<input placeholder="Enter text" value={} onChange={() => {}}></input>*/}
            <label className="label">Name</label>
            <input className="name-input"></input>
            <label className="label">Email</label>
            <input className="email-input"></input>

        </form>
    );

}

export default ContactForm;