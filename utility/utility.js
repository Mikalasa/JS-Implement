async function ENGINE(args) {
    console.log('%c========== Engine Start ==========\n\n', 'color: cyan; font-size: 16px;');
    for (let i = 0; i < args.length; i++) {
        const theFunction = args[i];
        const theImplementation = theFunction[0]
        const theFunctionName = theFunction[1]
        console.log(`%c--- Function【${i}】 : 【 ${theFunctionName} 】 Start ---`, 'color: green;');
        theImplementation();
        console.log('%c--- Function Ends ---\n\n', 'color: red;');
    }
    console.log('%c========== Engine Ends ==========', 'color: cyan; font-size: 16px;');
}

function INSERT_SUBTITLE(title) {
    const element = document.querySelector('#page-subtitle')
    element.innerHTML = title
}
const log = console.log.bind(console)