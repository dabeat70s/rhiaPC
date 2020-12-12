import { Fragment, useState } from "react";
import { users } from "../../static.json";

export default function UsersList() {
  const [userIndex, setUserIndex] = useState(0);
  const user = users[userIndex];

  return (
    <Fragment>
      <ul className="users items-list-nav">
        {users.map((user, i) => (
          <li key={user.id} className={i === userIndex ? "selected" : null}>
            <button className="btn" onClick={() => setUserIndex(i)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      {user && (
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
      )}
    </Fragment>
  );
}
