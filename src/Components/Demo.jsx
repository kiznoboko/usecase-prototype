// // import { useState, useRef, useEffect } from "react";
// // import { Link, useNavigate, useLocation } from "react-router-dom";
// // import "../Styles/Demo.css";

// // const Demo = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const initialRegisterActive = location.state?.registerActive || false;
// //   const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);
// //   const [startX, setStartX] = useState(0);
// //   const containerRef = useRef(null);

// //   // Input states
// //   const [loginEmail, setLoginEmail] = useState("");
// //   const [loginPassword, setLoginPassword] = useState("");
// //   const [registerUsername, setRegisterUsername] = useState("");
// //   const [registerEmail, setRegisterEmail] = useState("");
// //   const [registerPassword, setRegisterPassword] = useState("");

// //   // Message state
// //   const [message, setMessage] = useState("");

// //   // Swipe handlers
// //   const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
// //   const handleTouchMove = (e) => {
// //     if (!startX) return;
// //     const currentX = e.touches[0].clientX;
// //     const diff = startX - currentX;

// //     if (diff > 50 && isLoginActive) setIsLoginActive(false);
// //     else if (diff < -50 && !isLoginActive) setIsLoginActive(true);
// //     setStartX(0);
// //   };

// //   // Animate container transform on toggle
// //   useEffect(() => {
// //     if (containerRef.current) {
// //       containerRef.current.style.transition = "transform 0.3s ease-in-out";
// //       containerRef.current.style.transform = isLoginActive
// //         ? "translateX(0)"
// //         : "translateX(-100%)";
// //     }
// //   }, [isLoginActive]);

// //   // Mock login function
// //   const handleLogin = (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     // Simulate checking the login credentials
// //     if (loginEmail === "user@example.com" && loginPassword === "password123") {
// //       setMessage("Login successful!");
// //       console.log("Logged in user:", { email: loginEmail });
// //       navigate("/dashboard");
// //     } else {
// //       setMessage("Invalid login credentials.");
// //     }
// //   };

// //   // Mock register function
// //   const handleRegister = (e) => {
// //     e.preventDefault();
// //     setMessage("");

// //     // Simulate checking the registration details
// //     if (registerEmail === "user@example.com") {
// //       setMessage("Email already exists.");
// //     } else {
// //       setMessage("Registration successful! You can now log in.");
// //       setIsLoginActive(true); // Switch to login form

// //       // Clear inputs
// //       setRegisterUsername("");
// //       setRegisterEmail("");
// //       setRegisterPassword("");
// //     }
// //   };

// //   return (
// //     <div className="DemoWrapper">
// //       <Link to="/" className="back-link">← Back to Home</Link>

// //       <div className="ContainerLogin_register">
// //         <div className="toggle-container">
// //           <button
// //             className={`toggle-btn ${isLoginActive ? "active" : ""}`}
// //             onClick={() => setIsLoginActive(true)}
// //           >
// //             Login
// //           </button>
// //           <button
// //             className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
// //             onClick={() => setIsLoginActive(false)}
// //           >
// //             Register
// //           </button>
// //         </div>

// //         <div
// //           className="login_register_container"
// //           ref={containerRef}
// //           onTouchStart={handleTouchStart}
// //           onTouchMove={handleTouchMove}
// //         >
// //           {/* Login Form */}
// //           <div className={`form-container DemoLogin ${isLoginActive ? "active" : ""}`}>
// //             <h3>Welcome Back</h3>
// //             <form className="DemoLoginForm" onSubmit={handleLogin}>
// //               <div className="form-group">
// //                 <label htmlFor="loginEmail" className="form-label">Email</label>
// //                 <input
// //                   type="email"
// //                   id="loginEmail"
// //                   className="form-control"
// //                   placeholder="Enter your email"
// //                   value={loginEmail}
// //                   onChange={(e) => setLoginEmail(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="loginPassword" className="form-label">Password</label>
// //                 <input
// //                   type="password"
// //                   id="loginPassword"
// //                   className="form-control"
// //                   placeholder="Enter your password"
// //                   value={loginPassword}
// //                   onChange={(e) => setLoginPassword(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <button type="submit" className="submit-btn submit-login-password">Sign In</button>
// //             </form>
// //           </div>

