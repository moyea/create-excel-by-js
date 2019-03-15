const ExcelJS = require('exceljs/dist/es5/exceljs.browser');
const FileSaver = require('file-saver');

const workbook = new ExcelJS.Workbook();

const sheet = workbook.addWorksheet('Sheet 1');

sheet.columns = [
    {header: 'Id', key: 'id'}
];

sheet.mergeCells('A2:A6');

// workbook.xlsx
//     .writeBuffer()
//     .then(buffer => new File([buffer], "test.xlsx", {type: "application/octet-stream"}))
//     .then(FileSaver.saveAs);

const StateMachine = require('javascript-state-machine');
const StateMachineHistory = require('javascript-state-machine/lib/history');
const visualize = require('javascript-state-machine/lib/visualize');

const fsm = new StateMachine({
    init: 'A',
    transitions: [
        {name: 'step', from: 'A', to: 'B'},
        {name: 'step', from: 'B', to: 'C'},
        {name: 'step', from: 'C', to: 'D'},
        {name: 'step', from: 'D', to: 'E'},
        {name: 'reset', from: ['B', 'C', 'D', 'E'], to: 'A'}
    ],
    methods: { // 状态机本身的观察者
        onBeforeTransition() {
            console.log('onBeforeTransition');
        },
        onLeaveState() {
            console.log('onLeaveState');
        },
        onTransition() {
            console.log('onTransition');
        },
        onEnterState() {
            console.log('onEnterState');
        },
        onAfterTransition() {
            console.log('onAfterTransition');
        },

        onBeforeStep() {
            console.log('onBeforeStep');
        },
        onLeaveA() {
            console.log('onLeaveA');
        },
        onEnterB() {
            console.log('onLeaveA');
        },
        onAfterStep() {
            console.log('onAfterStep');
        },
        // on<TRANSITION>
        onStep() {
            console.log('step', fsm.state);
        },
        // on<STATE>
        onA() {
            console.log('enter state A');
        },
        onB() {
            console.log('enter state B');
        }
    },
    plugins: [
        new StateMachineHistory()
    ]
});

// 可以单独观察某个生命周期
fsm.observe('onStep', () => {
    console.log('stepped');
});

// 可以使用observer对象观察多个事件
fsm.observe({
    onA() {
        console.log('-->A');
    },
    onB() {
        console.log('-->B');
    }
});


fsm.step();

console.log('================');
fsm.step();

fsm.step();

console.log(fsm.history);

console.log(visualize(fsm));


const container = document.getElementById("example");
const gallery = document.getElementById("gallery");

const myPhotobooth = new Photobooth(container);

myPhotobooth.onImage = function (dataUrl) {
    var myImage = document.createElement("img");
    myImage.src = dataUrl;

    gallery.appendChild(myImage);
};