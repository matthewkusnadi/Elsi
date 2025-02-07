// Force scroll to top when page loads
window.history.scrollRestoration = "manual";
window.scrollTo(0, 0);

window.onload = function() {
    console.log('Window loaded!');
    
    // Force scroll to top again just to be sure
    window.scrollTo(0, 0);
    
    setTimeout(function() {
        console.log('Timer finished!');
        
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            console.log('Found loading screen, fading out...');
            loadingScreen.style.opacity = "0";
            
            setTimeout(() => {
                loadingScreen.style.display = "none";
                console.log('Loading screen hidden');
                // Force scroll to top one final time after loading screen is gone
                window.scrollTo(0, 0);
            }, 500);
        }

        const elements = document.querySelectorAll('.introduction, .name, .question');
        elements.forEach(el => {
            el.classList.add('visible');
            console.log('Made visible:', el.className);
        });
    }, 3000);

    // Track hover count for no button
    let hoverCount = 0;
    const maxHovers = 5;

    // Add event listener for the yes button
    document.getElementById("yes-btn").addEventListener("click", function() {
        const yesResponse = document.getElementById("yes-response");
        yesResponse.classList.remove("hidden");
        // Use setTimeout to ensure the removal of hidden class is processed before adding show class
        setTimeout(() => {
            yesResponse.classList.add("show");
        }, 10);
    });

    // Add event listener for the no button
    document.getElementById("no-btn").addEventListener("mouseover", function() {
        hoverCount++;
        
        if (hoverCount >= maxHovers) {
            // Fade out and remove the button
            this.style.opacity = "0";
            setTimeout(() => {
                this.remove();
            }, 500); // Remove after fade animation
            return;
        }

        // Move button to random position
        const x = Math.random() * (window.innerWidth - this.offsetWidth);
        const y = Math.random() * (window.innerHeight - this.offsetHeight);
        this.style.position = 'fixed';
        this.style.left = x + 'px';
        this.style.top = y + 'px';
    });
};