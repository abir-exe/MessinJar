import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign Up | PrerokGlobal";
  }, []);
  const [errorMessage, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    if (!email) {
      return setError("Please type your email");
    } else if (!password) {
      return setError("Please input a password");
    }
    // else if (password.length<6) {
    //     return setError("Password should have minimum 6 characters");
    // }
    // else if (!/[A-Z]/.test(password)) {
    //     return setError("Password should have atleats one capital letter");
    // }
    // else if (!/[!@#$%^&*]/.test(password)) {
    //     return setError("Password should have atleats one special character")
    // }

    try {
      setLoading(true);

      const userInfo = { email, password };
      console.log(userInfo);

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        userInfo,
        config
      );

      toast.success("Login Successful");

      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/chat");
      setLoading(false);

      // history.push('/chats')
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=" border md:border border-[#f5ab35] w-full lg:w-5/12 mx-auto mt-24 pt-8 shadow-xl">
        <div className="mx-0 md:mx-10">
          <div className="text-center mb-8">
            <h4 className="text-xl font-semibold text-[#222222] uppercase">
              Sign UP
            </h4>
            <p className="text-[#b2b2b2]">
              Sign in to <span className="font-bold">GO</span> for getting all
              details
            </p>
          </div>
          <hr />
          <div className="mt-6">
            <form onSubmit={handleLogin} className="w-11/12 mx-auto">
              {/* email  */}
              <input
                type="email"
                name="email"
                className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35] focus:border-[#f5ab35]"
                placeholder="YOUR EMAIL"
                id="email"
              />{" "}
              <br />
              {/* password  */}
              <input
                type="password"
                name="password"
                className="border h-11 w-full px-4 py-2 mt-3 rounded-sm caret-[#f5ab35]"
                placeholder="PASSWORD"
                id="password"
              />
              {/* error message */}
              <span className="text-red-600">{errorMessage}</span>
              <button
                disabled={loading}
                className="border h-11 w-full px-5 py-2 mt-3 bg-[#f5ab35] text-white font-bold rounded-sm hover:cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#222222] flex items-center justify-center"
              >
                {loading ? (
                  <FaSpinner className="animate-spin"></FaSpinner>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <p className="text-center text-[#b2b2b2] text-sm mt-3 hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35]">
              Having Trouble?
            </p>
          </div>
          <button>Social Login</button>
        </div>
        <div className="py-8 bg-[#222222] text-center mt-12">
          <p className="text-white text-sm font-semibold mb-2">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="text-[#33be61] font-semibold underline uppercase hover:cursor-pointer transition-all duration-300 ease-in-out hover:text-[#f5ab35] hover:decoration-wavy"
          >
            login to existing account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
