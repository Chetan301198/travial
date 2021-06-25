import React from 'react';
import "./style.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Social = () => {

    const socialData = [
        {
            icon:FaFacebookF,
            desc: "@ChetanBhalerao",
            link: "https://facebook.com",
        },
        {
            icon:FaInstagram,
            desc: "@ChetanBhalerao",
            link: "https://instagram.com",
        },
        {
            icon:FaLinkedin,
            desc: "@ChetanBhalerao",
            link: "https://linkedin.com",
        },
    ];

    return (
        <>
           <section className="social section">
               <h2 className="section-title">Social</h2>
               <div className="social__container bd-grid">
                   {socialData.map(val => {
                    return <a href={val.link} target="_blank" className="social__link">
                        <val.icon className="social__icon" />
                        <span>{val.desc}</span>
                    </a>
                   })}
               </div>
           </section>
        </> 
    )
};

export default Social;
