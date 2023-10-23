import React, { useState } from 'react';
import Form from './Form';
import './UserList.css';

const data = [
    {
        name: "Name 1",
        companyName: "Comapny 1",
        termsCode: "NET 20",
        creditLimit: 20000,
    },
    {
        name: "Name 2",
        companyName: "Comapny 2",
        termsCode: "NET 25",
        creditLimit: 25000,
    },
    {
        name: "Name 3",
        companyName: "Comapny 3",
        termsCode: "NET 35",
        creditLimit: 35000,
    },
]


const UserList = () => {

    const [newUser, setNewUser] = useState({});
    const [modalOn, setModalOn] = useState(false);
    const [updatedData, setUpdatedData] = useState(data);
    const [toDelete, setTodelete] = useState(false);
    const [deletingUser, setDeletingUser] = useState("");

    const handleUser = (e) => {
        const value = e.target.value
        const name = e.target.name;

        setNewUser({ ...newUser, [name]: value })
    }

    const addUser = () => {
        console.log(newUser)
        setUpdatedData([...data, newUser]);
        setModalOn(false);
    }

    const onSwitchModal = () => {
        setModalOn(!modalOn);
    }

    const closeModal = () => {
        setModalOn(false);
    }

    const deleteUserConfirm = (e) => {
        setModalOn(true)
        setTodelete(true);
        const selectedUser = e.currentTarget.id;
        const deleteName = updatedData[selectedUser];
        setDeletingUser({...deleteName, index:selectedUser});
        console.log(deletingUser)
    }

    const deleteUser = () => {
        console.log("deleting...", deletingUser)
        updatedData.splice(deletingUser.index, 1);
        setUpdatedData(updatedData)
        setModalOn(false);
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Company</th>
                                    <th scope="col">Terms Code</th>
                                    <th scope="col">Credit Limit</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                                {updatedData.map(({ companyName, name, termsCode, creditLimit }, index) => {
                                    return (

                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{name}</td>
                                            <td>{companyName}</td>
                                            <td>{termsCode}</td>
                                            <td>{creditLimit}</td>
                                            <td><button id={index} onClick={deleteUserConfirm} className="btn btn-danger">
                                                <img className="trash-icon" src="assets/trash-solid.svg" />
                                            </button></td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                    <div className="col-12">


                        <button type="button" onClick={onSwitchModal} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                           Add User
                        </button>


                        <div className={`modal ${modalOn ? "d-block" : "d-none"}`}>
                            <div className="modal-dialog">
                                <div className="modal-content">

                                    <div className="modal-body">
                                        {toDelete ?
                                            <>
                                                <div>
                                                    <p> Are you sure you want to delete {deletingUser.name}</p>
                                                    <div className="d-flex">
                                                        <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
                                                        <button className="btn btn-dark ms-3" onClick={closeModal}>Close</button>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <Form newUser={newUser} setNewUser={setNewUser} addUser={addUser} handleUser={handleUser} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default UserList;