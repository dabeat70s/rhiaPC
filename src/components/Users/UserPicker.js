import { users } from "../../static.json"

export default function UserPicker() {
    return (
        <select>
            <option>Users</option>
            {users.map(user => (
                <option key={user.id}>{user.name}</option>
            ))}
        </select>
    );
}