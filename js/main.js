var app = new Vue({
    el : '#app',
    data: {
        estagiarios: [],
        ies : [

            "UNIVERSIDADE ESTÁCIO DE SÁ",
            "CENTRO UNIVERSITÁRIO INTERNACIONAL - UNINTER"
        ],
        cursos:[

            "PEDAGOGIA - LICENCIATURA",
            "MAGISTÉRIO"
        ],
        lotacoes: [

            {nome:"E.M. ANTONIO SCARANTE", diretor:"DÉBORA TILLER SIZANOSKI"},
            {nome:"E.M. IDÍLIA ALVES DE FARIAS", diretor:"MARIZ SONALEO PIACENTINI"},
        ],
        estados: [
            "UF",
            "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB",
            "PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"
        ],
        estagiario: {
            nome:'',
            nascimento: '',
            rg:'',
            cpf:'',
            endereco: {
                cep: '',
                rua: '',
                bairro: '',
                cidade:'PIRAQUARA',
                estado: 'PR',
            },
            vt:{
                usa: false,
                cotaMetrocard:0,
                cotaUrbs:0
            },
            ie:"SELECIONE UMA I.E.",
            curso: "SELECIONE UM CURSO",
            nivel: "SELECIONE UM NÍVEL",
            lotacao:"SELECIONE UMA LOTAÇÃO",
        },
        niveis: [

            {nivel:"20hm",text:"20H - MÉDIO", valor:"R$350,00"},
            {nivel:"20hs",text:"30H - MÉDIO", valor:"R$450,00"},
            {nivel:"30hm",text:"20H - SUPERIOR",valor:"R$450,00"},
            {nivel:"30hs",text:"30H - SUPERIOR",valor:"R$600,00"},
        ]

    }
});

