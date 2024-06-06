import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    username: string;
    email: string;
    active: boolean;
    role: string;
}
interface DataProps {
    sendData: (user: FormData) => void;
}

const UserForm: React.FC<DataProps> = ({ sendData }) => {
    const [userData, setUserData] = useState<FormData>({
        username: '',
        email: '',
        active: true,
        role: 'User',
    });

    const [isActive, setIsActive] = useState<boolean>(true);

    const formInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log({name , value})
        setUserData((userData) => ({ ...userData, [name]: value }));
    };

    const checkboxInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        console.log({checked})
        setIsActive(checked);
        setUserData((prevData) => ({ ...prevData, active: checked }));
    };

    const submitUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendData(userData);
        setUserData({
            username: '',
            email: '',
            active: true,
            role: 'User',
        })
        console.log(userData);
    };

    return (
        <div className="w-25">
            <form onSubmit={submitUser}>
                <div className="mb-3 w-75">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control border-black" id="username" name="username" value={userData.username} onChange={formInput}/>
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border-black" id="email" name="email" value={userData.email} onChange={formInput}/>
                </div>
                <div className="border border-black p-2 w-75 rounded">
                    <h5>Active account</h5>
                    <div>
                        <input type="checkbox" id="active" name="active" checked={isActive} onChange={checkboxInput}/>
                        <label htmlFor="active">Yes</label>
                    </div>
                </div>
                <div className="w-75 mt-3">
                    <select className="form-select border-black" name="role" value={userData.role} onChange={formInput}>
                        <option value="User">User</option>
                        <option value="Editor">Editor</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
