import React, { useState, useEffect,useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./signpage.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebaseconfig";
// import { Email } from '@mui/icons-material';

const Signpage = () => {
  const [error, seterror] = useState();
  const [error2, seterror2] = useState();
  const rememberCheck = useRef(null);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const [email, setemail] = useState(localStorage.getItem("userEmail"));

  const [password, setpassword] = useState(localStorage.getItem("userPassword"));

//   To Store current email value
  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  //To store current email password value
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  // to get email for the local storage
  useEffect(() => {
    const storeEmail = localStorage.getItem("userEmail");
    if (storeEmail) {
      setemail(storeEmail);
    }
  }, []);

  useEffect(() => {
    document.title = "Netflix";
  }, []);
  const navigate = useNavigate();
  const handleChange = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((user) =>{localStorage.setItem('userEmail',email);navigate("/Profile")}
        // console.log("done")
      );
      
    } catch (err) {
      //  if(password === "" || password === null){
      //   seterror(" password should not be blank")
      //       }
     if (err.code == "auth/email-already-in-use") {
        seterror2("Email is already exists");
      } else if (err.code == "auth/ivalid-email") {
        seterror2("Email is not valid");
      } 
      //  else if(email === "" || email === null){
      //   seterror("email should not be blank")
      //       }
      else if (err.code === "auth/missing-password") {
        seterror("Please should be contain between 6 to 60 characters");
      } else if (err.code === "auth/weak-password") {
        seterror("");
      }
    }
  };

  // remeber me
  useEffect(() => {
    if (rememberCheck.current.checked) {
      setemail(localStorage.getItem("userEmail") );
      setpassword(localStorage.getItem("userPassword"))
    }
  }, [email, password]);
  function remember() {
    if (rememberCheck.current.checked) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      
    } else {
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userPassword");
     
    }
  }


  return (
    <section id="Signpage">
      <div className="sign_main">
        <header>
          <div className="logo_bar">
            <div className="netflix_logo">
              <div className="logo">
                <Link to={"/"}>
                  <svg
                    viewBox="0 0 111 30"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="default-ltr-cache-1d568uk ev1dnif2"
                    fill="#E50914"
                  >
                    <g>
                      <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="sign_section">
          <div className="sign_sub">
            <h1>Sign In</h1>
            <form action="">
              <div className="inp">
                <input
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={handleEmail}
                  required
                  pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
                />
                {/* <p style={{ color: 'red'}}>{error}</p> */}

                <input
                  type="password"
                  onChange={handlePassword}
                  value={password}
                  placeholder="password"
                  required
                />
                   {/* <p style={{ color: 'red'}}>{password}</p> */}
              </div>
              <div className="signin_btn">
                <button onClick={handleChange}>Sign in</button>
                <p>Forgot password?</p>
              </div>

              <div className="remember">
                 <input
                  type="checkbox"
                  className="check-icon"
                  ref={rememberCheck}
                  onChange={remember}
                  style={{ transform: "scale(1.5)" }}
                /> 
            
                <span> Remember me</span>
              </div>

              <div className="new">
                <p>
                  New to Netflix? <span className="signup">Sign up now.</span>
                </p>
              </div>

              <div className="note">
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                  <span className="learn">Learn more.</span>
                </p>
                <p className="hide">
                  The information collected by Google reCAPTCHA is subject to
                  the Google <span>Privacy Policy</span> and{" "}
                  <span>Terms of Service</span>, and is used for providing,
                  maintaining, and improving the reCAPTCHA service and for
                  general security purposes (it is not used for personalised
                  advertising by Google).
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="sign_footer">
          <div className="sign_footer_data">
            <div className="sign_footer_ques">
              <p>
                Questions? Call <span className="num">000-800-919-1694</span>
              </p>
            </div>

            <div className="sign_footer_links">
              <p>
                <span>FAQ</span>
              </p>
              <p>
                <span>Help Centre</span>
              </p>
              <p>
                <span>Terms of Use</span>
              </p>
              <p>
                <span>Privacy</span>
              </p>
              <p>
                <span>Cookie Preferences</span>
              </p>
              <p>
                <span>Corporate Information</span>
              </p>
            </div>

            <div className="sign_lang">
              <div className="set_select_lang">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="Languages"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                    fill="currentColor"
                  />
                </svg>
                <select name="" id="">
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signpage;
