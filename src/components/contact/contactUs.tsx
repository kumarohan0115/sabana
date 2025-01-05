import React, { useState } from 'react'
import './contactUs.scss'
import FormField from './contactus.json'
import db from '.././../utils/firebase'
import Icon from 'components/icon/icon'
// import firebase from 'firebase/compat/app';

const ContactUs: React.FC = () => {
    const [input, setInput] = useState("");
    const [formValue, setFormValue] = useState("");

    const submitFormData = (e) => {
        e.preventDefault();
        if (input !== "") {
            db.collection("customForm").doc().collection("messages").add({

            });
        }
        setInput("");
        document.getElementById("inputChat").focus();
    };

    return (
        <div className='contactUs' id='contact'>
            <div className="contactUs__form">
                <div className="left-card">
                    <h2>{FormField.title}</h2>
                    <p>{FormField.subHeading}</p>
                    <p>We`ll create high quality content and build future era.</p>

                    <div className='contactNumber'>
                        <Icon name="phone" customClass="white-icon" />
                        {
                            FormField.mobileNumer.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <p>{item}</p>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <div className='contactEmail'>
                        <Icon name="email" customClass="white-icon" />
                        {
                            FormField.emailAddrsss.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <p>{item}</p>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <div className='contactAddress'>
                        <Icon name="location" customClass="white-icon" />
                        {
                            FormField.addresses.map((item, index) => {
                                return (
                                    <ul key={index}>
                                        <p>{item.address}, {item.city}, {item.state}</p>
                                    </ul>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="right-card">
                    <form className='form-container'>
                        {
                            FormField.label.map((item, index) => {
                                return (
                                    <div className="form-group" style={{ width: item.width }} key={index}>
                                        <label htmlFor={item.name}>{item.name}</label>
                                        <input type={item.type} id={item.name} value={formValue} onChange={(e)=>setFormValue(e.target.value)} name={item.name} placeholder={item.placeholder} required />
                                    </div>
                                )
                            })
                        }
                        <div className="form-group form-group--submit">
                            <button type="submit" value="Submit" onClick={submitFormData}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
