import {Routes, Route} from 'react-router-dom';

import {Home} from './pages/Home'
import {History} from './pages/History'
import { MasterPage } from './layouts/DefaultLayout/MasterPage';

export function Router() {

    return (
        <Routes>
            <Route path="/" element={<MasterPage />}>
                <Route path="/" element={<Home />}/>
                <Route path="/History" element={<History />}/>
            </Route>
        </Routes>

    )

}