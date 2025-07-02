    document.querySelectorAll('.slider').forEach(slider => {
        const imgs = slider.querySelectorAll('img.producto-img');
        let current = 0;

        const prevBtn = slider.querySelector('button.prev');
        const nextBtn = slider.querySelector('button.next');

        function showImage(index) {
            imgs.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + imgs.length) % imgs.length;
            showImage(current);
        });

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % imgs.length;
            showImage(current);
        });
    });