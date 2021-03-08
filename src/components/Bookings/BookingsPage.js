import React, { useState } from "react";

import BookablesList from "../Bookables/BookablesList";
import Bookings from "./Bookings";


import WeekPicker from "./WeekPicker";

export default function BookingsPage() {
  const [bookable, setBookable] = useState(null);

  return (
    <main className="bookings-page">
      <BookablesList bookable={bookable} setBookable={setBookable} />
      <Bookings bookable={bookable} />
      {/* <p>Bookings!</p>
        <WeekPicker date={new Date()}/> */}
    </main>
  );
}
