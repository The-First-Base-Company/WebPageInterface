import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import { Image } from "react-bootstrap";

class tableTopFivePlayers extends Component {
  render() {
    return (
      <div>
        <Table responsive size="md">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th> </th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h5>1.</h5>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/mike-trout-545361"
                  target="popup"
                >
                  <Image
                    src="https://securea.mlb.com/mlb/images/players/head_shot/545361.jpg"
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/mike-trout-545361"
                  target="popup"
                >
                  Mike Trout
                </a>
              </td>
              <td>Angels</td>
            </tr>
            <tr>
              <td>
                <h5>2.</h5>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/mookie-betts-605141"
                  target="popup"
                >
                  <Image
                    src="https://securea.mlb.com/mlb/images/players/head_shot/605141.jpg"
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/mookie-betts-605141"
                  target="popup"
                >
                  Mookie Betts
                </a>
              </td>
              <td>Red Sox</td>
            </tr>
            <tr>
              <td>
                <h5>3.</h5>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/jose-ramirez-608070"
                  target="popup"
                >
                  <Image
                    src="https://securea.mlb.com/mlb/images/players/head_shot/608070.jpg"
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/jose-ramirez-608070"
                  target="popup"
                >
                  José Ramírez
                </a>
              </td>
              <td>Indians</td>
            </tr>
            <tr>
              <td>
                <h5>4.</h5>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/francisco-lindor-596019"
                  target="popup"
                >
                  <Image
                    src="https://securea.mlb.com/mlb/images/players/head_shot/596019.jpg"
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/francisco-lindor-596019"
                  target="popup"
                >
                  Francisco Lindor
                </a>
              </td>
              <td>Indians</td>
            </tr>
            <tr>
              <td>
                <h5>5.</h5>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/nolan-arenado-571448"
                  target="popup"
                >
                  <Image
                    src="https://securea.mlb.com/mlb/images/players/head_shot/571448.jpg"
                    alt="logo"
                    height="80"
                    className="d-inline-block align-left"
                    rounded
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.mlb.com/player/nolan-arenado-571448"
                  target="popup"
                >
                  Nolan Arenado
                </a>
              </td>
              <td>Rockies</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default tableTopFivePlayers;
