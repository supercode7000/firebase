import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext';
const Aside = () => {
    const { user } = useAuthContext()
    return (
        <aside>
            <img src={user.photoURL} alt="" />
            <h3>Hi {user.displayName}</h3>
            <Link to="/new">
                Create Project
            </Link>
        </aside>
    );
}

export default Aside;