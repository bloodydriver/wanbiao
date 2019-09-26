$(function() {
    $(".ad_close").click(function() {
        $(this).parent().slideUp();
    })
    $("#index_search").focus(function() {
        $(this).val("").css("color","#333");
        $(".tips").show();
    })
    $("#index_search").blur(function() {
        $(this).val("劳力士").css("color","#ccc");
        $(".tips").hide();
    })
    $(".bot").mouseover(function() {
        $(".bot_msg").show(1000);
    })
    $(".drop_window").slideUp()
    $("#ser").mouseover(function() {
        $("#ser").css({
            "background-color" : "#fff",
            "border-left":"1px solid #ccc",
            "border-right": "1px solid #ccc"
        })
        $(".drop_window").mouseover(function() {
            $(this).slideDown();
        })
        $(".drop_window").mouseout(function() {
            // $(this).slideUp();
        })
        $(".drop_window").slideDown();
    })
    $("#ser").mouseout(function() {
        $(".drop_window").slideUp(1);
        $("#ser").css({
            "background-color" : "#f4f4f4",
            "border-left":"1px solid transparent",
            "border-right": "1px solid transparent"
        })
    })
})
