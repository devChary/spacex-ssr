import LaunchYear from './filters/launch-year';
import SuccessfulLaunch from './filters/successful-launch';
import SuccessfulLanding from './filters/successful-landing';

import styles from '../../styles/Filters.module.css'

const Filters = () => (
    <aside className={styles.filterWrapper}>
        <h4>Filters</h4>
        <div className={styles.filters}>
            <LaunchYear />
            <br />
            <SuccessfulLaunch />
            <br />
            <SuccessfulLanding />
        </div>

    </aside>
)

export default Filters;