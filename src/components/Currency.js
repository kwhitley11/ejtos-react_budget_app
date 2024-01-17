import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './currency.css'


const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [ newCurrency, setNewCurrency ] = useState(currency);

    const handleCurrencyChange = (event) => {

            dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value
            });
            let payload = event.target.value;
            setNewCurrency(payload);
    }



    return (
        <div className='alert dropdown'>
            <label className="dropbtn" value={newCurrency}>Currency {newCurrency ? `(${newCurrency})` : ''}</label>
                <select className="dropdown-content" onChange={handleCurrencyChange}>
                    <option name='currency' value='$'>$ Dollar</option>
                    <option name='currency' value='£'>£ Pound</option>
                    <option name='currency' value='€'>€ Euro</option>
                    <option name='currency' value='₹'>₹ Ruppee</option>
                </select>
        </div>
    )
}

export default Currency;