function primitiveChange() {
    var a = 1
    var b = a

    b = 2

    console.log(a) // 1
    console.log(b) // 2
    //  primitive type are not referenced
}

function arrayChange() {
    var arrayA = [1, 2, 3]
    var arrayB = arrayA
    console.log("assign arrayA to arrayB ")
    console.log("arrayA: ", arrayA) // [1, 2, 3]
    console.log("arrayB: ", arrayB) // [1, 2, 3]

    arrayB.push(4)

    console.log("push 4 to array B ")
    console.log("arrayA: ", arrayA) // [1, 2, 3, 4]
    console.log("arrayB: ", arrayB) // [1, 2, 3, 4]
}



function arrayShallowCopy() {
    var arrayA = [1, 2, 3]
    let arrayB = [].concat(arrayA)
    console.log("using [].concat() to coy arrayA elements into arrayB ")
    arrayB.push(5)
    console.log("pushed 5 into arrayB ")
    console.log("arrayA: ", arrayA) // [1, 2, 3, 4]
    console.log("arrayB: ", arrayB) // [1, 2, 3, 4, 5]
}


function objectChange() {
    objSimple = {
        a: 1,
        b: 2,
    }
    objSimpleCopy = objSimple
    console.log("assign objSimple to objSimpleCopy")
    console.log("objSimple: ", objSimple) // { a: 1, b: 2 }
    console.log("objSimpleCopy: ", objSimpleCopy) // { a: 1, b: 2 }

    objSimpleCopy.a = 3

    console.log("change objSimpleCopy's a = 3")
    console.log("objSimple: ", objSimple) // { a: 3, b: 2 }
    console.log("objSimpleCopy: ", objSimpleCopy) // { a: 3, b: 2 }
}

function shallowCopy() {
    objComplex = {
        a: 1,
        b: 2,
        d: {
            e: 3
        },
    }
    console.log('       shallowClone: objSimple')
    let shallowClone = Object.assign({}, objSimple) // as well as Object.create(objSimple) and {...objSimple}
    shallowClone.a = 4
    console.log("shallowClone: ", shallowClone, "objSimple: ", objSimple) // { a: 4, b: 2 } { a: 3, b: 2 }
}
function deepCopy() {
    console.log('       deepClone: objComplex')
    let deepClone = JSON.parse(JSON.stringify(objComplex))
    deepClone.a = 4
    deepClone.d.e = 4
    console.log("deepClone: ", deepClone, "objComplex: ", objComplex) // { a: 4, b: 2, d: { e: 4 } } { a: 1, b: 2, d: { e: 3 } }
}

function testConst() {
    const ppp = { a: 11}
    ppp.a = 22
    console.log(ppp)
    // ppp = { a: 33}  // TypeError: Assignment to constant variable.
}



const functions = [
    [primitiveChange, 'primitiveChange'],
    [arrayChange, 'arrayChange'],
    [arrayShallowCopy, 'arrayShallowCopy'],
    [objectChange, 'objectChange'],
    [testConst, 'testConst'],
]

function __MAIN() {
    INSERT_SUBTITLE("01: Reference Type")
    ENGINE(functions).then(r => (console.log('%c ALL DONE !', 'color: Black; font-size: 20px;')))
}

__MAIN()

