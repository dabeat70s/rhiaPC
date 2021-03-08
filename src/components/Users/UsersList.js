import { Fragment, useEffect, useState } from "react";
import getData from "../../utils/api";
import Spinner from "../UI/Spinner";
//import { users } from "../../static.json";

export default function UsersList({user, setUser}) {
  const [users, setUsers] = useState(null);
  //const [userIndex, setUserIndex] = useState(0);
  //const user = users?.[userIndex];
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // fetch("http://localhost:3001/users")
    //   .then(resp => resp.json())
    //   .then(data => setUsers(data));
    getData("http://localhost:3001/users")
      // .then(resp => resp.json())
      .then((data) => {
        setUser(data[0]); // set initial user to first (or undefined)
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

    // async function getUsers() {
    //   const resp = await fetch("http://localhost:3001/users");
    //   const data = await resp.json();
    //   setUsers(data);
    // }
    // getUsers();
  }, [setUser]);

  if (isLoading) {
    //(users === null) {
    return (
      <p className="loading-text">
        <Spinner /> Loading Users...
      </p>
    );
  }

  if (error) {
    return <p className="loading-text">{error.message}</p>;
  }

  return (
    <Fragment>
      <ul className="users items-list-nav">
        {users.map((u) => (
          <li key={u.id} className={u.id === user?.id ? "selected" : null}>
            <button className="btn" onClick={() => setUser(u)}>
              {u.name}
            </button>
          </li>
        ))}
      </ul>

      {/* <ul className="users items-list-nav">
        {users.map((user, i) => (
          <li key={user.id} className={i === userIndex ? "selected" : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul> */}
      {/* {user && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{user.name}</h2>
            </div>
            <div className="item-details">
              <h3>{user.title} </h3>
              <p>{user.notes} </p>
            </div>
          </div>
        </div>
      )} */}
    </Fragment>
  );
}
