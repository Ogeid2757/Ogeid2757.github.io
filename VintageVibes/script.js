let prodottiCarrello=0;
let quantita=0;
let iconCart=document.querySelector('.bottoneCarrello');
let body=document.querySelector('body');
let costo=0;

function addProdottoCarrello()
{
    prodottiCarrello++;
    document.getElementById('numeroProdotti').innerHTML=prodottiCarrello;
}

function addQuantita()
{
    quantita++;
    mostraQuantita();
}

function minQuantita()
{
    quantita--; 
    mostraQuantita()
}

function mostraQuantita()
{
    if(quantita<=0)
    {
        quantita=0;
    }
    document.getElementById('quantita').innerHTML=quantita;
}

function chiudiCarrello()
{
    body.className(chiudiCarrello);
}

function mostraCarrello()
{
    body.className(mostraCarrello);
}

function addCosto(prezzo)
{
    costo+=prezzo;
    addProdottoCarrello()
    aggiornaCosto();
}

function aggiornaCosto()
{
    document.getElementById('costo').innerHTML=costo.toFixed(2);
}
