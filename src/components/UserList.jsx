import { useEffect, useState } from "react";
import UserCard from "./UserCard";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
        if (!response.ok) {
        throw new Error("Failed to fetch users");
        }
        return response.json();
    })
        .then((data) => {
        setUsers(data);
        setLoading(false);
    })
        .catch((err) => {
        setError(err.message);
        setLoading(false);
    });

}, []);

    if (loading) {
    return <h2 className="loading">Loading Users...</h2>;
}

    if (error) {
    return <h2 className="error">{error}</h2>;
}

    return (
    <div className="container">
        <div className="dashboard-info">
        <h2>Users List</h2>
        <span>Total Users: {users.length}</span>
    </div>

    <div className="user-container">
        {users.map((user) => (
        <UserCard key={user.id} user={user} />
))}
    </div>
    </div>
);
}

