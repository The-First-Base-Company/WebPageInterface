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
  { id: "team", label: <h6>Team</h6>, minWidth: 30, align: "center" },
  { id: "abbrev", label: "", minWidth: 15, align: "center" },
  { id: "league", label: <h6>League</h6>, minWidth: 10, align: "center" },
  { id: "rankh", label: <h6>Rank Hitting</h6>, minWidth: 15, align: "center" },
  { id: "rankp", label: <h6>Rank Pitching</h6>, minWidth: 15, align: "center" },
  { id: "rankf", label: <h6>Rank Filding</h6>, minWidth: 15, align: "center" },
  { id: "numGames", label: <h6># of Games</h6>, minWidth: 15, align: "center" },
  { id: "avgHits", label: <h6>Avg Hits</h6>, minWidth: 15, align: "center" },
  { id: "atBat", label: <h6># At Bat</h6>, minWidth: 15, align: "center" },
  { id: "runs", label: <h6>Runs</h6>, minWidth: 15, align: "center" },
  { id: "hits", label: <h6>Hits</h6>, minWidth: 15, align: "center" },
  { id: "hr", label: <h6>Home Runs</h6>, minWidth: 15, align: "center" },
  { id: "runsal", label: <h6>Runs Allowed</h6>, minWidth: 15, align: "center" },
  { id: "hitsal", label: <h6>Hits Allowed</h6>, minWidth: 15, align: "center" },
  {
    id: "hral",
    label: <h6>Home Runs Allowed</h6>,
    minWidth: 18,
    align: "center"
  },
  {
    id: "avghitsal",
    label: <h6>Average Hits Allowed</h6>,
    minWidth: 18,
    align: "center"
  },
  { id: "wins", label: <h6>Wins</h6>, minWidth: 18, align: "center" },
  { id: "losses", label: <h6>Losses</h6>, minWidth: 18, align: "center" },
  { id: "opt", label: <h6>Opportunities</h6>, minWidth: 18, align: "center" },
  { id: "putOut", label: <h6>Put Outs</h6>, minWidth: 18, align: "center" },
  { id: "assist", label: <h6>Assistances</h6>, minWidth: 18, align: "center" },
  { id: "errors", label: <h6>Errores</h6>, minWidth: 18, align: "center" },
  { id: "avgErrors", label: <h6>Avg Errors</h6>, minWidth: 18, align: "center" }
];

function insertData(
  team,
  abbrev,
  league,
  numGames,
  rankh,
  rankp,
  rankf,
  avgHits,
  atBat,
  runs,
  hits,
  hr,
  runsal,
  hitsal,
  hral,
  avghitsal,
  wins,
  losses,
  opt,
  putOut,
  assist,
  errors,
  avgErrors
) {
  return {
    team,
    abbrev,
    league,
    numGames,
    rankh,
    rankp,
    rankf,
    avgHits,
    atBat,
    runs,
    hits,
    hr,
    runsal,
    hitsal,
    hral,
    avghitsal,
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
    "Arizona Diamondbacks",
    "ARI",
    "National League",
    "4",
    "9",
    "3",
    "162",
    "0.235",
    "5460",
    "693",
    "1283",
    "176",
    "644",
    "1313",
    "174",
    "0.239",
    "82",
    "80",
    "6150",
    "4389",
    "1686",
    "75",
    "0.988"
  ),
  insertData(
    "Atlanta Braves",
    "ATL",
    "National League",
    "26",
    "2",
    "8",
    "162",
    "0.257",
    "5582",
    "759",
    "1433",
    "175",
    "657",
    "1236",
    "153",
    "0.229",
    "90",
    "72",
    "5889",
    "4370",
    "1439",
    "80",
    "0.986"
  ),
  insertData(
    "Baltimore Orioles",
    "BAL",
    "American League",
    "7",
    "30",
    "24",
    "162",
    "0.239",
    "5507",
    "622",
    "1317",
    "188",
    "892",
    "1552",
    "234",
    "0.276",
    "47",
    "115",
    "5934",
    "4293",
    "1537",
    "104",
    "0.982"
  ),
  insertData(
    "Boston Red Sox",
    "BOS",
    "American League",
    "30",
    "8",
    "7",
    "162",
    "0.268",
    "5623",
    "876",
    "1509",
    "208",
    "647",
    "1305",
    "176",
    "0.237",
    "108",
    "54",
    "5819",
    "4376",
    "1366",
    "77",
    "0.987"
  ),
  insertData(
    "Chicago Cubs",
    "CHC",
    "National League",
    "27",
    "10",
    "21",
    "163",
    "0.258",
    "5624",
    "761",
    "1453",
    "167",
    "645",
    "1319",
    "157",
    "0.24",
    "95",
    "68",
    "6208",
    "4429",
    "1675",
    "104",
    "0.983"
  ),
  insertData(
    "Chicago White Sox",
    "CWS",
    "American League",
    "9",
    "22",
    "27",
    "162",
    "0.241",
    "5523",
    "656",
    "1332",
    "182",
    "848",
    "1404",
    "196",
    "0.254",
    "62",
    "100",
    "5856",
    "4311",
    "1431",
    "114",
    "0.981"
  ),
  insertData(
    "Cincinatti Red",
    "CIN",
    "National League",
    "21",
    "27",
    "15",
    "162",
    "0.254",
    "5532",
    "696",
    "1404",
    "172",
    "819",
    "1491",
    "228",
    "0.266",
    "67",
    "95",
    "6026",
    "4323",
    "1608",
    "95",
    "0.984"
  ),
  insertData(
    "Cleveland Indians",
    "CLE",
    "American League",
    "29",
    "12",
    "10",
    "162",
    "0.259",
    "5595",
    "818",
    "1447",
    "216",
    "648",
    "1349",
    "200",
    "0.242",
    "91",
    "71",
    "5808",
    "44372",
    "1353",
    "83",
    "0.986"
  ),
  insertData(
    "Colorado Rockies",
    "COL",
    "National League",
    "25",
    "17",
    "4",
    "163",
    "0.256",
    "5541",
    "780",
    "1418",
    "210",
    "745",
    "1377",
    "184",
    "0.25",
    "91",
    "72",
    "6055",
    "4357",
    "1621",
    "74",
    "0.988"
  ),
  insertData(
    "Houston Astros",
    "HOU",
    "American League",
    "24",
    "1",
    "1",
    "162",
    "0.255",
    "5453",
    "797",
    "1390",
    "205",
    "534",
    "1164",
    "152",
    "0.217",
    "103",
    "59",
    "5797",
    "4365",
    "1369",
    "63",
    "0.989"
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
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
        rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
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
