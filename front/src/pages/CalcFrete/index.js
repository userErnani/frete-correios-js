
import api from '../../_config/configAPI'
import React, { useEffect, useState } from "react";
import { DivFrete } from './style'


export const CalcFrete = () => {

    const [status, setStatus] = useState('')

    const [ceporigem, setCepOrigem] = useState();
    const [ceporigemresult, setCepOrigemresult] = useState('');
    const [cepdestino, setCepDestino] = useState();
    const [cepdestinoresult, setCepDestinoresult] = useState('');
    const [valorFrete, setValorFrete] = useState([]);


    const [dadosFrete, setDadosFrete] = useState({
        Servico: '04014',
        CepOrigem: '02130040',
        CepDestino: '02066030',
        Peso: '1',
        Formato: '1',
        Comprimento: '33',
        Altura: '21',
        Largura: '33',
        Diametro: '0'
    });

    const buscaOrigem = async (e) => {
        setCepOrigem(e.target.value.replace(/[^\d]+/g, ''))
    }

    const buscaDestino = async (e) => {
        setCepDestino(e.target.value.replace(/[^\d]+/g, ''))
    }

    useEffect(
        () => {
            const options = { method: 'GET', mode: 'cors', cache: 'default' }

            if (ceporigem) {
                fetch(`https://viacep.com.br/ws/${ceporigem}/json/`,
                    options)
                    .then((resposta) => resposta.json())
                    .then((dados) => setCepOrigemresult(dados))
            }
            if (cepdestino) {
                fetch(`https://viacep.com.br/ws/${cepdestino}/json/`,
                    options)
                    .then((resposta) => resposta.json())
                    .then((dados) => setCepDestinoresult(dados))
            }
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
                setStatus({ type: 'success' })
            })
            .catch((erro) => {
                console.log(erro.MsgErro)
            })
    };

    return (
        <DivFrete>
            <div className='Titulo'>Frete via Correios</div>

            <div className='Container'>

                <form>

                    <div>
                        <label >Digite o CEP de Origem</label><br />
                        <input mask='99999-999' type="string" name="CepOrigem" onBlur={buscaOrigem} autoFocus onChange={data} maxLength='9' />

                        {!ceporigemresult ?
                            <label className="cep-data">Cep não encontrado </label> :
                            <>
                                <label className="cep-data">{ceporigemresult.logradouro} -
                                    {cepdestinoresult.localidade} -
                                    {ceporigemresult.uf}</label>
                            </>
                        } <br />

                        <label >Digite o CEP de Destino</label><br />
                        <input mask='99999-999' type="string" name="CepDestino" onBlur={buscaDestino} onChange={data} />

                        {!cepdestinoresult ?
                            <label className="cep-data">Cep não encontrado </label> :
                            <>

                        <label className="cep-data">{cepdestinoresult.logradouro} -
                            {cepdestinoresult.localidade} -
                            {cepdestinoresult.uf}</label>
                            </> } <br />

                    </div>

                    <div className='flex'>
                        <div>
                            <label>Escolha o tipo de serviço</label><br />
                            <select name="Servico" onChange={data} >
                                <option value='04014' >SEDEX</option>
                                <option value='04790' >SEDEX 10</option>
                                <option value='04510' >PAC</option>
                            </select>
                        </div>

                        <div>
                            <label>Qual o formato do objeto</label> <br />
                            <select name="Formato" onChange={data} >
                                <option value='1' >CX / Pacote</option>
                                <option value='3' >Envelope</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex2'>
                        <div className='Tamanho'>
                            <label>Digite o Comprimento</label> <br />
                            <input type="number" name="Comprimento" onChange={data} placeholder='33' maxLength='2' />
                        </div>

                        <div className='Tamanho'>
                            <label>Digite a Altura</label> <br />
                            <input type="number" name="Altura" onChange={data} placeholder='20' maxLength='2' />
                        </div>

                        <div className='Tamanho'>
                            <label>Digite a Largura</label> <br />
                            <input type="number" name="Largura" onChange={data} placeholder='33' maxLength='2' /><br />
                        </div>
                    </div>

                </form>

                <div className='flex3'>
                    <div className='selectStyle2'>
                        <button onClick={EnviarDados} type="submit">Calcular</button>
                    </div>

                    {status.type === 'success' && valorFrete.Valor <= '0,00' ?

                        <div> Região não permite esse tipo <br />
                            de entrega pelos Correios.
                        </div> :


                        <div className='selectStyle2'>

                            {valorFrete.PrazoEntrega > 1 ?
                                <div>Frete R$: {valorFrete.Valor} <br />
                                    Prazo entrega: {valorFrete.PrazoEntrega} dias
                                </div> :
                                <div>Frete R$: {valorFrete.Valor} <br />
                                    Prazo entrega: {valorFrete.PrazoEntrega} dia
                                </div>
                            }
                        </div>

                    }


                </div>
            </div>

        </DivFrete>
    )
}
