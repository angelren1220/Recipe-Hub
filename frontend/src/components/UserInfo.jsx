import { useEffect } from "react";
import useApplicationData from "../hooks/useApplicationData";
import { Link } from "react-router-dom";

const UserInfo = function (props) {

  const {
    state,
    getUserById
  } = useApplicationData();

  useEffect(() => {
    getUserById(props.userId);
    // console.log("🐹", props.id);
  }, []); 

  return(
    <Link to={`/profile/${state.user.id}`}>
      {state.user.first_name} {state.user.last_name}
    </Link>
  )
}

export default UserInfo;
