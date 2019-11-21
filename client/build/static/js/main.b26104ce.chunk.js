(this["webpackJsonprecurring-works-front"]=this["webpackJsonprecurring-works-front"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(50),l=a.n(i),c=(a(58),a(59),a(24)),s=a(2),o=a.n(s),d={logOut:function(e){return o.a.get("account/logout")},login:function(e){return o.a.post("account/login",{email:e.email,password:e.password})},register:function(e){return o.a.post("account/register",{firstName:e.firstName,lastName:e.lastName,email:e.email,username:e.username,password:e.password})}},u=(a(76),{findAllSites:function(){return o.a.get("api/sites")},editSite:function(e,t){return o.a.put("api/sites/"+t,e)},editEquipment:function(e,t){return o.a.put("api/equipment/"+t,e)},addSite:function(e){return o.a.post("api/sites/",e)},addEquipment:function(e){return o.a.post("api/equipment/",e)},addEvent:function(e){return o.a.post("api/events/",e)},editEvent:function(e,t){return o.a.put("api/events/"+t,e)},findEquipmentBySiteId:function(e){return o.a.get("/siteequipment/"+e)},deleteSite:function(e){return o.a.delete("api/sites/"+e)},deleteEquipment:function(e){return o.a.delete("api/equipment/"+e)}}),m=a(10),p=a(32);var E=function(e){var t=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/register",className:"nav-link"},"Register"))),a=r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/dashboard",className:"nav-link"},"Sites")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{onClick:e.logOut},"Log Out")));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Recurring Works"),r.a.createElement("span",null,e.profile.first_name?"Logged In: "+e.profile.first_name+" "+e.profile.last_name:"Not Logged In")))),e.profile.user_id?a:t,r.a.createElement("div",null))},f=a(19),v=a(20),h=a(22),b=a(21),g=a(23),S=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Recurring Works"),r.a.createElement("p",{className:"lead"},"Welcome To Your PPM Tracker"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement("p",null,"An Empire Project"))}}]),t}(n.Component);var y=function(e){return r.a.createElement(r.a.Fragment,null,e.formData.map((function(t,a){return r.a.createElement("div",{className:"form-group",key:a},r.a.createElement("label",{htmlFor:t.nameFor},t.label),r.a.createElement("input",{onChange:e.handleChange,type:t.type,name:t.nameFor,required:!0,className:"form-control",placeholder:t.placeholder}))})))},_=(a(98),{login:[{nameFor:"email",type:"email",label:"Email Address",placeholder:"Email"},{nameFor:"password",type:"password",label:"Password",placeholder:"Password"}],register:[{nameFor:"email",type:"email",label:"Email Address",placeholder:"Email"},{nameFor:"firstName",type:"text",label:"First Name",placeholder:"John"},{nameFor:"lastName",type:"text",label:"Last Name",placeholder:"Doe"},{nameFor:"username",type:"text",label:"Username",placeholder:"Username"},{nameFor:"password",type:"password",label:"Password",placeholder:"Password"}],site:[{nameFor:"site_name",type:"text",label:"Site Name",placeholder:"Site Name"},{nameFor:"address1",type:"text",label:"Address 1",placeholder:"100 Wilshire Blvd"},{nameFor:"address2",type:"text",label:"Address 2",placeholder:"eg. Unit 24"},{nameFor:"address3",type:"text",label:"Address 3",placeholder:"Additional Info"},{nameFor:"suburb",type:"text",label:"Suburb",placeholder:"Los Angeles"},{nameFor:"postcode",type:"number",label:"Postcode",placeholder:"90210"},{nameFor:"country",type:"text",label:"Country",placeholder:"USA"}],equipment:[{nameFor:"equipment_name",type:"text",label:"Equipment Name",placeholder:"Air Conditioner Level 11A"},{nameFor:"equipment_description",type:"text",label:"Equipment Description",placeholder:"Found at the West end of the corridor"},{nameFor:"custom_serial_name_1",type:"text",label:"Custom Serial Label 1",placeholder:"Custom Serial Name 1"},{nameFor:"custom_serial_1",type:"text",label:"Custom Serial Code 1",placeholder:"Custom Serial Code 1"},{nameFor:"custom_serial_name_2",type:"text",label:"Custom Serial Label 2",placeholder:"Custom Serial Label 2"},{nameFor:"custom_serial_2",type:"text",label:"Custom Serial Code 2",placeholder:"Custom Serial Code 2"},{nameFor:"yearlyFrequency",type:"number",label:"Yearly Frequency (X times per year)",placeholder:"3"}],maintenance_event:[{nameFor:"status_of_maintenance",type:"text",label:"Maintenance Status",placeholder:"alert"},{nameFor:"status_description",type:"text",label:"Status Description",placeholder:"Regular Bi-annual Maintenance"},{nameFor:"datetime_scheduled",type:"datetime-local",label:"Datetime Scheduled",placeholder:"2019-11-30 00:00:00"}]});function N(e){switch(e){case"register":return _.register;case"login":return _.login;case"site":return _.site;case"equipment":return _.equipment;case"maintenance_event":return _.maintenance_event}}var D=function(e){return r.a.createElement("div",{className:"container form-container"},r.a.createElement("form",null,r.a.createElement(y,{formData:N(e.path),handleChange:e.handleChange}),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.handleFormSubmit,type:"submit",className:"btn btn-primary","data-id":e.idToUpdate},"Submit"))))},q=a(12),F=a.n(q);a(100);var C=function(e){var t="";if(e.squareState.numberOfEvents>0&&(t=" white"),e.squareState.scheduledEvent)switch(e.squareState.status){case"good":t=" green";break;case"caution":t=" yellow";break;case"alert":t=" red";break;default:t=" unknown"}var a="square"+t;return console.log("props.squareState.foundEventId: "+e.squareState.foundEventId),e.squareState.foundEventId?r.a.createElement("button",{onClick:e.detailClick,"data-id":e.squareState.foundEventId.toString(),"data-name":"maintenance_event"},r.a.createElement("div",{"data-id":e.squareState.foundEventId.toString(),"data-name":"maintenance_event",className:a})):r.a.createElement("div",{className:a})};a(101);F()().format();var k=function(e){return r.a.createElement("tr",{key:e.equipment_id},r.a.createElement("th",{scope:"row","data-name":"equipment","data-id":e.val.equipment_id,onClick:e.selectDetail},e.val.equipment_id),r.a.createElement("td",null,r.a.createElement("p",null,e.val.equipment_name),r.a.createElement("button",{onClick:e.delete,"data-name":"equipment","data-id":e.val.equipment_id},"X")),r.a.createElement("td",null,r.a.createElement("button",{"data-name":"maintenance_event","data-id":e.val.equipment_id,onClick:e.addNewEvent},"+ Event")),function(e,t){for(var a=["01","02","03","04","05","06","07","08","09","10","11","12"],n=[],r=0;r<a.length;r++){for(var i,l=F()(new Date(a[r]+"/01/"+t)),c=0,s=!1,o=!1,d={},u=0;u<e.length;u++)l.isSame(e[u].date_scheduled,"month")&&(c+=1,e[u].scheduled&&(s=!0,o=e[u].status,i=e[u].event_id)),d={numberOfEvents:c,scheduledEvent:s,status:o,foundEventId:i};n.push(d),c=0,s=!1,o=!1,d={},i=!1}return n}(function(e,t,a,n){for(var r=[],i=Math.round(12/t),l=F()().subtract(i,"months"),c=0;c<a.length;c++)a[c].equipment_id===e&&(l=F()(a[c].datetime_scheduled),l=F()(a[c].datetime_scheduled),r.push({date_scheduled:l.toString(),scheduled:!0,status:a[c].status_of_maintenance||!1,event_id:a[c].event_id}));var s=F()(new Date("01/01/"+(n+1)));for(l=l.add(i,"months");l.isBefore(s);)r.push({date_scheduled:l.toString(),scheduled:!1,status:a.status_of_maintenance}),l=l.add(i,"months");return r}(e.val.equipment_id,e.val.yearlyFrequency,e.eventData,e.yearToForecast),e.yearToForecast).map((function(t){return r.a.createElement("td",null,r.a.createElement(C,{squareState:t,detailClick:e.selectDetail}))})))};a(102);var I=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{key:e.site_id,className:"card-body"},r.a.createElement("button",{className:"btn btn-outline-primary","data-siteid":e.site_id,onClick:e.updateSiteEquipmentDisplayGrid},e.site_name),r.a.createElement("p",{className:"card-text"},e.address1),r.a.createElement("button",{onClick:e.selectDetail,"data-name":"site","data-id":e.site_id,type:"button",className:"btn btn-outline-primary"},r.a.createElement("i",{onClick:e.selectDetail,"data-name":"site","data-id":e.site_id,className:"fas fa-info-circle"})),r.a.createElement("button",{onClick:e.delete,"data-name":"site","data-id":e.site_id,type:"button",className:"btn btn-outline-primary"},r.a.createElement("i",{onClick:e.delete,"data-name":"site","data-id":e.site_id,className:"fas fa-skull"})))))};a(103);var w=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Equipment ID"),r.a.createElement("th",{scope:"col"},"Equipment Name"),r.a.createElement("th",{scope:"col"},"Add new event"),r.a.createElement("th",{scope:"col"},"January"),r.a.createElement("th",{scope:"col"},"February"),r.a.createElement("th",{scope:"col"},"March"),r.a.createElement("th",{scope:"col"},"April"),r.a.createElement("th",{scope:"col"},"May"),r.a.createElement("th",{scope:"col"},"June"),r.a.createElement("th",{scope:"col"},"July"),r.a.createElement("th",{scope:"col"},"August"),r.a.createElement("th",{scope:"col"},"September"),r.a.createElement("th",{scope:"col"},"October"),r.a.createElement("th",{scope:"col"},"November"),r.a.createElement("th",{scope:"col"},"December")))},A=(a(104),["address1","address2","address3","suburb","postcode"]),O=["equipment_name","equipment_description","custom_serial_name_1","custom_serial_1","custom_serial_name_2","custom_serial_2","yearlyFrequency"],x=["status_of_maintenance","status_description","datetime_scheduled"];var M=function(e){return console.log("Detail table props",e),r.a.createElement("div",{className:"col-9 detail-table"},r.a.createElement("div",{className:"card grid-header"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.focusData[function(e){switch(e.type){case"site":return"site_name";case"equipment":return"equipment_name";case"maintenance_event":return"event_id";default:return""}}(e.detail)]),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"}),r.a.createElement("div",{className:"detail-button-container"},r.a.createElement("button",{onClick:e.activateEditMode,"data-name":"edit"},"Edit"),r.a.createElement("button",{onClick:e.clearDetail,"data-name":"close"},"Close")),r.a.createElement("br",null))),r.a.createElement("table",{className:"table table-bordered table-dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Detail"),r.a.createElement("th",{colSpan:"2",scope:"col"},"Description"))),r.a.createElement("tbody",null,function(e){switch(e.type){case"site":return A;case"equipment":return O;case"maintenance_event":return x;default:return""}}(e.detail).map((function(t,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",{colSpan:"2"},e.focusData[t]))})))))},T=(a(105),[{scheduledEvent:!0,numberOfEvents:1,status:"good",event_id:!1},{scheduledEvent:!0,numberOfEvents:1,status:"caution",event_id:!1},{scheduledEvent:!0,numberOfEvents:1,status:"alert",event_id:!1},{scheduledEvent:!0,numberOfEvents:1,status:"unknown",event_id:!1},{scheduledEvent:!1,numberOfEvents:1,status:!1,event_id:!1}]),j=["Status: Good","Status: Caution","Status: Alert","Status: Unknown","Status: Due. Not scheduled Yet"];var R=function(e){return r.a.createElement("div",{className:"card grid-header"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.currentSiteName),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Year:",e.yearToForecast),r.a.createElement("button",{onClick:e.increaseDecreaseYear,"data-name":"-"},"-"),r.a.createElement("button",{onClick:e.increaseDecreaseYear,"data-name":"+"},"+"),r.a.createElement("br",null),r.a.createElement("div",{className:"container legend-container"},r.a.createElement("h5",null,"Legend"),r.a.createElement("div",{className:"row"},T.map((function(e,t){return r.a.createElement("div",{className:"col-2 legend-box"},r.a.createElement(C,{squareState:e}),r.a.createElement("p",null,r.a.createElement("span",{className:"legend-label"},j[t])))}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-2"},r.a.createElement("button",{"data-name":"equipment",onClick:e.activateCreateMode},"Add New Equipment"))))))};a(106);var L=function(e){return r.a.createElement("div",{className:"col-9"},r.a.createElement(R,{increaseDecreaseYear:e.increaseDecreaseYear,currentSiteName:e.currentSiteName,yearToForecast:e.yearToForecast,activateCreateMode:e.activateCreateMode}),r.a.createElement("table",{className:"table table-responsive table-sm table-dark"},r.a.createElement(w,null),r.a.createElement("tbody",null,e.currentSiteEquipment.map((function(t,a){return r.a.createElement(k,{key:a,val:t,selectDetail:e.selectDetail,eventData:e.currentSiteEvents,yearToForecast:e.yearToForecast,addNewEvent:e.addNewEvent,currentSiteId:e.currentSiteId,delete:e.delete})})))))},Y=(a(107),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={sites:[],currentSiteEquipment:[],currentSiteEvents:[],detail:!1,yearToForecast:2019,focusData:{},update:!1,formData:{},currentlyInFocusSiteId:0,currentlyInFocusEquipmentId:0,userProfile:{}},a.findSiteDataFromId=function(e){for(var t=0;t<a.state.sites.length;t++)if(a.state.sites[t].site_id===parseInt(e))return a.state.sites[t]},a.findEquipmentDataFromId=function(e){for(var t=0;t<a.state.currentSiteEquipment.length;t++){if(a.state.currentSiteEquipment[t].equipment_id===parseInt(e))return a.state.currentSiteEquipment[t]}},a.findEventDataFromId=function(e){for(var t=0;t<a.state.currentSiteEvents.length;t++){if(a.state.currentSiteEvents[t].event_id===parseInt(e))return a.state.currentSiteEvents[t]}},a.activateEditMode=function(e){a.setState({update:!0})},a.activateCreateMode=function(e){var t=e.target.getAttribute("data-name");a.setState({update:!0,detail:{type:t,id:!1}})},a.deactivateEditMode=function(e){a.setState({update:!1})},a.handleFormChange=function(e){e.preventDefault();var t=e.target.name,n=e.target.value,r=a.state.formData;r[t]=n,a.setState({formData:r})},a.handleFormSubmit=function(e){JSON.parse(e.target.getAttribute("data-id"))?a.handleUpdateSubmit(e):a.handleCreateSubmit(e)},a.handleUpdateSubmit=function(e){switch(e.preventDefault(),a.state.detail.type){case"site":a.state.formData.postcode=parseInt(a.state.formData.postcode),u.editSite(a.state.formData,e.target.getAttribute("data-id")).then((function(e){a.updateSiteInformationAndRender().then(a.deactivateEditMode)}));break;case"equipment":u.editEquipment(a.state.formData,e.target.getAttribute("data-id")).then((function(e){a.updateSiteInformationAndRender().then(a.deactivateEditMode())}));break;case"maintenance_event":u.editEvent(a.state.formData,e.target.getAttribute("data-id")).then((function(e){a.updateSiteInformationAndRender().then(a.deactivateEditMode())}))}},a.handleCreateSubmit=function(e){e.preventDefault();var t=a.state.formData;switch(a.state.detail.type){case"site":a.state.formData.postcode=parseInt(a.state.formData.postcode),u.addSite(a.state.formData).then((function(e){a.updateSiteInformationAndRender().then(a.deactivateEditMode)}));break;case"equipment":(t=a.state.formData).site_id=a.state.currentlyInFocusSiteId,u.addEquipment(t).then((function(e){a.updateSiteInformationAndRender().then(a.deactivateEditMode())}));break;case"maintenance_event":t.site_id=a.state.currentlyInFocusSiteId,t.equipment_id=a.state.currentlyInFocusEquipmentId,u.addEvent(t).then((function(e){a.updateSiteInformationAndRender().then(a.deactivateEditMode())}))}},a.updateSiteEquipmentDisplayGrid=function(e){var t=e.target.getAttribute("data-siteid"),n=a.findSiteDataFromId(t);o.a.get("/api/siteequipment/"+t).then((function(e){a.setState({currentSiteEquipment:e.data.equipment,currentSiteEvents:e.data.events,focusData:n,detail:!1,currentlyInFocusSiteId:t})})).catch((function(e){console.log(e)}))},a.selectDetail=function(e){var t=e.target.getAttribute("data-id"),n=e.target.getAttribute("data-name"),r=a.retrieveDetailGiven(n,t);a.setState({detail:{type:n,id:t},focusData:r})},a.retrieveDetailGiven=function(e,t){switch(e){case"site":return a.findSiteDataFromId(t);case"equipment":return a.findEquipmentDataFromId(t);case"maintenance_event":return a.findEventDataFromId(t);default:return!1}},a.clearDetail=function(e){a.setState({detail:!1})},a.increaseDecreaseYear=function(e){"+"===e.target.getAttribute("data-name")?a.setState({yearToForecast:a.state.yearToForecast+1}):a.setState({yearToForecast:a.state.yearToForecast-1})},a.addNewEvent=function(e){var t=e.target.getAttribute("data-id");a.setState({currentlyInFocusEquipmentId:t}),a.activateCreateMode(e)},a.deleteItem=function(e){var t=e.target.getAttribute("data-name"),n=e.target.getAttribute("data-id");switch(t){case"equipment":u.deleteEquipment(n).then((function(e){a.updateSiteInformationAndRender()}));break;case"site":u.deleteSite(n).then((function(e){a.updateSiteInformationAndRender()}))}},a}return Object(g.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.updateSiteInformationAndRender()}},{key:"updateSiteInformationAndRender",value:function(){var e=this;return o.a.get("/api/sites").then((function(t){e.setState({sites:t.data,currentSiteEquipment:[],currentSiteEvents:[]})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{"data-name":"site",onClick:this.activateCreateMode},"New Site"),this.state.sites.map((function(t,a){return r.a.createElement(I,{key:a,site_id:t.site_id,updateSiteEquipmentDisplayGrid:e.updateSiteEquipmentDisplayGrid,selectDetail:e.selectDetail,address1:t.address1,site_name:t.site_name,delete:e.deleteItem})}))),this.state.detail?this.state.update?r.a.createElement("div",{className:"col-9"},r.a.createElement("span",null,this.state.focusData.site_name),r.a.createElement("div",{className:"edit-buttons"},r.a.createElement("button",{className:"close-edit-button",onClick:this.deactivateEditMode},"Close Edit")),r.a.createElement(D,{path:this.state.detail.type,handleChange:this.handleFormChange,handleFormSubmit:this.handleFormSubmit,idToUpdate:this.state.detail.id})):r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{clearDetail:this.clearDetail,focusData:this.state.focusData,activateEditMode:this.activateEditMode,detail:this.state.detail})):r.a.createElement(L,{increaseDecreaseYear:this.increaseDecreaseYear,currentSiteName:this.state.focusData.site_name,yearToForecast:this.state.yearToForecast,currentSiteEvents:this.state.currentSiteEvents,currentSiteEquipment:this.state.currentSiteEquipment,selectDetail:this.selectDetail,activateCreateMode:this.activateCreateMode,addNewEvent:this.addNewEvent,currentSiteId:this.state.currentlyInFocusSiteId,delete:this.deleteItem})))}}]),t}(r.a.Component)),P=a(7);var U=function(e){var t=Object(n.useState)({}),a=Object(c.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)({}),o=Object(c.a)(s,2),u=o[0],p=o[1],f=Object(n.useState)(!1),v=Object(c.a)(f,2),h=v[0],b=v[1],g=function(e){e.preventDefault();var t=e.target.name,a=e.target.value,n=i;n[t]=a,l(n)},y=function(e){e.preventDefault(),d.login(i).then((function(e){p(e.data)})).catch((function(e){console.error(e)}))},_=function(e){e.preventDefault(),d.register(i).then((function(e){b(!0)})).catch((function(e){console.error(e)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,function(){if(h)return r.a.createElement(P.a,{to:"/login"})}(),r.a.createElement(E,{profile:u,logOut:function(e){e.preventDefault(),d.logOut().then((function(e){200===e.status?p(!1):console.error("Error encountered")}))}}),r.a.createElement(P.d,null,r.a.createElement(P.b,{exact:!0,path:"/",component:S}),r.a.createElement(P.b,{exact:!0,path:"/login",component:function(){return u.first_name?r.a.createElement(P.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(D,{path:"login",handleChange:g,handleFormSubmit:y}))}}),r.a.createElement(P.b,{exact:!0,path:"/register",component:function(){return u.first_name?r.a.createElement(P.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement(D,{path:"register",handleChange:g,handleFormSubmit:_}))}}),r.a.createElement(P.b,{exact:!0,path:"/dashboard",component:function(){return r.a.createElement(Y,null)}}),r.a.createElement(P.b,{exact:!0,path:"/site",component:function(){return r.a.createElement(Y,null)}}))))};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p.a,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,t,a){e.exports=a(108)},58:function(e,t,a){},59:function(e,t,a){},79:function(e,t){},81:function(e,t){},98:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.b26104ce.chunk.js.map