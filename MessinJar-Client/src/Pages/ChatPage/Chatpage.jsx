import axios from "axios";
import { useEffect, useState } from "react";


const Chatpage = () => {

    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/chat");
            setChats(response.data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    }

    useEffect(() => {
        fetchChats();
    }, [])

    return (
        <div className="min-h-screen">
            {chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    );
};

export default Chatpage;