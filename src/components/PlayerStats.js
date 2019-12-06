import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Players.css';

function PlayerStats() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost/php/player.php`
        );

        const items = await data.json();

        setItems(items);
    };

    return (

        <div>
            <table class="table table-sm table-light">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="align-middle"> </th>
                        <th scope="col" class="align-middle">Player</th>
                        <th scope="col" class="align-middle"> </th>
                        <th scope="col" class="align-middle">Team</th>
                        <th scope="col" class="align-middle">Rank (Hitting)</th>
                        <th scope="col" class="align-middle">Rank (Pitching)</th>
                        <th scope="col" class="align-middle">Rank (Fielding)</th>
                        <th scope="col" class="align-middle">No. of Games</th>
                        <th scope="col" class="align-middle">Runs</th>
                        <th scope="col" class="align-middle">Hits</th>
                        <th scope="col" class="align-middle">Home Runs</th>
                        <th scope="col" class="align-middle">Attributed Wins</th>
                        <th scope="col" class="align-middle">Attributed Losses</th>
                        <th scope="col" class="align-middle">Avg. Hits</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr>
                            <td class='align-middle'><img class='player-stats' src={item.Foto} alt='player' /></td>
                            <td class='align-middle'><Link to={`/player/${item.Clave}`}>{item.Player}</Link></td>
                            <td class='align-middle'><img class='player-stats' src={item.Logo} alt='team logo' /></td>
                            <td class='align-middle'>{item.Team}</td>
                            <td class='align-middle'>{item.RankH}</td>
                            <td class='align-middle'>{item.RankP}</td>
                            <td class='align-middle'>{item.RankF}</td>
                            <td class='align-middle'>{item.Games}</td>
                            <td class='align-middle'>{item.Runs}</td>
                            <td class='align-middle'>{item.Hits}</td>
                            <td class='align-middle'>{item.HomeRuns}</td>
                            <td class='align-middle'>{item.Wins}</td>
                            <td class='align-middle'>{item.Losses}</td>
                            <td class='align-middle'>{item.Avg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerStats;
