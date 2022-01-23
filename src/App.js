import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from "react-router-dom";
import {Users, Posts, Comments} from './components'


function App() {
    return (
        <Router>
            <div className="App">
                <div className={'wrap'}>
                    <button><NavLink to={'/users'}>Users</NavLink></button>
                    <button><NavLink to={'/posts'}>Posts</NavLink></button>
                    <button><NavLink to={'/comments'}>Comments</NavLink></button>
                </div>
                <Routes>
                    <Route path={'/'} element={<h1>Home page</h1>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
