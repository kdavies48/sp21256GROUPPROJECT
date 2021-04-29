$(document).ready(function(){
    console.log("Ready!");
    $("#mensHeader").css("color", "black");
});

let clothing = {
    top1: $(document).get("#hoodie1"),
    bottom1: $(document).get("#shorts1"),
    bottom2: $(document).get("shorts2"),
    shoes1: $(document).get("#shoes1"),
}
console.log(clothing);

let clothingArray = {clothing};

for (let i = 0; i < clothingArray.length; i++){
    console.log(i);
}