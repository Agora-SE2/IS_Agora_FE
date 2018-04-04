import React from 'react';
import { Image } from 'semantic-ui-react';

import './styles.css';

const ProfilePic = props => (
    <div style={{backgroundImage: "url(" + props.src + ")"}} className="profile pic"></div>
);

export default ProfilePic;