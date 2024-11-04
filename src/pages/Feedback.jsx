import React, { useEffect, useState } from 'react'
import './Feedback.css'
import { db } from '../firebase/firebasedata'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query } from "firebase/firestore";

function Feedback() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [feedback, setFeedback] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const feedback = { name, message };
        await addDoc(collection(db, "feedback"), feedback);
        setName('');
        setMessage('');
        getFeedback();
    };

    const getFeedback = async () => {
        const q = query(collection(db, "feedback"));
        const querySnapshot = await getDocs(q);
        let feedback = []
        querySnapshot.forEach((doc) => {
            feedback.push({ ...doc.data(), id: doc.id })
        })
        setFeedback(feedback)
    }


    useEffect(() => {
        getFeedback();
    }, []);

    return (
        <section>

            <div className="feedback">
                <div className="box">
                <h1>Feedback</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message">Message:</label>
                        <textarea type="text" id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <button type='submit' className='btn'>
                        Submit
                    </button>
                </form>
                </div>
            </div>

        </section>
    )
}

export default Feedback