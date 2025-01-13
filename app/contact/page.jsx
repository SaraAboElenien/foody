import React from 'react'
import '../contact/Contact.css'

const ContactPage = () => {
    return (
        <div className="contact-page min-vh-100 d-flex flex-column justify-content-center">
            <div className="container">
                <h1 className="text-center text-white mb-4">Contact Us</h1>

                <div className="text-center mb-5">
                    <p className="text-white contact-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info">
                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-circle">
                                    <i class="fa-solid fa-house"></i>
                                </div>
                                <div className="ms-3">
                                    <h3 className="text-infoo mb-0">Address</h3>
                                    <p className="text-white mb-0">
                                        4671 Sugar Camp Road,<br />
                                        Owatonna, Minnesota,<br />
                                        55060
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-circle">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="ms-3">
                                    <h3 className="text-infoo mb-0">Phone</h3>
                                    <p className="text-white mb-0">571-457-2321</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-circle">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className="ms-3">
                                    <h3 className="text-infoo mb-0">Email</h3>
                                    <p className="text-white mb-0">ntamerrwael@mfano.ga</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body p-4">
                                <h2 className="card-title mb-4">Send Message</h2>
                                <form>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control border-0 border-bottom"
                                            placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control border-0 border-bottom"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            className="form-control border-0 border-bottom"
                                            rows="3"
                                            placeholder="Type your Message..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-info text-white w-100 py-2"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;