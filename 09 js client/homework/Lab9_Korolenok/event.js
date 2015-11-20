window.onload = function() { Event(); }

  function Event() {
    var element1 = document.getElementById("combobox1");
    var element2 = document.getElementById("combobox2");
    var element3 = document.getElementById("combobox3");

    element1.onchange = function() {
      if(element1.value==""){
        element2.setAttribute("disabled","disabled");
        element2.value="";
        element3.setAttribute("disabled","disabled");
        element3.value="";
      }
      else
        element2.removeAttribute("disabled","disabled");
    }

    element2.onchange = function(){
      if(element2.value==""){
        element3.setAttribute("disabled","disabled");
        element3.value="";
      }
      else
        element3.removeAttribute("disabled","disabled");
    }
  }
