const UserForm = () => {
    return (
        <div>
            <form>
                <div className="mb-3 w-25">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="username" className="form-control border-black" id="username"/>
                </div>
                <div className="mb-3 w-25">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border-black" id="email"/>
                </div>
                <div className={'border border-black p-2 w-25 rounded'}>
                    <h5>Active account</h5>
                    <div>
                        <input type="checkbox" id="scales" name="scales" checked/>
                        <label htmlFor="scales">Yes</label>
                    </div>
                    <div>
                        <input type="checkbox" id="horns" name="horns"/>
                        <label htmlFor="horns">No</label>
                    </div>
                </div>
                <div className={'w-25 mt-3 '}>
                    <select className="form-select border-black" aria-label="Default select example">
                        <option selected value="1">User</option>
                        <option value="2">Editor</option>
                        <option value="3">Admin</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default UserForm;