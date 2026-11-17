
export default function UserCard({ user }) {
    return (
    <div className="user-card">
        <div className="user-header">
        <div className="user-avatar">
            {user.name.charAt(0)}
        </div>
        <div>
            <h3>{user.name}</h3>
            <p>@{user.username}</p>
        </div>
        </div>

        <p><b>ID:</b> {user.id}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>
        </div>
);
}
