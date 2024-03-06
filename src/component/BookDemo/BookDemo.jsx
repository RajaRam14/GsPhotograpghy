import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookDemo.css';

const BookDemo = () => {
    const [serviceType, setServiceType] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(getCurrentTime());

    function getCurrentTime() {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    }

    const handleServiceTypeChange = (event) => {
        setServiceType(event.target.value);
    };

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Service Type:', serviceType);
        console.log('Date:', date.toLocaleDateString());
        console.log('Time:', time);
    };

    return (
        <div className="book-live-demo-container">
               <div>
                     <h2 className="BookDemo-title pink">Book Demo</h2>
              </div>
               <div className='Book-parent'>
                        <div className='Book-left'>
                            <Calendar className='BookCalender' onChange={handleDateChange} value={date} />
                        </div>
                        <div className='Book-right'>
                            <div className="liveDemoQuotes">
                                    <span>Elevate your visual presence with our exceptional photography services. Schedule your appointment and let's create something remarkable together </span>
                            </div>
                            <div className='BookServiceButtons'>
                                <select className= 'BookServiceSelect'value={serviceType} onChange={handleServiceTypeChange}>
                                <option className='BookServiceOption' value="">Select Service Type</option>
                                <option className='BookServiceOption'value="Portrait Photography">Portrait Photography</option>
                                <option className='BookServiceOption' value="Wedding Photography">Wedding Photography</option>
                                {/* Add more service options */}
                                </select>
                                <input  placeholder="select time " className='BookServiceTime' type="time" value={time}  onChange={handleTimeChange} />
                                <br />
                            </div>
                            <button className='BookDemoButton' onClick={handleSubmit}>Schedule</button>
                        </div>  
               </div>
        </div>
    );
};

export default BookDemo;
