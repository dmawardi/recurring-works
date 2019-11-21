// Import dependencies
import React, { Component } from "react";
import axios from "axios";
import SiteCard from "../SiteCard";
import DetailTable from "../DetailTable";
import SiteGridView from "../SiteGridView";
import "./style.css";
import Form from "../Form";
import API from "../utils/API";

// Class Dashboard
class Dashboard extends Component {
  // State variables
  state = {
    sites: [],
    currentSiteEquipment: [],
    currentSiteEvents: [],
    detail: false,
    yearToForecast: 2019,
    focusData: {},
    update: false,
    formData: {},
    // For creating new records
    currentlyInFocusSiteId: 0,
    currentlyInFocusEquipmentId: 0,
    userProfile: {}
  };

  // ID search functions
  // Find Site data in state datafrom ID
  findSiteDataFromId = idToSearch => {
    // Iterate through data searching for match
    for (let i = 0; i < this.state.sites.length; i++) {
      // If match found extract data
      if (this.state.sites[i].site_id === parseInt(idToSearch)) {
        // Return data
        return this.state.sites[i];
      }
    }
  };
  // Find equipment data in state data from ID
  findEquipmentDataFromId = idToSearch => {
    // Iterate through data searching for match
    for (let i = 0; i < this.state.currentSiteEquipment.length; i++) {
      // If match found extract data
      if (
        this.state.currentSiteEquipment[i].equipment_id === parseInt(idToSearch)
      ) {
        var result = this.state.currentSiteEquipment[i];
        // Return result
        return result;
      }
    }
  };
  // Find event data in state data from ID
  findEventDataFromId = idToSearch => {
    // Iterate through data searching for match\
    for (let i = 0; i < this.state.currentSiteEvents.length; i++) {
      // If match found extract data
      if (this.state.currentSiteEvents[i].event_id === parseInt(idToSearch)) {
        var result = this.state.currentSiteEvents[i];
        // Return result
        return result;
      }
    }
  };

  // Activates edit mode by changing state of update variable
  activateEditMode = e => {
    this.setState({
      update: true
    });
  };

  // Activates create mode by changing state of update and applying a detail with no id to provide form path
  activateCreateMode = e => {
    // Grab data-name attribute from click element
    let typeToDetail = e.target.getAttribute("data-name");

    // set update to true and provide a type to ensure the form displays proper form fields
    this.setState({
      update: true,
      detail: {
        type: typeToDetail,
        id: false
      }
    });
  };

  // Deactivates edit mode by changing state to false
  deactivateEditMode = e => {
    this.setState({
      update: false
    });
  };

  // Handles form changes and saves into an object
  handleFormChange = e => {
    e.preventDefault();
    // Extract name and value information from event
    var name = e.target.name;
    let value = e.target.value;
    // Extract temporary state
    let temporaryState = this.state.formData;

    // Add the current changes to the temporary state
    temporaryState[name] = value;

    // Replace form data with current temporary state
    this.setState({
      formData: temporaryState
    });
  };

  // Handle form submit dependent on the presence of data-id on the clicked element
  handleFormSubmit = e => {
    // Parse the data-id attribute value as boolean as it's currently in string format
    let update = JSON.parse(e.target.getAttribute("data-id"));
    // If the update is true
    if (update) {
      // handle form submit as update
      this.handleUpdateSubmit(e);
    } else {
      // handle form submit as create
      this.handleCreateSubmit(e);
    }
  };

