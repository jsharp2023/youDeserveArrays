/******************
 * YOUR CODE HERE *
 ******************/

 function getFirstItemFrom(arr){
  return arr[0]
 }

 function getLastItemFrom(arr){
  return arr[arr.length-1]
 }

 function getIndex3(arr){
  if (arr.length >3){
    return (arr[3])
  } else {
    return (arr[arr.length-1])
  }
}
  
 function isLongList(arr){
   if(arr.length >=10){
    return true
   }else{
    return false
   }
  }

  function firstItemIsNumber(arr){
    if(arr == 1, 2, 3){
      return true
    }else {
      return false
    } 
   
  }

  function secondCharOThirdString(arr){
    if(arr == 'hello', 'sir', 'how',' are',' you'){
    return arr.length (3 [2])
    }else{
      
    } 
    
  }
  
 






 


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
