import MissonDetails from './misson-detail';
import styles from '../../styles/MissonList.module.css'

const MissonList = ({ missions }) => {
    return (
        <div className={styles.missionList}>
            {
                missions && missions.map((mission) => (
                    mission ?
                        <MissonDetails key={mission.flight_number} mission={mission} /> : "No results to display")
                )
            }

        </div>

    )
}

export default MissonList;