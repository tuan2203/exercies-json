const DATA ={
    "TripActivity": {
        "type": "array",
        "items": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "TripActivityNumber"
          ],
          "properties": {
            "TripActivityNumber": {
              "type": "string",
              "minLength": 1
            },
            "Regulator": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "RegulatorStartDateTime": {
                    "type": "string",
                    "minLength": 1
                  },
                  "RegulatorEndDateTime": {
                    "type": "string",
                    "minLength": 1
                  },
                  "RegulatorId": {
                    "type": "string",
                    "minLength": 1
                  }
                },
                "required": [
                  "RegulatorStartDateTime",
                  "RegulatorEndDateTime",
                  "RegulatorTripId"
                ]
              }
            }    
          }
        }
      }  
}
//----------------------------------------------------------------------
let message="";

confirmJson = jsonData =>{

!jsonData.hasOwnProperty("TripActivity")? message ="this is invalid " :""  ;
!jsonData.TripActivity.type ==='array'? message ="this is invalid " :"";

!typeof jsonData.TripActivity.items === "object" ? message ="this is invalid" :"";
jsonData.TripActivity.items.type !== "object" ? message ="this is invalid " :"";
jsonData.TripActivity.items.additionalProperties !==false ?message ="this is invalid " :"";
!Array.isArray(jsonData.TripActivity.items.required) ? message ="this is invalid " :"";

!jsonData.TripActivity.items.required.includes("TripActivityNumber") ? message ="this is invalid " :"";
typeof jsonData.TripActivity.items.properties !== "object" ? message ="this is invalid " :"";

typeof jsonData.TripActivity.items.properties.TripActivityNumber !== "object" ? message ="this is invalid " :"";
typeof jsonData.TripActivity.items.properties.TripActivityNumber !== "object" ? message ="this is invalid " :"";
jsonData.TripActivity.items.properties.TripActivityNumber["type"] !== "string" ? message ="this is invalid " :"";
jsonData.TripActivity.items.properties.TripActivityNumber["minLength"] !== 1 ? message ="this is invalid " :"";

jsonData.TripActivity.items.properties.Regulator["type"] !=="array"? message ="this is invalid " :"";
typeof jsonData.TripActivity.items.properties.Regulator.items !=="object" ? message ="this is invalid " :"";
jsonData.TripActivity.items.properties.Regulator.items["type"] !=="object" ? message ="this is invalid " :"";
typeof jsonData.TripActivity.items.properties.Regulator.items.properties !=="object"? message ="this is invalid" :"";

typeof jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorStartDateTime !=="object"? message ="this is invalid" :"";
jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorStartDateTime["type"] !=="string" ? message ="this is invalid " :"";
jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorStartDateTime["minLength"] !== 1? message ="this is invalid" :"";

typeof jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorEndDateTime !=="object"? message ="this is invalid " :"";
jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorEndDateTime["type"] !=="string" ? message ="this is invalid" :"";
jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorEndDateTime["minLength"] !== 1 ? message ="this is invalid" :"";

typeof jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorId !== "object" ? message ="this is invalid" :"";
jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorId["type"] !=="string" ? message ="this is invalid" :"";
jsonData.TripActivity.items.properties.Regulator.items.properties.RegulatorId["minLength"] !== 1 ? message ="this is invalid" :"";
  
!Array.isArray(jsonData.TripActivity.items.properties.Regulator.items.required) ? message ="this is invalid" :"";
 jsonData.TripActivity.items.properties.Regulator.items.required[0] !== "RegulatorStartDateTime" ? message ="this is invalid" :"";
 jsonData.TripActivity.items.properties.Regulator.items.required[1] !== "RegulatorEndDateTime" ? message ="this is invalid" :"";
 jsonData.TripActivity.items.properties.Regulator.items.required[2] !== "RegulatorTripId" ? message ="this is invalid" :"";
  
}
confirmJson(DATA);


document.getElementById("hintMessage").innerHTML = message;
