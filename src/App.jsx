import { useState } from 'react';
import './App.css'
import axios from 'axios';
import TableComponent from './components/tableComponent';
function App() {

  const [contact,setContact] = useState({
    'emails':[],
    'phoneNumbers':[],
    'primaryContatctId':'',
    'secondaryContactIds':''
  })
  const [orders,setOrders] = useState([]);
  const [details,setDetails] = useState({
      'email':'',
      'phoneNumber':''
  })


  const handleChange = (data) => {
    setDetails({...details,...data});
  }

  const handleSubmit = async () => {
    try {
      console.log('my email password is ', details);

      const response = await axios.post(
        'https://bitespeed-backend-n61l.onrender.com/orders', 
        JSON.stringify(details), 
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const {contact,orders} = response?.data?.data;
      setOrders(orders);
      setContact(contact);
    } catch (err) {
      console.log("facing error while submitting data ", err);
    }
  }
  

  console.log("orders ",orders);
  console.log("contact",contact);
  return (
    
    <div className='container'>

      <h2 className='heading'>BiteSpeed  Backend Task</h2>
      <div className='sub-container'>
        <label className='label'>Email address</label>
        <input
          type="email"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={(e)=>handleChange({'email':e.target.value})}
        />
      </div>
      <div className='sub-container'>
        <label className='label'>Enter PhoneNumber</label>
        <input
          type="PhoneNumber"
          id="phoneNumber"
          placeholder="Enter PhoneNumber"
          onChange={(e)=>handleChange({'phoneNumber':e.target.value})}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>

      <br/>
      <br/>
      <div style={{marginTop:'3rem'}}>
        <p> primaryContatctId : <span>{contact?.primaryContatctId}</span>
        </p>
        <p> emails : <span>{contact?.emails.join(' , ')}</span>
        </p>
        <p> phoneNumbers : <span>{contact?.phoneNumbers.join(' , ')}</span>
        </p>
        <p> secondaryContactIds : <span>{contact?.secondaryContactIds}</span>
        </p>
        <TableComponent  orders ={orders}/>
      </div>
      
    </div>
  );
}

export default App;
