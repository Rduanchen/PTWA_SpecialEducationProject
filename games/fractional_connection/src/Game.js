import {getJson, reorder, createLine} from "../../../game_view/src/function.js"
import {GameTemplate} from "../../../game_view/src/GameTemplate.js"


const gameData = await getJson('../../games/fractional_connection/game_config.json');

export class Game extends GameTemplate {
    constructor(){
        super();
        this.levelLimit = gameData.length;
        this.gameArea = $('.gameArea');
        this.topic_explain = new Array(this.levelLimit).fill('剩下多少水量呢？請連線告訴我吧！');
        this.drawingArea = $('.drawingArea');
        this.isDrawing = false;
        this.drawView();
        this.gameData = gameData;
    }
    startGame(level) {
        super.startGame(level);
        this.record = {'q': []
                    , 'a': []
                    , 'result': []
                    };
        this.createQuestions();
        this.createHint();
        reorder(this.gameArea.find('.left'));
        reorder(this.gameArea.find('.right'));
    }

    drawView() {
        const line = $('.line')[0];
        const yStart = 65;
        const mouseDownListener = (event) => {
            event.preventDefault();
            const {pageX, pageY} = event.touches ? event.touches[0] : event;
            if (line.className.baseVal.includes('wrongLine')){
                $(line).removeClass('wrongLine');
            }
            else{
                createLine();
                $(line).addClass('line');
            }
            line.setAttribute("x1", pageX);
            line.setAttribute("y1", pageY-yStart);
            line.setAttribute("x2", pageX);
            line.setAttribute("y2", pageY-yStart);
            this.isDrawing = true;
        }
        
        const mouseMoveListener = (event) => {
            event.preventDefault();
            if (!this.isDrawing) return;
            const {pageX, pageY} = event.touches ? event.touches[0] : event;
            line.setAttribute("x2", pageX);
            line.setAttribute("y2", pageY-yStart);
        }
    
        const mouseupListener = (event) => {
            if (!this.isDrawing) return;
            this.isDrawing = false;
            
            // this.checkAnswer();
        }
        this.gameArea.on("mousedown", (e) => {
            console.log(e.target.classList)
            if (checkQuestionArea(e)){
                console.log("down")
                mouseDownListener(e);
            }
        });
        this.gameArea.on("touchstart", (e) => {
            if (checkQuestionArea(e)){
                mouseDownListener(e);
            }
        });
        this.gameArea.on("mousemove", mouseMoveListener);
        this.gameArea.on("touchmove", (e) => {
            mouseMoveListener(e);
        });
        this.gameArea.on("mouseup", (e) => {
            if (checkAnswerArea(e)){
                mouseupListener(e);
            }
        });
        this.gameArea.on("touchend", (e) => {
            if (checkAnswerArea(e)){
                mouseupListener(e);
            }
        });
        const checkQuestionArea = (e) => {
            if ($(e.target).closest('.questionArea').length) {
                return true;
              }
        }
        const checkAnswerArea = (e) => {
            if ($(e.target).closest('.answerArea').length) {
                return true;
              }
        }
    };

    createQuestions() {
        const level = this.level - 1;
        this.gameArea.find(('.scalls')).each((index, value) => {
            console.log(value);
            let $value = $(value);
            let bottom = this.gameData[level].bottom[index];
            let top = this.gameData[level].top[index];
            $value.html('<li></li>'.repeat(bottom + 1));
            this.gameArea.find('.fraction .top').eq(index).html(`<h1>${top}</h1>`)
            this.gameArea.find('.water').eq(index).css({"height": `${top/bottom*100}%`})
            this.gameArea.find('.fraction .bottom').eq(index).html(`<h1>${bottom}</h1>`)
        });
    }
    createHint() {
        $('.hintContainer .left').html(this.gameArea.find('.left .topicArea').clone());
        $('.hintContainer .right').html(this.gameArea.find('.right .fraction').clone());
    }
}


// TODO why gameIframe.contentWindow.game is undifined 
window.game = new Game();