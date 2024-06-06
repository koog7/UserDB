import React from "react";

interface FormData {
    username: string;
    email: string;
    active: boolean;
    role: string;
}

const UserItem: React.FC<FormData> = ({ username, email, active, role }) => {
    return (
        <div>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{username} <p className={'text-secondary mb-4'}>{email}</p></h5>
                    <h6 className="card-subtitle mb-1 text-secondary">Role : <span className={'text-black'}>{role}</span></h6>
                    <h6 className="card-subtitle mb-1 text-secondary">Is the acc activated : <span className={'text-black'}>{active?'Yes' : 'No'}</span></h6>
                </div>
            </div>
        </div>
    );
};

export default UserItem;