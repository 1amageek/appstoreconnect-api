"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppCustomProductPageVersionCreateRequestDataToJSON = exports.AppCustomProductPageVersionCreateRequestDataFromJSONTyped = exports.AppCustomProductPageVersionCreateRequestDataFromJSON = exports.instanceOfAppCustomProductPageVersionCreateRequestData = exports.AppCustomProductPageVersionCreateRequestDataTypeEnum = void 0;
const AppCustomProductPageVersionCreateRequestDataRelationships_1 = require("./AppCustomProductPageVersionCreateRequestDataRelationships");
/**
 * @export
 */
exports.AppCustomProductPageVersionCreateRequestDataTypeEnum = {
    AppCustomProductPageVersions: 'appCustomProductPageVersions'
};
/**
 * Check if a given object implements the AppCustomProductPageVersionCreateRequestData interface.
 */
function instanceOfAppCustomProductPageVersionCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfAppCustomProductPageVersionCreateRequestData = instanceOfAppCustomProductPageVersionCreateRequestData;
function AppCustomProductPageVersionCreateRequestDataFromJSON(json) {
    return AppCustomProductPageVersionCreateRequestDataFromJSONTyped(json, false);
}
exports.AppCustomProductPageVersionCreateRequestDataFromJSON = AppCustomProductPageVersionCreateRequestDataFromJSON;
function AppCustomProductPageVersionCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'relationships': (0, AppCustomProductPageVersionCreateRequestDataRelationships_1.AppCustomProductPageVersionCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.AppCustomProductPageVersionCreateRequestDataFromJSONTyped = AppCustomProductPageVersionCreateRequestDataFromJSONTyped;
function AppCustomProductPageVersionCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'relationships': (0, AppCustomProductPageVersionCreateRequestDataRelationships_1.AppCustomProductPageVersionCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.AppCustomProductPageVersionCreateRequestDataToJSON = AppCustomProductPageVersionCreateRequestDataToJSON;
//# sourceMappingURL=AppCustomProductPageVersionCreateRequestData.js.map