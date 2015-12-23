function doOneClickMagic(){
    var element = document.getElementById("magicTD");
    if(element.bgColor=="#d3d3d3"){
        element.bgColor="yellow";
        return;
    }
    if (element.bgColor=="yellow"){
        element.bgColor="white";
        return;
    }
}

function doDoubleClickMagic() {
    var element = document.getElementById("magicTD");
    if(element.style.borderColor ==""){
        element.style.borderColor="green";
        return;
    }
    if (element.style.borderColor=="green"){
        element.style.borderColor="white";
        return;
    }
}

//"#d3d3d3 - light gray
//"#F7FE2E  - yellow
//#00FF00 - green