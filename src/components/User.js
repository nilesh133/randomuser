import React from 'react'

const User = ({ user }) => {
    return (
        <div className='user'>
            <div className='user_image'>
                <img src={user.picture.medium} alt="" />
            </div>
            <div className='user_detail'>
                <h3>{user.name.first} {user.name.last} | {user.dob.age}</h3>
                <span>{user.nat}</span>
                <h4>{user.email}</h4>
                <p>{user.location.street.number}, {user.location.street.name}</p>
                <p>{user.location.city}, {user.location.country}, {user.location.postcode}</p>
            </div>
        </div>
    )
}

export default User