  // Handle a form submission as an update to record
  handleUpdateSubmit = e => {
    e.preventDefault();
    // Depending on state variable detail's type value, perform different functions
    switch (this.state.detail.type) {
      // If type is site
      case "site":
        // Update postcode to be int
        let temporaryData = this.state.formData;
        temporaryData.postcode = parseInt(temporaryData.postcode);

        // Set state
        this.setState({
          formData: temporaryData
        });

        // Post API call to server to edit site using data-id value of event
        API.editSite(
          this.state.formData,
          e.target.getAttribute("data-id")
          // Then
        ).then(data => {
          // Update the site information and render, then proceed to deactivate edit mode
          this.updateSiteInformationAndRender().then(this.deactivateEditMode);
        });
        break;
      case "equipment":
        // Post API call to server to edit equipment using data-id value of event
        API.editEquipment(
          this.state.formData,
          e.target.getAttribute("data-id")
          // Then
        ).then(data => {
          // Update the site information and render, then proceed to deactivate edit mode
          this.updateSiteInformationAndRender().then(this.deactivateEditMode());
        });
        break;
      case "maintenance_event":
        API.editEvent(
          this.state.formData,
          e.target.getAttribute("data-id")
          // Then
        ).then(data => {
          // Update the site information and render, then proceed to deactivate edit mode
          this.updateSiteInformationAndRender().then(this.deactivateEditMode());
        });
        break;
      default:
        break;
    }
  };

  // Handle a form submission as a new record
  handleCreateSubmit = e => {
    e.preventDefault();
    let appendedFormData = this.state.formData;

    // Switch based on detail type
    switch (this.state.detail.type) {
      // If site
      case "site":
        // Update postcode to be int
        let temporaryData = this.state.formData;
        temporaryData.postcode = parseInt(temporaryData.postcode);

        // Set state
        this.setState({
          formData: temporaryData
        });

        // Post API call to create new site
        API.addSite(this.state.formData).then(data => {
          // Update the site information and render, then proceed to deactivate edit mode
          this.updateSiteInformationAndRender().then(this.deactivateEditMode);
        });
        break;
      case "equipment":
        appendedFormData = this.state.formData;

        appendedFormData.site_id = this.state.currentlyInFocusSiteId;

        // Post API call to create new equipment
        API.addEquipment(appendedFormData).then(data => {
          // Update the site information and render, then proceed to deactivate edit mode
          this.updateSiteInformationAndRender().then(this.deactivateEditMode());
        });
        break;
      case "maintenance_event":
        appendedFormData.site_id = this.state.currentlyInFocusSiteId;
        appendedFormData.equipment_id = this.state.currentlyInFocusEquipmentId;

        // Post API call to create new site
        API.addEvent(appendedFormData).then(data => {
          // Update the site information and render, then proceed to deactivate edit mode
          this.updateSiteInformationAndRender().then(this.deactivateEditMode());
        });
        break;
      default:
        break;
    }
  };

  // Event listener for grabbing equipment associated with a site and displaying grid
  updateSiteEquipmentDisplayGrid = e => {
    // Using the id of the Site card button
    let idToFocus = e.target.getAttribute("data-siteid");
    // Use site data-id to find site id from state vriables
    const focusSite = this.findSiteDataFromId(idToFocus);

    // GET API call to retrieve events and equipment details
    axios
      .get("/api/siteequipment/" + idToFocus)
      .then(data => {
        // Store in state
        this.setState({
          currentSiteEquipment: data.data.equipment,
          currentSiteEvents: data.data.events,
          focusData: focusSite,
          detail: false,
          currentlyInFocusSiteId: idToFocus
        });
      })
      // Catch if error
      .catch(err => {
        console.log(err);
      });
  };

  // When component mounts, make API call to get sites data
  componentDidMount() {
    this.updateSiteInformationAndRender();
  }

  // Function containing API call for populating state variable sites data
  updateSiteInformationAndRender() {
    // GET API call
    return axios.get("/api/sites").then(data => {
      // Set sites variable
      this.setState({
        sites: data.data,
        currentSiteEquipment: [],
        currentSiteEvents: []
      });
    });
  }

  // Function that sets detail of state with clicked item and retrieves record values to place in focus
  selectDetail = e => {
    // Extract event target variables as required
    let idToDetail = e.target.getAttribute("data-id");
    let typeToDetail = e.target.getAttribute("data-name");

    // Create focus data based off of the details in the event.target
    const focusItem = this.retrieveDetailGiven(typeToDetail, idToDetail);

    // Set state updates to detail and focus data
    this.setState({
      detail: {
        type: typeToDetail,
        id: idToDetail
      },
      focusData: focusItem
    });
  };

