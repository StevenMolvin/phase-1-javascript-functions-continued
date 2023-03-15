// code your solution here
// index.js

function saturdayFun(activity = "roller-skate", activity2 = "bathe my dog") {
    return `This Saturday, I want to ${activity}!`;
    return `This Saturday, I want to ${activity2}!`;
}
  
  const mondayWork = function(activity = "go to the office", activity2 = "work from home") {
    return `This Monday, I will ${activity}.`;
    return `This Monday, I will ${activity2}.`;
  }
  
 
function wrapAdjective(highlight = "*") {
  return function(adjective = "a hard worker") {
    return `You are ${highlight}${adjective}${highlight}!`;
  }
}
  function wrapAdjective(highlight = "||") {
    return function(adjective = "a dedicated programmer" ){
    return `You are ${highlight}${adjective}${highlight}!`;
  }

}
  