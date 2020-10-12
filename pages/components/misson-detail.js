import styles from '../../styles/MissonDetails.module.css'

const MissonDetails = ({ misson: { mission_name, flight_number, mission_id, launch_year, launch_success, is_tentative, links: { mission_patch_small } } }) => {
    return (
        <div className={styles.missionWrapper}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={mission_patch_small} />
            </div>
            <div className="details">
                <h4 className={styles.blueTag}>{mission_name} #{flight_number}</h4>

                <div className="misson-ids">
                    <div>
                        <span className={styles.textBold}>Misson Ids: </span>
                        <span className={styles.blueTag}>
                            <ul>
                                {
                                    mission_id.map(id => (<li key={id} className="">{id}</li>))
                                }
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="misson-tag">
                    <span className={styles.textBold}>Launch Year: </span>
                    <span className={styles.blueTag}>{launch_year}</span>
                </div>
                <div className="misson-tag">
                    <span className={styles.textBold}>Successful Launch: </span>
                    <span className={styles.blueTag}>{`${launch_success}`}</span>
                </div>
                <div className="misson-tag">
                    <span className={styles.textBold}>Is Tentative: </span>
                    <span className={styles.blueTag}>{`${is_tentative}`}</span>
                </div>
            </div>
        </div >
    )
}

export default MissonDetails;