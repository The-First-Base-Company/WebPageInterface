import React, { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Top5Teams() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `http://localhost/php/top5teams.php`
    );

    const items = await data.json();

    setItems(items);
  };

  return (

    <div>
      <Table responsive size="md">
        <tbody>
          {items.map((item, index) => (
            <tr>
              <td class='align-middle'><h5>{index + 1}.</h5></td>
              <td class='align-middle'><img src={item.Logo} height='40' alt='team logo' /></td>
              <td class='align-middle'><Link to={`/team/${item.Team}`}>{item.Team}</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Top5Teams;
