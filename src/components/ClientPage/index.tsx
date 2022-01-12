import React, { useState } from 'react';
import Layout from '@components/Layout';
import { RootState } from '@reduxStore/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from '@components/ClientPage/ClientPage.module.css';

const cities = ['USA', 'Europe', 'Australia'];

type selectedCityType = {
    id: string;
    cityName: string;
};

function ClientPage() {
    const [selectedCity, setSelectedCity] = useState<selectedCityType[]>([]);

    const addCityHandler = (e: any) => {
        selectedCity.forEach((city) => {
            if (city.cityName.includes(e.target.innerText)) {
                return;
            } else {
                const newCity = {
                    id: new Date().toISOString(),
                    cityName: e.target.innerText,
                };
                setSelectedCity([...selectedCity, newCity]);
            }
        });
    };

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
                        <button onClick={addCityHandler} key={city}>
                            {city}
                        </button>
                    );
                })}
            </div>
            <div className={styles.selectedCitys}>
                {selectedCity.map((city) => {
                    const { id, cityName } = city;
                    return (
                        <div key={id} className={styles.selectedCity}>
                            <p>{cityName}</p>
                            <p>X</p>
                        </div>
                    );
                })}
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
