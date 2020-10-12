import styles from '../../../styles/Filters.module.css'

const LaunchYear = () => {
    const yearsList = [
        { name: '2006', _id: 1 },
        { name: '2007', _id: 2 },
        { name: '2008', _id: 3 },
        { name: '2009', _id: 4 },
        { name: '2010', _id: 5 },
        { name: '2011', _id: 6 },
        { name: '2012', _id: 7 },
        { name: '2013', _id: 8 },
        { name: '2014', _id: 9 },
        { name: '2015', _id: 10 },
        { name: '2016', _id: 11 },
        { name: '2017', _id: 12 },
        { name: '2018', _id: 13 },
        { name: '2019', _id: 14 },
        { name: '2020', _id: 15 }
    ]
    return (
        <div>
            <p className={styles.filterTags}>Launch Year</p>

            <div className={styles.btnList}>
                {
                    yearsList.map(year => (
                        <div key={year._id} className={styles.btnContainer}>
                            <button>{year.name}</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default LaunchYear;