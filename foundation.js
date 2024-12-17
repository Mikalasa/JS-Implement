function primitiveChangeDemo() {
    var a = 1
    var b = a

    b = 2

    console.log(a) // 1
    console.log(b) // 2
}

function arrayChangeDemo() {
    console.log('------------ array clone demo ------------')
    var arrayA = [1, 2, 3]
    var arrayB = arrayA

    arrayB.push(4)

    console.log("arrayA: ", arrayA) // [1, 2, 3, 4]
    console.log("arrayB: ", arrayB) // [1, 2, 3, 4]

    function arrayShallowCopy() {
        let arrayC = [].concat(arrayA)
        arrayC.push(5)
        console.log("arrayA: ", arrayA) // [1, 2, 3, 4]
        console.log("arrayC: ", arrayC) // [1, 2, 3, 4, 5]
    }
    arrayShallowCopy()
}


function objectChangeDemo() {
    console.log('------------ object clone demo ------------')

    objSimple = {
        a: 1,
        b: 2,
    }

    objComplex = {
        a: 1,
        b: 2,
        d: {
            e: 3
        },
    }

    objSimpleCopy = objSimple
    objSimpleCopy.a = 3
    console.log("objSimple: ", objSimple) // { a: 3, b: 2 }
    console.log("objSimpleCopy: ", objSimpleCopy) // { a: 3, b: 2 }

    function shallowCopy() {
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
    shallowCopy()
    deepCopy()
}

function testConst() {
    const ppp = { a: 11}
    ppp.a = 22
    console.log(ppp)
    ppp = { a: 33}
}

function __main() {
    primitiveChangeDemo()
    arrayChangeDemo()
    objectChangeDemo()
    testConst()
}


__main()


