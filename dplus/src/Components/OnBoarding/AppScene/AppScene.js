import { useState, useEffect } from 'react'
import { useHistory  } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { setUserToken, selectUserToken } from "../../../features/user/userSlice";
import ApiService from '../../../services/api.service';
import TokenService from '../../../services/token.service';
import styles from './Appscene.module.css'

function AppScene(props) {

    
    const history = useHistory();
    const [inputText, setInputText] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState(false)
    const [showPass, setShowPass] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const dispatch = useDispatch()
    const userToken = useSelector(selectUserToken)
    const { title, typeInput, placeholder, newAccountTitle, signUpTitle, userEmail } = props;


    let hasFormError;
    let errorMessage = 'Er zijn problemen met het maken van je account. Voer je accountgegevens opnieuw in en probeer het nog eens. Neem contact op met de Disney+ ondersteuning als je problemen blijft ondervinden. (foutcode 6)'
   
    const setToken = (token) => {
        dispatch(setUserToken({ token }));
    };

    useEffect(() => {
        setLoaded(true)
        if (userEmail !== '') {
            return setEmail(userEmail)
        }
        if (userToken) {
            history.push('/accounts')
        }
        return () => {
            setLoaded(false)
            setEmail('')
        }
    }, [userEmail, history, userToken])

    const handleInput = (e) => {
        setInputText(e.target.value)
        if (typeInput === 'password') {
            setPassword(e.target.value)
        }
    }

    const submitEmail = (e) => {
        e.preventDefault()
        if (inputText === '') {
            return setFormError(true)
        }
        history.push('/login/password', {
            props: [inputText]
        })
    }

    if (formError) {
        hasFormError = <div className={styles.errorInput}>{errorMessage}</div>
    }

    const isPasswordInput = () => {
        return typeInput === 'password' && (
            <button className={styles.showPasswordBtn} onClick={showPassword}>
                {showPass ? 'verbergen' : 'toon'}
            </button>
        )
    }

    const buttonType = () => {
        return typeInput === 'password' ? (
            <button onClick={doLogin} className={styles.nextBtn}>
                Inloggen
            </button>
        ) : (
            <button onClick={submitEmail} className={styles.nextBtn}>
                Doorgaan
            </button>
        )
    }

    function showPassword(e) {
        e.preventDefault();
        setShowPass(showPass => !showPass)
    }

    async function handleLogin(data) {
        try {
            const loggedIn = await ApiService.loginUser(data);
            const { token } = loggedIn.data;
            setToken(token);
            TokenService.setToken(token)
            history.push('/accounts')
            return loggedIn;
        } catch(e) {
            return setFormError(true)
        }
    }

    function doLogin(e) {
        e.preventDefault();
  
        if (inputText === '') {
            return setFormError(true)
        }
        
        handleLogin({ email: email[0], password })
    }

    return (
        <div id="appScene">
            <div className={styles.onboarding}>
                <div className={styles.onboardingWrapper}>
                    <form id={styles.slideIn} className={loaded ? `${styles.onboardingForm} ${styles.slideIn}` : `${styles.onboardingForm} ${styles.slideOut}`}>
                        <h3>{title}</h3>
                        <fieldset>
                            <legend>{typeInput}</legend>
                            <span>
                                <input
                                placeholder={placeholder}
                                className={formError ? `${styles.loginInput} ${styles.error}` : `${styles.loginInput}`}
                                id={typeInput}
                                type={showPass ? 'text' : typeInput}
                                aria-required
                                required
                                value={inputText}
                                autoComplete="new-email"
                                onFocus={() => setFormError(false)}
                                onChange={handleInput}/>
                                {hasFormError}
                                {isPasswordInput()}
                            </span>
                        </fieldset>
                        {buttonType()}
                        <div className={styles.signUpBlock}>
                            <div>{newAccountTitle}</div>
                            <a href="/">{signUpTitle}</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppScene
