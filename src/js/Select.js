import React from 'react'
import PropTypes from 'prop-types'



const Select = ({currencies,onSelectCurrency }) => {


    return (

        <select className="form-control" id="exampleFormControlSelect1">
            {
                currencies.map(currency => {

                    return <option key={currency.code} value={currency.code}>{currency.name}</option>
                })
            }} } }


        </select>


    )

}


export default Select;
