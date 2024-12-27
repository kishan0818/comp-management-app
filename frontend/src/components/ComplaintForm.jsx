import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [audio, setAudio] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("description", description);
        formData.append("category", category);
        if (image) formData.append("image", image);
        if (video) formData.append("video", video);
        if (audio) formData.append("audio", audio);

        try {
            const response = await axios.post("http://127.0.0.1:8000/complaints/submit", formData);
            alert("Complaint submitted successfully! ID: " + response.data.id);
        } catch (error) {
            alert("Error submitting complaint.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your complaint"
                required
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="other">Other</option>
            </select>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />
            <input type="file" onChange={(e) => setVideo(e.target.files[0])} accept="video/*" />
            <input type="file" onChange={(e) => setAudio(e.target.files[0])} accept="audio/*" />
            <button type="submit">Submit Complaint</button>
        </form>
    );
};

export default ComplaintForm;