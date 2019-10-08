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
  { id: "rank", label: "Rank", minWidth: 20, align: "center" },
  { id: "name", label: "Name", minWidth: 150, align: "center" }
];

function insertData(rank, name) {
  return { rank, name };
}

const rows = [
  insertData("1", "New York Yankies"),
  insertData("2", "Boston Red Sox"),
  insertData("3", "LA Dodgers"),
  insertData("4", "Houston Astros"),
  insertData("5", "Toronto Blue Jays"),
  insertData("6", "New York Yankies"),
  insertData("7", "Boston Red Sox"),
  insertData("8", "LA Dodgers"),
  insertData("9", "Houston Astros"),
  insertData("10", "Toronto Blue Jays"),
  insertData("11", "New York Yankies"),
  insertData("12", "Boston Red Sox"),
  insertData("13", "LA Dodgers"),
  insertData("14", "Houston Astros"),
  insertData("15", "Toronto Blue Jays"),
  insertData("16", "New York Yankies"),
  insertData("17", "Boston Red Sox"),
  insertData("18", "LA Dodgers"),
  insertData("19", "Houston Astros"),
  insertData("20", "Toronto Blue Jays"),
  insertData("21", "New York Yankies"),
  insertData("22", "Boston Red Sox"),
  insertData("23", "LA Dodgers"),
  insertData("24", "Houston Astros"),
  insertData("25", "Toronto Blue Jays"),
  insertData("26", "New York Yankies"),
  insertData("27", "Boston Red Sox"),
  insertData("28", "LA Dodgers"),
  insertData("29", "Houston Astros"),
  insertData("30", "Toronto Blue Jays"),
  insertData("31", "New York Yankies"),
  insertData("32", "Boston Red Sox"),
  insertData("33", "LA Dodgers"),
  insertData("34", "Houston Astros"),
  insertData("35", "Toronto Blue Jays")
];

const useStyles = makeStyles({
  root: {
    width: "30%"
  },
  tableWrapper: {
    maxHeigth: 300,
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
        rowsPerPageOptions={[10, 25, 50]}
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
