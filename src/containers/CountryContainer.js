import Table from "react-bootstrap/Table";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DataContext from "../context/DataContext";
import { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { SearchInput } from "evergreen-ui";

function CountryContainer() {
  const { myData } = useContext(DataContext);

  const [generalSearch, setGeneralSearch] = useState("");
  const [capitalSearch, setCapitalSearch] = useState("");

  console.log(generalSearch);
  console.log(capitalSearch);

  return (
    <>
      <div className="boxbox-1">
        <Box>
          <div
            style={{
              color: "whitesmoke",
              display: "flex",
              flexDirection: "row",
              width: "500px",
            }}
          >
            <span
              style={{
                display: "flex",
                width: "200px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              General Search:
            </span>
            <TextField
              autoCorrect={false}
              style={{ borderRadius: "15px" }}
              id="outlined-basic"
              label="Search"
              variant="filled"
              color="secondary"
              type="search"
              fullWidth
              value={generalSearch}
              onChange={(e) => setGeneralSearch(e.target.value)}
            />
          </div>
        </Box>
      </div>
      <div style={{ margin: "100px 5px" }}>
        {myData.length ? (
          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            id="mapping_table"
          >
            <thead
              style={{
                width: "99.22%",
                height: "75px",
                verticalAlign: "middle",
              }}
            >
              <tr>
                <th style={{ width: "25%" }}>Name</th>
                <th style={{ width: "25%" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>Capital</span>

                    <SearchInput
                      placeholder="Search..."
                      style={{ width: "100%" }}
                      onChange={(e) => setCapitalSearch(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex" }}></div>
                </th>
                <th style={{ width: "25%" }}>Region</th>
                <th style={{ width: "25%" }}>Flag</th>
              </tr>
            </thead>
            <tbody style={{ width: "100%" }}>
              {myData
                .filter(
                  (general) =>
                    general.name
                      .toLowerCase()
                      .includes(generalSearch.toLowerCase()) ||
                    general.region
                      .toLowerCase()
                      .includes(generalSearch.toLowerCase()) ||
                    String(general.capital)
                      .toLowerCase()
                      .includes(generalSearch.toLowerCase())
                )
                .filter((capital) =>
                  String(capital.capital)
                    .toLowerCase()
                    .includes(capitalSearch.toLowerCase())
                )
                .map((country) => (
                  <tr style={{ verticalAlign: "middle" }} key={country.name}>
                    <td
                      style={{
                        width: "25%",
                      }}
                    >
                      {country.name ? country.name : "-"}
                    </td>
                    <td style={{ width: "25%" }}>
                      {country.capital ? country.capital : "-"}
                    </td>
                    <td style={{ width: "25%" }}>
                      {country.region ? country.region : "-"}
                    </td>
                    <td style={{ width: "25%", textAlign: "center" }}>
                      {country.flags ? (
                        <Avatar
                          alt={country.name}
                          src={country.flags["png"]}
                          variant="rounded"
                          style={{ width: "80px", height: "auto" }}
                        />
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        ) : (
          <>
            <Table responsive striped bordered hover variant="dark">
              <thead
                style={{
                  width: "99.22%",
                  height: "75px",
                  verticalAlign: "middle",
                }}
              >
                <tr>
                  <th style={{ width: "25%" }}>Name</th>
                  <th style={{ width: "25%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>Capital</span>

                      <SearchInput
                        placeholder="Search..."
                        style={{ width: "100%" }}
                        onChange={(e) => setCapitalSearch(e.target.value)}
                      />
                    </div>
                    <div style={{ display: "flex" }}></div>
                  </th>
                  <th style={{ width: "25%" }}>Region</th>
                  <th style={{ width: "25%" }}>Flag</th>
                </tr>
              </thead>
            </Table>
            <div>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "transparent",
                }}
              >
                <CircularProgress style={{ margin: "auto" }} />
              </Box>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default CountryContainer;
