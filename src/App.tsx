/* eslint-disable indent */
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

const App = () => {
    return (
        <>
            <Toaster
                position='bottom-left'
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 4000
                }}
                containerStyle={{
                    zIndex: 9999999999
                }}
            />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
