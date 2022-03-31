
import api from '../../_config/configAPI'
import React, { useEffect, useState } from "react";
import { DivFrete, Body } from './style'

export const CalcFrete = () => {

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const [ceporigem, setCepOrigem] = useState();
    const [ceporigemresult, setCepOrigemresult] = useState('');
    const [cepdestino, setCepDestino] = useState();
    const [cepdestinoresult, setCepDestinoresult] = useState('');
    const [valorFrete, setValorFrete] = useState([]);


    const [dadosFrete, setDadosFrete] = useState({
        Servico: '04014',
        CepOrigem: '',
        CepDestino: '',
        Peso: '1',
        Formato: '1',
        Comprimento: '33',
        Altura: '21',
        Largura: '33',
        Diametro: '0'
    });

    const buscaOrigem = async (e) => {
        setCepOrigem(e.target.value.replace(/[^\d]+/g, ''));
        
    }

    const buscaDestino = async (e) => {
        setCepDestino(e.target.value.replace(/[^\d]+/g, ''))
    }

    useEffect(
        () => {

            const options = { method: 'GET', mode: 'cors', cache: 'default' }

            var validador1 = String(ceporigem);

            (ceporigem) ?
                (validador1.length === 8) ?
                    fetch(`https://viacep.com.br/ws/${ceporigem}/json/`,
                        options)
                        .then((resposta) => resposta.json())
                        .then((dados) => setCepOrigemresult(dados))
                    : alert('Preencha o CEP corretamente. Ex.: (xxxxx-xxx) ou (xxxxxxxx)')
                : setStatus({
                    type: 'Sucesso',
                    mensagem: 'Preencha todos os campos'
                });
            var validador2 = String(cepdestino);

            (cepdestino) ?
                (validador2.length === 8) ?
                    fetch(`https://viacep.com.br/ws/${cepdestino}/json/`,
                        options)
                        .then((resposta) => resposta.json())
                        .then((dados) => setCepDestinoresult(dados))

                    : alert('Preencha o CEP corretamente. Ex.: (xxxxx-xxx) ou (xxxxxxxx)')
                : setStatus({
                    type: 'Sucesso',
                    mensagem: 'Preencha todos os campos'
                });

        }, [cepdestino, ceporigem]);


    const data = (e) => setDadosFrete(
        { ...dadosFrete, [e.target.name]: e.target.value });

    const args = {
        nCdServico: String(dadosFrete.Servico),
        sCepOrigem: String(dadosFrete.CepOrigem),
        sCepDestino: String(dadosFrete.CepDestino),
        nVlPeso: parseInt(dadosFrete.Peso),
        nCdFormato: parseInt(dadosFrete.Formato),
        nVlComprimento: parseFloat(dadosFrete.Comprimento),
        nVlAltura: parseFloat(dadosFrete.Altura),
        nVlLargura: parseFloat(dadosFrete.Largura),
        nVlDiametro: parseFloat(dadosFrete.Diametro)
    }

    const EnviarDados = async e => {
        e.preventDefault();
        const headers = {
            'headers': { 'Content-Type': 'application/json' }
        }

        await api.post("/calcfrete", args, headers)
            .then((response) => { return response })
            .then((dados) => {
                setValorFrete(dados.data[0])
                setStatus({ type: 'Successo' })
            })
            .catch((erro) => {
                console.log(erro.MsgErro)
            })
    };

    return (

        <Body>
            <DivFrete>

                <div className='Container'>

                    <div className='Titulo'>Frete via Correios </div>

                    <form>
                        <div className='cep'>
                            <div className='InputCep'>
                                <div>
                                    <label>Digite o CEP de Origem</label><br />
                                        <input type="string" name="CepOrigem"
                                             onBlur={buscaOrigem} autoFocus onChange={data} />
                                </div>

                                {ceporigemresult.erro === true ?
                                    <div className="cep-data">CEP não encontrado </div> :
                                    ceporigemresult ?
                                        <span className="cep-data">
                                            {ceporigemresult.logradouro} <br />
                                            {ceporigemresult.localidade + ' - '}
                                            {ceporigemresult.uf}</span>
                                        : <></>}
                                <br />
                            </div>
                            <div className='InputCep'>
                                <div>
                                    <label>Digite o CEP de Destino</label><br />
                                    <input type="string" name="CepDestino"
                                        onBlur={buscaDestino} onChange={data} />
                                </div>

                                {cepdestinoresult.erro ?
                                    <div className="cep-data">CEP não encontrado </div> :
                                    cepdestinoresult ?
                                        <span className="cep-data">
                                            {cepdestinoresult.logradouro} <br />
                                            {cepdestinoresult.localidade + ' - '}
                                            {cepdestinoresult.uf}</span>
                                        : <></>}
                                <br />
                            </div>
                        </div>

                        <div className='flex1'>
                            <div>
                                <label>Escolha o tipo de serviço<br />
                                    <select name="Servico" onChange={data}>
                                        <option value='04014'>SEDEX</option>
                                        <option value='04790'>SEDEX 10</option>
                                        <option value='04510'>PAC</option>
                                    </select></label>
                            </div>

                            <div>
                                <label>Qual o formato do objeto</label> <br />
                                <select name="Formato" onChange={data}>
                                    <option value='1'>CX / Pacote</option>
                                    <option value='3'>Envelope</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex2'>
                            <div className='Tamanho'>
                                <label>Digite o Comprimento</label> <br />
                                <input type="number" name="Comprimento" onChange={data} placeholder='33' maxLength='2' />
                            </div>

                            <div>
                                <label>Digite a Altura</label> <br />
                                <input type="number" name="Altura" onChange={data} placeholder='20' maxLength='2' />
                            </div>

                            <div>
                                <label>Digite a Largura</label> <br />
                                <input type="number" name="Largura" onChange={data} placeholder='33' maxLength='2' /><br />
                            </div>
                        </div>

                    </form>

                    <div className='flex3'>
                        <div className='selectStyle2'>
                            <button onClick={EnviarDados} type="submit">Calcular</button>
                        </div>
                        {(ceporigemresult.erro || cepdestinoresult.erro || !ceporigem || !cepdestino)
                            ?
                            <div className='selectStyle2'>{status.mensagem}</div>
                            :
                            (valorFrete.Valor <= '0,00')
                                ?
                                <div className='Alerta'> Região não permite essa modalidade de entrega. </div>
                                :
                                status.type = true
                                    ?
                                    <div className='selectStyle2'>                                     {
                                        (valorFrete.PrazoEntrega > 1) ?
                                            <div>Frete R$: {valorFrete.Valor} <br />
                                                Prazo entrega: {valorFrete.PrazoEntrega} dias
                                            </div>
                                            :
                                            <div>Frete R$: {valorFrete.Valor} <br />
                                                Prazo entrega: {valorFrete.PrazoEntrega} dia
                                            </div>
                                    }
                                    </div>
                                    : <div className='selectStyle2'> {status.mensagem} </div>
                        }
                    </div>
                </div>
            </DivFrete>
        </Body>
    )
}
