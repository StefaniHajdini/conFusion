$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    $("#loginbutton").click(function () {
        $("#loginModal").modal('toggle');
    });
    $("#logindismiss1").click(function () {
        $("#loginModal").modal("hide");
    });
    $("#logindismiss2").click(function () {
        $("#loginModal").modal("hide");
    });
    $("#buttonreserve").click(function () {
        $("#reserveModal").modal('toggle');
    });
    $("#modaldismiss").click(function () {
        $("#reserveModal").modal("hide");
    });
    $("#modaldismiss2").click(function () {
        $("#reserveModal").modal("hide");
    });

});