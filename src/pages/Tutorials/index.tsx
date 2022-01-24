import { RootState } from '@reduxStore/reducers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM, DELETE_ITEM } from '@reduxStore/actions/tutorials';
import styles from '@pages/Tutorials/Tutorials.module.css';

const Tutorials = () => {
    const dispatch = useDispatch();
    const tutorialList = useSelector((state: RootState) => state.tutorials);
    const [name, setName] = useState('');

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        // check if input filed is empty
        if (!name) return;

        const newAuthor = {
            id: new Date().toISOString(),
            authorName: name,
        };

        dispatch(ADD_ITEM(newAuthor));
        setName('');
        console.log(tutorialList);
    };

    const removePerson = (id: string) => {
        dispatch(DELETE_ITEM(id));
    };

    return (
        <div className={styles['main']}>
            <form onSubmit={handleSubmit} className={styles['form']}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add Item</button>
            </form>
            <hr />
            <div className={styles['lists']}>
                {tutorialList.length > 0 ? (
                    tutorialList.map((list) => {
                        const { id, authorName } = list;
                        return (
                            <div key={id} className={styles['list']}>
                                <p className={styles['authorName']}>
                                    {authorName}
                                </p>
                                <button onClick={() => removePerson(id)}>
                                    Remove
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p className={styles['emptyList']}>Your list is empty</p>
                )}
            </div>
        </div>
    );
};

export default Tutorials;
