startDate = new Date(2022, 05, 01, 00, 00, 00, 00)
endDate = new Date(2022,06,01,00,00,00,00)
actualEndDate = new Date(2022,05,08,00,00,00,00)
inBetweenDate = new Date(2022,05,08,00,00,00,00)

startSeconds = startDate.getTime()/1000 
endSeconds = endDate.getTime()/1000 
actualEndSeconds = actualEndDate.getTime()/1000
inSeconds = inBetweenDate.getTime()/1000 

diff = endSeconds - startSeconds
div = actualEndSeconds - startSeconds
inS = inSeconds - startSeconds
s = diff/div

console.log(diff,div)
console.log(s)
showDate = new Date(0)
add = inS*s

showDate.setTime((startSeconds+add)*1000)
console.log(showDate)

// console.log(startSeconds)
// console.log(endSeconds)
// console.log(startDate)
// console.log(endDate)
