import useLocalStorage from "./useLocalStorage";

export default function useAuth () {
    const [loggedIn, setLoggedIn] = useLocalStorage('token', '')

    const isLoggedIn = () => {
        return !!loggedIn;
    }

    const authUser = (token) => {
        setLoggedIn(token);
    }

    const logoutUser = () => {
        setLoggedIn(null)
    }

    return {isLoggedIn: isLoggedIn(), authUser, logoutUser};
}
