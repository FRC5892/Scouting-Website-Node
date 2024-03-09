import { Scripts } from "@remix-run/react";
import { searchFunction } from "app/search"

export default function Robot() {

    return (
        <body>
            <header>
                <div>
                    <h3>5892 Scouting Data</h3>
                    <div className="headerPush">
                        <input id="searchBox">
                        <div className="search">
                            <h4>Search</h4>
                            <button
                                id="searchButton"
                                onClick={searchFunction}
                            >
                                Got
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <h3 id="teamName" className="pageTitle">9999 - Team Name</h3>
                <section>
                    <h5>Team Summary</h5>
                    <div className="teamSummaryContainer roundedBox">
                        <div>
                            <h4 id="epa">EPA: unknown</h4>
                            <div className="smallEPASummaryContainer">
                                <h6 id="autonEpa">Auton EPA: unknown</h6>
                                <h6 id="teleopEpa">Teleop EPA: unknown</h6>
                                <h6 id="endgameEpa">Endgame EPA: unknown</h6>
                            </div>
                        </div>
                        <div>
                            <canvas id="myChart"></canvas>
                        </div>
                        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                        <script src="https://unpainful-programme.000webhostapp.com/chart1.js"></script>
                    </div>
                </section>
                <section className="matchList">
                    <div>
                        <h5>Qualifying Matches</h5>
                        <div id="qualifyingMatchesSection" className="matchSection">
                            
                        </div>
                    </div>
                </section>
            </main>
            <script src="https://unpainful-programme.000webhostapp.com/robot.js"></script>
        </body>
    );
}
