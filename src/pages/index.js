import * as React from "react";
import Layout from "/components/layout";
import Button from "/components/button";
import * as Styles from "/components/styles.module.css";

const none = "none";
var selectedMood = none;
var selectedGenre = none;
var selectedHype = none;
const mood = "moodButtons";
const genre = "genreButtons";
const hype = "hypeButtons";
const bookData = require("/json/books.json");

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
          <Button
            name="moodButtons"
            value="funny 😂"
            id="mood.funny"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="moodButtons"
            value="reflective 🪞"
            id="mood.reflective"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="moodButtons"
            value="tearjerker 😢"
            id="mood.tearjerker"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="moodButtons"
            value="heavy 🪨"
            id="mood.heavy"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="moodButtons"
            value="slow burn 🔥"
            id="mood.slowburn"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="moodButtons"
            value="action-packed 💥"
            id="mood.actionpacked"
            onClick={buttonPressed}
            className={Styles.button}
          />
        </div>
        <p className={Styles.quizQuestion}> Pick your genre: </p>
        <div>
          <Button
            name="genreButtons"
            value="contemporary 📱"
            id="genre.contemporary"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="genreButtons"
            value="historical 📜"
            id="genre.historical"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="genreButtons"
            value="romance 🌹"
            id="genre.romance"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="genreButtons"
            value="mystery 🔍"
            id="genre.mystery"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="genreButtons"
            value="short stories 📝"
            id="genre.shortstories"
            onClick={buttonPressed}
            className={Styles.button}
          />
        </div>
        <p className={Styles.quizQuestion}> Bestseller or hidden gem? </p>
        <div>
          <Button
            name="hypeButtons"
            value="bestseller 🏆"
            id="hype.bestseller"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="hypeButtons"
            value="hidden gem 💎"
            id="hype.hiddengem"
            onClick={buttonPressed}
            className={Styles.button}
          />
        </div>
      </div>
      <br />
      <br />
      <div className={Styles.recommendation} id="recommendation"></div>
      <br />
      <br />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Book Buddy</title>;

/*
  The toggle functions: 
    1) apply the appropriate styling to the pressed button (de-selects if it previously selected, otherwise selects it)
    2) deselects the button previously selected in that group, if applicable
 */
function toggleMoods(e) {
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

// when a button is pressed, check if all selections have been made, and if so generate a recommendation
function buttonPressed(e) {
  if (e.target.name === mood) {
    toggleMoods(e);
  } else if (e.target.name === genre) {
    toggleGenres(e);
  } else if (e.target.name === hype) {
    toggleHype(e);
  }

  if (selectionsComplete()) {
    generateRecommendation();
  }
}

function selectionsComplete() {
  if (
    selectedMood !== none &&
    selectedGenre !== none &&
    selectedHype !== none
  ) {
    return true;
  }
  return false;
}

function generateRecommendation() {
  const selectedTags = [selectedGenre, selectedMood, selectedHype];

  const filteredBooks = bookData.filter((book) =>
    selectedTags.every((t) => book.tags.includes(t))
  );

  var recommendation =
    filteredBooks[Math.floor(Math.random() * filteredBooks.length)];

  console.log(filteredBooks);
  console.log(recommendation);

  document.getElementById("recommendation").innerHTML =
    "You should check out... <br/>" +
    recommendation.title +
    " by " +
    recommendation.author;
}
