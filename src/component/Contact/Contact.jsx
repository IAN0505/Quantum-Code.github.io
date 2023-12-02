import React from 'react';
import C from './C';
import ContactSec from './ContactSec';
import Accordion from './Accordion';
import Footer from '../Footers/Footers';
import Head from '../common/heading/Head';
import TopC from './TopC';



const Contact = () => {
  return (
    <>
      <Head />
      <TopC />
      <C title="Your Title" />
      <ContactSec />
      <Accordion />
      <Footer />
    </>
  );
};

export default Contact;
