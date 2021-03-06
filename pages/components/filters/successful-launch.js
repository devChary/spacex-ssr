import styles from '../../../styles/Filters.module.css'

const SuccessfulLaunch = ({ setParams, launchSuccess }) => {
    const onLaunch = (val) => {
        if (launchSuccess != val) {
            setParams('launch', val)
        } else {
            setParams('launch', '')
        }
    }
    
    return (
        <>
            <p className={styles.filterTags}>Successful Launch</p>
            <div className={styles.btnList}>
                <div className={styles.btnContainer}>
                    <button className={launchSuccess === 'true' ? `${styles.button} ${styles.selected}` : styles.button} onClick={() => onLaunch('true')}>True</button>
                </div>
                <div className={styles.btnContainer}>
                    <button className={launchSuccess === 'false' ? `${styles.button} ${styles.selected}` : styles.button} onClick={() => onLaunch('false')}>False</button>
                </div>
            </div>

        </>
    )
}

export default SuccessfulLaunch;