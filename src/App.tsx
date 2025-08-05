/* eslint-disable indent */
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import { LayoutManipulation } from '@/commons/components';

// Assets
import Home from './pages/home';
import NotFound from './pages/not-found';

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
                    <Route
                        path='/'
                        element={
                            <LayoutManipulation>
                                <Home />
                            </LayoutManipulation>
                        }
                    />
                    ;
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
