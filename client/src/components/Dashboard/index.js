import React, { Component } from "react";
import axios from "axios";
import EquipmentDetailRow from "../EquipmentDetailRow";
import SiteCard from "../SiteCard";
import "./style.css";

class Dashboard extends React.Component {
  state = {
    sites: [],
    currentSiteEquipment: [],
    currentSiteEvents: [],
    detail: false,
    yearToForecast: 2019,
    currentSiteName: ""
  };

  findSiteNameFromId = idToSearch => {
    console.log("Searching for ID: " + idToSearch);
    for (let i = 0; i < this.state.sites.length; i++) {
      if (this.state.sites.site_id === idToSearch) {
        console.log("Found: ", this.state.sites.site_name);
        return this.state.sites.site_name;
      }
    }
  };

  updateSiteEquipmentDisplayGrid = e => {
    let idToFocus = e.target.getAttribute("data-siteid");
    console.log(e.target);
    const nameOfFocusSite = this.findSiteNameFromId(idToFocus);
    // TODO modify to only show data from site id
    axios
      .get("/api/equipment")
      .then(data => {
        this.setState({
          currentSiteEquipment: data.data.equipment,
          currentSiteEvents: data.data.events,
          currentSiteName: nameOfFocusSite
        });
        console.log("State: ", this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    axios.get("/api/sites").then(data => {
      this.setState({
        sites: data.data
      });
    });
  }

  selectDetail = e => {
    let idToDetail = e.target.getAttribute("data-id");
    let typeToDetail = e.target.getAttribute("data-name");
    console.log("data id: " + idToDetail);
    console.log("data name: " + typeToDetail);

    this.setState({
      detail: {
        type: typeToDetail,
        id: idToDetail
      }
    });
  };

  showDetailGivenCurrentState = () => {
    switch (this.state.detail.type) {
      case "equipment":
        for (let i = 0; i < this.state.currentSiteEquipment.length; i++) {
          if (
            this.state.currentSiteEquipment[i].site_id === this.state.detail.id
          ) {
            var result = this.state.currentSiteEquipment[i];
            return result;
          }
        }
      default:
        return <></>;
    }
  };

  clearDetail = e => {
    //   Clear state variable detail
    this.setState({
      detail: false
    });
  };

  increaseDecreaseYear = e => {
    const action = e.target.getAttribute("data-name");
    console.log(action);
    if (action === "+") {
      this.setState({
        yearToForecast: this.state.yearToForecast + 1
      });
    } else {
      this.setState({
        yearToForecast: this.state.yearToForecast - 1
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/*  */}
          <div className="col-3">
            {/* For each site in state data, return a Site card */}
            {this.state.sites.map((val, index) => {
              return (
                <SiteCard
                  key={index}
                  site_id={val.site_id}
                  updateSiteEquipmentDisplayGrid={
                    this.updateSiteEquipmentDisplayGrid
                  }
                  address1={val.address1}
                  site_name={val.site_name}
                />
              );
            })}
          </div>
          {/* If there is no current detail in focus */}
          {!this.state.detail ? (
            // Display the grid system
            <div className="col-9">
              {}
              <button onClick={this.increaseDecreaseYear} data-name="-">
                -
              </button>
              Year:{this.state.yearToForecast}
              <button onClick={this.increaseDecreaseYear} data-name="+">
                +
              </button>
              <table className="table table-sm table-dark">
                <thead>
                  <tr>
                    <th scope="col">Equipment ID</th>
                    <th scope="col">Equipment Name</th>
                    <th scope="col">January</th>
                    <th scope="col">February</th>
                    <th scope="col">March</th>
                    <th scope="col">April</th>
                    <th scope="col">May</th>
                    <th scope="col">June</th>
                    <th scope="col">July</th>
                    <th scope="col">August</th>
                    <th scope="col">September</th>
                    <th scope="col">October</th>
                    <th scope="col">November</th>
                    <th scope="col">December</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.currentSiteEquipment.map((val, index) => {
                    // console.log(val);
                    return (
                      <EquipmentDetailRow
                        key={index}
                        val={val}
                        onClick={this.selectDetail}
                        eventData={this.state.currentSiteEvents}
                        yearToForecast={this.state.yearToForecast}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            //   Else, show detail table}
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
