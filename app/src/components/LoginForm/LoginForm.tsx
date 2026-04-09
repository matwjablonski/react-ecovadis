import { useState } from "react"

export const LoginForm = () => {
    const [loginValues, setLoginValues] = useState({ username: "", password: "" });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setLoginValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={loginValues.username}
                onChange={handleInputChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginValues.password}
                onChange={handleInputChange}
            />
            <button type="submit">Login</button>
        </form>
    )
}