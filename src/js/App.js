import React from 'react';
import image from '../images/cloud-upload-download-data-transfer.svg';
import Select from './Select';
import data from './data/Data'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currencies : data.currencies,
            currencyA : data.currencies[0],
            currencyB: data.currencies[1],
            currencyAval: data.currencies[0].sellRate,
            currencyBval: data.currencies[0].sellRate


        }
    }

    render() {
        const { currencies}  = this.state
        return <Select currencies={currencies}/>
    }

}


export default App;
