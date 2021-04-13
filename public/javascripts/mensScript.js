$(document).ready(function(){
    console.log("Ready!");
    $("#mensHeader").css("color", "black");

    //Animate each box on mouseover/mouseout
    //Will only work if mouse hovers over the text in each box within grid, if mouse goes over image no animation happens
    $("#box1").hover(function(){
        $("#box1").css({height:'300px'}, {width:'300px'});
    });
    $("#box1").mouseout(function(){
        $("#box1").css({height:"fit-content"}, {width:'fit-content'});
    });

    $("#box2").hover(function(){
        $("#box2").css({height:'300px'}, {width:'300px'});
    });
    $("#box2").mouseout(function(){
        $("#box2").css({height:"fit-content"}, {width:'fit-content'});
    });

    $("#box3").hover(function(){
        $("#box3").css({height:'300px'}, {width:'300px'});
    });
    $("#box3").mouseout(function(){
        $("#box3").css({height:"fit-content"}, {width:'fit-content'});
    });

    $("#box4").hover(function(){
        $("#box4").css({height:'300px'}, {width:'300px'});
    });
    $("#box4").mouseout(function(){
        $("#box4").css({height:"fit-content"}, {width:'fit-content'});
    });
});

let clothing = {
    top1: $(document).get("#hoodie1"),
    bottom1: $(document).get("#shorts1"),
    bottom2: $(document).get("shorts2"),
    shoes1: $(document).get("#shoes1"),
}
console.log(clothing);

let clothingArray = {clothing};
console.log(clothingArray);