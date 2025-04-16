import ProjectCard from "./ProjectCard";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Work() {
  useScrollAnimations();
  return (
    <div id="projects" className="w-full">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Projects
      </h1>
      <p className="animate-on-scroll text-center text-hoverBg md:text-xl mx-auto w-3/4 md:w-2/4 mb-10">
      A showcase of my curated websites and niche projects, designed to be both visually appealing and engaging. Explore and discover my work!
      </p>

      {/* projects grid */}
      {/* 1345X645 image aspect ratio */}
      <div className="animate-on-scroll grid sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-secondaryBg py-[1px]">
        {/* Interviewly */}
        <ProjectCard
        img="interviewly.png"
        url="https://interviewly-sand.vercel.app/"
        title="Interviewly"
        skill1="Next.js"
        skill2="Gemini"
        about="An AI-powered mock interview platform where an AI voice assistant generatea and conducts customized interviews based on user preferences. After the interview, it provides detailed feedback on performance, helping users improve their skills."
        repo="https://github.com/NayanCod/Interviewly"
        />
        {/* watchspot */}
        <ProjectCard
        img="watchspot.jpg"
        url="https://expo.dev/artifacts/eas/bPs7RrFL8TU2Kf7b98BMTz.apk"
        title="Watchspot"
        skill1="React Native"
        skill2="Firebase"
        about="A React Native Expo mobile app for movie recommendations, allowing users to search for movies, watch trailers and clips, and bookmark favorites. Powered by the Gemini API for personalized movie suggestions. The app features a user-friendly interface and secure authentication via Firebase, ensuring a seamless experience across devices."
        repo="https://github.com/NayanCod/RN_Movie_App"
        />
        {/* WanderLust */}
        <ProjectCard
        img="wanderlust.png"
        url="https://wonderlust-nvdg.onrender.com/listings"
        title="WanderLust"
        skill1="Express.js"
        skill2="EJS"
        about="WanderLust web application built using a stack of Express.js, Node.js, MongoDB, EJS, and Bootstrap. This platform allows users to securely sign up, log in, and manage their listings with CRUD operations. Features include a review system, dynamic search, and category filtering. The application employs the MVC framework to ensure scalability and maintainability, and it uses MongoDB for efficient data management."
        repo="https://github.com/NayanCod/WonderLust"
        />
        {/* Sudoyantra Dashboard */}
        <ProjectCard
        img="sudo.jpg"
        url="https://www.linkedin.com/in/nayan-4b2b61249/details/projects/"
        title="Sudoyantra Dashboard"
        skill1="Vue3"
        skill2="TypeScript"
        about="Developed a comprehensive dashboard for SudoYantra's automatic and semi-automatic solar panel cleaning robots. The dashboard features real-time data visualization, including robot and panel statistics, and allows administrators to manage organizations, users, and robots efficiently."
        repo="https://www.linkedin.com/company/sudoyantra/posts/?feedView=all"
        />
        {/* Item Expiry Reminder */}
        <ProjectCard
        img="itemExpiry.jpg"
        url="https://local-food-expiry-reminder-frontend.onrender.com"
        title="Item Expiry Reminder"
        skill1="MERN"
        skill2="Firebase"
        about="The FreshTrack web app helps users efficiently manage item expirations. With secure JWT authentication, users can add items along with their expiry dates, filter items by status (all, fresh, expiring soon, expired), and receive timely notifications to prevent wastage. All notifications are saved in the database and accessible via the app's alert system, ensuring users stay organized and informed."
        repo="https://github.com/NayanCod/Local-Food-Expiry_Reminder"
        />
        {/* CraveEase */}
        <ProjectCard
        img="craveease.jpg"
        url="https://craveease.netlify.app/"
        title="CraveEase"
        skill1="React"
        skill2="Redux-Toolkit"
        about="A React food app seamlessly integrated with Swiggy API for effortless searching. Powered by Redux-toolkit and styled with Tailwind CSS, it offers a smooth user experience. Explore diverse cuisines and place orders hassle-free at CraveEase. Enjoy convenience and variety with just a click."
        repo="https://github.com/NayanCod/Food-App"
        />
        {/* Netlfix GPT*/}
        <ProjectCard
        img="netflixGPT.jpg"
        url="https://moveenest.netlify.app/browse"
        title="NetflixGPT"
        skill1="React"
        skill2="Gemini"
        about="NetflixGPT is an AI-driven movie platform powered by Google Gemini AI. It features secure Firebase authentication, TMDB-powered search and recommendations, a responsive design, and optimized performance with memoization for a seamless viewing experience."
        repo="https://github.com/NayanCod/netflix-gpt"
        />
        {/* weather app*/}
        {/* <ProjectCard
        img="weather.jpg"
        url="https://nayancod.github.io/Weather-App/"
        title="Weather App"
        skill1="JavaScript"
        skill2="CSS"
        about="A weather app using HTML CSS and JS that uses Openweather API to fetch parameters like temperature, minimum and maximum temperature, state name and country name etc.Skills: JavaScript · HTML · Cascading Style Sheets (CSS)"
        repo="https://github.com/NayanCod/Weather-App"
        /> */}
        {/* walkability app*/}
        <ProjectCard
        img="walkability.jpg"
        url="https://ratemystreet.onlydev.in/dashboard"
        title="RateMyStreet"
        skill1="Next.js"
        skill2="TypeScript"
        about="RateMyStreet is a web app tackling walkability issues in Bangalore. It allows users to submit street reviews and view ratings on an interactive map, promoting safer routes. Built with Next.js, Google Auth, Tailwind CSS, and shadcn UI."
        repo="https://github.com/NayanCod/Walkability-App"
        />
        {/* quiz app */}
        {/* <ProjectCard
        img="quizApp.jpg"
        url="https://nayan-quiz-app.netlify.app"
        title="Trivia App"
        skill1="Next.js"
        skill2="Docker"
        about="A Trivia App built with Next.js, featuring dynamic interfaces and efficient data fetching. Dockerized for seamless deployment, it highlights key skills in Next.js and containerization."
        repo="https://github.com/NayanCod/Quiz-App"
        /> */}
        {/* coming soon card */}
        <div className="relative hidden bg-primaryBg border border-dashed border-borderColor  md:flex flex-col justify-center items-center gap-y-4">
          <img className="invert h-16 " src="./coming_soon.png" alt="" />
          <p className="text-hoverBg">More coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
