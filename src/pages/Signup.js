import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [avatarError, setAvatarError] = useState(null);
    const { error, signup } = useSignup()
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(email, password)
        signup(email, password, displayName, avatar)
    }
    const handleFileChange = (e) => {
        // console.log(e)
        setAvatarError(null)
        let selected = e.target.files[0]
        //console.log(selected);
        //User did not select a file
        if (!selected) {
            setAvatarError('please select a file')
            return;
        }
        // 10MB
        if (selected.size > 1000000) {
            setAvatarError('please select a smaller file')
            return;
        }
        setAvatarError(null)
        setAvatar(selected)
        //console.log('file updated')
    }
    return (
        <div id="signup">
            <h1>Signup</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email</label>
                <input required type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input required type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <label>Name:</label>
                <input required type="text"
                    name="displayName"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)} />
                <label>Avatar:</label>
                <input required type="file" name="" id="" onChange={handleFileChange} accept="image/*" />
                {avatarError && <p>{avatarError}</p>}
                <input type="submit" value="Sign Up" />
            </form>
            <p>You have already an Account, please <Link to="/login">log in</Link></p>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Signin;