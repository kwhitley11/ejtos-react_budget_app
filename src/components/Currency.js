import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './currency.css'


const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

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
            <button className="dropbtn" onClick={handleCurrencyChange} value={newCurrency} type='button'>Currency {newCurrency ? `(${newCurrency})` : ''}</button>
                <div className="dropdown-content">
                    <button name='currency' type='button' value='$'>$ Dollar</button>
                    <button name='currency' type='button' value='£'>£ Pound</button>
                    <button name='currency' type='button' value='€'>€ Euro</button>
                    <button name='currency' type='button' value='₹'>₹ Ruppee</button>
                </div>
        </div>
    )
}

export default Currency;