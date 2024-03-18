import { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <div className="min-h-screen flex justify-center gap-5 m-10">
            <Link className="btn btn-outline" to="/login">Login</Link>
            <Link className="btn btn-outline" to="/signup">SignUp</Link>
        </div>
    );
};

export default Homepage;