import React, {useState} from 'react'


const FieldMessage = ({note}) => {
    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
        setActive(!isActive);
    };


    return (
        <li className={isActive ? 'nav-link active note' : ('nav-link bg-secondary note')}>
                <strong onClick={toggleClass}>{note.name}</strong>
                <small onClick={toggleClass}>{note.phone}</small>
                <small onClick={toggleClass}>{note.times.toLocaleDateString()}</small>
            <p onClick={toggleClass}>{note.message}</p>
            <i className="bi bi-trash" type='button'></i>
        </li>
    )
}


export default FieldMessage