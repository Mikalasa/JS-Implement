function varInLoop() {
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            log(i)
        }, 100)
    }
    // 5 5 5 5 5
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            log(i)
        }, 100)
    }
    // 0 1 2 3 4
    for (let i = 0; i < 5; i++) {
        (function(i) {
            setTimeout(() => {
                log(i);
            }, 100);
        })(i);
    }
    // 0 1 2 3 4
}







(function() {
    const functions = {
        "varInLoop": varInLoop,
    }

    bindFunctionSelection(functions)
    INSERT_SUBTITLE("02: Scope")
})();





