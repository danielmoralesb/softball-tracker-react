import { useState, useEffect } from "react";

let initialInnings = [
  { id: 1, inning: 1, visitorScore: 0, homeScore: 0 },
  { id: 2, inning: 2, visitorScore: 0, homeScore: 0 },
  { id: 3, inning: 3, visitorScore: 0, homeScore: 0 },
  { id: 4, inning: 4, visitorScore: 0, homeScore: 0 },
  { id: 5, inning: 5, visitorScore: 0, homeScore: 0 },
  { id: 6, inning: 6, visitorScore: 0, homeScore: 0 },
  { id: 7, inning: 7, visitorScore: 0, homeScore: 0 },
];

function Score() {
  let [inningsArray, setInningsArray] = useState(initialInnings);

  function TeamDisplay() {
    return (
      <div className="score__section">
        <div className="score__col">
          <div className="score__row">
            <h2 className="score__heading">Teams</h2>
          </div>
          <div className="score__row">
            <h3 className="score__team">Yankees</h3>
          </div>
          <div className="score__row">
            <h3 className="score__team">Marlins</h3>
          </div>
        </div>
      </div>
    );
  }

  const [scoreVisitor, setScoreVisitor] = useState(0);
  const [scoreVisitor2, setScoreVisitor2] = useState(0);
  const [scoreVisitor3, setScoreVisitor3] = useState(0);
  const [scoreVisitor4, setScoreVisitor4] = useState(0);
  const [scoreVisitor5, setScoreVisitor5] = useState(0);
  const [scoreVisitor6, setScoreVisitor6] = useState(0);
  const [scoreVisitor7, setScoreVisitor7] = useState(0);
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreHome2, setScoreHome2] = useState(0);
  const [scoreHome3, setScoreHome3] = useState(0);
  const [scoreHome4, setScoreHome4] = useState(0);
  const [scoreHome5, setScoreHome5] = useState(0);
  const [scoreHome6, setScoreHome6] = useState(0);
  const [scoreHome7, setScoreHome7] = useState(0);
  const [newRunVisitor, setNewRunVisitor] = useState(0);
  const [newRunHome, setNewRunHome] = useState(0);

  useEffect(() => {
    setNewRunVisitor(
      () =>
        scoreVisitor +
        scoreVisitor2 +
        scoreVisitor3 +
        scoreVisitor4 +
        scoreVisitor5 +
        scoreVisitor6 +
        scoreVisitor7
    );
  }, [
    scoreVisitor,
    scoreVisitor2,
    scoreVisitor3,
    scoreVisitor4,
    scoreVisitor5,
    scoreVisitor6,
    scoreVisitor7,
  ]);

  useEffect(() => {
    setNewRunHome(
      () =>
        scoreHome +
        scoreHome2 +
        scoreHome3 +
        scoreHome4 +
        scoreHome5 +
        scoreHome6 +
        scoreHome7
    );
  }, [
    scoreHome,
    scoreHome2,
    scoreHome3,
    scoreHome4,
    scoreHome5,
    scoreHome6,
    scoreHome7,
  ]);

  const [hitsVisitor, setHitsVisitor] = useState(0);
  const [hitsHome, setHitsHome] = useState(0);
  const [errorsVisitor, setErrorsVisitor] = useState(0);
  const [errorsHome, setErrorsHome] = useState(0);

  function InningScoreVisitor({ data }) {
    return (
      <div className="score__row">
        {data === 1 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor((c) => c + 1)}
          >
            {scoreVisitor}
          </span>
        ) : data === 2 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor2((c) => c + 1)}
          >
            {scoreVisitor2}
          </span>
        ) : data === 3 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor3((c) => c + 1)}
          >
            {scoreVisitor3}
          </span>
        ) : data === 4 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor4((c) => c + 1)}
          >
            {scoreVisitor4}
          </span>
        ) : data === 5 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor5((c) => c + 1)}
          >
            {scoreVisitor5}
          </span>
        ) : data === 6 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor6((c) => c + 1)}
          >
            {scoreVisitor6}
          </span>
        ) : data === 7 ? (
          <span
            className="score__num"
            onClick={() => setScoreVisitor7((c) => c + 1)}
          >
            {scoreVisitor7}
          </span>
        ) : (
          <span className="score__num">0</span>
        )}
      </div>
    );
  }

  function InningScoreHome({ data }) {
    return (
      <div className="score__row">
        {data === 1 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome((c) => c + 1)}
          >
            {scoreHome}
          </span>
        ) : data === 2 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome2((c) => c + 1)}
          >
            {scoreHome2}
          </span>
        ) : data === 3 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome3((c) => c + 1)}
          >
            {scoreHome3}
          </span>
        ) : data === 4 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome4((c) => c + 1)}
          >
            {scoreHome4}
          </span>
        ) : data === 5 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome5((c) => c + 1)}
          >
            {scoreHome5}
          </span>
        ) : data === 6 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome6((c) => c + 1)}
          >
            {scoreHome6}
          </span>
        ) : data === 7 ? (
          <span
            className="score__num"
            onClick={() => setScoreHome7((c) => c + 1)}
          >
            {scoreHome7}
          </span>
        ) : (
          <span className="score__num">0</span>
        )}
      </div>
    );
  }

  function InningDisplay(score) {
    const [newRun, setNewRun] = useState(0);
    return (
      <div className="score__wrapper">
        <div className="score__mask">
          <div className="score__section score__section--innings">
            {inningsArray.map((item) => {
              return (
                <div className="score__col" key={item.id}>
                  <div className="score__row">
                    <h2 className="score__heading">{item.inning}</h2>
                  </div>
                  <InningScoreVisitor data={item.inning} />
                  <InningScoreHome data={item.inning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  function RunsHistsErrorsDisplay({ newRunVisitor, newRunHome }) {
    return (
      <div className="score__section">
        <div className="score__col">
          <div className="score__row">
            <h2 className="score__heading">R</h2>
          </div>
          <div className="score__row no-clickable">
            <span className="score__num">
              <span className="score__num">{newRunVisitor}</span>
            </span>
          </div>
          <div className="score__row no-clickable">
            <span className="score__num">{newRunHome}</span>
          </div>
        </div>
        <div className="score__col">
          <div className="score__row">
            <h2 className="score__heading">H</h2>
          </div>
          <div className="score__row">
            <span
              className="score__num"
              onClick={() => setHitsVisitor((h) => h + 1)}
            >
              {hitsVisitor}
            </span>
          </div>
          <div className="score__row">
            <span
              className="score__num"
              onClick={() => setHitsHome((h) => h + 1)}
            >
              {hitsHome}
            </span>
          </div>
        </div>
        <div className="score__col">
          <div className="score__row">
            <h2 className="score__heading">E</h2>
          </div>
          <div className="score__row">
            <span
              className="score__num"
              onClick={() => setErrorsVisitor((e) => e + 1)}
            >
              {errorsVisitor}
            </span>
          </div>
          <div className="score__row">
            <span
              className="score__num"
              onClick={() => setErrorsHome((e) => e + 1)}
            >
              {errorsHome}
            </span>
          </div>
        </div>
      </div>
    );
  }

  function clearScore() {
    setScoreVisitor(0);
    setScoreVisitor2(0);
    setScoreVisitor3(0);
    setScoreVisitor4(0);
    setScoreVisitor5(0);
    setScoreVisitor6(0);
    setScoreVisitor7(0);
    setScoreHome(0);
    setScoreHome2(0);
    setScoreHome3(0);
    setScoreHome4(0);
    setScoreHome5(0);
    setScoreHome6(0);
    setScoreHome7(0);
    setNewRunVisitor(0);
    setNewRunHome(0);
    setHitsVisitor(0);
    setHitsHome(0);
    setErrorsVisitor(0);
    setErrorsHome(0);
    setIsSaved(false);
  }

  const [isSaved, setIsSaved] = useState(false);

  function saveScore() {
    let newUpdatedArray = [
      {
        id: 1,
        visitorTeam: "",
        visitorScore: 0,
        visitorHits: hitsVisitor,
        visitorErrors: errorsVisitor,
        homeTeam: "",
        homeScore: 0,
        homeHits: hitsHome,
        homeErrors: errorsHome,
      },
    ];
    setUpdatedArray(newUpdatedArray);
    setIsSaved(true);
    console.log(updatedArray);
  }

  function Actions() {
    return (
      <div className="actions">
        <button className="btn btn_warning" onClick={() => clearScore()}>
          Clear Score Board
        </button>
        <button className="btn btn_success" onClick={() => saveScore()}>
          Show Results
        </button>
      </div>
    );
  }

  let gameStats = [
    {
      id: 1,
      visitorTeam: "",
      visitorScore: 0,
      visitorHits: 0,
      visitorErrors: 0,
      homeTeam: "",
      homeScore: 0,
      homeHits: 0,
      homeErrors: 0,
    },
  ];

  let [updatedArray, setUpdatedArray] = useState(gameStats);

  function closeResultsDisplay() {
    setIsSaved(false);
    clearScore();
  }

  function ResultsDisplay() {
    return (
      <div
        className="results modal"
        style={{ display: isSaved ? "block" : "none" }}
      >
        <div className="modal-content">
          <span className="close" onClick={() => closeResultsDisplay()}>
            &times;
          </span>
          <h1 className="results__title">Game Results</h1>
          <h2>Yankees</h2>
          <p>
            <strong>RUNS:</strong> {newRunVisitor}
          </p>
          <p>
            <strong>HITS:</strong> {hitsVisitor}
          </p>
          <p>
            <strong>ERRORS:</strong> {errorsVisitor}
          </p>
          <h2>Marlins</h2>
          <p>
            <strong>RUNS:</strong> {newRunHome}
          </p>
          <p>
            <strong>HITS:</strong> {hitsHome}
          </p>
          <p>
            <strong>ERRORS:</strong> {errorsHome}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="score">
        <TeamDisplay />
        <InningDisplay />
        <RunsHistsErrorsDisplay
          newRunVisitor={newRunVisitor}
          newRunHome={newRunHome}
        />
      </div>
      <Actions />
      <ResultsDisplay />
    </>
  );
}

export default Score;
