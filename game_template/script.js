import {startBtnHandler, game} from './Handler.js';


const levelsArea = document.querySelector(`.levelBtn`);
const optionsArea = document.querySelector(`.optionsBtn`);

levelsArea.addEventListener('click', (e) => {
    const level = parseInt(e.target.id);
    $(e.target).addClass('active');
    game.changeLevel(level);
})

optionsArea.addEventListener('click', (e) => {
    const act = e.target.id;
    startBtnHandler.handleRequest(act);
})

function getRandomNumber(start, end, tolerance, times=1) {
    let result = new Set();
    while(result.size < times) {
        const range = Math.ceil((end - start) / tolerance);
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * (range + 1));
        } while (start + randomIndex * tolerance === 0)
        if (times === 1){
            return start + randomIndex * tolerance;
        }
        const number = start + randomIndex * tolerance;
        result.add(number)
    }
    return [...result]
  }

  function shuffle(originArray){
    // Fisher-Yates shuffle algorithm
    let array = [...originArray]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  