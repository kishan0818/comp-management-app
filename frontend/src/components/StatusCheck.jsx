import React, { useState } from "react";
import axios from "axios";

const StatusCheck = () => {
    const [complaintId, setComplaintId] = useState("");
    const [status, setStatus] = useState(null);

    const checkStatus = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/complaints/status/${complaintId}`
            );
            setStatus(response.data.status);
        } catch (error) {
            alert("Error fetching status");
        }
    };

    return (
        <div>
            <h1>Check Complaint Status</h1>
            <input
                type="text"
                placeholder="Enter Complaint ID"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
            />
            <button onClick={checkStatus}>Check Status</button>
            {status && <p>Status: {status}</p>}
        </div>
    );
};

export default StatusCheck;
