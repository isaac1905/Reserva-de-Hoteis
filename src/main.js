// Criação e configuração dos objetos de cada hotel com os respectivos valores
const Lakewood = {
    classificacao: 3,
    regular_week: 110,
    reward_week: 80,
    regular_wknd: 90,
    reward_wknd: 80
}

const Bridgewood = {
    classificacao: 4,
    regular_week: 160,
    reward_week: 110,
    regular_wknd: 60,
    reward_wknd: 50
}

const Ridgewood = {
    classificacao: 5,
    regular_week: 220,
    reward_week: 100,
    regular_wknd: 150,
    reward_wknd: 40
}

// Array para verificação dos dias de semana e fins de semana
let wknd_days = ["sun", "sat"];
let week_days = ["mon", "tues", "wed", "thur", "fri"];

//Variáveis para arazenamento dos valores em cada hotel
let Lakewood_Value = 0;
let Bridgewood_Value = 0;
let Ridgewood_Value = 0;

//Função principal
function getCheapestHotel(input) { //DO NOT change the function's name.

    //Preparação do input e separação dos dados inseridos como tipo de cliente e datas
    arr = input.split(":");
    typeClient = arr[0];
    dates = arr[1];
    dates = dates.trim();
    dates = dates.split(",");
    for (i = 0; i < dates.length; i++) {
        dates[i] = dates[i].trim();
        dates[i] = dates[i].split("(");
        dates[i].shift();
        dates[i] = dates[i].join("");
        dates[i] = dates[i].split("")
        dates[i].pop();
        dates[i] = dates[i].join("")
    }

    //Verificação do tipo de cliente e datas para calculo dos valores em cada hotel
    if (typeClient == "Regular") {
        for (i = 0; i < dates.length; i++) {

            if (wknd_days.includes(dates[i])) {
                Lakewood_Value += Lakewood.regular_wknd;
                Ridgewood_Value += Ridgewood.regular_wknd;
                Bridgewood_Value += Bridgewood.regular_wknd;

            } else if (week_days.includes(dates[i])) {

                Lakewood_Value += Lakewood.regular_week;
                Ridgewood_Value += Ridgewood.regular_week;
                Bridgewood_Value += Bridgewood.regular_week;
            }

        }

    } else if (typeClient == "Rewards") {

        for (i = 0; i < dates.length; i++) {

            if (wknd_days.includes(dates[i])) {
                Lakewood_Value += Lakewood.reward_wknd;
                Ridgewood_Value += Ridgewood.reward_wknd;
                Bridgewood_Value += Bridgewood.reward_wknd;

            } else if (week_days.includes(dates[i])) {
                Lakewood_Value += Lakewood.reward_week;
                Ridgewood_Value += Ridgewood.reward_week;
                Bridgewood_Value += Bridgewood.reward_week;
            }
        }
    }

    //Verificação do menor valor e critérios de desempatem com retorno dos valores correspondentes
    switch (Math.min(Lakewood_Value, Ridgewood_Value, Bridgewood_Value)) {

        case Lakewood_Value:

            if (Lakewood_Value == Ridgewood_Value) {
                if (Lakewood.classificacao < Ridgewood.classificacao) {
                    return "Ridgewood"
                } else {

                    return "Lakewood"
                }

            } else if (Lakewood_Value == Bridgewood_Value) {
                if (Lakewood.classificacao < Bridgewood.classificacao) {
                    return "Bridgewood"

                } else {
                    return "Lakewood"
                }

            } else if (Lakewood_Value != Bridgewood_Value && Lakewood_Value != Ridgewood_Value) {
                return "Lakewood"
            }
            break;


        case Ridgewood_Value:

            if (Ridgewood_Value == Lakewood_Value) {
                if (Ridgewood.classificacao < Lakewood.classificacao) {
                    return "Lakewood"

                } else {
                    return "Ridgewood"
                }

            } else if (Ridgewood_Value == Bridgewood_Value) {
                if (Ridgewood.classificacao < Bridgewood.classificacao) {
                    return "Bridgewood"

                } else {
                    return "Ridgewood"
                }

            } else if (Ridgewood_Value != Bridgewood_Value && Ridgewood_Value != Lakewood_Value) {
                return "Ridgewood"
            }
            break;


        case Bridgewood_Value:

            if (Bridgewood_Value == Lakewood_Value) {
                if (Bridgewood.classificacao < Lakewood.classificacao) {
                    return "Bridgewood"
                } else {
                    return "Lakewood"
                }

            } else if (Bridgewood_Value == Ridgewood_Value) {
                if (Bridgewood.classificacao < Ridgewood.classificacao) {
                    return "Ridgewood"
                } else {
                    return "Bridgewood"
                }

            } else if (Bridgewood_Value != Ridgewood_Value && Bridgewood_Value != Lakewood_Value) {
                return "Bridgewood"
            }
            break;
    }
}
//Isaac Emanuel
//https://github.com/isaac1905

exports.getCheapestHotel = getCheapestHotel