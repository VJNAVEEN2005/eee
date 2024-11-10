import React, { useState, useEffect } from 'react'
import './style.css'
import { db } from '../firebase/firebasedata'
import { doc, getDocs, collection, deleteDoc, query } from 'firebase/firestore'
import poster from './images/poster.jpeg'
import essay from './images/essay.jpeg'

function Events() {

  // get Data

  const [feedback, setFeedback] = useState([]);

  const getFeedback = async () => {
    const q = query(collection(db, "events"));
    const querySnapshot = await getDocs(q);
    let feedback = []
    querySnapshot.forEach((doc) => {
      feedback.push({ ...doc.data(), id: doc.id })
    })
    setFeedback(feedback)
  }

  const deleteFeedback = async (id) => {
    await deleteDoc(doc(db, "events", id));
    getFeedback();
  }

  useEffect(() => {
    getFeedback();
  }, []);


  return (
    <>
      <section className='words'>
        <p>We are happy to announce that the IE(I) Electrical Engineering Division has planned to conduct events in the coming days. We encourage active participation from our students. The details of the events are given below. Those interested in participating are kindly requested to register for the events. Thank you.</p>
      </section>
      <section>
        <h2 className='fixed'>EVENTS</h2>
        <div className="card-container">

          {

            feedback.map((feedback) => (
              <div className="card">
                <img src={feedback.image} className='img' />
                <div className="text">
                  <h3 dangerouslySetInnerHTML={{ __html: feedback.heading }}></h3><br />
                  <h4>Theme:</h4>
                  <p dangerouslySetInnerHTML={{ __html: feedback.message }}></p><br />
                  <h4>Venue:</h4>
                  <p dangerouslySetInnerHTML={{ __html: feedback.venu }}></p><br />
                  <h4>Date:</h4>
                  <p dangerouslySetInnerHTML={{ __html: feedback.date }}></p><br />
                  <h4>Contact:</h4>
                  <p dangerouslySetInnerHTML={{ __html: feedback.contact }}></p><br /><br />
                  <a className='bt' href={feedback.button_url} target='blank'>{feedback.button_name}</a>
                </div>
              </div>
            ))

          }


        </div>


      </section>

    </>
  )
}

export default Events