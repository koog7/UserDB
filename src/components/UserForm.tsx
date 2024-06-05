const UserForm = () => {
    return (
        <div className={'w-25'}>
            <form>
                <div className="mb-3 w-75">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="username" className="form-control border-black" id="username"/>
                </div>
                <div className="mb-3 w-75">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control border-black" id="email"/>
                </div>
                <div className={'border border-black p-2 w-75 rounded'}>
                    <h5>Active account</h5>
                    <div>
                        <input type="checkbox" id="yes" name="check_yes" checked/>
                        <label htmlFor="check_yes">Yes</label>
                    </div>
                    <div>
                        <input type="checkbox" id="no" name="check_no"/>
                        <label htmlFor="check_no">No</label>
                    </div>
                </div>
                <div className={'w-75 mt-3 '}>
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