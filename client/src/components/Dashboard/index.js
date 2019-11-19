import React, { Component } from "react";
import axios from "axios";
import EquipmentDetailRow from "../EquipmentDetailRow";
import SiteCard from "../SiteCard";
import TableHeader from "../TableHeader";
import DetailTable from "../DetailTable";
import SiteGridView from "../SiteGridView";
import "./style.css";
import Form from "../Form";
import API from "../utils/API";

class Dashboard extends React.Component {
  state = {
    sites: [],
    currentSiteEquipment: [],
    currentSiteEvents: [],
    detail: false,
    yearToForecast: 2019,
    focusData: {},
    update: false,
    formData: {}
  };

  findSiteNameFromId = idToSearch => {
    console.log("Searching for site ID: " + idToSearch);
    console.log("Current site state: ", this.state.sites);
    for (let i = 0; i < this.state.sites.length; i++) {
      console.log("Currently checking out ID: " + this.state.sites[i].site_id);
      if (this.state.sites[i].site_id === parseInt(idToSearch)) {
        console.log("Found: ", this.state.sites[i].site_name);
        return this.state.sites[i];
      }
    }
  };

  findEquipmentDataFromId = idToSearch => {
    console.log("Searching for equip ID: " + idToSearch);
    console.log("Current equip state: ", this.state.currentSiteEquipment);
    for (let i = 0; i < this.state.currentSiteEquipment.length; i++) {
      if (
        this.state.currentSiteEquipment[i].equipment_id === parseInt(idToSearch)
      ) {
        var result = this.state.currentSiteEquipment[i];
        console.log("Found!", result);
        return result;
      }
    }
  };
  findEventDataFromId = idToSearch => {
    console.log("Searching for equip ID: " + idToSearch);
    console.log("Current equip state: ", this.state.currentSiteEquipment);
    for (let i = 0; i < this.state.currentSiteEvents.length; i++) {
      if (this.state.currentSiteEvents[i].event_id === parseInt(idToSearch)) {
        var result = this.state.currentSiteEvents[i];
        console.log("Found!", result);
        return result;
      }
    }
  };

  // Activates edit mode by changing state
  activateEditMode = e => {
    this.setState({
      update: true
    });
  };

  // Activates edit mode by changing state
  deactivateEditMode = e => {
    this.setState({
      update: false
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

  handleUpdateSubmit = e => {
    e.preventDefault();
    console.log(this.state.formData);
    switch (this.state.detail.type) {
      case "site":
        API.editSite(
          this.state.formData,
          e.target.getAttribute("data-id")
        ).then(data => {
          console.log(data);
          this.updateSiteInformationAndRender().then(this.deactivateEditMode);
        });
        break;
      case "equipment":
        API.editEquipment(
          this.state.formData,
          e.target.getAttribute("data-id")
        ).then(data => {
          console.log(data);
          this.updateSiteInformationAndRender().then(this.deactivateEditMode());
        });
    }
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
          focusData: focusSite,
          detail: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.updateSiteInformationAndRender();
  }

  updateSiteInformationAndRender() {
    return axios.get("/api/sites").then(data => {
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
    const focusItem = this.retrieveDetailGivenCurrentState(
      typeToDetail,
      idToDetail
    );

    console.log("focusItem :  ", focusItem);
    this.setState({
      detail: {
        type: typeToDetail,
        id: idToDetail
      },
      focusData: focusItem
    });
  };

  retrieveDetailGivenCurrentState = (type, id) => {
    switch (type) {
      case "site":
        return this.findSiteNameFromId(id);
      case "equipment":
        return this.findEquipmentDataFromId(id);
      case "maintenance_event":
        return this.findEventDataFromId(id);
      default:
        return false;
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
              currentSiteName={this.state.focusData.site_name}
              yearToForecast={this.state.yearToForecast}
              currentSiteEvents={this.state.currentSiteEvents}
              currentSiteEquipment={this.state.currentSiteEquipment}
              selectDetail={this.selectDetail}
            />
          ) : // If update mode activated
          this.state.update ? (
            <div className="col-9">
              {this.state.focusData.site_name}
              <button onClick={this.deactivateEditMode}></button>
              <Form
                path={this.state.detail.type}
                handleChange={this.handleFormChange}
                handleFormSubmit={this.handleUpdateSubmit}
                idToUpdate={this.state.detail.id}
              />
            </div>
          ) : (
            //   Else, show detail table}
            <>
              <DetailTable
                clearDetail={this.clearDetail}
                focusData={this.state.focusData}
                activateEditMode={this.activateEditMode}
                detail={this.state.detail}
              />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
