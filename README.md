# ResumAI

ResumAI is an AI-powered web application that analyzes resumes, provides actionable feedback, and suggests skill enhancements and freelance job opportunities. Designed for students, freelancers, and job seekers, ResumAI is your personal career assistant.

---

## Features

### MVP Features

1. **Resume Upload and Parsing**
   - Upload PDF or DOCX files.
   - Extract key sections (Skills, Education, Work Experience).

2. **AI Resume Analysis**
   - Get actionable feedback to improve your resume.
   - Highlight strengths and identify areas for improvement.

3. **Skill Recommendations**
   - Match resume content with relevant skills.
   - Suggest free online learning resources.

4. **Freelance Job Suggestions**
   - Provide gig recommendations based on skills.
   - Fetch opportunities via APIs or web scraping.

5. **Result Page**
   - Display resume feedback, skill recommendations, and job suggestions.

### Future Features

- User accounts for saving progress.
- Advanced resume templates.
- Role-specific and industry-specific feedback.
- Gamification (badges and rewards).
- Certifications for completed skill courses.

---

## Tech Stack

### Frontend

- **Next.js**: For server-side rendering (SSR) and a seamless user experience.
- **Tailwind CSS**: For responsive and modern styling.

### Backend

- **Next.js API Routes**: Handle resume uploads and interactions with AI services.
- **OpenAI API**: Power the AI-driven resume analysis.

### Deployment

- **Vercel**: Host the application with free tier support.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or above)
- **npm** (v7 or above)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/anand-mukul/resumai.git
   cd resumai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Roadmap

### Phase 1: Core MVP (Month 1)

- Resume upload and parsing.
- Basic AI feedback.
- Skill recommendations and freelance job suggestions.
- Deployment on Vercel.

### Phase 2: Enhanced Features (Month 2)

- User accounts and progress saving.
- Advanced resume analysis.
- Monetization with ads and affiliate links.

### Phase 3: Premium Features and Scaling (Month 3)

- Freemium model with advanced editing.
- Gamification and certifications.
- Analytics dashboard for users.

---

## Contributions

We welcome contributions from the community. To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit changes and push to your branch.
4. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For inquiries or feedback, please contact:

- **Name**: Mukul Anand
- **Email**: <mukulanand.dev@gmail.com>
- **GitHub**: [your-username](https://github.com/anand-mukul)
