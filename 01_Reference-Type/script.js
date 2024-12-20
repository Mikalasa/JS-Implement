function primitiveChange() {
    var a = 1
    var b = a

    b = 2

    log("a", a) // 1
    log("b", b) // 2
    //  primitive type are not referenced
}

function arrayChange() {
    var arrayA = [1, 2, 3]
    var arrayB = arrayA
    log("assign arrayA to arrayB ")
    log("arrayA: ", arrayA) // [1, 2, 3]
    log("arrayB: ", arrayB) // [1, 2, 3]

    arrayB.push(4)

    log("push 4 to array B ")
    log("arrayA: ", arrayA) // [1, 2, 3, 4]
    log("arrayB: ", arrayB) // [1, 2, 3, 4]
}



function arrayShallowCopy() {
    var arrayA = [1, 2, 3]
    let arrayB = [].concat(arrayA)
    console.log("using [].concat() to coy arrayA elements into arrayB ")
    arrayB.push(5)
    log("pushed 5 into arrayB ")
    log("arrayA: ", arrayA) // [1, 2, 3, 4]
    log("arrayB: ", arrayB) // [1, 2, 3, 4, 5]
}


function objectChange() {
    objA = {
        a: 1,
        b: 2,
    }
    objB = objA
    log("assign objA to objB")
    log("objA: ", objA) // { a: 1, b: 2 }
    log("objB: ", objB) // { a: 1, b: 2 }

    objB.a = 3

    log("change objB's a = 3")
    log("objA: ", objA) // { a: 3, b: 2 }
    log("objB: ", objB) // { a: 3, b: 2 }
}

function objShallowCopy() {
    objA = {
        a: 1,
        b: 2,
    }
    objC = {
        a: 1,
        b: 2,
        d: {
            e: 3
        },
    }
    log("objA: ", objA)
    log('using Object.assign({}, objA) to objB')
    let objB = Object.assign({}, objA) // as well as Object.create(objSimple) and {...objSimple}
    objB.a = 4
    log("change objB's a = 4")
    log("objA: ", objA) // { a: 3, b: 2 }
    log("objB: ", objB) // { a: 4, b: 2 }

    log("shallow copy apply to nest object")
    log("\n\n-- but, when shallow copy apply to nest object, it will fail")
    log("objC: e in objC was 3", objC)
    let objD = Object.assign({}, objC)
    log('using Object.assign({}, objC) to objD')
    objD.d.e = 88
    log("change objD's d's e = 88")
    log("objC: ", objC) // e = 88
    log("objD: ", objD)
}


function objDeepCopy() {
    objA = {
        a: 1,
        b: 2,
        d: {
            e: 3
        },
    }
    log('objA: ', objA)
    log("using JSON.parse(JSON.stringify(objA)) to objB")
    let objB = JSON.parse(JSON.stringify(objA))
    objB.a = 4
    objB.d.e = 4
    log('change objB.a = 4, change objB.d.e =4')
    log("objA: ", objA) // { a: 1, b: 2, d: { e: 3 } }
    log("objB: ", objB) // { a: 4, b: 2, d: { e: 4 } }
}

function testConst() {
    const ppp = { a: 11}
    log("ppp: ", ppp)
    log("change ppp.a to 222")
    ppp.a = 22
    // ppp = { a: 33}  // TypeError: Assignment to constant variable.
    log("try change again    ppp = { a: 33}")
    console.warn("Uncaught (in promise) TypeError: Assignment to constant variable.")
}




(function() {
    const functions = {
        "primitiveChange": primitiveChange,
        "arrayChange": arrayChange,
        "arrayShallowCopy": arrayShallowCopy,
        "objectChange": objectChange,
        "objShallowCopy": objShallowCopy,
        "objDeepCopy": objDeepCopy,
        "testConst": testConst,
    }
    bindFunctionSelection(functions)
    INSERT_SUBTITLE("01: Reference Type")
})();




