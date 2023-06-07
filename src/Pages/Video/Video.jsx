import React, { useEffect, useState } from "react";
import "./video.scss";
import { Link, useParams } from "react-router-dom";
import { addDoc, collection, doc, onSnapshot, query } from "firebase/firestore";
import { auth, db, timestamp } from "../../Components/Firebase/Firebase";
import { AiFillLike, AiFillDislike, AiOutlineDownload } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineSort } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getuser, setuser } from "../../Components/slice/Userslice";
import { onAuthStateChanged } from "firebase/auth";
import Comment from "../../Components/comment/Comment";
import { Category } from "../../Components/Static/data";
import Recommendvideo from "../../Components/Recommendvideo";

function Video() {
  const [videos, setvideos] = useState([]);
  const [comments, setcomments] = useState([]);
  const [data, setdata] = useState(null);

  const [comment, setcomment] = useState("");

  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const user = useSelector(getuser);

  useEffect(() => {
    if (id) {
      const q = query(doc(db, "videos", id));
      onSnapshot(q, (snapShot) => {
        setdata(snapShot.data());
      });
      const commentsquery = query(collection(db, "videos", id, "comments"));
      onSnapshot(commentsquery, (snapShot) => {
        setcomments(
          snapShot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    }
  }, [id]);
  console.log(data);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setuser(user));
      } else {
        dispatch(setuser(null));
      }
    });
  }, []);

  const addcomment = async (e) => {
    e.preventDefault();
    let commentdata = {
      image: user.photoURL,
      name: user.displayName,
      comment,
      uploaded: timestamp,
    };
    if (id) {
      await addDoc(collection(db, "videos", id, "comments"), commentdata);
      setcomment("");
    }
  };

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="video">
            <div className="iframedetail">
              <iframe
                src={`https://www.youtube.com/embed/${data?.link}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{data?.title}</h3>
            <div className="d-flex justify-content-between">
              <div className="channelcontent">
                <div className="logopict">
                  <img src={data?.logo} alt="" />
                </div>
                <div>
                  <h6>
                    {data?.channel && data?.channel.length <= 15
                      ? data?.channel
                      : `${data?.channel && data?.channel.substr(0, 50)}...`}
                  </h6>
                  <p>{data?.subscribers} Subscribers</p>
                </div>
              </div>

              <div>
                <button className="subbtn">Subscribe</button>
              </div>

              <div className="actioncontainer">
                <div className="d-flex vdomainicon">
                  <div className="d-flex  vdoicon1 subbtn">
                    <AiFillLike className="actiongap"/>
                    <span className="actiongap">300k</span>
                  </div>
                  <div className="d-flex ps-3 subbtn">
                    <AiFillDislike  className="actiongap"/>
                    <span className="actiongap">100</span>
                  </div>
                </div>

                <div className="d-flex subbtn">
                  <RiShareForwardLine className="actiongap" />
                  <span className="actiongap">Share</span>
                </div>

                <div className="d-flex subbtn">
                  <AiOutlineDownload  className="actiongap"/>
                  <span className="actiongap">Download</span>
                </div>

                <div className="d-flex subbtn">
                  <BsThreeDots />
                </div>
              </div>
            </div>
            <div className="despcontainer">
              <div className="d-flex gap-3">
                <span>{data?.views} views</span>
                <span>{data?.uploadtime} </span>
              </div>
              <p>{data?.description}</p>
            </div>

            <div className="d-flex mt-3 gap-3">
              <p>{comments.length} Comments</p>
              <div className="d-flex sortby">
                <MdOutlineSort className="vdoicon" />
                <span>sortby</span>
              </div>
            </div>

            {user && (
              <form onSubmit={addcomment}>
                <img
                  src={user?.photoURL}
                  alt="profile"
                  className="commentprfle"
                />
                <input
                  type="text"
                  placeholder="Add a comment...."
                  value={comment}
                  onChange={(e) => setcomment(e.target.value)}
                  className="inputbtn"
                />
              </form>
            )}
            <div>
              {comments.map((item, i) => {
                <Comment key={i} {...item} />;
              })}
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="sidelists">
            {Category.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>

          <div className="sidevideo">
            {videos.map((Video, i) => {
              if (Video.id != id) {
                return (
                  <Link key={i} to={`/video/${Video.id}`}>
                    <Recommendvideo {...Video} />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
