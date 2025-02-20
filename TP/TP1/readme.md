# PART1-Development of the Google Search Page

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

# PART2-Portfolio Website

This is a personal portfolio website designed to showcase my skills, projects, and contact information. It is built using **HTML** and **CSS**, with a responsive design and smooth scrolling functionality.

---

## Features

1. **Responsive Navigation Bar:**
   - Contains links to different sections of the page (Home, About Me, Skills, Projects, Contact Me).
   - Sticky header that remains fixed at the top while scrolling.
   - Hover effects for links and buttons.

2. **Home Section:**
   - Displays a greeting, my name, and a brief introduction.
   - Includes a button to navigate to the "About Me" section.

3. **About Me Section:**
   - Provides a detailed description of my background, education, and interests.
   - Includes an image and a button to return to the home section.

4. **Skills Section:**
   - Displays my technical skills using progress bars for programming languages and frameworks.
   - Each skill has a percentage indicator and an icon.

5. **Projects Section:**
   - Highlights my key projects with descriptions and images.
   - Includes a link to my GitHub profile.

6. **Contact Me Section:**
   - A contact form for users to send messages.
   - Input fields for name, email, subject, and message.

7. **Footer:**
   - Contains social media links and quick navigation links.
   - Includes a copyright notice.

---

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling and layout.
- **Boxicons**: For icons used in the skills section and footer.
- **Google Fonts**: For the "Poppins" font.

---

## How to Use

1. **Download the Files:**
   - Clone or download the repository to your local machine.

2. **Open the Project:**
   - Open the `index.html` file in your browser to view the portfolio.

3. **Modify the Content:**
   - Edit the `index.html` file to update your personal information, projects, and skills.
   - Customize the styles in the `style.css` file to match your preferences.

4. **Add Images:**
   - Replace the placeholder images (`ayoub.jpg`, `planning.png`) with your own images.

---

## Code Structure

### HTML (`index.html`)
- **Header (`<header>`):**
  - Contains the logo, navigation links, and a contact button.
- **Home Section (`<section class="home">`):**
  - Displays a greeting, name, and a button.
- **About Me Section (`<section class="about">`):**
  - Includes an image and a detailed description.
- **Skills Section (`<section class="skills">`):**
  - Uses progress bars to display skill levels.
- **Projects Section (`<section class="project">`):**
  - Highlights projects with descriptions and images.
- **Contact Me Section (`<section class="contact-form">`):**
  - Contains a form for user input.
- **Footer (`<footer>`):**
  - Includes social media links and quick navigation.

### CSS (`style.css`)
- **Global Styles:**
  - Resets default margins and paddings.
  - Sets the font family and smooth scrolling behavior.
- **Header Styles:**
  - Fixed position with a backdrop filter for a blurred effect.
  - Hover effects for links and buttons.
- **Home Section Styles:**
  - Flexbox layout for aligning content and image.
- **About Me Section Styles:**
  - Flexbox layout with a centered image and text.
- **Skills Section Styles:**
  - Progress bars with animations and percentage indicators.
- **Projects Section Styles:**
  - Flexbox layout with images and descriptions.
- **Contact Me Section Styles:**
  - Styled input fields and a submit button.
- **Footer Styles:**
  - Social media icons with hover effects.

---

## Key CSS Features

1. **Flexbox Layout:**
   - Used for aligning and distributing space among items in the header, home, about, and projects sections.
   ```css
   .home {
       display: flex;
       align-items: center;
       gap: 7em;
   }
   ```
2. **Progress Bars:**
   - Animated progress bars for displaying skill levels.
   ```css
   .progress-line span {
    height: 100%;
    background-color: #FFD700;
    animation: animate 1s 1s cubic-bezier(1,0,0.5,1) forwards;
}
   ```
3. **Hover Effects:**
   - Adds interactivity to buttons and links.
   ```css
   .contact:hover {
    background-color: #FFD700;
    box-shadow: 0 0 25px #FFD700;
}
   ```
4. **Smooth Scrolling:**
   - Enabled for a better user experience.
   ```css
   html, body {
    scroll-behavior: smooth;
}
   ```
5. **Responsive Design:**
   - The layout adjusts to different screen sizes using flexible units (em, %) and media queries (not included but can be added).


## Interface


![Capture d’écran 2025-02-20 215733](https://github.com/user-attachments/assets/d1bf5082-f2a0-4de4-8296-bb18b97e56cc)


![Capture d’écran 2025-02-20 215804](https://github.com/user-attachments/assets/1e05e0ee-f495-4f78-be43-f5c4f19376f9)


![Capture d’écran 2025-02-20 215819](https://github.com/user-attachments/assets/0516e55b-3ec2-4e04-b24d-9beeae21ab00)


![Capture d’écran 2025-02-20 215833](https://github.com/user-attachments/assets/6a180e99-4a7a-45a0-89ea-2fd15fc00063)


![Capture d’écran 2025-02-20 215852](https://github.com/user-attachments/assets/3c9a005c-bc36-435c-a8e1-12d9bb527759)



![Capture d’écran 2025-02-20 220001](https://github.com/user-attachments/assets/4814cc1f-42d9-4808-ae3c-d5d570e09fab)










