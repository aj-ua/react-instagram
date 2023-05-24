import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store';
import { getData } from './actions'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.scss';

function App() {
    // load all products, wishlist and cart values
    store.dispatch(getData())

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <main className="main container my-5">
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="*"
                                element={<NotFound />}
                            />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
