import React, { useEffect, useState } from 'react'
import { IoPersonCircle } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import './style.css'
import { db } from '../firebase/firebasedata';
import { collection, addDoc, getDocs, query, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import DOMPurify from 'dompurify';
import essay from '../pages/images/essay.jpeg'


function Admin() {

  // Submition

  const [name, setName] = useState('')
  const [heading, setHeading] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')
  const [venu, setVenu] = useState('')
  const [date, setDate] = useState('')
  const [contact, setContact] = useState('')
  const [button_name, setButton_Name] = useState('')
  const [button_url, setButton_url] = useState('')


  const onSubmit = async (e) => {
    e.preventDefault();

    const sanitizedMessage = DOMPurify.sanitize(message);

    const events = { name, heading: sanitizedMessage, image, message: sanitizedMessage, venu: sanitizedMessage, date: sanitizedMessage, contact: sanitizedMessage, button_name, button_url };
    await addDoc(collection(db, "events"), events);
    setName('');
    setHeading('');
    setImage('');
    setMessage('');
    setVenu('');
    setDate('');
    setContact('');
    setButton_Name('');
    setButton_url('');
    getevents();
  };



  useEffect(() => {
    getevents();
  }, []);

  // edit data

  const editEvents = async (id, name, heading, image, message, venu, date, contact, button_name, button_url) => {
    await updateDoc(doc(db, 'events', id), {
      name,
      heading,
      image,
      message,
      venu,
      date,
      contact,
      button_name,
      button_url
    })
    getevents();
  }

  // Get data

  const [events, setevents] = useState([]);

  const getevents = async () => {
    const q = query(collection(db, "events"));
    const querySnapshot = await getDocs(q);
    let events = []
    querySnapshot.forEach((doc) => {
      events.push({ ...doc.data(), id: doc.id })
    })
    setevents(events)
  }


  const deleteevents = async (id) => {
    const dele_data = prompt("Confirm to Delete \n Type 'Delete'")

    if (dele_data === 'Delete') {
      await deleteDoc(doc(db, "events", id));
    } else {
      alert("Deletion canceled");
    }

    getevents();
  }

  useEffect(() => {
    getevents();
  }, []);


  // Login Form

  const [show, setShow] = React.useState(true);

  const toogle = () => {
    setShow(!show);
  }

  const check = () => {

    let userName = document.getElementById('username').value;
    let userPass = document.getElementById('userpass').value;
    console.log(userName);
    if (userName === 'EEE' && userPass === 'EEE') {
      toogle();
    }
    else {
      alert("Invalid username or password");
    }
  }

  // FeedBack

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
    <>
      <section className='admin-section'>

        <div className="card-container">
          {
            show ? <div className="wrapper">
              <form onSubmit={check}>
                <h1>Login</h1>
                <div className="input-box">
                  <input type="text" placeholder='Username' id='username' required />
                  <IoPersonCircle className='icon-admin' />
                </div>
                <div className="input-box">
                  <input type="password" placeholder='Password' id='userpass' required />
                  <FaLock className='icon-admin' />
                </div>
                <button type="submit">Login</button>
              </form>

            </div> : null
          }

          {
            !show ? <div>
              <section>
                <h2>Event Page</h2>
                <div className="submit">
                  <div className="eventstable">
                    <table>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Heading</th>
                          <th>Image</th>
                          <th>Message</th>
                          <th>Venu</th>
                          <th>Date</th>
                          <th>Contact</th>
                          <th>Button-name</th>
                          <th>Button-url</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          events.map((events) => (
                            <tr key={events.id}>
                              <td>{events.id}</td>
                              <td>{events.name}</td>
                              <td>{events.heading}</td>
                              <td>{events.image}</td>
                              <td>{events.message}</td>
                              <td>{events.venu}</td>
                              <td>{events.date}</td>
                              <td>{events.contact}</td>
                              <td>{events.button_name}</td>
                              <td>{events.button_url}</td>
                              <td>
                                <button className='btn' onClick={() => editEvents(events.id,
                                  prompt("Enter new Name", events.name),
                                  prompt("Enter new Heading", events.heading),
                                  prompt("Enter new Image_url", events.image),
                                  prompt("Enter new Message", events.message),
                                  prompt("Enter new Venu", events.venu),
                                  prompt("Enter new Date", events.date),
                                  prompt("Enter new Contact", events.contact),
                                  prompt("Enter new Button_Name", events.button_name),
                                  prompt("Enter new Button_url", events.button_url),
                                )}>Edit</button>
                                <button className='btn' onClick={() => deleteevents(events.id)}>Delete</button>
                              </td>
                            </tr>
                          ))
                        }
                        <tr key={events.id}>
                          <td>{events.id}</td>
                          <td><input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required /></td>
                          <td><input type="text" id='heading' value={heading} onChange={(e) => setHeading(e.target.value)} required /></td>
                          <td><textarea type="text" id='image' value={image} onChange={(e) => setImage(e.target.value)} /></td>
                          <td><textarea type="text" id='message' value={message} onChange={(e) => setMessage(e.target.value)} required /></td>
                          <td><textarea type="text" id='venu' value={venu} onChange={(e) => setVenu(e.target.value)} /></td>
                          <td><textarea type="text" id='date' value={date} onChange={(e) => setDate(e.target.value)} /></td>
                          <td><textarea type="text" id='contact' value={contact} onChange={(e) => setContact(e.target.value)} /></td>
                          <td><textarea type="text" id='button_name' value={button_name} onChange={(e) => setButton_Name(e.target.value)} /></td>
                          <td><textarea type="text" id='button_url' value={button_url} onChange={(e) => setButton_url(e.target.value)} /></td>
                          <td>
                            <button className='btn' onClick={onSubmit}>ADD</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>



            </div> : null
          }
        </div>
      </section>
    </>
  )
}

export default Admin