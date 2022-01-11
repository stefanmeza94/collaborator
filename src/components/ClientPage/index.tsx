import React, { useState } from 'react';
import Layout from '@components/Layout';
import { RootState } from '@reduxStore/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { cities } from './cities';
import { companyNames } from './companyNamesData';
import { useSearchParams } from 'react-router-dom';
import styles from '@components/ClientPage/ClientPage.module.css';

// interface IState {
//     city: {
//         id: number;
//         cityName: string;
//     }[];
// }

function ClientPage() {
    const [input, setInput] = useState('');
    const [searchParams, setSearchParams] = useSearchParams({});

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSearch = () => {
        console.log('radi serach');
        if (input) {
            searchParams.set('search', input);
            setSearchParams(searchParams);
        } else {
            searchParams.delete('search');
            setSearchParams(searchParams);
        }
    };

    const handleButtonClick = (city: string, id: string) => {
        console.log('radi button');
        searchParams.set(id, city);
        setSearchParams(searchParams);
    };

    const handleRemoveBtn = (id: string) => {
        searchParams.delete(id);
        setSearchParams(searchParams);
    };

    return (
        <section className={styles.clientPage}>
            <h1>Clients</h1>

            <div className={styles.inputField}>
                <input type="text" value={input} onChange={handleInput} />
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={faSearch}
                    onClick={handleSearch}
                />
            </div>

            <div className={styles.chooseCity}>
                {cities.map((city) => {
                    const { id, name } = city;
                    return (
                        <button
                            key={id}
                            onClick={() => handleButtonClick(name, id)}
                        >
                            {name}
                        </button>
                    );
                })}
            </div>

            <div className={styles.selectedCitys}>
                {cities
                    .filter((city) => {
                        const { id } = city;
                        return searchParams.get(id);
                    })
                    .map((btn) => {
                        const { name, id } = btn;
                        return (
                            <div key={id} className={styles.selectedCity}>
                                <p>{name}</p>
                                <p onClick={() => handleRemoveBtn(id)}>X</p>
                            </div>
                        );
                    })}
            </div>

            <div className={styles.listedCompanies}>
                {companyNames
                    .filter((company) => {
                        if (!searchParams.get('search')) return true;

                        const { companyName, ceo } = company;
                        return (
                            companyName
                                .toLowerCase()
                                .includes(
                                    searchParams.get('search')?.toLowerCase()
                                ) ||
                            ceo
                                .toLowerCase()
                                .includes(
                                    searchParams.get('search')?.toLowerCase()
                                )
                        );
                    })
                    // .filter(company => {
                    //     // problem je da uskladimo id iz url-a sa from parametrom iz compnay
                    //     const {id} = company;
                    //     if (searchParams.get())
                    // })
                    .map((company) => {
                        const { companyName, ceo, id } = company;
                        return (
                            <div
                                key={id}
                                className={styles.listedCompaniesItem}
                            >
                                <div className={styles.circle}></div>
                                <h3>{companyName}</h3>
                                <p>{ceo}</p>
                            </div>
                        );
                    })}
                {/* <div className={styles.listedCompaniesItem}>
                    <div className={styles.circle}></div>
                    <h3>Company name</h3>
                    <p>CEO&apos;s FULLNAME</p>
                </div> */}
            </div>
        </section>
    );
}

export default ClientPage;
