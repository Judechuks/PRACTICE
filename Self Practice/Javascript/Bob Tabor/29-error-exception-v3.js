function performCalculation(obj){
  if (!obj.hasOwnProperty('b')) {  // or obj.hasOwnProperty('b') == false
    throw new Error('Object Missing Property'); 
  }
  // continue calculation whatever obj.b
  return 6;
}

function performHighLevelOperation(){
  let obj = {};
  let value = 0;
  try{
    value = performCalculation(obj);
  } catch (error){
    console.log(error.message);
  }
  if (value == 0){
    console.log('Contigency or Alternative plan');
    // perform an operation that will handle such problem so as not to break down your application
  }
}
performHighLevelOperation();