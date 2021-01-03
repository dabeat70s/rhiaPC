// import { users } from "../../static.json"

import {useEffect, useState} from "react";
import Spinner from "../UI/Spinner";

export default function UserPicker() {
    const [users, setUsers] = useState(null);
    useEffect(() => {

        fetch("http://localhost:3001/users")
          .then(resp => resp.json())
          .then(data => setUsers(data));
    
      }, []);
    
      if (users === null) {
        return <Spinner/>
      }
    return (
        <select>
            <option key={0}>Users</option>
            {users.map(user => (
                <option key={user.id}>{user.name}</option>
            ))}
        </select>
    );
};