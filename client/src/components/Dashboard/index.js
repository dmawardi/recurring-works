import React, { Component } from "react";
import axios from "axios";
import EquipmentDetailRow from "../EquipmentDetailRow";
import SiteCard from "../SiteCard";
import TableHeader from "../TableHeader";
import DetailTable from "../DetailTable";
import SiteGridView from "../SiteGridView";
import "./style.css";
import Form from "../Form";

class Dashboard extends React.Component {
  state = {
    sites: [],
    currentSiteEquipment: [],
    currentSiteEvents: [],
    detail: false,
    yearToForecast: 2019,
    currentSite: {},
    update: false,
    formData: {}
  };

  findSiteNameFromId = idToSearch => {
    console.log("Searching for ID: " + idToSearch);
    console.log("Current site state: ", this.state.sites);
    for (let i = 0; i < this.state.sites.length; i++) {
      console.log("Currently checking out ID: " + this.state.sites[i].site_id);
      if (this.state.sites[i].site_id === parseInt(idToSearch)) {
        console.log("Found: ", this.state.sites[i].site_name);
        return this.state.sites[i];
      }
    }
  };

  // Activates edit mode by changing state
  activateEditMode = e => {
    this.setState({
      update: true
    });
  };

  handleFormChange = e => {
    e.preventDefault();
    var name = e.target.name;
    let value = e.target.value;
    let temporaryState = this.state.formData;
    console.log("Name: " + e.target.name);
    console.log("Value: " + e.target.value);
    temporaryState[name] = value;
    // console.log("temp state: ", temporaryState);
    this.setState({
      formData: temporaryState
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.formData);
    // TODO place code here to account for different scenarios and form submissions
    // userFunctions.register(formData).then(res => {
    //   console.log("Registered a New Account", res);
    // });
  };

  updateSiteEquipmentDisplayGrid = e => {
    let idToFocus = e.target.getAttribute("data-siteid");
    console.log(e.target);
    const focusSite = this.findSiteNameFromId(idToFocus);

    // TODO modify to only show data from site id
    axios
      .get("/api/equipment")
      .then(data => {
        this.setState({
          currentSiteEquipment: data.data.equipment,
          currentSiteEvents: data.data.events,
          currentSite: focusSite
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
    const focusSite = this.findSiteNameFromId(idToDetail);

    this.setState({
      detail: {
        type: typeToDetail,
        id: idToDetail
      },
      currentSite: focusSite
    });
    console.log(this.state);
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
          {/* Site navigation pane */}
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
                  selectDetail={this.selectDetail}
                  address1={val.address1}
                  site_name={val.site_name}
                />
              );
            })}
          </div>
          {/* If there is no current detail in focus */}
          {!this.state.detail ? (
            // Display the grid system
            <SiteGridView
              increaseDecreaseYear={this.increaseDecreaseYear}
              currentSiteName={this.state.currentSite.site_name}
              yearToForecast={this.state.yearToForecast}
              currentSiteEvents={this.state.currentSiteEvents}
              currentSiteEquipment={this.state.currentSiteEquipment}
              selectDetail={this.selectDetail}
            />
          ) : // If update mode activated
          this.state.update ? (
            <Form
              path="site"
              handleChange={this.handleFormChange}
              handleFormSubmit={this.han}
            />
          ) : (
            //   Else, show detail table}
            <>
              <DetailTable
                clearDetail={this.clearDetail}
                currentSite={this.state.currentSite}
                activateEditMode={this.activateEditMode}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
