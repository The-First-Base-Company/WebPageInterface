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
    "Filding",
    "76",
    "0.22341",
    "89",
    "32",
    "58",
    "13",
    "61",
    "39",
    "29",
    "54",
    "27",
    "3",
    "0.1947"
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
