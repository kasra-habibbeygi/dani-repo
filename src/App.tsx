/* eslint-disable indent */
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/project';
import { data } from './pages/data';

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
                    <Route path='/project/:name' element={<Project data={data} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
