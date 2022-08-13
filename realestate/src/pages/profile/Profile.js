import React , {useEffect} from 'react'
import "./Profile.css"
import Spinner from '../../components/spinner/Spinner'
import ListingCard from './ListingCard'
import { getUserSpecificProperties } from '../../Redux/actions/propertyActions'
import { useDispatch, useSelector } from 'react-redux'
function Profile() {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userSpecificProperties = useSelector(state => state.userSpecificProperties)
    const { loading, error, propertyData } = userSpecificProperties

    useEffect(() => {
        dispatch(getUserSpecificProperties())
    }, [dispatch])
    return (
        <>
        <h1 style={{color:"white", textAlign:"center"}}>Your Profile</h1>
            <div className='user-details'>
                <div className="info">
                <h4>Name: {userInfo.name}</h4>
                <h4>ID: {userInfo.id}</h4>
                <h4>Email: {userInfo.email}</h4>
                </div>
                <div className="profile-picture">
                <img src={`http://localhost:3001/public/images/${userInfo.image}`} alt="..." />
                </div> 
            </div>

            {loading && <Spinner />}
            <div className="user-properties">
                {propertyData && propertyData.map((property) => (
                        <ListingCard key={property._id} property={property} />
            )
            )}
</div>
        </>
    )
}

export default Profile