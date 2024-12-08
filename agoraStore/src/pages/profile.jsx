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
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.nickname}</h2>
                </div>
                <nav>
                    {sections.map((item) => (
                        <button key={item.section} onClick={() => setActiveSection(item.section)} className="btn btn-dark">
                        {item.label}
                        </button>
                    ))}
                </nav>
                
                <div className="section-render">
                    {renderSection()}
                </div>
                </div>

                </>
            )
        )
    }

    const ProfileSection = ({ user }) => {
        return (
        <div>
             <div>
                <label>Account Name</label>
                <p>{user.nickname}</p>
                <label>Email</label>
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
            <label>Orders</label>
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
        <div>
            <label>Settings</label>         
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