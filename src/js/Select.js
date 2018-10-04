import React from 'react'
import PropTypes from 'prop-types'


const Select = ({currencies, onSelectCurrency, select}) => {

    const filtredCurency = currencies.filter(curency => {
        return curency.code !== 'AUD'
    })

    return (

        <select onChange={(e) => onSelectCurrency(e.target.value, select )} className="form-control" id="exampleFormControlSelect1">
            {
                filtredCurency.map(currency => {

                    return <option  key={currency.code} value={currency.code}>{currency.name}</option>
                })
                        }
                    }
                }
            }
        </select>


    )

}


export default Select;
