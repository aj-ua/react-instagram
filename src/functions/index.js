export function showPostsLoader() {
    window.addEventListener('load', function () {
        const postsLoader = document.querySelector('.posts-loader')
        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting === true) {
                const posts = document.querySelectorAll('.single-post.d-none')
                if (posts.length > 0) {
                    setTimeout(function () {
                        posts.forEach((post, index) => {
                            if (index < 3) {
                                post.classList.remove('d-none')
                            }
                        })
                    }, 1000)
                } else {
                    postsLoader.classList.add('d-none')
                }
            }


        }, { threshold: [0] });

        if (postsLoader) {
            observer.observe(postsLoader);
        }
    })

}

