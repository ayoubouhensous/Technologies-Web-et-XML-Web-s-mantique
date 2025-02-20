# Development of the Google Search Page

This project is a simplified reproduction of Google's homepage. It uses **HTML** and **CSS** to create a user interface similar to Google's, featuring a search bar, icons, and a customization button.

---

## Project Structure

### Files
- `index.html`: Contains the HTML structure of the page.
- `google.css`: Contains the CSS styles for layout and design.
- **Images**: The images used in the project (Google logo, search icons, microphone, camera, etc.).

---

## HTML Structure

### Key Components
1. **Navigation Bar (`<nav>`):**
   - Contains links to "Gmail" and "Images".
   - Displays two icons: one for options and one for the user profile.

2. **Google Logo:**
   - The Google logo is centered on the page.

3. **Search Bar:**
   - A styled search bar with icons for search, microphone, and camera.

4. **Customization Button:**
   - A "Customize Chrome" button is placed at the bottom right of the page.

---

## CSS Styles

### Key CSS Functions and Properties

1. **`display: flex`:**
   - Used to create flexible layouts. For example:
     ```css
     nav {
         display: flex;
         justify-content: flex-end;
         gap: 20px;
     }
     ```
     - This makes the navigation items align to the right with a `20px` gap between them.

2. **`justify-content` and `align-items`:**
   - Used to align items horizontally and vertically. For example:
     ```css
     #logo {
         display: flex;
         justify-content: center; /* Centers horizontally */
         align-items: center; /* Centers vertically */
     }
     ```

3. **`border-radius`:**
   - Used to create rounded corners. For example:
     ```css
     .search-bar {
         border-radius: 30px; /* Rounds the search bar */
     }
     ```

4. **`box-shadow`:**
   - Adds shadow effects to elements. For example:
     ```css
     .search-bar {
         box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow */
     }
     ```

5. **`position: relative` and `position: absolute`:**
   - Used to position elements relative to their parent or the viewport. For example:
     ```css
     nav {
         position: relative;
         top: 20px; /* Moves the navigation 20px down */
     }
     ```

6. **`transition`:**
   - Adds smooth animations to property changes. For example:
     ```css
     .chrome-button {
         transition: background-color 0.3s ease; /* Smooth color change on hover */
     }
     ```

7. **`hover` Pseudo-class:**
   - Used to apply styles when an element is hovered. For example:
     ```css
     .chrome-button:hover {
         background-color: rgb(112, 109, 109); /* Changes button color on hover */
     }
     ```

---



