let jsonData ={
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

process = () =>jsonData.TripActivity.items.properties


test = ()=>{

!jsonData.hasOwnProperty("TripActivity")? message ="this is invalid 1" :""  ;
!jsonData.TripActivity.type ==='array'? message ="this is invalid 2" :""

!typeof jsonData.TripActivity.items === "object" ? message ="this is invalid 3" :""
jsonData.TripActivity.items.type !== "object" ? message ="this is invalid 4" :""
jsonData.TripActivity.items.additionalProperties !==false ?message ="this is invalid 5" :""
!Array.isArray(jsonData.TripActivity.items.required) ? message ="this is invalid 6" :""

!jsonData.TripActivity.items.required.includes("TripActivityNumber") ? message ="this is invalid 6" :""
typeof process() !== "object" ? message ="this is invalid 7" :""

typeof process().TripActivityNumber !== "object" ? message ="this is invalid 8" :""
typeof process().TripActivityNumber !== "object" ? message ="this is invalid 9" :""
process().TripActivityNumber["type"] !== "string" ? message ="this is invalid 10" :""
process().TripActivityNumber["minLength"] !== 1 ? message ="this is invalid 11" :""

process().Regulator["type"] !=="array"? message ="this is invalid 12" :""
typeof process().Regulator.items !=="object" ? message ="this is invalid 13" :""
process().Regulator.items["type"] !=="object" ? message ="this is invalid 14" :""
typeof process().Regulator.items.properties !=="object"? message ="this is invalid 15" :""

typeof process().Regulator.items.properties.RegulatorStartDateTime !=="object"? message ="this is invalid 16" :""
process().Regulator.items.properties.RegulatorStartDateTime["type"] !=="string" ? message ="this is invalid 17" :""
process().Regulator.items.properties.RegulatorStartDateTime["minLength"] !== 1? message ="this is invalid 18" :""

typeof process().Regulator.items.properties.RegulatorEndDateTime !=="object"? message ="this is invalid 19" :""
process().Regulator.items.properties.RegulatorEndDateTime["type"] !=="string" ? message ="this is invalid 20" :""
process().Regulator.items.properties.RegulatorEndDateTime["minLength"] !== 1 ? message ="this is invalid 21" :""

typeof process().Regulator.items.properties.RegulatorId !== "object" ? message ="this is invalid 22" :""
process().Regulator.items.properties.RegulatorId["type"] !=="string" ? message ="this is invalid 23" :""
process().Regulator.items.properties.RegulatorId["minLength"] !== 1 ? message ="this is invalid 24" :""
  
!Array.isArray(process().Regulator.items.required) ? message ="this is invalid 25" :""
 process().Regulator.items.required[0] !== "RegulatorStartDateTime" ? message ="this is invalid 26" :""
 process().Regulator.items.required[1] !== "RegulatorEndDateTime" ? message ="this is invalid 27" :""
 process().Regulator.items.required[2] !== "RegulatorTripId" ? message ="this is invalid 28" :""
  
}
test();


document.getElementById("hintMessage").innerHTML = message;