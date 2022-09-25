import * as React from "react";
import Layout from "/components/layout";
import * as Styles from "/components/styles.module.css";

const none = "none";
var selectedMood = none;
var selectedGenre = none;
var selectedHype = none;
const mood = "moodButtons";
const genre = "genreButtons";
const hype = "hypeButtons";

const IndexPage = () => {
  return (
    <Layout>
      <div id="welcome">
        <h1 className={Styles.heading}>Welcome!</h1>
        <div className={Styles.description}>
          Share some preferences with me, and I'll recommend a book I loved. 🤍
        </div>
        <br /> <br />
      </div>
      <div id="quiz">
        <p className={Styles.quizQuestion}>Pick your mood: </p>
        <div>
          <input
            type="button"
            name="moodButtons"
            value="wholesome 🥰"
            id="mood.wholesome"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="moodButtons"
            value="funny 😂"
            id="mood.funny"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="moodButtons"
            value="reflective 🪞"
            id="mood.reflective"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="moodButtons"
            value="tearjerker 😢"
            id="mood.tearjerker"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
        <p className={Styles.quizQuestion}> Pick your genre: </p>
        <div>
          <input
            type="button"
            name="genreButtons"
            value="contemporary 📱"
            id="genre.contemporary"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="genreButtons"
            value="historical 📜"
            id="genre.historical"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="genreButtons"
            value="romance 🌹"
            id="genre.romance"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="genreButtons"
            value="mystery 🔍"
            id="genre.mystery"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="genreButtons"
            value="nonfiction 📝"
            id="genre.nonfiction"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
        <p className={Styles.quizQuestion}> Bestseller or hidden gem? </p>
        <div>
          <input
            type="button"
            name="hypeButtons"
            value="bestseller 🏆"
            id="hype.bestseller"
            className={Styles.button}
            onClick={buttonPressed}
          />
          <span> </span>
          <input
            type="button"
            name="hypeButtons"
            value="hidden gem 💎"
            id="hype.hiddengem"
            className={Styles.button}
            onClick={buttonPressed}
          />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Book Buddy</title>;

function buttonPressed(e) {
  if (e.target.name === mood) {
    toggleMoods(e);
  } else if (e.target.name === genre) {
    toggleGenres(e);
  } else if (e.target.name === hype) {
    toggleHype(e);
  }
}

function toggleMoods(e) {
  // toggle button styling to selected / deselected
  if (selectedMood === e.target.id) {
    e.target.className = Styles.button;
    selectedMood = none;
  } else {
    if (selectedMood !== none) {
      document.getElementById(selectedMood).className = Styles.button;
    }
    e.target.className = Styles.buttonSelected;
    selectedMood = e.target.id;
  }
}

function toggleGenres(e) {
  // toggle button styling to selected / deselected
  if (selectedGenre === e.target.id) {
    e.target.className = Styles.button;
    selectedGenre = none;
  } else {
    if (selectedGenre !== none) {
      document.getElementById(selectedGenre).className = Styles.button;
    }
    e.target.className = Styles.buttonSelected;
    selectedGenre = e.target.id;
  }
}

function toggleHype(e) {
  // toggle button styling to selected / deselected
  if (selectedHype === e.target.id) {
    e.target.className = Styles.button;
    selectedHype = none;
  } else {
    if (selectedHype !== none) {
      document.getElementById(selectedHype).className = Styles.button;
    }
    e.target.className = Styles.buttonSelected;
    selectedHype = e.target.id;
  }
}
