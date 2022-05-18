import React from "react";
import ProfileDashboard from "./ProfileDashboard";

const sideNavList = [
    {
        title: '',
        navLists: [
            { name: "Profile" },
            { name: "My Garage" },
            { name: "My Order" },
            { name: "Chats" },
            { name: "Bookmarks" },
            { name: "MG Coins" },
            { name: "Help & Support" },
            { name: "Refer & Earn" }
        ]
    }
]

const CompoMapping={
    "Profile":ProfileDashboard,
    "My Garage":ProfileDashboard,
    "My Order":ProfileDashboard,
    "Chats":ProfileDashboard,
    "Bookmarks":ProfileDashboard,
    "MG Coins":ProfileDashboard,
    "Help & Support":ProfileDashboard,
    "Refer & Earn":ProfileDashboard
    
}

const ProfileDasboard=()=>{
    const [sideNavSelected,setSideNavSelected]=React.useState<string>('Profile')

    function handleSideNavChange({name}){
        setSideNavSelected(name)
    }

    const TabContent = CompoMapping[sideNavSelected];

}

export default ProfileDasboard