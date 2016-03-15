var TestC = {

  componentWillMount: function(){

  },

  testFunctionC1: function(){
    return 'TestC1';
  },

  testFunctionC2: function(){
    return 'TestC2';
  },

  testFunctionC3: function(){
    var text = TestC.testFunctionC1() + TestC.testFunctionC2();
    return text;
  },

  
};


module.exports = TestC
