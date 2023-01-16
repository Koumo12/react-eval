import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function ContactForm () {
    const [state, handleSubmit] = useForm("xlekrakp");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="container p-5">
            <div className="row p-3 ">
                <div className="col-md-12 text-center fs-2 fw-bold">
                    Contact
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 border bordure" >
                    <form onSubmit={handleSubmit}>
                        <div className="row mt-5">
                            <div className="col-lg-2 pb-5">
                                <label  htmlFor="email">
                                    Email:
                                </label>
                            </div>
                            <div className="col-lg-10">
                                <input className="form-control"
                                    id="email"
                                    type="email" 
                                    name="email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col-lg-2 pb-5">
                                <label  htmlFor="email">
                                    Message:
                                </label>
                            </div>
                            <div className="col-lg-10">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="submit">
                                <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>            
        </div>
    )
}

export default ContactForm;