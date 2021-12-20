// test 1 : EvenLoop
// setTimeout(()=>{
//     console.log('quick timer')
// },0)

// new Promise((resolve,reject)=>{
//     console.log('init promise')
//     process.nextTick(resolve)
// }).then(()=>console.log('promise.then'))

// process.nextTick(()=>{
//     console.log('nextTick')
// })

// setImmediate(()=>{
//     console.log('immediate')
// })

// test 2 : 递归setTimeout
// const repeact = (p, n, ms) => {
//     const result = (str) => {
//         setTimeout(() => {
//             if (n > 0) {
//                 p(str)
//                 result(str)
//                 n--
//             }
//         }, ms);
//     }
//     return result
// }
// const repeatFunc = repeact(console.log, 4, 1000)
// repeatFunc('helloword')

