$(function(){
    $.ajax({
        url:"new_header.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("#new_header");
            $(`<link rel="stylesheet" href="../css/new_header.css">`).appendTo("head");
        }
    })
})