# Beomgu's Portfolio

[GitHub](https://github.com/JeonBeomGu-S/beomgu-portfolio) | [Live Demo](https://beomgu-portfolio.vercel.app/)

## Technologies

- **Next.js**: Framework used for server-side rendering and building the frontend.
- **TailwindCSS**: Utility-first CSS framework used for styling and responsive design.
- **Notion API**: Integrated to fetch and display projects written in Notion.
- **Lottie Animation**: Added interactive animations to enhance the user experience.

## Overview

This is my dynamic portfolio website built with **Next.js** and **TailwindCSS**. The website showcases the projects I have worked on and is fully responsive, ensuring a great experience across different devices.

### Key Features

- **Dynamic Project Display**: The portfolio pulls project data directly from Notion, allowing for easy updates and management.
- **Interactive Animations**: Lottie animations are used to enhance visual appeal and provide a more engaging user experience.
- **Fully Responsive**: Built with TailwindCSS to ensure the website looks great on all screen sizes.

## Installation

To clone and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/JeonBeomGu-S/beomgu-portfolio.git
   ```
2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your .env file: Create a .env.local file in the root of your project and add the required environment variables:

   ```env
   NOTION_TOKEN=your-notion-api-key
   NOTION_DATABASE_ID=your-notion-database-id
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```
6. Visit http://localhost:3000 in your browser.
