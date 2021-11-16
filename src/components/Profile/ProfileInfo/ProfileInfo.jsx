import React from 'react';
import  s from './ProfileInfo.module.css';
import Loading from "../../common/preloader/preloader";
import userPhoto from "../../../assets/imasges/userPhoto.png";
import {ProfileStatusSUS} from "./ProfileStatusSUS";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loading />
    }

    return (
    <div>
        <div>
            <img className={s.open} src='https://www.spellbrand.com/images/blog/images/neon-logo-designs.jpg'/>
        </div>
        <div>
            <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
        </div>
        <div className={s.fullName}>
            {props.profile.fullName}
        </div>
        <div>
            <ProfileStatusSUS status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
)
}

export default ProfileInfo;