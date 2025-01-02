document.addEventListener("DOMContentLoaded", () => {
    const galleries = [
        {
            path: "pictures/NewYear",
            photoFiles: ["photo1.jpg"],
            imageId: "gallery-image",
            prevBtnId: "prev-btn",
            nextBtnId: "next-btn",
        },
        {
            path: "pictures/NewCity",
            photoFiles: ["photo1.jpg"],
            imageId: "gallery-image-2",
            prevBtnId: "prev-btn-2",
            nextBtnId: "next-btn-2",
        },
        {
            path: "pictures/Drinking",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"],
            imageId: "gallery-image-3",
            prevBtnId: "prev-btn-3",
            nextBtnId: "next-btn-3",
        },
        {
            path: "pictures/NewPeople",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            imageId: "gallery-image-4",
            prevBtnId: "prev-btn-4",
            nextBtnId: "next-btn-4",
        },        
        {
            path: "pictures/Sport",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            imageId: "gallery-image-5",
            prevBtnId: "prev-btn-5",
            nextBtnId: "next-btn-5",
        },
        {
            path: "pictures/Gym",
            photoFiles: ["photo1.jpg", "photo2.jpg"],
            imageId: "gallery-image-6",
            prevBtnId: "prev-btn-6",
            nextBtnId: "next-btn-6",
        },
        {
            path: "pictures/Events",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg"],
            imageId: "gallery-image-7",
            prevBtnId: "prev-btn-7",
            nextBtnId: "next-btn-7",
        },
        {
            path: "pictures/Pets",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            imageId: "gallery-image-8",
            prevBtnId: "prev-btn-8",
            nextBtnId: "next-btn-8",
        },
        {
            path: "pictures/Nude",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg"],
            imageId: "gallery-image-9",
            prevBtnId: "prev-btn-9",
            nextBtnId: "next-btn-9",
        },
        {
            path: "pictures/Looks",
            photoFiles: ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"],
            imageId: "gallery-image-10",
            prevBtnId: "prev-btn-10",
            nextBtnId: "next-btn-10",
        },                                                
    ];

    galleries.forEach(({ path, photoFiles, imageId, prevBtnId, nextBtnId }) => {
        const galleryImage = document.getElementById(imageId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        let currentIndex = 0;

        if (!galleryImage || !prevBtn || !nextBtn) {
            console.error(`Элементы галереи не найдены для ${imageId}`);
            return;
        }

        // Функция для обновления изображения
        const updateImage = () => {
            galleryImage.src = `${path}/${photoFiles[currentIndex]}`;
            galleryImage.alt = `Фото ${currentIndex + 1}`;
        };

        // Обработчики событий для кнопок
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + photoFiles.length) % photoFiles.length;
            updateImage();
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % photoFiles.length;
            updateImage();
        });

        // Инициализация первого изображения
        updateImage();
    });
});
