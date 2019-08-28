const width = 30;
const height =80;
const fireColorsPalette = [
    { "r": 7, "g": 7, "b": 7 },{ "r": 31, "g": 7, "b": 7 },{ "r": 47, "g": 15, "b": 7 },{ "r": 71, "g": 15, "b": 7 },
    { "r": 87, "g": 23, "b": 7 },{ "r": 103, "g": 31, "b": 7 },{ "r": 119, "g": 31, "b": 7 },{ "r": 143, "g": 39, "b": 7 },
    { "r": 159, "g": 47, "b": 7 },{ "r": 175, "g": 63, "b": 7 },{ "r": 191, "g": 71, "b": 7 },{ "r": 199, "g": 71, "b": 7 },{ "r": 223, "g": 79, "b": 7 },{ "r": 223, "g": 87, "b": 7 },{ "r": 223, "g": 87, "b": 7 },{ "r": 215, "g": 95, "b": 7 },{ "r": 215, "g": 95, "b": 7 },{ "r": 215, "g": 103, "b": 15 },{ "r": 207, "g": 111, "b": 15 },{ "r": 207, "g": 119, "b": 15 },{ "r": 207, "g": 127, "b": 15 },{ "r": 207, "g": 135, "b": 23 },{ "r": 199, "g": 135, "b": 23 },{ "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]

const arrayPropagacao = [];
for (let i = 0; i < width * height; i++) arrayPropagacao[i] = 0;

for (let i = 0; i < width; i++) {
    let lastLine = (height - 1) * width + i;
    arrayPropagacao[lastLine] = 36;

}

const calcularPropagacao = () => {


    for (let c = 0; c < height - 1; c++) {

        for (let l = 0; l < width; l++) {

            let decay = Math.floor(Math.random() * 3);
            let indexPropagacao = l + c * width;
            let nextIndexPropagacao = indexPropagacao + width;
            let propagacaofire = arrayPropagacao[nextIndexPropagacao] - decay;
            arrayPropagacao[indexPropagacao - decay] = propagacaofire > 0 ? propagacaofire : 0;

        }
    }

    renderFire();
}

const renderFire = () => {
    let html = "<table>";
    for (let i = 0; i < width; i++) {
        html += "<tr>";

        for (let j = 0; j < height; j++) {
            indexFire = j + i * height;
            intensidade = arrayPropagacao[indexFire];
            const color = fireColorsPalette[intensidade];
            const styleColor = `${color.r},${color.g},${color.b}`;
            //html += `<td style="background-color:rgb(${styleColor})">${arrayPropagacao[indexFire]}<span class="index-fire">${indexFire}</span></td>`;

            html += `<td style="background-color:rgb(${styleColor})"><span class="index-fire"></span></td>`;
        }
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("effect-canvas").innerHTML = html;
}


const start = () => {

    calcularPropagacao();
    renderFire();
    setInterval(calcularPropagacao, 50);
}



start();