import { RootState } from '@reduxStore/reducers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM } from '@reduxStore/actions/tutorials';

const Tutorials = () => {
    const dispatch = useDispatch();
    const tutorialList = useSelector((state: RootState) => state.tutorials);
    console.log(tutorialList);
    const [name, setName] = useState('');

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newAuthor = {
            id: new Date().toISOString(),
            authorName: name,
        };
        dispatch(ADD_ITEM(newAuthor));
        setName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button>Add Item</button>
            </form>
            <div>
                {tutorialList.map((list) => {
                    const { id, name } = list;
                    return <p key={id}>{name}</p>;
                })}
            </div>
        </div>
    );
};

export default Tutorials;