// //           {/* Register Form */}
// //           <div className={`form-container DemoRegister ${!isLoginActive ? "active" : ""}`}>
// //             <h3>Create Account</h3>
// //             <form className="DemoRegisterForm" onSubmit={handleRegister}>
// //               <div className="form-group">
// //                 <label htmlFor="registerUsername" className="form-label">Username</label>
// //                 <input
// //                   type="text"
// //                   id="registerUsername"
// //                   className="form-control"
// //                   placeholder="Enter your username"
// //                   value={registerUsername}
// //                   onChange={(e) => setRegisterUsername(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="registerEmail" className="form-label">Email</label>
// //                 <input
// //                   type="email"
// //                   id="registerEmail"
// //                   className="form-control"
// //                   placeholder="Enter your email"
// //                   value={registerEmail}
// //                   onChange={(e) => setRegisterEmail(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <div className="form-group">
// //                 <label htmlFor="registerPassword" className="form-label">Password</label>
// //                 <input
// //                   type="password"
// //                   id="registerPassword"
// //                   className="form-control"
// //                   placeholder="Create a password"
// //                   value={registerPassword}
// //                   onChange={(e) => setRegisterPassword(e.target.value)}
// //                   required
// //                 />
// //               </div>
// //               <button type="submit" className="submit-btn submit-Register-password">Register</button>
// //             </form>
// //           </div>
// //         </div>

// //         {/* Swipe indicator */}
// //         <div className="swipe-indicator">
// //           <span>Swipe {isLoginActive ? "left" : "right"}</span>
// //           <div className="swipe-dots">
// //             <div className={`swipe-dot ${isLoginActive ? "active" : ""}`}></div>
// //             <div className={`swipe-dot ${!isLoginActive ? "active" : ""}`}></div>
// //           </div>
// //         </div>

// //         {/* Feedback message */}
// //         {message && <div className="form-message">{message}</div>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Demo;


import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../Styles/Demo.css";

const Demo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialRegisterActive = location.state?.registerActive || false;
  const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  // Input states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Message state
  const [message, setMessage] = useState("");

  // Swipe handlers
  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 50 && isLoginActive) {
      setIsLoginActive(false);
    } else if (diff < -50 && !isLoginActive) {
      setIsLoginActive(true);
    }
    setStartX(0);
  };

  // Animate container transform on toggle
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.3s ease-in-out";
      containerRef.current.style.transform = isLoginActive
        ? "translateX(0)"
        : "translateX(-100%)";
    }
  }, [isLoginActive]);

  // Mock login function
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");

    if (loginEmail === "user@example.com" && loginPassword === "password123") {
      setMessage("Login successful!");
      console.log("Logged in user:", { email: loginEmail });
      navigate("/dashboard");
    } else {
      setMessage("Invalid login credentials.");
    }
  };

  // Mock register function
  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");

    if (registerEmail === "user@example.com") {
      setMessage("Email already exists.");
    } else {
      setMessage("Registration successful! You can now log in.");
      setIsLoginActive(true);

      setRegisterUsername("");
      setRegisterEmail("");
      setRegisterPassword("");
    }
  };

  return (
    <div className="DemoWrapper">
      <Link to="/" className="back-link">← Back to Home</Link>

      <div className="ContainerLogin_register">
        <div className="toggle-container">
          <button
            className={`toggle-btn ${isLoginActive ? "active" : ""}`}
            onClick={() => setIsLoginActive(true)}
          >
            Login
          </button>
          <button
            className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
            onClick={() => setIsLoginActive(false)}
          >
            Register
          </button>
        </div>

        <div
          className="forms-container"
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="forms-inner">
            {/* Login Form */}
            <div className="form-container DemoLogin">
              <h3>Welcome Back</h3>
              <form className="DemoLoginForm" onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="loginEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn submit-login-password">Sign In</button>
              </form>
            </div>

            {/* Register Form */}
            <div className="form-container DemoRegister">
              <h3>Create Account</h3>
              <form className="DemoRegisterForm" onSubmit={handleRegister}>
                <div className="form-group">
                  <label htmlFor="registerUsername" className="form-label">Username</label>
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                    placeholder="Enter your username"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="registerEmail" className="form-label">Email</label>
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                    placeholder="Enter your email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="registerPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                    placeholder="Create a password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn submit-Register-password">Register</button>
              </form>
            </div>
          </div>
        </div>

        {/* Swipe indicator */}
        <div className="swipe-indicator">
          <span>Swipe {isLoginActive ? "left" : "right"}</span>
          <div className="swipe-dots">
            <div className={`swipe-dot ${isLoginActive ? "active" : ""}`}></div>
            <div className={`swipe-dot ${!isLoginActive ? "active" : ""}`}></div>
          </div>
        </div>

        {/* Feedback message */}
        {message && <div className="form-message">{message}</div>}
      </div>
    </div>
  );
};

export default Demo;


