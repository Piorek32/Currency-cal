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

    onSelectCurrency(code, select) {
        console.log('selected curency' + code)
        const {currencies} = this.state
        const curency = currencies.filter(currency => {
            return currency.code === code
        })

        if (select ==="A") {
            this.setState({
            currencyA: curency[0]
        })}
        else if (select === "B") {
            this.setState({
                currencyB : curency[0]
            })
        }

    }

        onChangeHendler(e, currency)  {
        const {currencyA, currencyB } = this.state
        if (currency === "A") {
            const newValA = e.target.value
            this.setState({
                currencyAval: newValA,
                currencyBval: newValA * currencyB.sellRate
            })
        }

        else  if (currency === "B") {
            const newValB = e.target.value;
            this.setState({
              currencyBval : newValB,
              currencyAval : newValB  /currencyB.sellRate

            })
        }

        }

    render() {
        const { currencies, currencyB, currencyA,currencyAval,currencyBval}  = this.state
        return <div>
            <form className="form-inline">
            <Select currencies={currencies} select="A" onSelectCurrency={this.onSelectCurrency.bind(this, )}/>
            <Select currencies={currencies} select="B" onSelectCurrency={this.onSelectCurrency.bind(this, )}/>
            </form>

                <div className="row">
                    <div className="col-sm-6 currency-from-input">
                        <h3 className={`currency-flag ${currencyA.name}`}>{currencyA.name}</h3>
                        {
                            //Currency A input
                        }
                        <div className="input-group">
                            <span className="input-group-addon">{currencyA.sign}</span>
                            <input type="number" value={currencyAval} className="form-control" aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}"
                            onChange={(e)=> this.onChangeHendler(e, 'A')}/>
                            <span className="input-group-addon" id="basic-addon2">{currencyA.code}</span>
                        </div>

                    </div>
                    <div className="col-sm-6 currency-to-input">
                        <h3 className={`currency-flag ${currencyB.code}`}>{currencyB.name}</h3>
                        {
                            //Currency B input
                        }
                        <div className="input-group">
                            <span className="input-group-addon">{currencyB.sign}</span>
                            <input type="number" value={currencyBval} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"
                                   onChange={(e)=> this.onChangeHendler(e, 'B')}/>
                            <span className="input-group-addon" id="basic-addon3">{currencyB.code}</span>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        {
                            //Update to currently selected currency
                        }
                        <p>
                            Exchange Rate $ 1 AUD = {currencyB.sign} {currencyB.sellRate} {currencyB.name}
                        </p>
                    </div>
                </div>


                         
            </div>



    }

}


export default App;
