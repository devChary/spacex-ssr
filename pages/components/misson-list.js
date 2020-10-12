import MissonDetails from './misson-detail';
import styles from '../../styles/MissonList.module.css'

const MissonList = ({ missions }) => {
    return (
        <div className={styles.missionList}>
            {
                missions && missions.map((mission) => (
                    mission ?
                        <MissonDetails key={mission.flight_number} misson={mission ? mission : {}} /> : '')
                )
            }

        </div>

    )
}

export default MissonList;