import React from 'react'
import './style.css'
import './Curriculum.css'

function Curriculum() {
  return (
    <>

      <section className='flex-curriculum'>

        <div className="card-container">
          <div className="card-curriculum">
            <div className="text">
              <h2>B.Tech</h2>
              <h3>AY 2014-15</h3>
              <a className='bt' href='https://drive.google.com/file/d/1yy-ZL45Lz0vz2wxpkeLvbThfpamyRkDr/view' target='blank'>Download</a>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-curriculum">
            <div className="text">
              <h2>B.Tech</h2>
              <h3>AY 2018-19</h3>
              <a className='bt' href='https://drive.google.com/file/d/1x-SvfsEK8jm_-eqw-8tI8gk3oLvp7kMH/view' target='blank'>Download</a>
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-curriculum">
            <div className="text">
              <h2>B.Tech</h2>
              <h3>AY 2020-21</h3>
              <a className='bt' href='https://drive.google.com/file/d/1ZYF24gmt_Y9S2L2ZMpBumnif0yUbYLWO/view' target='blank'>Download</a>
            </div>
          </div>
        </div>


      </section>
      
      <section className='flex-curriculum'>
      <div className="card-container">
          <div className="card-curriculum">
            <div className="text">
              <h2>M.Tech</h2>
              <h3>AY 2020-21</h3>
              <a className='bt' href='https://cms.ptuniv.edu.in/file_contents/syllabus/17_MT_EE_ED_2021.pdf' target='blank'>Download</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Curriculum