import React from 'react'
import './Course.css'
import SchoolIcon from '@mui/icons-material/School';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const CourseCert = () => {
  return (
    <>
        <img className="Cour" src={process.env.PUBLIC_URL + "/image/course.png"} alt="" />
        <section id="features">
        <h1>Cetificate</h1>
        <p class="p">Free Certification and Awards</p>
        <div class="fea-base">
            <div class="fea-box">
                <i> <SchoolIcon /> </i>
                <h3>Certificate Of Completion</h3>
                <p>Compliting all the requirements</p>
            </div>
            <div class="fea-box">
                <i> <DocumentScannerIcon /> </i>
                <h3>Certificate Of Masteral</h3>
                <p>Fully build specialized in any programming language </p>
            </div>
            <div class="fea-box">
                <i> <EmojiEventsIcon /> </i>
                <h3>Best In Awards</h3>
                <p>Achieve high score in activity</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default CourseCert