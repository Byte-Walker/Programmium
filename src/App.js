import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesPage from './components/CoursesPage/CoursesPage';
import NotFound from './components/NotFound/NotFound';
import AboutPage from './components/AboutPage/AboutPage';
import BlogPage from './components/BlogPage/BlogPage';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/courses">
                    <CoursesPage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/blog">
                    <BlogPage />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;