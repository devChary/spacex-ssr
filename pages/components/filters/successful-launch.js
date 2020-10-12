import styles from '../../../styles/Filters.module.css'

const SuccessfulLaunch = ({ setParams, launchSuccess }) => {
    debugger
    const onLaunch = (val) => {
        setParams('launch', val)
    }
    return (
        <>
            <p className={styles.filterTags}>Successful Launch</p>
            <div className={styles.btnList}>
                <div className={styles.btnContainer}>
                    <button className={launchSuccess === 'true' ? `${styles.button} ${styles.selected}` : styles.button} onClick={() => onLaunch(true)}>True</button>
                </div>
                <div className={styles.btnContainer}>
                    <button className={launchSuccess === 'false' ? `${styles.button} ${styles.selected}` : styles.button} onClick={() => onLaunch(false)}>False</button>
                </div>
            </div>

        </>
    )
}

export default SuccessfulLaunch;