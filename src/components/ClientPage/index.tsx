import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout';
import { RootState } from '@reduxStore/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { continents } from '@components/ClientPage/continents';
import { companyNames } from '@components/ClientPage/companyNamesData';
import { useSearchParams } from 'react-router-dom';
import { CompanyType } from '@components/ClientPage/types';
import styles from '@components/ClientPage/ClientPage.module.css';

const initialStateCompanies = companyNames;

function ClientPage() {
    const [input, setInput] = useState('');
    const [searchParams, setSearchParams] = useSearchParams({});
    const [companies, setCompanies] = useState<CompanyType['company']>(
        initialStateCompanies
    );

    // helper funcions
    function setQueryStrings(queryPrm: string) {
        searchParams.set('search', queryPrm);
        setSearchParams(searchParams);
    }

    function deleteQueryStrings() {
        searchParams.delete('search');

        setSearchParams(searchParams);
    }

    function getQueryStringAndFilterCompanies() {
        const currentQueryString = searchParams.get('search');
        const filteredCompanies = initialStateCompanies.filter((company) => {
            if (
                company.from.toLowerCase() ===
                    currentQueryString?.toLowerCase() ||
                company.companyName.toLowerCase() ===
                    currentQueryString?.toLowerCase()
            ) {
                return true;
            }
        });
        setCompanies(filteredCompanies);
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleInputSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (input) {
            setQueryStrings(input);
            getQueryStringAndFilterCompanies();
        } else {
            deleteQueryStrings();
            setCompanies(initialStateCompanies);
        }

        setInput('');
    };

    const handleButtonClick = (id: number, name: string) => {
        searchParams.set(String(id), name.toLowerCase());
        setSearchParams(searchParams);

        // setQueryStrings(continent);
    };

    const handleRemoveBtn = (id: string) => {
        searchParams.delete(id);
        setSearchParams(searchParams);
    };

    // function filteredBtnCompanies(id: number) {
    //     return companyNames.filter(company => {
    //         return searchParams.get(String(id)) === company.from;
    //     })
    // }

    return (
        <section className={styles.clientPage}>
            <h1>Clients</h1>

            <div className={styles.inputField}>
                <form onSubmit={handleInputSearch}>
                    <input type="text" value={input} onChange={handleInput} />
                    <button type="submit">
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faSearch}
                        />
                    </button>
                </form>
            </div>

            <div className={styles.chooseCity}>
                {continents.map((continent) => {
                    const { id, name } = continent;
                    return (
                        <button
                            key={id}
                            onClick={() => handleButtonClick(id, name)}
                        >
                            {name}
                        </button>
                    );
                })}
            </div>

            <div className={styles.selectedCitys}>
                {continents
                    .filter((continent) => {
                        const { id, name } = continent;
                        if (searchParams.get(String(id))) return true;
                    })
                    .map((btn) => {
                        const { id, name } = btn;
                        return (
                            <div key={id} className={styles.selectedCity}>
                                <p>{name}</p>
                                <p onClick={() => handleRemoveBtn(String(id))}>
                                    X
                                </p>
                            </div>
                        );
                    })}
            </div>

            <div className={styles.listedCompanies}>
                {companies
                    .filter((company) => {
                        const { id, from } = company;
                        for (let i = 0; i < continents.length; i++) {
                            searchParams.get(String(continents[i].id));
                        }
                        return searchParams.get;
                    })
                    .map((company) => {
                        const { id, companyName, ceo } = company;
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
                {/* {filteredCompanies
                    .filter((company) => {
                        if (!searchParams.get('search')) {
                            return true;
                        }

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
                    .filter(company => {
                        // problem je da uskladimo id iz url-a sa from parametrom iz compnay
                        const {id} = company;
                        if (searchParams.get())
                    })
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
                    })} */}
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
