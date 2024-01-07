## Hyperion Dev: Final Project Definition

## Brand:

Simply Fit

## Summary:

A fitness website where “admin” users are trainers who can upload new workouts to the system, and regular users can access the workouts, mark them as complete and add their own score and notes to each workout.

## System Architecture

This app will be built using create-react-app to build the frontend and Express in the backend. The data for the application will be fed by a mongoDB database to provide the information for the workouts, as well as using local storage to store each individual users workout results.

The high level functions will be:

- User and Admin authentication
- Admin workout creation, edit, delete functionality
- User workout filtering
- Users saved workouts
- User can mark a workout as complete and add their score and notes

The app will have a login page, a homepage which will show the workouts to the user. For non-admins they will see a My Workouts page which the user can save workouts. On this page they can mark a workout as complete and add scores and notes. The admins will have the ability to add/edit/delete workouts. Both admins and users will be able to access unique help pages to provide them with help completing their functions.

The app will be built and then deployed to Vercel.

## System Requirements Specification

## Functional and Non-Functional Requirements

Functional Requirements:

1. User Authentication:
   a. Users should be able to sign in securely using email and password.

b. Admins that log in will be recognised as an admin and be given access to the admin pages.

2. Workout Management:
   a. An admin can add new workouts. A workout can consist of:
   An image
   Title
   Details of the workout
   Estimated time to complete
   Difficulty level (Easy, Intermediate, Hard, Expert)

b. Admin should also be able to edit any aspect of the workout.

c. Admin can delete a workout from the list.

3.Workout Filtering:
a. A regular user should be able to filter the workouts within a view.
Workouts can be filtered by:

- Difficulty level (Easy, Intermediate, Hard, Expert)
- Time to complete

b. A regular user should be able to save a workout to their My Workouts. When this happens the workout will be saved to their My Workouts page.

4. Workout completion:
   A regular user can mark workouts in their My Workouts as complete. They can also add their score and notes to the workout.

Non-Functional Requirements:

Usability:

- The Simply Fit app should have a simple, easy to use interface.
- The workouts should be ordered from most recently created to oldest by default
- The workouts should show the title, the first part of the description, the difficulty and the estimated time.
- The App should be responsive in its design accounting for larger screens, mid-size tablet screens, and smaller mobile screens.
- The App should have two help pages (one admin and one regular users) which contains more details on using the app as well as a way to contact the company for further support.

Performance:

- The App should be consistently high in loading and page-speed performance.
- The app should be able to retrieve and load tasks in an efficient way. For example by server side rendering.

Security:

- Using JWT to provide a secure user authentication and authorization process.
- Implementing Helmet to set various HTTP headers to improve the security of the web application.

## Product Differentiation

Taking into account other workout websites and apps, here is how my product will stand out in the marketplace:

Unique Selling Point:
Unlike others in the market that target the workouts at body areas, I will focus on the ability to filter only by difficulty and time. This provides a simple way for users to filter for workouts to fit into the time they have available and their ability.

An additional key point of differentiation is that there are very few products on the marketplace that provide a free way to save a list of workouts for that user without it being a paid subscription model.

Usability:
Due to the simplicity of the filtering as mentioned above, this application will stand out from others on the marketplace due to its ease of use and clean design. Users will not need any detailed guides to understand how to use the product.

Additionally, for admins, we will make the process to add a workout very quick and easy so they do not feel a burden of efforts to add new information to the product.

Workout Management:
Focusing on the difficulty of workouts and time to complete will allow users to quickly identify workouts that are a good fit for them.

Allowing users to create a list of workouts they want to complete - and also mark the workouts as complete gives them a way to personalise their experience of the product.

Summary:
Our app will take some of the key benefits that other workout apps offer including the ability to filter workouts by suitability criteria but will stand out from the crowd by offering a simple and appealing user interface and focussing on Time and Difficulty as the filter options. We will target our product at people looking to fit workouts into a time slot that best suits their lifestyle.The app will takes minimal time to understand and onboard to which reduces the time to value for new users.

## Simply Fit App: User Stories

1. As a user, I want to sign in securely, so only authenticated users can access their own My Workouts page.
   Acceptance Criteria: Implement secure user authentication using an email and password

2. As a user, I want to be able to filter workouts to find ones that suit me.
   Acceptance Criteria: Users can filter workouts by:

- difficulty
- estimated time to complete

3. As a user I want to be able to save a workout to My Workouts.
   Acceptance Criteria: Users can save a workout and then a copy of that workout will show on My Workouts page.

4. As a user, I want to be able to mark a workout as complete and add my score.
   Acceptance Criteria: Users can mark any workout in My Workouts as complete and add comments and a score to the workout.

5. As a user, I want to be able to add a new score to the workout.
   Acceptance Criteria: Users can mark a workout as complete on multiple occasions. It will allow them to add a new score and comments but also save their old score and comments.

6. As an Admin, I want to sign in securely, so only authenticated users can access the admin view of the application.
   Acceptance Criteria: Implement secure user authentication using 3 different methods:

- email and password
- Facebook authentication
- Google authentication
  Admin users will be able to see admin actions after logging in.

7. As an Admin, I want to be able to add a new workout to the app.
   Acceptance Criteria: Ability to add a new workout. A workout will have a title, description, the difficulty and the estimated time to complete.

8. As an Admin, I want to be able to edit a workout to the app.
   Acceptance Criteria: Ability to edit an existing workout. Admin can edit title, description, the difficulty and the estimated time to complete and save the workout.

9. As an Admin, I want to be able to delete a workout from the app.
   Acceptance Criteria: Ability to delete a workout from the app.

## Wireframes

See attached files SimplyFit.draw.io
