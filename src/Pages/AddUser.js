import React from 'react';

const AddUser = () => {
    return (
        <div>
            <div>

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <form className="card-body">
                                <div className="form-control">

                                    <input type="text" name='Avatar' placeholder="Avatar" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" name='First Name' placeholder="First Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" name='Last Name' placeholder="Last Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" name='Email' placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" name='Address' placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">

                                    <input type="text" name='Company Name' placeholder="Company Name" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-success">Add User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddUser;