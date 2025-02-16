const object = {
    a: 1,
    b: 2,
    d: {
        e: 3
    },
}

const test = () => {
    name = 'test Object'
    outRef = object
}

(function() {
    const functions = {
        "test": test,
    }
    bindFunctionSelection(functions)
    INSERT_SUBTITLE("03: Object")
})();