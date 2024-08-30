        // Get the image element
        const movingImage = document.getElementById('movingImage');

        // Set initial position
        let positionX = 50;
        let positionY = 50;

        // Set the amount of pixels to move on each arrow key press
        const movementStep = 10;

        // Function to handle arrow key events
        function handleArrowKeys(event) {
            switch (event.key) {
                case 'ArrowUp':
                    positionY -= movementStep;
                    break;
                case 'ArrowDown':
                    positionY += movementStep;
                    break;
                case 'ArrowLeft':
                    positionX -= movementStep;
                    break;
                case 'ArrowRight':
                    positionX += movementStep;
                    break;
            }

            // Update the image position
            movingImage.style.left = `${positionX}%`;
            movingImage.style.top = `${positionY}%`;
        }

        // Add an event listener to handle arrow key presses
        document.addEventListener('keydown', handleArrowKeys);