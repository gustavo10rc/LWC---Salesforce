import { LightningElement } from 'lwc';

export default class InserirLead extends LightningElement {
  
    // as keys devem ser os mesmo valores atribuidos para os names do formulário
    //lds vai armazenar os valores do formulário
    lds={
        firstname:'',
        lastname:'',
        email:''
    };
//a função recebe o nome que está no onchange
// essa função recebe um paramentro chamado event
    handleOnChange(event){
        //let significa que a variavel só existem por um momento dentro do contexto da função. Ela é temporária.
        let name_ = event.target.name;
        let value_ = event.target.value;

        // vai vir desse jeito quando passa o valores this.lds = {phone:8999}
        //Aqui vai preencher
        // this.lds={[name_]:value_}
        //Aqui ele vai pegar o valor antigo manter e juntar com o valor novo para nao peder dados
        this.lds={...this.lds, [name_]:value_}

        console.log(this.lds);
        // console.log(event.target.name);
        //console.log(event.target.value);
    }
}