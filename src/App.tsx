import React from 'react';
import './App.module.scss';
import RoutesPage from './routes/RoutesPage';
import {useAppSelector} from './redux/store';
import Preloader from './common/Preloader/Preloader';
import styles from './App.module.scss'

function App() {

    const status = useAppSelector(state => state.characters.status)

    return (
        <div className="App">
            {status === 'loading' && <div className={styles.isLoading}><Preloader/></div>}
            <RoutesPage/>
        </div>
    );
}

export default App;
