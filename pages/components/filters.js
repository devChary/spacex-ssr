import LaunchYear from './filters/launch-year';
import SuccessfulLaunch from './filters/successful-launch';
import SuccessfulLanding from './filters/successful-landing';

import styles from '../../styles/Filters.module.css'

const Filters = ({ setParams }) => (
    <aside className={styles.filterWrapper}>
        <h4>Filters</h4>
        <div className={styles.filters}>
            <LaunchYear setParams={setParams} />
            <br />
            <SuccessfulLaunch setParams={setParams} />
            <br />
            <SuccessfulLanding setParams={setParams} />
        </div>

    </aside>
)

export default Filters;