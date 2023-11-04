document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        // ... Your recipe data here ...
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "40 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        }
    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const openDrawerButton = document.getElementById("openDrawerButton");
    const closeDrawerButton = document.getElementById("closeDrawerButton");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const nav = document.querySelector("nav");

    // Function to open the mobile drawer
    function openDrawer() {
        mobileDrawer.style.left = "0";
    }

    // Function to close the mobile drawer
    function closeDrawer() {
        mobileDrawer.style.left = "-80%"; // Hide the drawer
    }

    // Event listener for opening the drawer
    openDrawerButton.addEventListener("click", openDrawer);

    // Event listener for closing the drawer
    closeDrawerButton.addEventListener("click", closeDrawer);

    // Function to create a recipe card with specified elements
    function createRecipeCard(recipe) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Create HTML structure for the recipe card
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-details">
                <p class="recipe-type">${recipe.type === 'veg' ? 'Veg' : 'Non-Veg'}</p>
                <div class="recipe-name-rating">
                    <h1 class="recipe-name">${recipe.name}</h1>
                    <div class="recipe-rating">
                        <p><span class="star-icon">★</span> ${recipe.rating}</p>
                    </div>
                </div>
                <div class="recipe-time-action">
                    <p class="recipe-time">${recipe.time}</p>
                    <div class="recipe-actions">
                        <i class="material-icons like-button">${recipe.isLiked ? "favorite" : "favorite_border"}</i>
                        <i class="material-icons chat-button">chat</i>
                    </div>
                </div>
            </div>
        `;

        // Add an event listener to the like button to toggle isLiked property
        const likeButton = recipeCard.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            recipe.isLiked = !recipe.isLiked;
            likeButton.textContent = recipe.isLiked ? "favorite" : "favorite_border";
        });

        // Add an event listener to the chat button to open the chat box
        const chatButton = recipeCard.querySelector(".chat-button");
        chatButton.addEventListener("click", () => {
            openChatBox();
        });

        recipeContainer.appendChild(recipeCard);
    }

    // Function to display recipes
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            createRecipeCard(recipe);
        });
    }

    // Function to open the chat box
    function openChatBox() {
        const chatBox = document.createElement("div");
        chatBox.classList.add("chat-box");
        chatBox.innerHTML = `
        <div class="chat-header">
            <span class="chat-close" id="chatClose">&times;</span>
        </div>
        <div class="chat-content">
            <div class="chat-messages">
                <div class="chat-messaging">Hello</div>
            </div>
            <input type="text" class="chat-input" placeholder="Type your message here...">
            <button class="chat-send">Send</button>
        </div>
    `;
        document.body.appendChild(chatBox);

        const chatClose = chatBox.querySelector("#chatClose");
        const chatInput = chatBox.querySelector(".chat-input");
        const chatSend = chatBox.querySelector(".chat-send");

        // Add an event listener to close the chat box
        chatClose.addEventListener("click", () => {
            closeChatBox(chatBox);
        });

        // Add an event listener to send a message
        chatSend.addEventListener("click", () => {
            const message = chatInput.value.trim();
            if (message !== "") {
                const chatMessages = chatBox.querySelector(".chat-messages");
                const messageElement = document.createElement("div");
                messageElement.classList.add("chat-message");
                messageElement.textContent = message;
                chatMessages.appendChild(messageElement);
                chatInput.value = "";
            }
        });
    }

    // Function to close the chat box
    function closeChatBox(chatBox) {
        document.body.removeChild(chatBox);
    }

    // Function to display recipes
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            createRecipeCard(recipe);
        });
    }

    // Initial display of all recipes
    displayRecipes(recipes);

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Filter by recipe type functionality
    const allRecipes = document.getElementById("AllRecipes");
    const vegRecipes = document.getElementById("VegRecipes");
    const nonVegRecipes = document.getElementById("NonVegRecipes");

    allRecipes.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    vegRecipes.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    nonVegRecipes.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });

    // Rating filter functionality
    const ratingFilterAbove = document.getElementById("ratingFilterAbove");
    const ratingFilterBelow = document.getElementById("ratingFilterBelow");

    function filterByRating(rating, isAbove) {
        const filteredRecipes = isAbove
            ? recipes.filter((recipe) => recipe.rating >= rating)
            : recipes.filter((recipe) => recipe.rating < rating);
        displayRecipes(filteredRecipes);
    }

    ratingFilterAbove.addEventListener("click", () => {
        filterByRating(4.0, true);
    });

    ratingFilterBelow.addEventListener("click", () => {
        filterByRating(4.0, false);
    });

    // Mobile drawer functionality
    openDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "block";
    });

    closeDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "none";
    });

    // Toggle menu icon for screens with width 786px or less
    function toggleMenuIcon() {
        if (window.innerWidth <= 786) {
            nav.style.display = "none"; // Hide the navigation bar
            openDrawerButton.style.display = "block"; // Show the menu icon
        } else {
            nav.style.display = "flex"; // Display the navigation bar
            openDrawerButton.style.display = "none"; // Hide the menu icon
            mobileDrawer.style.display = "none"; // Hide the mobile drawer
        }
    }

    // Initial check and event listener for screen width
    toggleMenuIcon();
    window.addEventListener("resize", toggleMenuIcon);
});

// Get the subscribe button and email input element
const subscribeButton = document.getElementById("subscribeButton");
const emailInput = document.getElementById("emailInput");

// Add an event listener to the subscribe button
subscribeButton.addEventListener("click", () => {
    // Get the user's provided email
    const userEmail = emailInput.value.trim();

    // Check if the provided email is not empty
    if (userEmail !== "") {
        // Create a mailto link with the provided email
        const mailtoLink = `mailto:${userEmail}`;

        // Open the default email client with the mailto link
        window.location.href = mailtoLink;
    }
});
