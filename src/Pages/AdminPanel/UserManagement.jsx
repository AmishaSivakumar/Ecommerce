import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Navbar from "./Navbar";
import Loading from "../../Components/Loading";

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/users")
            .then((response) => response.json())
            .then((data) => {
                const usersWithBlockStatus = data.map(user => ({
                    ...user,
                    isBlocked: false
                }));
                setUsers(usersWithBlockStatus);
            });
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const toggleBlock = (userId) => {
        setUsers(users.map(user => {
            if (user.id === userId) {
                return { ...user, isBlocked: !user.isBlocked };
            }
            return user;
        }));
    };
    if (users.length == 0) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Navbar />
            <div className="container text-center">
                <h2>User Management</h2>
                <hr />
                <div>
                    <h3 className="text-center">User List</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name.firstname} {user.name.lastname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.isBlocked ? "Blocked" : "Active"}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(user.id)}>
                                            Delete
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            variant={user.isBlocked ? "success" : "warning"}
                                            onClick={() => toggleBlock(user.id)}
                                            className="ms-2"
                                        >
                                            {user.isBlocked ? "Unblock" : "Block"}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default UserManagement;
