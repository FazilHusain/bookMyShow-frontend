import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);

  //error message
  const [errorMessage, setErrorMessage] = useState("");
  const [movie, changeMovie] = useState("");
  const [time, changeTime] = useState("");

  const [noOfSeat, changeNoOfSeat] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });

  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const handlePostBooking = async () => {
    const res = await fetch(
      `https://bookmyshow-backend-00ak.onrender.com/api/booking`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
      }
    );
    const data = await res.json();

    setErrorPopup(true);
    setErrorMessage(data.message);

    if(res.status === 2000){
      changeMovie("");
      changeTime("");
      changeNoOfSeat({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
      });
      setLastBookingDetails(data.data);

      window.localStorage.clear(); 
    }

  };
  
  const handleGetBooking = async() => {
    const response = await fetch(
      `https://bookmyshow-backend-00ak.onrender.com/api/booking`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    // Setting last booking details recieved from the backend.
    setLastBookingDetails(data.data);
  }

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));
    if(movie){
      changeMovie(movie)
    }
    if(slot){
      changeTime(slot);
    }
    if(seats){
      changeNoOfSeat(seats);
    }
  },[])
  return ( 
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetBooking,
        errorMessage,
        errorPopup,
        setErrorMessage,
        setErrorPopup,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeat,
        lastBookingDetails,
        setLastBookingDetails,
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};

export default BsState;
