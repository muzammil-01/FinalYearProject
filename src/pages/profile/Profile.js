import React from 'react'
import "./Profile.css"
import ListingCard from './ListingCard'
import { useSelector } from 'react-redux'
function Profile() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    return (
        <>
        <h1 style={{color:"white", textAlign:"center"}}>Your Profile</h1>
            <div className='user-details'>
                <h4>Name: {userInfo.name}</h4>
                <h4>ID: {userInfo.id}</h4>
                <h4>Email: {userInfo.email}</h4>
                <img src={userInfo.profileImage} alt="...." />
            </div>
            <div className="yourListings">
                <h1>Your Properties</h1>
                <div className="allcards">
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
                </div>
            </div>

        </>
    )
}

export default Profile