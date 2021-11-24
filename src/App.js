import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));

const App = () => {
    return (
        <div className='app-wrapper'>
            <React.Suspense fallback={<div>Loading...</div>}>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <section>
                        <Switch>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Redirect exact from="/" to="/profile"/>
                            <Route path="*" render={() => <h1>404 NOT FOUND</h1>}/>
                        </Switch>
                    </section>
                </div>
            </React.Suspense>
        </div>
    );
}

export default App;


