import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Container, AddProfileButton } from '../../Components/Style/Layout'
import Nav from '../../Components/Nav/Nav'
import styles from './Accounts.module.css'
import ApiService from '../../services/api.service'
import { selectUserAccounts, setUserLoginDetails, setAccountUser } from "../../features/user/userSlice";
import UserAccounts from '../../Components/Accounts/UserAccounts';


function Accounts() {

    const dispatch = useDispatch()
    const userAccounts = useSelector(selectUserAccounts)
    const history = useHistory()

    const setUser = useCallback(
        (user) => {
            dispatch(setUserLoginDetails({
                _id: user._id,
                email: user.email,
                accounts: user.accounts
            }));
          },
        [dispatch],
    )

    const setSelectedUser = (user) => {
        dispatch(setAccountUser({
            userName: user.userName,
            avatar: user.avatar
        }))
    }

    const me = useCallback(
        async () => {
            try {
                const resp = await ApiService.me()
                return setUser(resp.data.user);
            } catch(e) {
                console.log(e)
            }
        },
        [setUser],
    )

      useEffect(() => {
        me()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function getAccount(id, user, avatar) {
        setSelectedUser({
            userName: user,
            avatar
        })
        history.push('/dashboard')
    }

    return (
        <>
        <Nav/>
        <Container>
            <div className={styles.accountWrapper}>
                <section className={styles.accountSection}>
                    <h2>Wie kijkt er?</h2>
                    <UserAccounts getAccount={(id, user, av) => getAccount(id, user, av)} accounts={userAccounts}/>
                <div className={styles.newProfileButton}>
                    <AddProfileButton>
                        +
                    </AddProfileButton>
                    <h3>Nieuw profiel</h3>
                </div>
                </section>
            </div>
        </Container>
        </>
    )
}

export default Accounts
