



function withName(fn: Function) {
    return function (...args: any[]) {
        console.info(fn.name, args)
        return fn(...args)
    }
}


export { withName }