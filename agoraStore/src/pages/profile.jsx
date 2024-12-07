import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../style/profile.css';


const Profile = () => {
    const {user, isAuthenticated, logout, isLoading} = useAuth0();

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div className="page">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <button onClick={() => logout({logoutParams: {returnTo: window.location.origin }} )}> Logout </button>
            </div>
        )
    )
};

export default Profile;