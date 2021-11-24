import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Loading from "../../common/preloader/preloader";
import userPhoto from "../../../assets/imasges/userPhoto.png";
import {ProfileStatusSUS} from "./ProfileStatusSUS";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Loading/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then( () => {setEditMode(false)} )
    }

    return (
        <div>
            <div>
                <img className={s.open} src='https://www.spellbrand.com/images/blog/images/neon-logo-designs.jpg'/>
            </div>
            <div>
                <img className={s.ava}
                     src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
            </div>
            <div>
                {props.isOwner && <input className={s.photoButton} type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <div className={s.fullName}>
                {props.profile.fullName}
            </div>
            <div className={s.status}>
                <ProfileStatusSUS status={props.status} updateStatus={props.updateStatus}/>
            </div>

            {editMode
                ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}

        </div>
    )
}

const ProfileData = (props) => {
    return <div className={s.info}>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div>
            <b>Open to work</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        <div>
            <b>Skills</b>: {props.profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About Me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;

