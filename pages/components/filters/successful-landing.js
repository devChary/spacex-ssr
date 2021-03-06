import styles from '../../../styles/Filters.module.css'

const SuccessfulLanding = ({ setParams, landSuccess }) => {
    const onLanding = (val) => {
        if (landSuccess != val) {
            setParams('land', val)
        } else {
            setParams('land', '')
        }
    }

    return (
        <>
            <p className={styles.filterTags}>Successful Landing</p>
            <div className={styles.btnList}>
                <div className={styles.btnContainer}>
                    <button className={landSuccess === 'true' ? `${styles.button} ${styles.selected}` : styles.button} onClick={() => onLanding('true')}>True</button>
                </div>
                <div className={styles.btnContainer}>
                    <button className={landSuccess === 'false' ? `${styles.button} ${styles.selected}` : styles.button} onClick={() => onLanding('false')}>False</button>
                </div>
            </div>
        </>
    )
}

export default SuccessfulLanding;