function abc() {
  setTimeout(function () {
    console.log("hello");
  }, 1000);
}

abc();

/*


Memory // Heap -> Stores the variables

Context

Browser: // Web APIs 
 
 setTimeout(,1000)


callback Queue:
  
  

Running Phase// Call Stack --> All functions come inside this for execution in stack order

  abc():
  
    function(){
      console.log("hello")
    }
  



*/
