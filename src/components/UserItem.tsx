const UserItem = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Username <p className={'text-secondary mb-4'}>example@gmail.com</p></h5>
                    <h6 className="card-subtitle mb-1 text-secondary">Role : <span className={'text-black'}>{'User / Editor / Admin'}</span></h6>
                    <h6 className="card-subtitle mb-1 text-secondary">Is the acc activated : <span className={'text-black'}>{'Yes / No'}</span></h6>
                </div>
            </div>
        </div>
    );
};

export default UserItem;