import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Category } from "../../Components/Static/data";
import "./Home.scss";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { auth,db } from "../../Components/Firebase/Firebase";
import { Link } from "react-router-dom";
import Videos from "../../Components/videos/Videos";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setuser } from "../../Components/slice/Userslice";

function Home() {
  const [videos, setvideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "videos"));
    onSnapshot(q, (snapShot) => {
      setvideos(
        snapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);
  console.log(videos);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setuser(user));
      } else {
        dispatch(setuser(null));
      }
    });
  }, []);

  return (
    <div className=" mt-3">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <div className="lists">
            {Category.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
          <div className="videosshow ">
            <div className="row">
              {videos.length === 0 ? (
                <div className="col-3">
                  <div></div>
                </div>
              ) : (
                videos.map((video, i) => (
                  <div className="col-4">
                    <Link
                      className="names"
                      to={`/video/${video.id}`}
                      key={video.id}
                    >
                      <Videos {...video} />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
