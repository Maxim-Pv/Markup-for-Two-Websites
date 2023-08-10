document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-work__item-link').forEach(function(stepsLink) {
        stepsLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.section-work__description').forEach(function(workDescription) {
                workDescription.classList.remove('section-work__description-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__description-active')
        })
    })

    document.querySelector('.burger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.header-nav').classList.toggle('open');    
    })
})




