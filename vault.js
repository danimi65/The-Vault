'use strict';
module.exports = function () {

var secretStuff = {};

  function _setValue(key, value){

  secretStuff[key]= value;

  }



  function _getValue (key){

    if(secretStuff[key]){
      return secretStuff[key]; 
        
      } else {
        return null;

      }
    }
       

  

  return {
    setValue: _setValue,
    getValue: _getValue

  };
  
};