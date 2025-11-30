document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');
            
            // Close all other open accordions
            document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                if (openContent !== content) {
                    openContent.classList.remove('open');
                    openContent.previousElementSibling.querySelector('.accordion-icon').textContent = '+';
                }
            });

            // Toggle the clicked accordion
            content.classList.toggle('open');
            if (content.classList.contains('open')) {
                icon.textContent = '–';
            } else {
                icon.textContent = '+';
            }
        });
    });
});