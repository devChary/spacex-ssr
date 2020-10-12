import Filters from './components/filters';
import MissonList from './components/misson-list';
import styles from '../styles/Launch.module.css'
import Footer from './components/footer'

export default function Launches({ missions }) {
    debugger
    return (
        <>
            <header className={styles.launchTitle}>Space X Launch Programs</header>
            <div className={styles.wrapper}>
                <Filters />
                <MissonList missions={missions} />
            </div>
            <Footer />
        </>

    )
}

Launches.getInitialProps = async (ctx) => {
    // Fetch data from SpaceX API
    const res = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014`);
    const data = await res.json();

    return { missions: data }
}