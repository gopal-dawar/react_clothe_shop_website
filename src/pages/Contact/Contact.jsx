import React, { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        }
    };

    return (
        <section className="contact-us" id="contact">
            <div className="overlay"></div>
            <div className="container">
                <h2>Contact Us</h2>
                <p className="subtitle">
                    Have questions? We're here to help. Send us a message anytime.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "error" : ""}
                        />
                        {errors.name && <small className="error-msg">{errors.name}</small>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "error" : ""}
                        />
                        {errors.email && (
                            <small className="error-msg">{errors.email}</small>
                        )}
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? "error" : ""}
                        ></textarea>
                        {errors.message && (
                            <small className="error-msg">{errors.message}</small>
                        )}
                    </div>

                    <button type="submit" className="btn-submit">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
