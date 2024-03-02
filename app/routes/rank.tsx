import { Scripts } from "@remix-run/react";

export default function Sort() {
    return (
        <body>
            <Scripts />
            <button id="testBtn">Reload Table</button>
            <table id="rankingTable">
                <thead id="">
                <tr>
                    <th>Ranking</th>
                    <th>Team Number</th>
                    <th>Team Name</th>
                    <th id="autonBtn">Average Auton Score</th>
                    <th id="ampBtn">Average AMP Points</th>
                    <th id="speakerBtn">Average Speaker Points</th>
                    <th id="endgameBtn">Average Endgame Points</th>
                    <th id="harmony">Average Harmony Points</th>
                    <th id="pointBtn">Average Total Points</th>
                </tr>

                </thead>
                <tbody id="tableBody"></tbody>
            </table>  
            <script
                async
                src={`https://unpainful-programme.000webhostapp.com/sort.js`}
            />
        </body>
    )
}