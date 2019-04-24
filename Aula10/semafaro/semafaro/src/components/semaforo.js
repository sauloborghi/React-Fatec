import React from 'react';
import LuzSemafaro from './luzSemaforo'
import DisplaySegundos from './displaySegundos'

class Semafaro extends React.Component{
    constructor(props){
        super(props);
        this.state={
            segundos: this.props.segundosCorVermellha,
            cor :1
        }
    }
    
    componentDidMount(){
        this.timer = setInterval(this.tick,1000);
    }

    tick =() => {
        let segundos = this.state.segundos;
        let cor = this.state.cor;
        segundos--;

        if(segundos === 0){
            if(cor===1){
                cor = 2;
                segundos = this.props.segundosCorVerde;
            } else if(cor===2){
                cor = 3;
                segundos = this.props.segundosCorAmarela;
            }else{
                cor = 1;
                segundos = this.props.segundosCorVermellha;
            }
        }

        this.setState({
            segundos: segundos,
            cor: cor
        })
    }

    render(){
        const segundos = this.state.segundos;
        const cor = this.state.cor;
        const corLuzVermelha = cor ===1 && segundos !== 0 ? '#F00' : '#FFF'
        const corLuzVerde = cor ===2 && segundos !== 0 ? '#0F0' : '#FFF'
        const corLuzAmarela = cor ===3 && segundos !== 0 ? '#FF0' : '#FFF'
        return(
            <div>
                <LuzSemafaro cor = {corLuzVermelha}/>
                <LuzSemafaro cor = {corLuzAmarela}/>
                <LuzSemafaro cor = {corLuzVerde}/>
                <DisplaySegundos segundos = {segundos}/>
            </div>
        );
    }
}

export default Semafaro;