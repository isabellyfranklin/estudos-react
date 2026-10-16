import { Component } from "react";

class CounterClassComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    increase(){
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        const {messagem } = this.props;
        const { count, xpto } = this.state;

        return(
            <div>
                <h1>{this.props.messagem}</h1>
                <h2>Contador : {count}</h2>
                <button className="button" onClick={increase}>Adicionar</button>
            </div>  
        )
    }
}

export default CounterClassComponent