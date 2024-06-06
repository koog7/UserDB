import {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Users from './components/Users';

interface FormData {
    username: string;
    email: string;
    active: boolean;
    role: string;
}

const App = () => {
    const [users, setUsers] = useState<FormData[]>([]);

    const addUser = (user: FormData) => {
        setUsers((userData) => [...userData, user]);
    };

    return (
        <div className="d-flex">
            <UserForm sendData={addUser} />
            <Users users={users} />
        </div>
    );
};

export default App;
