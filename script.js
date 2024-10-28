document.addEventListener('DOMContentLoaded', () => {
    // Select all image from gallery
    const galleryItems = document.querySelectorAll('.gallery-image img');
    const modal = document.querySelector('.img-design-js');
    const modalImg = document.querySelector('.image-js');
    const closeBtn = document.querySelector('.close');



    // Add click event listeners to open image
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = item.src;
        });
    });

    // Add click event listener to the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        
    });
    
});