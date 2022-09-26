import * as React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import * as Styles from "../components/styles.module.css";

const none = "none";
var selectedMood = none;
var selectedSetting = none;
var selectedHype = none;
const mood = "moodButtons";
const setting = "settingButtons";
const hype = "hypeButtons";
const bookData = require("/json/books.json");
var recommendation;

const IndexPage = () => {
  return (
    <Layout>
      <div id="welcome">
        <h1 className={Styles.heading}>Welcome!</h1>
        <div className={Styles.description}>
          Share some preferences with me, and I'll recommend a book I loved. 🖤
        </div>
        <br /> <br />
      </div>
      <div id="quiz">
        <div className={Styles.quizQuestion}>Pick your mood: </div>
        <br />
        <div>
          <Button
            name="moodButtons"
            value="funny 😂"
            id="mood.funny"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <Button
            name="moodButtons"
            value="reflective 🪞"
            id="mood.reflective"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <Button
            name="moodButtons"
            value="tearjerker 😢"
            id="mood.tearjerker"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <Button
            name="moodButtons"
            value="heavy 🪨"
            id="mood.heavy"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <Button
            name="moodButtons"
            value="slow burn 🔥"
            id="mood.slowburn"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <Button
            name="moodButtons"
            value="action-packed 💥"
            id="mood.actionpacked"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="moodButtons"
            value="spooky 👻"
            id="mood.spooky"
            onClick={buttonPressed}
            className={Styles.button}
          />
        </div>
        <br />
        <div className={Styles.quizQuestion}>
          {" "}
          <br /> Pick your setting:{" "}
        </div>
        <br />
        <div>
          <Button
            name="settingButtons"
            value="contemporary 📱"
            id="setting.contemporary"
            onClick={buttonPressed}
            className={Styles.button}
          />
          <span> </span>
          <Button
            name="settingButtons"
            value="historical 📜"
            id="setting.historical"
            onClick={buttonPressed}
            className={Styles.button}
          />
        </div>
        <br />
        <div className={Styles.quizQuestion}>
          <br /> Bestseller or hidden gem?{" "}
        </div>
        <br />
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
      <div className={Styles.recommendationHeader} id="recommendationHeader">
        <br />
        You should check out...
        <br />
      </div>
      <div className={Styles.recommendationBody} id="recommendationBody">
        <br />
        <div id="bookTitle" className={Styles.bookTitle}></div>
        <br />
        <div id="bookDescription" className={Styles.bookDescription}></div>
        <div id="contentWarnings" className={Styles.contentWarnings}>
          <br />{" "}
          <i>
            Literature often touches on very heavy topics. Use the button below
            to view a summary of the content warnings, sourced from{" "}
            <a href="https://app.thestorygraph.com/" id="storyGraphLink">
              The Storygraph
            </a>
            , associated with this title.{" "}
          </i>
          <br />
          <button onClick={toggleCWs} className={Styles.cwButton} id="cwButton">
            view
          </button>
          <div id="cwBody"></div>
        </div>
        <div id="instructions" className={Styles.instructions}>
          <br />
          <br />
          Want another recommendation? Update your selections to generate a new
          book!
        </div>
      </div>
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

function toggleSettings(e) {
  if (selectedSetting === e.target.id) {
    e.target.className = Styles.button;
    selectedSetting = none;
  } else {
    if (selectedSetting !== none) {
      document.getElementById(selectedSetting).className = Styles.button;
    }
    e.target.className = Styles.buttonSelected;
    selectedSetting = e.target.id;
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
  } else if (e.target.name === setting) {
    toggleSettings(e);
  } else if (e.target.name === hype) {
    toggleHype(e);
  }

  if (selectionsComplete()) {
    hideCWs();
    generateRecommendation();
  }
}

function selectionsComplete() {
  if (
    selectedMood !== none &&
    selectedSetting !== none &&
    selectedHype !== none
  ) {
    return true;
  }
  return false;
}

function generateRecommendation() {
  var selectedTags = [selectedSetting, selectedMood, selectedHype];

  var filteredBooks = bookData.filter((book) =>
    selectedTags.every((t) => book.tags.includes(t))
  );

  if (filteredBooks.length === 0) {
    return;
  }

  recommendation =
    filteredBooks[Math.floor(Math.random() * filteredBooks.length)];

  var titleDiv = document.getElementById("bookTitle");
  var descriptionDiv = document.getElementById("bookDescription");
  var recHeaderDiv = document.getElementById("recommendationHeader");
  var recBodyDiv = document.getElementById("recommendationBody");
  var instructionsDiv = document.getElementById("instructions");
  var linkDiv = document.getElementById("storyGraphLink");

  linkDiv.href = recommendation.link;
  titleDiv.innerHTML =
    "<b><i>" +
    recommendation.title +
    "</i> by " +
    recommendation.author +
    "</b>";
  descriptionDiv.innerHTML = recommendation.description;
  recHeaderDiv.style.display = "block";
  recBodyDiv.style.display = "block";
  titleDiv.style.display = "block";
  descriptionDiv.style.display = "block";
  instructionsDiv.style.display = "block";
  recBodyDiv.scrollIntoView();
}

function toggleCWs() {
  var body = document.getElementById("cwBody");
  var button = document.getElementById("cwButton");
  if (body.style.display === "block") {
    body.style.display = "none";
    button.innerHTML = "view";
  } else {
    body.innerHTML = recommendation.content_warnings;
    body.style.display = "block";
    button.innerHTML = "hide";
  }
}

function hideCWs() {
  document.getElementById("cwBody").style.display = "none";
  document.getElementById("cwButton").innerHTML = "view";
}
