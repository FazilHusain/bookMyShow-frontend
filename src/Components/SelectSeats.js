import React, { useState, useContext } from "react";
import { seats } from "../data";
import "../Css/SelectSeats.css";
import BsContext from "../Context/BsContext";
import SeatInputs from "./SeatInputs";

const SelectSeats = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeat } = context;

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats :-</h1>
        <div className="SS_main_container">
          {seats.map((el, index) => {
            return (
              <SeatInputs
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={el}
                changeNoOfSeat={changeNoOfSeat}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;