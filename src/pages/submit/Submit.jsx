import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebasedata';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query } from 'firebase/firestore';
import './Submit.css'

function Submit() {

    const [feedback, setFeedback] = useState([]);

    const getFeedback = async () => {
        const q = query(collection(db, "feedback"));
        const querySnapshot = await getDocs(q);
        let feedback = []
        querySnapshot.forEach((doc) => {
            feedback.push({ ...doc.data(), id: doc.id })
        })
        setFeedback(feedback)
    }

    const deleteFeedback = async (id) => {
        await deleteDoc(doc(db, "feedback", id));
        getFeedback();
    }

    useEffect(() => {
        getFeedback();
    }, []);

    return (
        <section>
            <div className="submit">
                <div className="feedbacktable">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                feedback.map((feedback) => (
                                    <tr key={feedback.id}>
                                        <td>{feedback.id}</td>
                                        <td>{feedback.name}</td>
                                        <td>{feedback.message}</td>
                                        <td>
                                            <button className='btn' onClick={() => deleteFeedback(feedback.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Submit