import styles from '../../../styles/Filters.module.css'

const SuccessfulLanding = () => {

    const onLanding = (val) => {
        console.log('Landing', val);
    }

    return (
        <>
            <p className={styles.filterTags}>Successful Landing</p>
            <div className={styles.btnList}>
                <div className={styles.btnContainer}>
                    <button onClick={() => onLanding(true)}>True</button>
                </div>
                <div className={styles.btnContainer}>
                    <button onClick={() => onLanding(false)}>False</button>
                </div>
            </div>

        </>
    )
}

export default SuccessfulLanding;