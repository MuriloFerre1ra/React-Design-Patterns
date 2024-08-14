import { useState, useEffect } from 'react';
export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');
    const [name,setName] = useState('');
    const [age, setAge] = useState('');
    const [hairColor, setHairColor] = useState('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError('Name must be two or more characters')
        } else {
            setNameInputError('');
        }
    }, [name])

    return (
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            <input name="name" type="text" placegolder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input name="age" type="number" placegolder="Age" value={age} onChange={e => setAge(Number(e.target.value))} />
            <input name="hairColor" type="text" placegolder="Hair COlor" value={hairColor} onChange={e => setHairColor(e.target.value)} />
        </form>
    )
}