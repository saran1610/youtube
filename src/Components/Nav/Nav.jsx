import React from "react";
import "./Nav.scss";
import { BsBell, BsSearch } from "react-icons/bs";
import { BiVideoPlus, BiMenu } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { VscSignOut, VscAccount, VscSettingsGear } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

import logo from "../../assets/images/YouTube-Logo.wine.svg";
import profile from "../../assets/images/saran.jpg";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { getuser, logout, setuser } from "../slice/Userslice";

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector(getuser);

  const handlelogin = async () => {
    const response = await signInWithPopup(auth, provider);
    dispatch(setuser(response.user));
  };
  console.log("user", user);

  const handlelogout = async () => {
    dispatch(logout());
    await signOut(auth);
  };
  return (
    <div className="container-fluid navsec">
      <div className="row">
        <div className="col-3">
          <div className="logo">

            <div className="icon">
            <BiMenu  />
            </div>
            

            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="col-6 inputbox d-flex">
          <div className="searchcontainer">
            <input type="text" placeholder="search" className="input " />
            <button>
              {" "}
              <BsSearch  />
            </button>
          </div>
          <div className="mike">
            <MdKeyboardVoice className="mikeicon" />
          </div>
        </div>

        <div className="col-3 d-flex gap-3 justify-content-end align-items-center">
          <div className="icon">
            <BiVideoPlus  />
          </div>

          <div className="icon">
            <BsBell  />
          </div>

          <div>
            {!user ? (
              <button className="btns " onClick={handlelogin}>
                <CgProfile className="icon me-1" />
                Sign in
              </button>
            ) : (
              <img
                src={user.photoURL}
                className="photo"
                alt="user.displayName"
                onClick={handlelogout}
              />
            )}
          </div>
          {/* <div className="profilepic btn-group dropstart">
           <a href="" class="btn " ><img src={profile} alt="" /></a>  */}
          {/* <ul class="dropdown-menu dropbtn">
            <div className="d-flex ">
              <div>
                <img src={profile} alt="" />
              </div>
              <div>
                <span>Saran thols</span>
                <span className="d-block">@saranthols27</span>
                <a href="">Manage your google account</a>
              </div>
            </div><hr />
              <li><a class="dropdown-item" href="#"><VscAccount className="icon me-2"/> Your channel</a></li>
              <li><a class="dropdown-item" href="#">Youtube Studio</a></li>
              <li><a class="dropdown-item" href="#">Switch account</a></li> 
              <li><a class="dropdown-item" href="#"><VscSignOut className="icon me-2"/>Sign out</a></li><hr />
              <li><a class="dropdown-item" href="#"><VscSettingsGear className="icon me-2"/>Settings</a></li>
          </ul> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
