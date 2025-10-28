document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Modal Logic
    const modal = document.getElementById("contactModal");
    const openModalButtons = document.querySelectorAll(".open-modal-btn");
    const span = document.getElementsByClassName("close-button")[0];

    openModalButtons.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
        }
    });

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

