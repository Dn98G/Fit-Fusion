# Fit Fusion

**Fit Fusion** is a responsive React fitness web app that lets users calculate their BMI, get personalized workout recommendations, and save favorite workouts for later empowering users to make healther lifestyle choices.

## Assignment
 **Eugene K** -
 **Rahma M** -
 **Cheruiyot K** -
 **James K** -

---

## Features in our App

- **BMI Calculator**: Enter height and weight to compute BMI and see your health category.
- **Workout Recommendations**: Filter workouts by intensity (mild, medium, intense) based on your BMI.
- **Saved Workouts**: Select and save workout plans for easy access on a dedicated page.
- **Routing**: Smooth client‑side navigation between Home, Workouts, and Saved pages using React Router.
- **Images**: Each workout includes a matching image pulled from Pinterest or direct URLs.

---

##  Tech Stack Used

- **React** (Hooks: `useState`, `useEffect`)
- **React Router** for navigation
- **Vite** for fast development
- **JSON Server** (`db.json`) to simulate a backend API
- **Plain CSS** for styling (purple theme)

---

## Our Project Structure

```
fit-fusion/
├── public/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx
│   │   ├── WorkoutSelector.jsx
│   │   ├── SavedWorkouts.jsx
│   │   └── NavBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── db.json        # Workout data
└── README.md
```

---

## Getting Started

1. **Clone the repo**
   ```bash
   git clone git@github.com:kapombe-k/Fit-Fusion.git
   cd Fit-Fusion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run JSON Server**
   ```bash
   npx json-server --watch db.json --port 3001
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3001`

---

## 🎨 Styling & Theme

All styling is done with plain CSS in `src/index.css` and component-specific CSS files.

- **Primary color**: Purple (`#6B21A8`)
- **Accent color**: Lighter purple (`#A78BFA`) and white text
- **Layout**: Responsive flexbox and grid, simple class-based CSS

---

## 📦 Deployment

- Build the app:
  ```bash
  npm run build
  ```
- Deploy to Vercel.

---

## 🤝 Contributing

Feel free to open issues or submit pull requests for bug fixes or enhancements.

---

Credits @ Eugene k, Cheruiyot K, Rahma .M, James K 2025

