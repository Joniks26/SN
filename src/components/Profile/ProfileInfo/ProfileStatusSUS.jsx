import React, {useEffect, useState} from 'react';

export const ProfileStatusSUS = (props) => {

 let [editMode, setEditMode] = useState(false)
 let [status, setStasus] = useState(props.status)

    useEffect( () => {
        setStasus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStasusChange = (e) => {
        setStasus(e.currentTarget.value)

 }

    return (
        <div>
            {!editMode &&
            <div>
               <b>Status:</b> <span onDoubleClick={activateEditMode} > {props.status || "Укажите статус"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStasusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
            }
        </div>
    )

}

