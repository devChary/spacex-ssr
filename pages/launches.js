import { useState, useLayoutEffect, useRef, useEffect } from 'react';

import Filters from './components/filters';
import MissonList from './components/misson-list';
import styles from '../styles/Launch.module.css'
import Footer from './components/footer'

let API_URL = `https://api.spacexdata.com/v3/launches?limit=100`;

export default function Launches({ data, queryParams }) {

    const [missions, setMissions] = useState([]);
    const [launchYear, setLaunchYear] = useState('');
    const [launchSuccess, setLaunchSuccess] = useState('false');
    const [landSuccess, setLandSuccess] = useState('false');

    const initialRender = useRef(true);

    useEffect(() => {
        if (queryParams) {
            if (queryParams.launch_year) {
                setLaunchYear(queryParams.launch_year)
            }
            if (queryParams.launch_success) {
                setLaunchSuccess(queryParams.launch_success)
            }
            if (queryParams.land_success) {
                setLandSuccess(queryParams.land_success)
            }
            if (window) {
                window.history.pushState({}, '', `http://localhost:3000/launches${queryParams.launch_year ? `?launch_year=${queryParams.launch_year}` : ''}${queryParams.launch_success ? `&launch_success=${queryParams.launch_success}` : ''}${queryParams.land_success ? `&land_success=${queryParams.land_success}` : ''}`)
            }
        }
    }, [])

    useEffect(() => {
        setMissions(data);
    }, [data])

    useLayoutEffect(() => {
        updateUrl();
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
        async function fetchData() {
            const missionsDetails = await getMissonDetails(null);
            setMissions(missionsDetails.props.data)
        }

        fetchData();
    }, [launchYear, launchSuccess, landSuccess])

    const setParams = (type, value) => {
        if (type === 'year') {
            setLaunchYear(value)
        } else if (type === 'land') {
            setLandSuccess(`${value}`)
        } else if (type === 'launch') {
            setLaunchSuccess(`${value}`)
        }
    }

    const updateUrl = () => {
        API_URL = `https://api.spacexdata.com/v3/launches?limit=100${launchYear ? `&launch_year=${launchYear}` : ''}${launchSuccess ? `&launch_success=${launchSuccess}` : ''}${landSuccess ? `&land_success=${landSuccess}` : ''}`;
        window.history.pushState({}, '', `http://localhost:3000/launches${launchYear ? `?launch_year=${launchYear}` : ''}${launchSuccess ? `&launch_success=${launchSuccess}` : ''}${landSuccess ? `&land_success=${landSuccess}` : ''}`)
    }

    return (
        <>
            <header className={styles.launchTitle}>Space X Launch Programs</header>
            <div className={styles.wrapper}>
                <Filters setParams={setParams} launchSuccess={launchSuccess} launchYear={launchYear} landSuccess={landSuccess} />
                <MissonList missions={missions} />
            </div>
            <Footer />
        </>
    )
}

const getMissonDetails = async (queryParams) => {
    if (queryParams) {
        API_URL = `https://api.spacexdata.com/v3/launches?limit=100${queryParams.launch_year ? `&launch_year=${queryParams.launch_year}` : ''}${queryParams.launch_success ? `&launch_success=${queryParams.launch_success}` : ''}${queryParams.land_success ? ` &land_success=${queryParams.land_success}` : ''}`;
    }
    const res = await fetch(`${API_URL}`);
    const data = await res.json();

    return {
        props: { data, queryParams }
    }
}

export async function getServerSideProps(context) {
    return getMissonDetails(context.query)
}