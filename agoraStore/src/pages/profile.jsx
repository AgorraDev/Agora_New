import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState } from "react";
import '../style/profile.css';


const Profile = () => {
    const {user, isAuthenticated, logout, isLoading} = useAuth0();
    console.log('Is user Authenticated?:', isAuthenticated);
    
        const [activeSection, setActiveSection] = useState('profile');
        const sections = [
            {
                label: 'Profile',
                section: 'profile'
            },
            {
                label: 'Orders',
                section: 'orders'
            },
            {
                label: 'Settings',
                section: 'settings'
            },
        ]



        const renderSection = () => {
            switch(activeSection) {
                case 'profile':
                    return <ProfileSection user={user} />;
                case 'orders':
                    return <OrdersSection />;
                case 'settings':
                    return <AccountSettingsSection />;
                default:
                    return <ProfileSection user={user} />;
            }
        };

 
        if(isLoading) {
            return <div>Loading...</div>
        }

        return (
          
            isAuthenticated && (
                <>
                <div id="profile-wrapper">
                <div className="border rounded shadow-sm mb-2 p-2"> 
                    <img src={user.picture} alt={user.name} className="pb-2"/>
                <nav>
                    {sections.map((item) => (
                        <button key={item.section} onClick={() => setActiveSection(item.section)} className="btn btn-dark">
                        {item.label}
                        </button>
                    ))}
                </nav>
                </div>
                
                <div className="section-render border rounded shadow-sm h-auto">
                    {renderSection()}
                </div>
                </div>

                </>
            )
        )
    }

    const ProfileSection = ({ user }) => {
        return (
        <div className="d-flex flex-column">
            <h3>Account Information</h3>
             <div className="border rounded shadow-sm m-1 p-1">
                <label className="section-label">Username</label>
                <p>{user.nickname}</p>
            </div>
            <div className="border rounded shadow-sm m-1 p-1">
                <label className="section-label">Email</label>
                 <p>{user.email}</p>
             </div>
         </div>
        )
     }
     const OrdersSection = () => {
        const mockOrders = [
            {
                id: 0,
                item: 'GORP Tee',
                price: 29.99,
            },
            {
                id: 1,
                item: 'KOI Tee',
                price: 29.99,
            },
        ]
        console.log(mockOrders);
        
        return (
        <div>
            <label className="section-label">Orders</label>
            {mockOrders.length < 1 ? (
                <ul>
                {orders.map((order) => {
                    <li key={order.id}>
                        <p>order# {order.id}</p>
                        <p>{order.item}</p>
                        <p>{order.price}</p>
                    </li>
                })}
            </ul>
            ) : (
                <p>No orders...</p>
            )}
            
         </div>
        )
     }
     const AccountSettingsSection = () => {
        return (
        <div className="d-flex flex-column">
            <div className="border rounded shadow-sm m-1 p-2">
               <label className="section-label">
               <p className="section-text">Account Settings</p>
               </label>
               <button className="btn btn-dark btn-sm">Edit</button>
           </div>
           <div className="border rounded shadow-sm m-1 p-2">
               <label className="section-label">
               <p className="section-text">Payment Settings</p>
               </label>
               <button className="btn btn-dark btn-sm">Edit</button>
           </div>
        </div>
        )    
    }

//     return (

//         isAuthenticated && (
//             <div className="profile-main">
//                 <img src={user.picture} alt={user.name} />
//                 <h2>{user.nickname}</h2>
//                 <p>{user.email}</p>
//                 <button onClick={() => logout({logoutParams: {returnTo: window.location.origin }} )}> Logout </button>
//             </div>
//         )
//     )
// };

export default Profile;