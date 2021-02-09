import React, {useState, Fragment,useReducer} from 'react';
import BookableDetails from './BookableDetails';
import BookablesList from './BookablesList';
import reducer from './reducer';

const initialState = {
    group: "Rooms",
    bookableIndex: 0,
    bookables: [],
    isLoading: true,
    error: false
};

export default function BookablesView ()  {
    //const [bookable, setBookable] = useState();
    const [state,dispatch] = useReducer(reducer,initialState);

    const bookablesInGroup = state.bookables.filter(
        b=> b.group === state.group
    );
    const bookable = bookablesInGroup[state.bookableIndex]
    return (
        <Fragment>
            <BookablesList state={state} dispatch={dispatch} />
            {/* <BookablesList bookable={bookable} setBookable={setBookable}/> */}
            <BookableDetails bookable={bookable} />
        </Fragment>
    )
}
