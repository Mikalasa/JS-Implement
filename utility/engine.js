
const scripts = {
    "01_Reference-Type": "./01_Reference-Type/Script.js",
    "02_Var-in-For": "./02_Var-in-For/Script.js",
    "03_Object": "./03_Object/Script.js",
}

const State = {
    previousScript: null,
    currentScript: null,
}

const ListenersState = {
    scriptListenerAdded: false,
    functionListenerAdded: false
}
const EngineState = {
    "state": "Ready",
    "isImplementedScript": false
}
function ENGINE() {
    consoleDisplay()
    scriptSelection(scripts)
}

function loadScript(scriptPath) {
    EngineState.state = "Running"
    consoleDisplay()
    const script = document.createElement('script');
    console.log(`Script loaded: ${scriptPath}`);
    State.previousScript = State.currentScript
    State.currentScript = scriptPath
    script.src = scriptPath;
    script.type = 'text/javascript';
    script.onerror = () => {
        console.error(`Failed to load script: ${scriptPath}`);
    };
    if (State.previousScript !== null) {
        removeScript(State.previousScript)
    }
    updateFunctionSelection()
    document.body.appendChild(script);

}

function removeScript(scriptPath) {
    const script = document.querySelector(`script[src="${scriptPath}"]`);
    if (script) {
        script.remove();
        // console.log(`Removed script: ${scriptPath}`);
    } else {
        console.warn(`Script not found when removing: ${scriptPath}`);
    }
}

function scriptSelection(scripts) {
    const selectEle = document.querySelector('#script-selection')
    if (selectEle.childElementCount === 1) {
        Object.keys(scripts).forEach(key => {
            const keyName = key;
            const htmlOption = `<option value="${keyName}">${keyName}</option>`;
            selectEle.insertAdjacentHTML('beforeend', htmlOption);
        });
    }
    if (!ListenersState.scriptListenerAdded) {
        selectEle.addEventListener('change', function () {
            const selected = this.value;
            if (selected === 'none selected') {
                console.log('no scripts is loaded');
                updateFunctionSelection()
            } else {
                console.log(`Selected script: ${selected}`);
                const selectedScriptPath = scripts[selected];
                loadScript(selectedScriptPath);
            }
        });
        ListenersState.scriptListenerAdded = true;
    }
}

function bindFunctionSelection(functions) {
    // console.log(functions)
    const selectEle = document.querySelector('#function-selection')
    if (selectEle.childElementCount === 1) {
        Object.keys(functions).forEach(key => {
            const keyName = key;
            const htmlOption = `<option value="${keyName}">${keyName}</option>`;
            selectEle.insertAdjacentHTML('beforeend', htmlOption);
        });
    }
    if (!ListenersState.functionListenerAdded) {
        selectEle.addEventListener('change', function () {
            const selected = this.value;
            if (selected === 'none selected') {
                console.log('no functions is loaded');
            } else {
                console.log(`Selected function: ${selected}`);
                const logOutput = document.querySelector('.console-output-box code.plaintext');
                logOutput.textContent = '';
                // console.log(functions[selected])
                executeFunction(functions[selected], selected);
            }
        });
        ListenersState.functionListenerAdded = true;
    }
}

function executeFunction(theFunc, FuncName) {
    const theJSArea = document.querySelector('.language-javascript')
    EngineState.isImplementedScript = true
    consoleDisplay(FuncName)
    const function_Code = stringifyFunction(theFunc)
    theJSArea.textContent = function_Code;
    hljs.highlightElement(theJSArea);
    theFunc()
}

function updateFunctionSelection() {
    const selectEle = document.querySelector('#function-selection')
    if (selectEle.childElementCount > 1) {
        selectEle.innerHTML = '<option value="none selected">none selected</option>';
    }
    if (ListenersState.functionListenerAdded) {
        ListenersState.functionListenerAdded = false
        const selectEle = document.querySelector('#script-selection')
        selectEle.removeEventListener('change', function () {})
    }
}

ENGINE()
