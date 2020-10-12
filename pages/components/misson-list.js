import MissonDetails from './misson-detail';
import styles from '../../styles/MissonList.module.css'

const MissonList = ({ missions }) => {
    debugger
    return (
        <div className={styles.missionList}>
            {
                missions.map((mission) => (
                    <MissonDetails key={mission.flight_number} misson={mission} />)
                )
            }

        </div>

    )
}

export default MissonList;