import React from 'react';

function LuzSemafaro(props){
    const estilo = {
        backgroundColor: props.cor,
        whidth: 100,
        height: 100
    }
    return(
        <div style={estilo}>
            Luz Semafaro
        </div>
    );
}

export default LuzSemafaro;