// import { useState, useRef, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ethers } from "ethers";
// import contractABI from './UserAuthABI.json';  // ABI of your deployed contract
// import "../Styles/Demo.css";

// const contractAddress = "YOUR_CONTRACT_ADDRESS";  // Replace with your actual deployed contract address

// const Demo = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const initialRegisterActive = location.state?.registerActive || false;
//   const [isLoginActive, setIsLoginActive] = useState(!initialRegisterActive);
//   const [startX, setStartX] = useState(0);
//   const containerRef = useRef(null);

//   // Input states
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [registerUsername, setRegisterUsername] = useState("");
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   // Message state
//   const [message, setMessage] = useState("");

//   // Wallet and contract initialization
//   const [provider, setProvider] = useState(null);
//   const [contract, setContract] = useState(null);

//   // Set up the provider and contract when the component mounts
//   useEffect(() => {
//     const setup = async () => {
//       // Initialize Ethereum provider (e.g., MetaMask)
//       const _provider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(_provider);

//       // Create contract instance
//       const _contract = new ethers.Contract(contractAddress, contractABI, _provider.getSigner());
//       setContract(_contract);
//     };

//     setup();
//   }, []);

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const isValid = await contract.login(loginEmail, loginPassword);
//       if (isValid) {
//         setMessage("Login successful!");

//         // Fetch user info (email, address, username)
//         const [userAddress, userEmail] = await contract.getUserInfo();
//         const username = await contract.getUserInfoByAddress(userAddress);
//         console.log("User Info:", { email: userEmail, address: userAddress, username });

//         // Redirect to the dashboard (or another page)
//         navigate("/dashboard");
//       } else {
//         setMessage("Invalid login credentials.");
//       }
//     } catch (error) {
//       setMessage("Error logging in.");
//       console.error(error);
//     }
//   };

//   // Handle Register
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setMessage("");

//     try {
//       const tx = await contract.register(registerEmail, registerPassword, registerUsername);
//       await tx.wait();  // Wait for the transaction to be mined

//       setMessage("Registration successful! You can now log in.");
//       setIsLoginActive(true); // Switch to login form

//       // Clear input fields
//       setRegisterUsername("");
//       setRegisterEmail("");
//       setRegisterPassword("");
//     } catch (error) {
//       setMessage("Error registering. Make sure the email is unique.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="DemoWrapper">
//       <Link to="/" className="back-link">← Back to Home</Link>

//       <div className="ContainerLogin_register">
//         <div className="toggle-container">
//           <button
//             className={`toggle-btn ${isLoginActive ? "active" : ""}`}
//             onClick={() => setIsLoginActive(true)}
//           >
//             Login
//           </button>
//           <button
//             className={`toggle-btn ${!isLoginActive ? "active" : ""}`}
//             onClick={() => setIsLoginActive(false)}
//           >
//             Register
//           </button>
//         </div>

//         <div
//           className="forms-container"
//           ref={containerRef}
//         >
//           <div className="forms-inner">
//             {/* Login Form */}
//             <div className="form-container DemoLogin">
//               <h3>Welcome Back</h3>
//               <form className="DemoLoginForm" onSubmit={handleLogin}>
//                 <div className="form-group">
//                   <label htmlFor="loginEmail" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     id="loginEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={loginEmail}
//                     onChange={(e) => setLoginEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="loginPassword" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     id="loginPassword"
//                     className="form-control"
//                     placeholder="Enter your password"
//                     value={loginPassword}
//                     onChange={(e) => setLoginPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="submit-btn submit-login-password">Sign In</button>
//               </form>
//             </div>

//             {/* Register Form */}
//             <div className="form-container DemoRegister">
//               <h3>Create Account</h3>
//               <form className="DemoRegisterForm" onSubmit={handleRegister}>
//                 <div className="form-group">
//                   <label htmlFor="registerUsername" className="form-label">Username</label>
//                   <input
//                     type="text"
//                     id="registerUsername"
//                     className="form-control"
//                     placeholder="Enter your username"
//                     value={registerUsername}
//                     onChange={(e) => setRegisterUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="registerEmail" className="form-label">Email</label>
//                   <input
//                     type="email"
//                     id="registerEmail"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={registerEmail}
//                     onChange={(e) => setRegisterEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="registerPassword" className="form-label">Password</label>
//                   <input
//                     type="password"
//                     id="registerPassword"
//                     className="form-control"
//                     placeholder="Create a password"
//                     value={registerPassword}
//                     onChange={(e) => setRegisterPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <button type="submit" className="submit-btn submit-Register-password">Register</button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Feedback message */}
//         {message && <div className="form-message">{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default Demo;
