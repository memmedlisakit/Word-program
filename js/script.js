// $(document).ready(function(){
//     var words = $(".container");


//     $(".button").click(function(){
//         $(".font-dropdown").toggle();
//     })

//     // for font famliyes 
//     $(".font-dropdown span").click(function(){       
//         if($(this).index() == 0){
//             $(words).removeClass("font1 font2 font3 font4").addClass("font1")
//         }
//         if($(this).index() == 1){
//             $(words).removeClass("font1 font2 font3 font4").addClass("font2")
//         }
//         if($(this).index() == 2){
//            $(words).removeClass("font1 font2 font3 font4").addClass("font3")
//         }
//         if($(this).index() == 3){
//            $(words).removeClass("font1 font2 font3 font4").addClass("font4")
//         }
//         if($(this).index() == 4){
//            $(words).removeClass("font1 font2 font3 font4");
//         }
//     })
// })

$(function () {
    $(".container").focus();


    // font-famliyes
    $(".fonts").click(function () {
        $(".dropdown-fonts").toggle(400)
    })
    $(".dropdown-fonts span").click(function () {
        var font = $(this).text();
        $(".container").css({
            "font-family": "" + font + ""
        })
    })


    // font-sizes
    $(".font-size").click(function () {
        $(".dropdown-size").toggle(400)
    })
    $(".dropdown-size span").click(function () {
        var size = +($(this).text());
        $(".container").css({
            "font-size": "" + size + "" + "px"
        })
    })

    // for colors
    $(".colors").click(function () {
        $(".dropdown-colors").toggle(400)
    })
    $(".dropdown-colors span").click(function () {
        var textcolor = $(this).text();
        $(".container").css({
            "color": textcolor,
        })
    })



    



    // for text background color
    $(".background").click(function () {
        $(".dropdown-background").toggle(400);
    })
    $(".dropdown-background span").click(function () {
        var backgroundColor = $(this).text();
        var text = "<span class='background-color'>" + $(".container").text() + "</span>";
        $(".container").html(text);
        $(".background-color").css({
            "background-color": backgroundColor
        });
    })
})