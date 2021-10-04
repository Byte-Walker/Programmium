import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesPage from './components/CoursesPage/CoursesPage';
import NotFound from './components/NotFound/NotFound';
import AboutPage from './components/AboutPage/AboutPage';

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

const courses = [
    {
        title: 'Introduction to React JS (including React router, redux etc.)',
        level: 1,
        author: 'Md Shahidul Islam',
        price: 59.99,
        rating: 5.0,
        peopleRated: 163,
    },
    {
        title: 'The Complete Web Development Bootcamp 2021',
        level: 0,
        author: 'Jhankar Mahbub',
        price: 49.99,
        rating: 4.99,
        peopleRated: 5369,
    },
    {
        title: 'Angular - The Complete Guide (2021 Edition)',
        level: 2,
        author: 'Zulkarnine Mahmud',
        price: 42.49,
        rating: 4.65,
        peopleRated: 31,
    },
    {
        title: 'Become an Android App developer with React Native',
        level: 2,
        author: 'Md Shahidul Islam',
        price: 94.99,
        rating: 4.32,
        peopleRated: 892,
    },
    {
        title: 'Build Cross Platform Android App with Flutter',
        level: 0,
        author: 'Sumit Saha',
        price: 12.99,
        rating: 5.0,
        peopleRated: 1246,
    },
    {
        title: 'Node JS - The Ultimate Guide with MongoDB and Express JS',
        level: 1,
        author: 'Jonas Schmedtmann',
        price: 99.99,
        rating: 4.99,
        peopleRated: 162,
    },
    {
        title: 'Start Freelancing with Worpress Development',
        level: 0,
        author: 'Hasin Haider',
        price: 32.65,
        rating: 3.69,
        peopleRated: 950,
    },
    {
        title: 'Learn Data Structure and Algorithm for Job Interview',
        level: 2,
        author: 'Andrew Nagoie',
        price: 109.99,
        rating: 4.68,
        peopleRated: 1423,
    },
    {
        title: 'AlgoExpert - Crack any algorithmic problem in your job',
        level: 2,
        author: 'Clement',
        price: 430.0,
        rating: 4.38,
        peopleRated: 626,
    },
];
