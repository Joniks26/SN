import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/imasges/userPhoto.png";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.item}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.unfollow(u.id)}}>
                            Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.follow(u.id)}}>
                            Follow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)
        }

        <div className={styles.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>

    </div>
} // SPAN'ы можно удалить

export default Users;