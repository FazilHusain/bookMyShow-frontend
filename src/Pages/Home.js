import React, { useContext } from "react";
import SelectMovie from "../Components/SelectMovie";
import "../Css/Home.css";
import LastBookingDetail from "../Components/LastBookingDetail";
import TimeSchedule from "../Components/TimeSchedule";
import SelectSeats from "../Components/SelectSeats";
import BsContext from "../Context/BsContext";
import Modal from "../Components/ModalComponent";
const Home = () => {
  const context = useContext(BsContext);

  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  //check whether any seat has a negative value
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select  a movie!");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    } else {
      //validation successfull
      handlePostBooking();
    }
  };

  return (
    <>
      <Modal />
      <div className="container">
        <div className="wrapper">
          <div className="select_movie_component">
            <SelectMovie />
          </div>
          <div className="last_booking_details_container">
            <LastBookingDetail />
          </div>
        </div>
        <div className="timer_seats_container">
          <TimeSchedule />
          <SelectSeats />
          <button
            className="BN_btn"
            onClick={() => {
              handleBookNow();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
