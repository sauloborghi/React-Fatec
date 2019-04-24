import React from 'react';
import Label from '../../Label';
import Input from '../../Input';
import Button from '../../Button';
import Header from '../../Header';

class FormCadastroCliente extends React.Component{
    constructor(props)	{
        super(props);
        this.state = {
            nome: "",
            email: ""            
        }
    }

    handlerInputChangeNome = (e) => {
        console.log("Nome atualizado.");
        this.setState({
            nome:e.target.value
        });
    }

    handlerInputChangeEmail = (e) => {
        console.log("Email atualizado.");
        this.setState({
            email:e.target.value
        });
    }

    handleSubmit = (e) => {
        
        console.log("Form submetido.");
        
        e.preventDefault();

        let cliente  = {
            nome: this.state.nome,
            email: this.state.email
        }

        let	storage	= window.localStorage;        
        storage.setItem("cliente", JSON.stringify(cliente));
    }

    render(){
        return (
            <div>
                <Header title = 'Cadastro de cliente'/>
                <form onSubmit={this.handleSubmit}>
                    <Label text="Nome:"/>
                    <Input id="txtNome" type="text" placeholder="Digite o nome do cliente..." onChange={this.handlerInputChangeNome}/>
                    <Label text="E-mail:"/>
                    <Input id="txtEmail" type="text" placeholder="Digite o e-mail do cliente..." onChange={this.handlerInputChangeEmail}/>
                    <Button text="Gravar"/>
                </form>
            </div>
        );
    }
}

export default FormCadastroCliente;