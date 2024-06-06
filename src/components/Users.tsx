import UserItem from "./UserItem.tsx";
import React from "react";

interface FormData {
    username: string;
    email: string;
    active: boolean;
    role: string;
}

interface UsersProps {
    users: FormData[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <UserItem key={user.username} username={user.username} email={user.email} active={user.active} role={user.role}/>
            ))}
        </div>
    );
};

export default Users;