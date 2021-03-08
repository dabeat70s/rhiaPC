import {useReducer, useState,useRef} from "react";
import reducer from "./weekReducer";
import {getWeek} from "../../utils/date-wrangler";
import {FaChevronLeft, FaCalendarDay, FaChevronRight, FaCalendarCheck} from "react-icons/fa";

export default function WeekPicker ({dispatch}) {
  //const [week, dispatch] = useReducer(reducer, date, getWeek);
 
  const textboxRef = useRef();  //we using now
  function goToDate () {
    dispatch({
      type: "SET_DATE",
      payload: textboxRef.current.value //dateText //textboxRef.current.value
    })
  }
  //const [dateText, setDateText] = useState("");

  return (
    <div>
      <p className="date-picker">
        <button
          className="btn"
          onClick={() => dispatch({type: "PREV_WEEK"})}
        >
          <FaChevronLeft/>
          <span>Prev</span>
        </button>

        <button
          className="btn"
          onClick={() => dispatch({type: "TODAY"})}
        >
          <FaCalendarDay/>
          <span>Today</span>
        </button>

        <span>
          <input
          //onKeyPress={ (e)  => e.code === "Enter1" ? goToDate() : console.log(e.code)}
          onKeyDown={ (e)  => e.key === "Enter" ? goToDate() : null}
          type="text"
         ref={textboxRef} // we using now
         //value= {dateText}
         //onChange={(e) => setDateText(e.target.value)}
          placeholder="e.g. 2020-09-02"
          defaultValue="2021-01-01"
          />
          <button
          className="go btn"
          onClick={goToDate}
          >
            <FaCalendarCheck/>
            <span>GO</span>
          </button>
        </span>

        <button
          className="btn"
          onClick={() => dispatch({type: "NEXT_WEEK"})}
        >
          <span>Next</span>
          <FaChevronRight/>
        </button>
      </p>
      {/* <p>
        {week.start.toDateString()} - {week.end.toDateString()}
      </p> */}
    </div>
  );
}