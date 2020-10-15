import styles from '../../styles/MissonDetails.module.css'

const MissonDetails = ({ mission }) => {

    const landing = mission && mission.rocket.first_stage.cores.length ? mission.rocket.first_stage.cores[0].land_success : '';

    return (
        <div className={styles.missionWrapper}>
            <div className={styles.imgContainer}>
                <img alt={mission ? mission.mission_name : 'SpaceX missions'} className={styles.img} src={mission && mission.links ? mission.links.mission_patch_small : ''} />
            </div>
            <div className="details">
                <h4 className={styles.blueTag}>{mission ? mission.mission_name : ''} #{mission ? mission.flight_number : ''}</h4>

                <div className="misson-ids">
                    <div>
                        <span className={styles.textBold}>Misson Ids: </span>
                        <span className={styles.blueTag}>
                            <ul>
                                {
                                    mission ? mission.mission_id.map(id => (<li key={id} className="">{id}</li>)) : null
                                }
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="misson-tag">
                    <span className={styles.textBold}>Launch Year: </span>
                    <span className={styles.blueTag}>{mission ? mission.launch_year : ''}</span>
                </div>
                <div className="misson-tag">
                    <span className={styles.textBold}>Successful Launch: </span>
                    <span className={styles.blueTag}>{`${mission ? mission.launch_success : ''}`}</span>
                </div>
                <div className="misson-tag">
                    <span className={styles.textBold}>Successful Landing: </span>
                    <span className={styles.blueTag}>{`${landing}`}</span>
                </div>
            </div>
        </div >
    )
}

export default MissonDetails;