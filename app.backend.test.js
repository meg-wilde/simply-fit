const request = require("supertest");
const app = require("./app"); // Assuming your app.js is in the same directory

describe("API Tests", () => {
  // Test the GET /api/workout endpoint
  it("should get workouts from the /api/workout endpoint", async () => {
    // Send a GET request to the /api/workout endpoint
    const response = await request(app).get("/api/workout");

    // Check the response status code
    expect(response.status).toBe(200);

    // Check if the response body is an array (assuming your API returns an array of workouts)
    expect(Array.isArray(response.body)).toBe(true);
  });
});
