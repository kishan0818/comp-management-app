import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminView = () => {
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/complaints").then((response) => {
            setComplaints(response.data);
        });
    }, []);

    const exportToJson = () => {
        axios.get("http://127.0.0.1:8000/admin/export-json").then(() => {
            alert("Data exported successfully!");
        });
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={exportToJson}>Export to JSON</button>
            <ul>
                {complaints.map((complaint) => (
                    <li key={complaint.id}>{complaint.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminView;
