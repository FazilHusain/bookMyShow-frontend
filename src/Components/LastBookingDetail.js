import React, { useContext, useEffect } from 'react'
import '../Css/LastBookingDetails.css'
import { seats } from '../data'
import BsContext from '../Context/BsContext'
const LastBookingDetail = () => {
  const context = useContext(BsContext);
  
  const {handleGetBooking, lastBookingDetails} = context;
  
  useEffect(() => {
    handleGetBooking(); // Call the API to get last booking details
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastBookingDetails]);


  return (
    <div className='last-booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking Details:</h2>
      {lastBookingDetails ? 
     ( <>
      <div className='seats_container'>
        <p className='seats_header'>Seats:  </p>
        <ul className='seats'>
          {seats.map((seat,index) => {
            return(
              <li className='seat_value' key={index}>
              (seat) : {Number(lastBookingDetails.seats[seat])}
            </li>
            )
          })}
        </ul>
      </div>
      <p className='slot' style={{textAlign: "left"}}>Slot: {lastBookingDetails.slot}</p>
      <p className='movie'>Movie: {lastBookingDetails.movie}</p>
    </>) : ( <p className="no_previous_booking_msg">No Previous Booking Found!</p>)
    }
    </div>
  )
}

export default LastBookingDetail
