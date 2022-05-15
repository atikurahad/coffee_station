import React from 'react';
import './Footer.css'
import { Footer } from 'react-daisyui';

const Foot = () => {
  return (
    <>

        <Footer className=" custom-footer p-10 bg-neutral text-neutral-content mt-[3rem]">
          <Footer.Title>Services</Footer.Title>
          <div className="footer-link">
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
            </div>

          <Footer.Title>Company</Footer.Title>
          <div className="footer-link">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="footer-link">
            <Footer.Title>Legal</Footer.Title>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </Footer>

    </>
  );
};

export default Foot;
