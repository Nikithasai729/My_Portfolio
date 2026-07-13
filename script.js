// Dynamic Mouse Glow Tracker
        const cursorGlow = document.querySelector(".cursor-glow");
        
        document.addEventListener("mousemove", (e) => {
            // Make it visible once the user moves the mouse
            cursorGlow.classList.add("active");
            
            // Make the glow follow the exact X and Y coordinates of the cursor
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
        });

        // Hide the glow if the mouse leaves the browser window
        document.addEventListener("mouseleave", () => {
            cursorGlow.classList.remove("active");
        });
