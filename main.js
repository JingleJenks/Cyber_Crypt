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
    console.log("hello2");
    document.querySelector(".top5_1").addEventListener("click", open_1);
    document.querySelector(".top5_2").addEventListener("click", open_2);
    document.querySelector(".top5_3").addEventListener("click", open_3);
    document.querySelector(".top5_4").addEventListener("click", open_4);
    document.querySelector(".top5_5").addEventListener("click", open_5);



    function open_1() {
        console.log("open security");
        document.querySelector(".drop_top5_1").classList.remove("hidden")
        document.querySelector(".drop_top5_2").classList.add("hidden")
        document.querySelector(".drop_top5_3").classList.add("hidden")
        document.querySelector(".drop_top5_4").classList.add("hidden")
        document.querySelector(".drop_top5_5").classList.add("hidden")
        document.querySelector(".top5_1").addEventListener("click", close_1);
        document.querySelector(".top5_1").removeEventListener("click", open_1);
    }

    function open_2() {
        console.log("open cut costs");
        document.querySelector(".drop_top5_2").classList.remove("hidden")

        document.querySelector(".drop_top5_1").classList.add("hidden")
        document.querySelector(".drop_top5_3").classList.add("hidden")
        document.querySelector(".drop_top5_4").classList.add("hidden")
        document.querySelector(".drop_top5_5").classList.add("hidden")
        document.querySelector(".top5_2").addEventListener("click", close_2);
        document.querySelector(".top5_2").removeEventListener("click", open_2);
    }

    function open_3() {
        console.log("open manage");
        document.querySelector(".drop_top5_3").classList.remove("hidden")
        document.querySelector(".drop_top5_2").classList.add("hidden")
        document.querySelector(".drop_top5_1").classList.add("hidden")
        document.querySelector(".drop_top5_4").classList.add("hidden")
        document.querySelector(".drop_top5_5").classList.add("hidden")
        document.querySelector(".top5_3").addEventListener("click", close_3);
        document.querySelector(".top5_3").removeEventListener("click", open_3);
    }

    function open_4() {
        console.log("open effortless");
        document.querySelector(".drop_top5_4").classList.remove("hidden")
        document.querySelector(".drop_top5_2").classList.add("hidden")
        document.querySelector(".drop_top5_3").classList.add("hidden")
        document.querySelector(".drop_top5_1").classList.add("hidden")
        document.querySelector(".drop_top5_5").classList.add("hidden")
        document.querySelector(".top5_4").addEventListener("click", close_4);
        document.querySelector(".top5_4").removeEventListener("click", open_4);
    }

    function open_5() {
        console.log("open reliable");
        document.querySelector(".drop_top5_5").classList.remove("hidden")
        document.querySelector(".drop_top5_2").classList.add("hidden")
        document.querySelector(".drop_top5_3").classList.add("hidden")
        document.querySelector(".drop_top5_4").classList.add("hidden")
        document.querySelector(".drop_top5_1").classList.add("hidden")
        document.querySelector(".top5_5").addEventListener("click", close_5);
        document.querySelector(".top5_5").removeEventListener("click", open_5);
    }

    function close_1() {
        console.log("close security");
        document.querySelector(".drop_top5_1").classList.add("hidden")
        document.querySelector(".top5_1").addEventListener("click", open_1);
        document.querySelector(".top5_1").removeEventListener("click", close_1);
    }

    function close_2() {
        console.log("close cut costs");
        document.querySelector(".drop_top5_2").classList.add("hidden")
        document.querySelector(".top5_2").addEventListener("click", open_2);
        document.querySelector(".top5_2").removeEventListener("click", close_2);
    }

    function close_3() {
        console.log("close manage");
        document.querySelector(".drop_top5_3").classList.add("hidden")
        document.querySelector(".top5_3").addEventListener("click", open_3);
        document.querySelector(".top5_3").removeEventListener("click", close_3);
    }

    function close_4() {
        console.log("close effortless");
        document.querySelector(".drop_top5_4").classList.add("hidden")
        document.querySelector(".top5_4").addEventListener("click", open_4);
        document.querySelector(".top5_4").removeEventListener("click", close_4);
    }

    function close_5() {
        console.log("close reliable");
        document.querySelector(".drop_top5_5").classList.add("hidden")
        document.querySelector(".top5_5").addEventListener("click", open_5);
        document.querySelector(".top5_5").removeEventListener("click", close_5);
    }
}

const innerline = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const line = entry.target.querySelector('.inner_blue');

        console.log("line");
        if (entry.isIntersecting) {
            // Add the animation class
            line.classList.add('ani_line')

            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        line.classList.remove('ani_line')
    });

});
innerline.observe(document.querySelector('.line_wrapper'))


const innerline2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const line2 = entry.target.querySelector('.inner_blue2');

        console.log("line2");
        if (entry.isIntersecting) {
            // Add the animation class
            line2.classList.add('ani_line')

            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        line2.classList.remove('ani_line')
    });

});
innerline2.observe(document.querySelector('.line_wrapper2'));