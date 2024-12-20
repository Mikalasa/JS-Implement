function stringifyFunction(func) {
    console.log(func)
    const funcStr = func.toString();
    return funcStr
        // Remove console.* statements, including nested content
        .replace(/console\.[a-z]+\((?:[^()]*|\([^()]*\))*\);?/g, '')
        // Remove log() calls, including nested and quoted content
        .replace(/log\((?:[^()]*|\([^()]*\))*\);?/g, '')
        // Remove single-line comments
        .replace(/\/\/.*$/gm, '')
        // Remove multi-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove extra empty lines caused by removed statements
        .replace(/^\s*[\r\n]/gm, '')
        .trim(); // Remove leading and trailing whitespace
}

function INSERT_SUBTITLE(title) {
    const element = document.querySelector('#page-subtitle')
    element.innerHTML = title
}

function consoleDisplay(functionName= " ") {
    console.clear()
    if (EngineState.state === "Ready") {
        console.log('%c========== Engine Ready ==========\n\n', 'color: cyan; font-size: 16px;');
    }
    if (EngineState.state === "Running" && !EngineState.isImplementedScript) {
        console.log('%c========== Engine Running ==========\n\n', 'color: cyan; font-size: 16px;');
    }
    if (EngineState.state === "Running" && EngineState.isImplementedScript) {
        console.log('%c========== Engine Running ==========\n\n', 'color: green; font-size: 16px;');
        console.log(`%c---------- loaded Function:  ${functionName} Executed ----------\n\n`, 'color: red; font-size: 12px;');
    }
}


const logOutput = document.querySelector('.console-output-box code.plaintext');
const originalLog = console.log;
// Override your existing `log` function
const log = (...args) => {
    let logContent = '';
    // Log to the browser console
    originalLog.apply(console, args);
    // Concatenate all arguments into a single string
    logContent = args.map(arg => (typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg))).join(' ');
    // Append the log content as a single line to the <code> block
    logOutput.textContent += logContent + '\n\n';
    // Apply syntax highlighting using Highlight.js
    hljs.highlightElement(logOutput);
};