  // Retrieve detail given type and id within detail state variable
  retrieveDetailGiven = (type, id) => {
    // dependent on type
    switch (type) {
      // If site
      case "site":
        // return site data from ID
        return this.findSiteDataFromId(id);
      // If equipment
      case "equipment":
        // return equipment data from ID
        return this.findEquipmentDataFromId(id);
      // If maintenance event
      case "maintenance_event":
        // return event data from ID
        return this.findEventDataFromId(id);
      default:
        return false;
    }
  };

  // Clear the current value of detail in state
  clearDetail = e => {
    //   Clear state variable detail (set to false)
    this.setState({
      detail: false
    });
  };

  // Event handler for year button above grid that allows user to increment/decrement target yera
  increaseDecreaseYear = e => {
    // Grab data-name from event target
    const action = e.target.getAttribute("data-name");
    // If action is "+"
    if (action === "+") {
      // Increment yearToForecast variable
      this.setState({
        yearToForecast: this.state.yearToForecast + 1
      });
      // If action is "-"
    } else {
      // Decrement yearToForecast variable\
      this.setState({
        yearToForecast: this.state.yearToForecast - 1
      });
    }
  };

  // Event handler for creating a new event
  addNewEvent = e => {
    // Ensure that the equipment to update is recorded
    let equipmentIdToUse = e.target.getAttribute("data-id");
    // Update state with id to use
    this.setState({
      currentlyInFocusEquipmentId: equipmentIdToUse
    });
    // Activate create mode
    this.activateCreateMode(e);
  };

  // Delete item event handler
  deleteItem = e => {
    let name = e.target.getAttribute("data-name");
    let idToDelete = e.target.getAttribute("data-id");

    // Depending on item clicked, make deletion API call
    switch (name) {
      case "equipment":
        API.deleteEquipment(idToDelete).then(data => {
          this.updateSiteInformationAndRender();
        });
        break;
      case "site":
        API.deleteSite(idToDelete).then(data => {
          this.updateSiteInformationAndRender();
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      // Dashboard container
      <div className="container-fluid">
        <div className="row">
          {/* Site navigation pane */}
          <div className="col-3">
            {/* Button to create new site */}
            <button data-name="site" onClick={this.activateCreateMode}>
              New Site
            </button>
            {/* <button data-name="site" onClick={this.printState}>
              Print State
            </button> */}
            {/* For each site in state data, return a Site card */}
            {this.state.sites.map((val, index) => {
              return (
                // Return site card containing brief information and links
                <SiteCard
                  key={index}
                  site_id={val.site_id}
                  updateSiteEquipmentDisplayGrid={
                    this.updateSiteEquipmentDisplayGrid
                  }
                  selectDetail={this.selectDetail}
                  address1={val.address1}
                  site_name={val.site_name}
                  delete={this.deleteItem}
                />
              );
            })}
          </div>
          {/* If there is no current detail in focus */}
          {!this.state.detail ? (
            // Display the site grid system
            <SiteGridView
              increaseDecreaseYear={this.increaseDecreaseYear}
              currentSiteName={this.state.focusData.site_name}
              yearToForecast={this.state.yearToForecast}
              currentSiteEvents={this.state.currentSiteEvents}
              currentSiteEquipment={this.state.currentSiteEquipment}
              selectDetail={this.selectDetail}
              activateCreateMode={this.activateCreateMode}
              addNewEvent={this.addNewEvent}
              currentSiteId={this.state.currentlyInFocusSiteId}
              delete={this.deleteItem}
            />
          ) : // If update mode activated,
          this.state.update ? (
            // show column with form
            <div className="col-9">
              {/* Place site information  at top */}
              <span>{this.state.focusData.site_name}</span>
              {/* Container for edit buttons */}
              <div className="edit-buttons">
                <button
                  className="close-edit-button"
                  onClick={this.deactivateEditMode}
                >
                  Close Edit
                </button>
              </div>
              {/* Button to deactivate edit mode */}
              {/* Form */}
              <Form
                path={this.state.detail.type}
                handleChange={this.handleFormChange}
                handleFormSubmit={this.handleFormSubmit}
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
