import Logo from '../Logo/logo'
import Filters from '../Filters/filters'
import Tabs from '../Tabs/tabs';
import Tickets from '../Tickets';
import styles from './App.module.scss'

const App = () => {
    return(
        <div>
            <Logo />
            <div className={styles.container}>
            <Filters />
            <Tabs />
            <Tickets />
            </div>
        </div>
    )
}

export default App;