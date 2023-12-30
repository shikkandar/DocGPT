import { createContext } from "react"
type User = {
    name: string,
    email: string,
    password: string
}
type AuthUser = {
    isLoggedIn: boolean,
    user: User,
    login: (email: string, password: string) => Promise<void>,
    signup: (name: string, email: string, password: string) => Promise<void>,
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthUser | null>( null );

const AuthProvider = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (email: string, password: string) => {}
    const handleSignUp = (name: string, email: string, password: string) => {}
    const handlelogout = () => {}

    const value = {
        user,
        isLoggedIn,
        login: handleLogin,
        signup: handleSignUp,
        logout: handlelogout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

