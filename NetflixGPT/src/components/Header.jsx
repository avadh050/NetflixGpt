import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/contants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browser')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
  }, []);

  return (
    <div className="absolute w-full px-4 sm:px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between items-center">
      <img
        className="w-36 sm:w-52"
        src={LOGO}
        alt="Netflix-Logo"
      />
      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user?.photoURL}
            alt="profile-photo"
          />
          <button
            onClick={handleSignOut}
            className="px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition duration-200 ease-in-out"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
