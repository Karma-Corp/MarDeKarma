var SineWaves = [];
var SineWaveStatus = 1;

SineWaves.push({ Id: 'sinewave-svg-1-path', Amplitude: 20, Comprimento: 15, Frequencia: 1.2, T: 0 });
SineWaves.push({ Id: 'sinewave-svg-2-path', Amplitude: 10, Comprimento: 20, Frequencia: 3, T: 0 });
SineWaves.push({ Id: 'sinewave-svg-3-path', Amplitude: 16, Comprimento: 20, Frequencia: -1.3, T: 0 });

let xs = [];
for (var i = 0; i <= 500; i++) {
    xs.push(i);
}

function animate() {
    for (var i in SineWaves) {
        let points = xs.map(x => {

            let y = getY(x, SineWaves[i]);

            return [x, y];
        });

        let path = "M" + points.map(p => {
            return p[0] + "," + p[1];
        }).join(" L");

        document.getElementById(SineWaves[i].Id).setAttribute("d", path);

        SineWaves[i].T += SineWaves[i].Frequencia;
    }

        requestAnimationFrame(animate);
}

animate();

function getY(x, SineWave) {
    switch (SineWaveStatus) {
        case 0:
            return 200 + SineWave.Amplitude - 8 * Math.sin((x + SineWave.T) / SineWave.Comprimento);
        case 1:
            return 200 + SineWave.Amplitude * Math.sin((x + SineWave.T) / SineWave.Comprimento);
        case 2:
            return 200 + getRandomInt(SineWave.Amplitude, SineWave.Amplitude + 10) * Math.sin((x + SineWave.T) / getRandomInt(SineWave.Comprimento - 10, SineWave.Comprimento));
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
