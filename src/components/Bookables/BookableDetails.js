import React, {  useEffect, useState } from 'react';
import {days,sessions} from "../../static.json";

export default function BookableDetails({bookable}) {
  const [hasDetails, setHasDetails] = useState(false);
  // My set up to stop showing details unless demanded------>>>>> START
  const [titleIn, setTitleIn] = useState();
  //const [vari,setVari] = useState(1);

  useEffect(() => {
    if (bookable ){    
       setTitleIn(bookable.title);
       //setVari(num=>num + 1);
       //console.log('effect var',vari);
       //console.log('wejust set titleIn');
       if (bookable.title !== titleIn) {
         //console.log('the compare was',titleIn, bookable.title)
         //console.log('set details false')
        setHasDetails(false)
       }      
    };   
  },[bookable]);
  // console.log("titleIn", titleIn);
  // if (bookable) {
  //   console.log("bookable.title", bookable.title);
  // }
  // console.log('com var',vari);
   // My set up to stop showing details unless demanded------>>>>> END
 
//  if (hasDetails) {
//    console.log('we have details');
//    if (bookable.title !== titleIn) {
//           setHasDetails(false);
//          }     

//  }
 
  

    function toggleDetails () {
        setHasDetails(has => !has);
    }

   return bookable ? (
    <div className="bookable-details item">
      <div className="item-header">
        <h2>{bookable.title}</h2>
        <span className="controls">
          <label>
            <input
              type="checkbox"
              onChange={toggleDetails}
              checked={hasDetails}
            />
            Show Details
          </label>
        </span>
      </div>

      <p>{bookable.notes}</p>

      {hasDetails && (
        <div className="item-details">
          <h3>Availability</h3>
          <div className="bookable-availability">
            <ul>
              {bookable.days
                .sort()
                .map(d => <li key={d}>{days[d]}</li>)
              }
            </ul>
            <ul>
              {bookable.sessions
                .map(s => <li key={s}>{sessions[s]}</li>)
              }
            </ul>
          </div>
        </div>
      )}
    </div>
  ) : null;
}
