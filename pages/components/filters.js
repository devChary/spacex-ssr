import LaunchYear from './filters/launch-year';
import SuccessfulLaunch from './filters/successful-launch';
import SuccessfulLanding from './filters/successful-landing';

import styles from '../../styles/Filters.module.css'

const Filters = ({ setParams, launchYear, launchSuccess, landSuccess }) => (
    <aside className={styles.filterWrapper}>
        <h4>Filters</h4>
        <div className={styles.filters}>
            <LaunchYear launchYear={launchYear} setParams={setParams} />
            <br />
            <SuccessfulLaunch launchSuccess={launchSuccess} setParams={setParams} />
            <br />
            <SuccessfulLanding landSuccess={landSuccess} setParams={setParams} />
        </div>

    </aside>
)

export default Filters;