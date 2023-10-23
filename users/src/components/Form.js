import React from 'react';

const Form = ({newUser, setNewUser, addUser, handleUser, closeModal}) => {

    return (
        <>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" onChange={handleUser} name="name" className="form-control" id="name" placeholder="Your name here" />
            </div>
            <div className="mb-3">
                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" onChange={handleUser} name="companyName" className="form-control" id="company" placeholder="Enter your company name here" />
            </div>
            <div className="mb-3">
                <label htmlFor="termsCode" className="form-label">Term Code</label>
                <input type="text" onChange={handleUser} name="termsCode" className="form-control" id="termsCode" placeholder="Terms code here" />
            </div>
            <div className="mb-3">
                <label htmlFor="creditLimit" className="form-label">Credit Limit</label>
                <input type="text" onChange={handleUser} name="creditLimit" className="form-control" id="creditLimit" placeholder="Credit limit here" />
            </div>
            <div className="d-flex">
                <button className="btn btn-dark" onClick={addUser}>Save</button>
                <button className="btn btn-danger ms-3" onClick={closeModal}>Close</button>
            </div>
        </>
    )
}

export default Form;