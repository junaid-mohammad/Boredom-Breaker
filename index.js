// Importing necessary modules
import express from "express";       // Express framework for handling web requests
import bodyParser from "body-parser"; // Middleware for parsing request bodies (form data)
import axios from "axios";            // Library for making HTTP requests

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Port for the server to listen on

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" directory (CSS, images, etc.)
app.use(express.static("public"));

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

/* 
  Step 1: Handle GET request to the home page ("/")
  When a user visits the home page, fetch a random activity from the API
*/
app.get("/", async (req, res) => {
  try {
    // Make a GET request to the Bored API to fetch a random activity
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data; // Extract response data

    // Render the "index.ejs" view and pass the fetched activity data
    res.render("index.ejs", { data: result });
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Failed to make request:", error.message);
    
    // Render the page with an error message
    res.render("index.ejs", {
      error: "Unable to fetch activity. Please try again later.",
    });
  }
});

/* 
  Step 2: Handle POST request to the home page ("/")
  - This route handles filtered activity searches based on user input
  - Uses axios to make an API request to the /filter endpoint
  - Renders the index.ejs file with a randomly selected activity from the response
  - Step 3: Handles the scenario where no matching activity is found (404 error)
*/
app.post("/", async (req, res) => {
  // Extract user input from form submission
  const type = req.body.type;  // Activity type (e.g., "recreational")
  const participants = req.body.participants;  // Number of participants

  try {
    // Make a GET request to the Bored API filter endpoint with user-selected criteria
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    const result = response.data;  // Extract response data (list of activities)

    // Select a random activity from the returned list
    const randomActivity = getRandomActivity(result);
    console.log("Selected Activity:", randomActivity);

    // Render the index.ejs view with the random activity data
    res.render("index.ejs", { data: randomActivity });
  } catch (error) {
    // Log error to the console for debugging
    console.error("Failed to make request:", error.message);

    // Render the page with an appropriate error message
    res.render("index.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

/* 
  Utility function to pick a random activity from an array of activities 
  - Takes an array of activities and returns a random one
*/
function getRandomActivity(activityList) {
  const randomIndex = Math.floor(Math.random() * activityList.length);  // Generate random index
  return activityList[randomIndex];  // Return random activity
}
