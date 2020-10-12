import styles from '../../../styles/Filters.module.css'

const SuccessfulLaunch = () => {

    const onLaunch = (val) => {
        console.log('Launch', val);
    }
    return (
        <>
            <p className={styles.filterTags}>Successful Launch</p>
            <div className={styles.btnList}>
                <div className={styles.btnContainer}>
                    <button onClick={() => onLaunch(true)}>True</button>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={() => onLaunch(false)}>False</button>
                </div>
            </div>

        </>
    )
}

export default SuccessfulLaunch;