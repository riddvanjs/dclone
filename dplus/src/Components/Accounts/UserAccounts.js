import React from 'react'
import styles from './UserAccounts.module.css'
import { ProfileAvatar } from '../Style/Layout'

function UserAccounts(props) {

    const { accounts, getAccount } = props;

    return (
        <ul>
            {accounts.map(({ _id, userName, avatar }) => 
            <div onClick={() => getAccount(_id, userName, avatar)} className={styles.avatarWrapper} key={_id}>
                <div className={styles.avatarBlock}>
                    <ProfileAvatar avatar={`/${avatar}`}/>
                    <h3>{userName}</h3>
                </div>
            </div>
            )}
        </ul>
    )
}

export default UserAccounts
