import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import UserContext from '../UserContext';

const UserProfile = () => {
    const user = useContext(UserContext);

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h2 style={{ color: 'blue' }}>{user.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
            <p>Bio: {user.bio}</p>
        </div>
    );
};

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    bio: PropTypes.string.isRequired
};

export default UserProfile;

