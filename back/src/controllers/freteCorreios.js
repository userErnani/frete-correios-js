
let Correios = require('node-correios');
let correios = new Correios();

const calcFrete = async (req, res) => {

    const args = ({
        nCdServico: req.body.nCdServico,
        sCepOrigem: req.body.sCepOrigem,
        sCepDestino: req.body.sCepDestino,
        nVlPeso: req.body.nVlPeso,
        nCdFormato: req.body.nCdFormato,
        nVlComprimento: req.body.nVlComprimento,
        nVlAltura: req.body.nVlAltura,
        nVlLargura: req.body.nVlLargura,
        nVlDiametro: req.body.nVlDiametro
    })

    await correios.calcPrecoPrazo(args)
        .then((resultado) => {
            res.send(resultado)
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = { calcFrete };