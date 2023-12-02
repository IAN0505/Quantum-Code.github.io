import React from 'react'
import CourseSec from './CourseSec'
import CourseCert from './CourseCert'
import Footer from '../Footers/Footers'
import Head from '../common/heading/Head'


const Course = () => {
  return (
    <>
        <Head />
        <CourseCert />
        <CourseSec />
        <Footer />
    </>
  )
}

export default Course