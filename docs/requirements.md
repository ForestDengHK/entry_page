# Requirements Document: Developer Tools Listing Website

## Overview
The purpose of this website is to provide a central entrance for listing developer utilities and tools. The website will consist of two primary sections:

1. **Self-Developed Tools:** Tools created by the website owner.
2. **Recommended External Tools:** Tools developed by external sources but recommended by the owner.

Initially, the website will be static, with the possibility of extending it to use a simple database like SQLite in the future. It will be hosted on Vercel.

---

## Functional Requirements

### General Website Design
1. **Conciseness and Responsiveness:**
   - The website should have a clean and minimalistic design.
   - The layout must be responsive to ensure usability across devices (mobile, tablet, desktop).

2. **Modern Framework:**
   - Use a modern frontend framework (e.g., Next.js) to facilitate flexibility, reusability, and easy maintenance.
   - Ensure the codebase is modular to allow future enhancements and database integrations.

3. **User-Friendly Navigation:**
   - Users must easily locate desired tools.
   - Include clear and aesthetically pleasing categorization and presentation of tools.

4. **Search Bar:**
   - Provide a search functionality that filters tools dynamically based on user input.
   - Display all tools if the search bar is empty.

### Tool Metadata Display
Each tool will include the following metadata:
   - **Name:** Tool’s title.
   - **Type:** Self-developed (`self_dev`) or external.
   - **Language:** Primary programming language used.
   - **Description:** A short and precise summary of the tool’s purpose.
   - **Purpose:** The functionality or use case of the tool.

### Initial Tools List
The website should include the following tools:

1. **Markdown Online Editor & Exporter**
   - URL: [https://mdexport.swifttools.eu](https://mdexport.swifttools.eu)
   - Type: Self-developed
   - Language: JavaScript
   - Description: An online editor for creating markdown documents with export functionality.
   - Purpose: Simplify markdown document creation and export.

2. **Markdown Convert Tool**
   - URL: [http://mdconvert.swifttools.eu](http://mdconvert.swifttools.eu)
   - Type: Self-developed
   - Language: Python
   - Description: Converts files in other formats to markdown.
   - Purpose: Enable easy conversion to markdown from various file types.

3. **Social Media Video/Audio Download Tool**
   - URL: [https://cobalt.tools/](https://cobalt.tools/)
   - Type: External
   - Language: Unknown
   - Description: Downloads videos and audio from social media platforms.
   - Purpose: Facilitate downloading media content.

---

## Non-Functional Requirements

### Performance
1. **Fast Loading Times:**
   - Minimize load times through optimized assets (e.g., images, scripts, and CSS).
   - Implement caching mechanisms where appropriate.

2. **Scalability:**
   - Ensure the website structure can accommodate future additions of tools or integrations with SQLite.

### Security
1. **Secure Hosting:**
   - Use HTTPS for all website interactions.

2. **Data Protection:**
   - For future database integrations, ensure secure storage and transmission of data.

3. **Input Validation:**
   - Sanitize search input to prevent XSS or SQL injection attacks.

### Compatibility
1. **Cross-Browser Support:**
   - Ensure compatibility with major browsers (Chrome, Firefox, Safari, Edge).

2. **Device Support:**
   - Optimize the design for various screen sizes and resolutions.

---

## Future Enhancements
1. **Database Integration:**
   - Add SQLite for dynamic content management.
2. **User Accounts:**
   - Enable users to save favorite tools or submit their recommendations.
3. **Advanced Search Filters:**
   - Allow filtering by multiple metadata fields, such as type, language, or purpose.
4. **Tool Ratings and Reviews:**
   - Implement a system for users to rate and review tools.

---

## Deliverables
1. A static website hosted on Vercel.
2. Responsive design with a search bar.
3. Display of the initial tools with metadata in an organized and user-friendly format.

---

## Notes
- Keep the website’s structure modular to allow smooth transition to future dynamic capabilities.
- Use modern CSS frameworks (e.g., Tailwind CSS) for styling to maintain a professional and consistent look.

