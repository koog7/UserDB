import './App.css'
import UserForm from "./components/UserForm.tsx";
import Users from "./components/Users.tsx";

const App = () => (
    <>
        <div className={'d-flex'}>
            <UserForm />
            <Users />
        </div>
    </>
);

export default App
