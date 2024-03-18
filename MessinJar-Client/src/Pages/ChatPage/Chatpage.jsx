import axios from "axios";
import { useEffect } from "react";


const Chatpage = () => {

    const fetchChats = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/chat");
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    }

    useEffect(() => {
        fetchChats();
    }, [])

    return (
        <div className="min-h-screen">
            This is chatPage
        </div>
    );
};

export default Chatpage;