import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={s.info} onSubmit={handleSubmit}>
        <div>
            <button className={s.editButton}>Save</button>
        </div>
        {error && <div className={s.error}>
            {error}
        </div>
        }
        <div>
            <b>Full Name</b>: {createField('Full Name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Open to work</b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>
        <div>
            <b>Skills</b>:
            {createField('Skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About Me</b>: {createField('About Me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)} </b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;

