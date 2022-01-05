import { useDispatch, useSelector } from 'react-redux';
import Layout from '@components/Layout';
import { RootState } from '@reduxStore/reducers';
import { addCity } from '@reduxStore/actions/clientPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from '@components/ClientPage/ClientPage.module.css';

const cities = ['USA', 'Europe', 'Australia'];

function ClientPage() {
    const dispatch = useDispatch();
    const selectedCities = useSelector((state: RootState) => state.client);
    console.log(selectedCities);

    return (
        <section className={styles.clientPage}>
            <h1>Clients</h1>
            <div className={styles.inputField}>
                <input type="text" />
                <FontAwesomeIcon className={styles.icon} icon={faSearch} />
            </div>
            <div className={styles.chooseCity}>
                {cities.map((city) => {
                    return (
                        <button onClick={() => dispatch(addCity())} key={city}>
                            {city}
                        </button>
                    );
                })}
            </div>
            <div className={styles.selectedCitys}>
                <div className={styles.selectedCity}>
                    <p>Europe</p>
                    <p>X</p>
                </div>
            </div>
            <div className={styles.listedCompanies}>
                <div className={styles.listedCompaniesItem}>
                    <div className={styles.circle}></div>
                    <h3>Company name</h3>
                    <p>CEO&apos;s FULLNAME</p>
                </div>
            </div>
        </section>
    );
}

export default ClientPage;
