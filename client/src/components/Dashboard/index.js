import React, { Component } from "react";
import axios from "axios";
import EquipmentDetailRow from "../EquipmentDetailRow";

class Dashboard extends React.Component {
  state = {
    sites: [],
    currentSiteEquipment: [],
    currentSiteEvents: [],
    detail: false
  };

  updateSiteEquipment = e => {
    console.log(e.target.getAttribute("data-id"));
    axios.get("/api/equipment").then(data => {
      console.log(data);
      this.setState({
        currentSiteEquipment: data.data.equipment,
        currentSiteEvents: data.data.events
      });
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

  render() {
    return (
      <div className="container">
        <div className="row">
          {/*  */}
          <div className="col-2">
            {this.state.sites.map((val, index) => {
              return (
                <button
                  key={val.site_id}
                  type="button"
                  className="btn btn-outline-primary"
                  data-id={val.site_id}
                  onClick={this.updateSiteEquipment}
                >
                  {val.site_name}
                </button>
              );
            })}
          </div>
          {/* If there is no current detail in focus */}
          {!this.state.detail ? (
            <div className="col-10">
              Year: 2019
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
