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
exports.EndUserLicenseAgreementCreateRequestDataToJSON = exports.EndUserLicenseAgreementCreateRequestDataFromJSONTyped = exports.EndUserLicenseAgreementCreateRequestDataFromJSON = exports.instanceOfEndUserLicenseAgreementCreateRequestData = exports.EndUserLicenseAgreementCreateRequestDataTypeEnum = void 0;
const EndUserLicenseAgreementCreateRequestDataAttributes_1 = require("./EndUserLicenseAgreementCreateRequestDataAttributes");
const EndUserLicenseAgreementCreateRequestDataRelationships_1 = require("./EndUserLicenseAgreementCreateRequestDataRelationships");
/**
 * @export
 */
exports.EndUserLicenseAgreementCreateRequestDataTypeEnum = {
    EndUserLicenseAgreements: 'endUserLicenseAgreements'
};
/**
 * Check if a given object implements the EndUserLicenseAgreementCreateRequestData interface.
 */
function instanceOfEndUserLicenseAgreementCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;
    return isInstance;
}
exports.instanceOfEndUserLicenseAgreementCreateRequestData = instanceOfEndUserLicenseAgreementCreateRequestData;
function EndUserLicenseAgreementCreateRequestDataFromJSON(json) {
    return EndUserLicenseAgreementCreateRequestDataFromJSONTyped(json, false);
}
exports.EndUserLicenseAgreementCreateRequestDataFromJSON = EndUserLicenseAgreementCreateRequestDataFromJSON;
function EndUserLicenseAgreementCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, EndUserLicenseAgreementCreateRequestDataAttributes_1.EndUserLicenseAgreementCreateRequestDataAttributesFromJSON)(json['attributes']),
        'relationships': (0, EndUserLicenseAgreementCreateRequestDataRelationships_1.EndUserLicenseAgreementCreateRequestDataRelationshipsFromJSON)(json['relationships']),
    };
}
exports.EndUserLicenseAgreementCreateRequestDataFromJSONTyped = EndUserLicenseAgreementCreateRequestDataFromJSONTyped;
function EndUserLicenseAgreementCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, EndUserLicenseAgreementCreateRequestDataAttributes_1.EndUserLicenseAgreementCreateRequestDataAttributesToJSON)(value.attributes),
        'relationships': (0, EndUserLicenseAgreementCreateRequestDataRelationships_1.EndUserLicenseAgreementCreateRequestDataRelationshipsToJSON)(value.relationships),
    };
}
exports.EndUserLicenseAgreementCreateRequestDataToJSON = EndUserLicenseAgreementCreateRequestDataToJSON;
//# sourceMappingURL=EndUserLicenseAgreementCreateRequestData.js.map