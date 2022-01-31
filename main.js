drop_close();

function drop_close() {
    console.log("hello");
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