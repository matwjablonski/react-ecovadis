import React, { createContext, memo, use, useEffect, type FC } from "react";

const title = "Hello";

function AComponent({ title = "Default title", children }: { title?: string; children?: React.ReactNode }) {
    
    return <div>{title}
        {children}
    </div>;
}

function App() {
    return (
        <AComponent title={title}>this is children</AComponent>
    );
}

function AppOldWay() {
    return React.createElement(AComponent, { title });
}

type GreetingsProps = {
    name: string;
}

const Greetings = ({ name }: GreetingsProps) => {
    return <h1>Hello, {name}!</h1>;
}

const GreetingsV2: FC<GreetingsProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
}

const UserContext = createContext({})

const UserBox = ({ name }) => {
    const user = React.useContext(UserContext);
    return <div>{user.name}</div>
};
const UserProfile = ({ name }) => <UserBox name={name} />;
const Menu = ({ userProfile }) => <div>{userProfile}</div>;
const Nav = ({ menu }) => menu;

const App = () => {
    const user = {
        name: 'Mateusz',
    };

    return <UserContext.Provider value={user}>
        <Nav
            menu={<Menu
                    userProfile={<UserProfile name={user.name} />}
                />}
        />
    </UserContext.Provider>

    // return <Nav user={user} />
}

const AppLifecycle = memo(({ title }) => {

    useEffect(() => {}, []) // componentDidMount
    useEffect(() => {
        return () => {
            console.log('AppLifecycle unmounted')
        } // componentWillUnmount
    }, []);
    useEffect(() => {}, [title]) // componentDidUpdate
    useEffect(() => {}) // componentDidUpdate for all state and props changes

    return <div>AppLifecycle</div>
}, () => {
    return true; // prevent re-rendering
})
