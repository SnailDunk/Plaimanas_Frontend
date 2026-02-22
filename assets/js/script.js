// Editorial
const editorialItem = document.querySelector('.editorial-item');

editorialItem.addEventListener('mouseenter', function () {
    document.body.classList.add('editorial-open');
});

editorialItem.addEventListener('mouseleave', function () {
    document.body.classList.remove('editorial-open');
});





// Fixed banner
const brandText = document.getElementById('brandText');
const bannerHero = document.querySelector('.banner-hero');

window.addEventListener('scroll', function () {
    const bannerTop = bannerHero.getBoundingClientRect().top;

    if (bannerTop <= 0) {
        brandText.classList.add('is-fixed');
    } else {
        brandText.classList.remove('is-fixed');
    }
});

// Spacebar event
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        e.preventDefault();
        document.getElementById('brandText').classList.toggle('shrink');
    }
});





// Media Sticky Label
const mediaWrappers = document.querySelectorAll('.media-wrapper');

window.addEventListener('scroll', function () {
    mediaWrappers.forEach(wrapper => {
        const media = wrapper.querySelector('img.img-fluid, video.custom-video');
        if (!media) return;

        const sticky = wrapper.querySelector('.media-sticky');
        const mediaRect = media.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();

        const mediaOffsetTop = media.offsetTop;
        const mediaCenter = mediaOffsetTop + (mediaRect.height / 2);
        const mediaBottom = mediaOffsetTop + mediaRect.height * 0.9;

        const scrolled = -wrapperRect.top;
        const newTop = Math.min(mediaCenter + Math.max(scrolled, 0), mediaBottom);

        sticky.style.top = newTop + 'px';
        sticky.style.transform = 'translateY(-50%)';
    });
});



// Play media
const media = document.querySelector(".media-hover");
const video = media.querySelector("video");

media.addEventListener("mouseenter", () => video.play());
media.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
});





// FAQ Tab Buttons
const faqBtns = document.querySelectorAll('.faq-btn[data-tab]');
const faqContents = document.querySelectorAll('.faq-tab-content');

// Default
document.querySelector('[data-tab="shipping"]').classList.add('active');

faqBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // Reset active status
        faqBtns.forEach(b => b.classList.remove('active'));
        // Active when pressed
        this.classList.add('active');

        // Show/Hide contents
        const target = this.getAttribute('data-tab');
        faqContents.forEach(content => {
            content.style.display = content.getAttribute('data-content') === target ? 'block' : 'none';
        });
    });
});


// FAQ Toggles
document.querySelectorAll('.faq-header').forEach(header => {

    header.addEventListener('click', function () {

        const item = this.parentElement;
        const content = item.querySelector('.faq-content');

        if (item.classList.contains('active')) {

            // Collaspe
            content.style.height = content.scrollHeight + "px";

            requestAnimationFrame(() => {
                content.style.height = "0px";
            });

            item.classList.remove('active');

        } else {

            // Expand
            item.classList.add('active');

            content.style.height = content.scrollHeight + "px";

            content.addEventListener('transitionend', function () {
                if (item.classList.contains('active')) {
                    content.style.height = "auto";
                }
            }, { once: true });
        }

    });

});