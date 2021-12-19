export default function swiper() {
    //querySelectors
    const modalCarrousel = document.querySelector("#modal-carrousel");
    const cardCarousel = document.querySelectorAll(".swiper-slide");
    const promptCard = document.querySelector("#prompt-card");

    const swiper = new Swiper(".mySwiper", {
        effect: "cards",
        loop: true,
        allowTouchMove: false,
        autoplay: 1,
        speed: 100,
    });

    const randomTime = Math.floor(Math.random() * (15000 - 8000)) + 8000;

    document.querySelectorAll(".card-goal").forEach((card) => {
        card.addEventListener("click", () => {
            swiper.autoplay.start();

            if (modalCarrousel.classList.contains("hidden")) {
                modalCarrousel.classList.remove("hidden");
                modalCarrousel.classList.add("flex");
                setTimeout(() => {
                    swiper.autoplay.stop();
                    modalCarrousel.addEventListener("click", (ev) => {
                        ev.stopPropagation();
                        modalCarrousel.classList.remove("flex");
                        modalCarrousel.classList.add("hidden");
                        window.location.reload();
                    });

                    cardCarousel.forEach((card) => {
                        const swiperIndex = swiper.realIndex;
                        const cardIndex = card.dataset.index;
                        if (swiperIndex === Number(cardIndex)) {
                            console.log(card);
                        }
                    });
                }, randomTime);
            } else {
                modalCarrousel.classList.remove("flex");
                modalCarrousel.classList.add("hidden");
            }
        });
    });
}
