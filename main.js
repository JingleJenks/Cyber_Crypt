drop_close_HOW();
drop_close_top5();

function drop_close_HOW() {
    document.querySelector(".drop_svg").addEventListener("click", openHow);


    function openHow() {
        document.querySelector(".drop_svg").classList.add("arrow_rotated");
        document.querySelector(".p_how").classList.remove("hidden")
        document.querySelector(".drop_svg").addEventListener("click", closeHow);
        document.querySelector(".drop_svg").removeEventListener("click", openHow);
    }

    function closeHow() {
        document.querySelector(".drop_svg").classList.remove("arrow_rotated");
        document.querySelector(".p_how").classList.add("hidden")
        document.querySelector(".drop_svg").addEventListener("click", openHow);
        document.querySelector(".drop_svg").removeEventListener("click", closeHow);



    }
}

function drop_close_top5() {
    console.log("hello");
    document.querySelector(".top5_1").addEventListener("click", open_1);


    function open_1() {
        document.querySelector(".drop_top5_1").classList.remove("hidden")
        document.querySelector(".top5_1").addEventListener("click", close_1);
        document.querySelector(".top5_1").removeEventListener("click", open_1);
    }

    function close_1() {
        document.querySelector(".drop_top5_1").classList.add("hidden")
        document.querySelector(".top5_1").addEventListener("click", open_1);
        document.querySelector(".top5_1").removeEventListener("click", close_1);



    }
}