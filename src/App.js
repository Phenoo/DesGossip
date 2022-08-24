import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Error from './components/Error'
import SinglePost from './pages/SinglePost';
import LatestPosts from './pages/LatestPosts'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/posts/:index" element={<SinglePost />} />
        <Route path="/latestposts/:index" element={<LatestPosts />} />
        <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
    <Footer />

    </>
  );
}

export default App;
