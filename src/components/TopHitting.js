import React, { useState, useEffect } from 'react';
import { Table, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

function TopHitting() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost/php/top5H.php`
        );

        const items = await data.json();

        setItems(items);
    };

    return (

        <div>
            <Table responsive size="md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th></th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr>
                            <td class='align-middle'><h5>{index + 1}.</h5></td>
                            <td class='align-middle'>
                                <Image
                                    src={item.Foto}
                                    height='80'
                                    className="d-inline-block align-left"
                                    rounded
                                />
                            </td>
                            <td class='align-middle'><Link to={`/player/${item.Clave}`}>{item.Nombre}</Link></td>
                            <td class='align-middle'>{item.Equipo}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TopHitting;
