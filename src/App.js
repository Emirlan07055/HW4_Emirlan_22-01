import React, { useState } from 'react';

const Form = () => {
    const [surName, setSurName] = useState('');
    const [Name, setFullName] = useState('');
    const [birthYear, setBirthYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = [surName, Name, birthYear ];
        console.log(data);
        alert(data.join(' '));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Data</h1>
            <label>
                <input
                    placeholder='Surname'
                    type="text"
                    value={surName}
                    onChange={(event) => setSurName(event.target.value)}
                />
            </label>
            <label>
                <input
                    placeholder='Name'
                    type="text"
                    value={Name}
                    onChange={(event) => setFullName(event.target.value)}
                />
            </label>
            <label>
                <input
                    placeholder='year of birth'
                    type="number"
                    value={birthYear}
                    onChange={(event) => setBirthYear(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Form;

