import React from 'react'
import './TandP.css'
import aptitude from './images/aptitude.png'
import coding from './images/coding.png'

function TandP() {
    return (
        <>
            <section>
                <div className="tandp-container">

                    <div className="tandp-card">
                        <img src={aptitude} className='img' />
                        <h2>Aptitiude</h2>
                        <div className="text">
                            <p>View the file : <a className='bt' href='https://firebasestorage.googleapis.com/v0/b/vjnaveen-portfolio.appspot.com/o/Quantitative_Aptitude.pdf?alt=media&token=44e8c8a8-dbc5-4a62-8a90-226ef594b245' target='blank'>PDF</a></p>
                        </div>
                    </div>

                    <div className="tandp-card">
                        <img src={coding} className='img' />
                        <>
                        <h2>Coding</h2><br />
                        <p>Basic -12 Questions  <br />(C++ and Java)</p>
                        </>
                        <div className="text">
                            <p>View the file : <a className='bt' href='https://firebasestorage.googleapis.com/v0/b/vjnaveen-portfolio.appspot.com/o/interview.pdf?alt=media&token=45dff196-8d9c-4070-8c3e-119bf9fb7b46' target='blank'>PDF</a></p>
                        </div>
                    </div>

    

                </div>


            </section>

        </>
    )
}

export default TandP