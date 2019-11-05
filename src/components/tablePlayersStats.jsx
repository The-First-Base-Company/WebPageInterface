import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "name", label: <h6>Name</h6>, minWidth: 30, align: "center" },
  { id: "team", label: <h6>Team</h6>, minWidth: 18, align: "center" },
  { id: "pos", label: <h6>Position</h6>, minWidth: 15, align: "center" },
  { id: "type", label: <h6>Type</h6>, minWidth: 18, align: "center" },
  { id: "numGames", label: <h6># of Games</h6>, minWidth: 18, align: "center" },
  { id: "avgHits", label: <h6>Avg Hits</h6>, minWidth: 18, align: "center" },
  { id: "atBat", label: <h6># At Bat</h6>, minWidth: 18, align: "center" },
  { id: "runs", label: <h6>Runs</h6>, minWidth: 18, align: "center" },
  { id: "hits", label: <h6>Hits</h6>, minWidth: 18, align: "center" },
  { id: "hr", label: <h6>Home Runs</h6>, minWidth: 18, align: "center" },
  { id: "wins", label: <h6>Wins</h6>, minWidth: 18, align: "center" },
  { id: "losses", label: <h6>Losses</h6>, minWidth: 18, align: "center" },
  { id: "opt", label: <h6>Opportunities</h6>, minWidth: 18, align: "center" },
  { id: "putOut", label: <h6>Put Out</h6>, minWidth: 18, align: "center" },
  { id: "assist", label: <h6>Assistances</h6>, minWidth: 18, align: "center" },
  { id: "errors", label: <h6>Errores</h6>, minWidth: 18, align: "center" },
  { id: "avgErrors", label: <h6>Avg Errors</h6>, minWidth: 18, align: "center" }
];

function insertData(
  name,
  team,
  pos,
  type,
  numGames,
  avgHits,
  atBat,
  runs,
  hits,
  hr,
  wins,
  losses,
  opt,
  putOut,
  assist,
  errors,
  avgErrors
) {
  return {
    name,
    team,
    pos,
    type,
    numGames,
    avgHits,
    atBat,
    runs,
    hits,
    hr,
    wins,
    losses,
    opt,
    putOut,
    assist,
    errors,
    avgErrors
  };
}

const rows = [
  insertData(
    "Benintendi, A",
    "BOS",
    "LF",
    "Filding, Hitting",
    "148",
    "0.29",
    "579",
    "103",
    "168",
    "16",
    "NULL",
    "NULL",
    "215",
    "201",
    "11",
    "3",
    "0.986"
  ),
  insertData(
    "Bregman, A",
    "HOU",
    "3B",
    "Filding, Hitting",
    "157",
    "0.286",
    "594",
    "105",
    "170",
    "31",
    "NULL",
    "NULL",
    "342",
    "84",
    "245",
    "13",
    "0.962"
  ),
  insertData(
    "Cabrera, A",
    "PHI",
    "2B",
    "Hitting",
    "147",
    "0.262",
    "546",
    "68",
    "143",
    "23",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL"
  ),
  insertData(
    "Escobar, A",
    "KC",
    "SS",
    "Hitting",
    "140",
    "0.231",
    "485",
    "54",
    "112",
    "4",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL"
  ),
  insertData(
    "Gordon, A",
    "KC",
    "LF",
    "Filding, Hitting",
    "141",
    "0.245",
    "506",
    "56",
    "124",
    "13",
    "NULL",
    "NULL",
    "260",
    "249",
    "9",
    "2",
    "0.992"
  ),
  insertData(
    "Heaney, A",
    "LAA",
    "P",
    "Pitching",
    "30",
    "0.248",
    "NULL",
    "91",
    "171",
    "27",
    "9",
    "10",
    "31",
    "8",
    "22",
    "1",
    "0.968"
  ),
  insertData(
    "Hicks, A",
    "NYY",
    "CF",
    "Filding, Hitting",
    "137",
    "0.248",
    "480",
    "90",
    "119",
    "27",
    "NULL",
    "NULL",
    "272",
    "268",
    "2",
    "2",
    "0.993"
  ),
  insertData(
    "Jones, A",
    "BAL",
    "CF",
    "Hitting",
    "145",
    "0.281",
    "580",
    "54",
    "163",
    "15",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL",
    "NULL"
  ),
  insertData(
    "McCutchen, A",
    "NYY",
    "RF",
    "Filding, Hitting",
    "155",
    "0.255",
    "569",
    "83",
    "145",
    "20",
    "NULL",
    "NULL",
    "272",
    "262",
    "8",
    "2",
    "0.993"
  ),
  insertData(
    "Nola, A",
    "PHI",
    "P",
    "Pitching",
    "33",
    "0.197",
    "NULL",
    "57",
    "149",
    "17",
    "17",
    "6",
    "36",
    "9",
    "26",
    "1",
    "0.972"
  )
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeigth: 500,
    overflow: "auto"
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table tableTopFive responsive>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value == "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100, 150, 200]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
