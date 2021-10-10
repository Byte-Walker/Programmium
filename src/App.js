import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesPage from './components/CoursesPage/CoursesPage';
import NotFound from './components/NotFound/NotFound';
import AboutPage from './components/AboutPage/AboutPage';
import BlogPage from './components/BlogPage/BlogPage';
import SignUp from './components/Authentication/SignUp';
import LogIn from './components/Authentication/LogIn';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Switch>
                    {/* Sign up page */}
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>

                    {/* Login page */}
                    <Route exact path="/login">
                        <LogIn />
                    </Route>

                    {/* Courses page */}
                    <Route exact path="/courses">
                        <CoursesPage />
                    </Route>

                    {/* About page */}
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>

                    {/* Blog page */}
                    <Route exact path="/blog">
                        <BlogPage />
                    </Route>

                    {/* Home page */}
                    <Route exact path="/">
                        <Home />
                    </Route>

                    {/* Not Found page */}
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
