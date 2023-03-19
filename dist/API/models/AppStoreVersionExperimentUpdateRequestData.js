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
exports.AppStoreVersionExperimentUpdateRequestDataToJSON = exports.AppStoreVersionExperimentUpdateRequestDataFromJSONTyped = exports.AppStoreVersionExperimentUpdateRequestDataFromJSON = exports.instanceOfAppStoreVersionExperimentUpdateRequestData = exports.AppStoreVersionExperimentUpdateRequestDataTypeEnum = void 0;
const runtime_1 = require("../runtime");
const AppStoreVersionExperimentUpdateRequestDataAttributes_1 = require("./AppStoreVersionExperimentUpdateRequestDataAttributes");
/**
 * @export
 */
exports.AppStoreVersionExperimentUpdateRequestDataTypeEnum = {
    AppStoreVersionExperiments: 'appStoreVersionExperiments'
};
/**
 * Check if a given object implements the AppStoreVersionExperimentUpdateRequestData interface.
 */
function instanceOfAppStoreVersionExperimentUpdateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    return isInstance;
}
exports.instanceOfAppStoreVersionExperimentUpdateRequestData = instanceOfAppStoreVersionExperimentUpdateRequestData;
function AppStoreVersionExperimentUpdateRequestDataFromJSON(json) {
    return AppStoreVersionExperimentUpdateRequestDataFromJSONTyped(json, false);
}
exports.AppStoreVersionExperimentUpdateRequestDataFromJSON = AppStoreVersionExperimentUpdateRequestDataFromJSON;
function AppStoreVersionExperimentUpdateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'id': json['id'],
        'attributes': !(0, runtime_1.exists)(json, 'attributes') ? undefined : (0, AppStoreVersionExperimentUpdateRequestDataAttributes_1.AppStoreVersionExperimentUpdateRequestDataAttributesFromJSON)(json['attributes']),
    };
}
exports.AppStoreVersionExperimentUpdateRequestDataFromJSONTyped = AppStoreVersionExperimentUpdateRequestDataFromJSONTyped;
function AppStoreVersionExperimentUpdateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'id': value.id,
        'attributes': (0, AppStoreVersionExperimentUpdateRequestDataAttributes_1.AppStoreVersionExperimentUpdateRequestDataAttributesToJSON)(value.attributes),
    };
}
exports.AppStoreVersionExperimentUpdateRequestDataToJSON = AppStoreVersionExperimentUpdateRequestDataToJSON;
//# sourceMappingURL=AppStoreVersionExperimentUpdateRequestData.js.map