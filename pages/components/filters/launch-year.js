import styles from '../../../styles/Filters.module.css'

const LaunchYear = ({ setParams }) => {
    const yearsList = [
        { label: '2006', _id: 1 },
        { label: '2007', _id: 2 },
        { label: '2008', _id: 3 },
        { label: '2009', _id: 4 },
        { label: '2010', _id: 5 },
        { label: '2011', _id: 6 },
        { label: '2012', _id: 7 },
        { label: '2013', _id: 8 },
        { label: '2014', _id: 9 },
        { label: '2015', _id: 10 },
        { label: '2016', _id: 11 },
        { label: '2017', _id: 12 },
        { label: '2018', _id: 13 },
        { label: '2019', _id: 14 },
        { label: '2020', _id: 15 }
    ]

    // Fn: takes the id of the year selected and sets the route and makes the API call.
    const selectedYear = (label) => {
        setParams('year', label)
    }

    return (
        <div>
            <p className={styles.filterTags}>Launch Year</p>

            <div className={styles.btnList}>
                {
                    yearsList.map(year => (
                        <div key={year._id} className={styles.btnContainer}>
                            <button onClick={() => selectedYear(year.label)}>{year.label}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LaunchYear;