import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";

const Dashboard = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getDashboard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>ff</h3>
            </header>
        </div>
    );
};export default Dashboard;