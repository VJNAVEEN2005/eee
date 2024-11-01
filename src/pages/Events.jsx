import React from 'react'
import './style.css'
import images from './images.jpg'
import poster from './images/poster.jpeg'
import essay from './images/essay.jpeg'

function Events() {
  return (
    <>
      <section className='words'>
        <p>We are happy to announce that the IE(I) Electrical Engineering Division has planned to conduct events in the coming days. We encourage active participation from our students. The details of the events are given below. Those interested in participating are kindly requested to register for the events. Thank you.</p>
      </section>
      <section>
        <h2 className='fixed'>EVENTS</h2>
        <div className="card-container">
          <div className="card">
            <img src={poster} className='img' />
            <div className="text">
              <h3>Digital Poster Designing</h3><br />
              <h4>Theme:</h4>
              <p>Share vision for a better world: Standards for the changing climate.</p><br />
              <h4>Venue:</h4>
              <p>Semina Hall, EEE Dept.</p><br />
              <h4>Last Date:</h4>
              <p>November 6, 2024 - submissionn deadline of poster design</p><br />
              <h4>Contact:</h4>
              <p>Austin Gabriel C - 7639124728</p>
              <p>Mugilan J - 9655114674</p>
              <p>Varshini K - 9944098315</p><br /><br />
              <a className='bt' href='https://docs.google.com/forms/d/e/1FAIpQLSdOvlTfJ-9DWyjvb4jmzb1w7RavxJpv-GofwB0oLb4FbCMJMA/viewform' target='blank'>Submit</a>

            </div>
          </div>

          <div className="card">
            <img src={essay} className='img' />
            <div className="text">
              <h3>Essay Writing</h3><br />
              <h4>Theme:</h4>
              <p>Share vision for a better world: Standards for the changing climate.</p><br />
              <h4>Venue:</h4>
              <p>Respective Classrooms.</p><br />
              <h4>Date:</h4>
              <p>November 4, 2024 - For 2nd</p>
              <p>November 5, 2024 - For 3rd</p>
              <p>November 8, 2024 - For 4th</p><br />
              <h4>Contact:</h4>
              <p>Vishnupriya PV - 8590919960</p>
              <p>Roy VS - 9385923213</p>
              <p>Kevin T - 9944336014</p><br /><br />
              <a className='bt' href='https://docs.google.com/document/d/1vCyL1cKM6R9qWpP44JGXky2-on9aRjVX6UKAGmWHUtA/edit?usp=sharing' target='blank'>Guidlines</a>
            </div>
          </div>


        </div>


      </section>

    </>
  )
}

export default Events