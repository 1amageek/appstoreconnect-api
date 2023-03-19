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
exports.CertificateCreateRequestDataToJSON = exports.CertificateCreateRequestDataFromJSONTyped = exports.CertificateCreateRequestDataFromJSON = exports.instanceOfCertificateCreateRequestData = exports.CertificateCreateRequestDataTypeEnum = void 0;
const CertificateCreateRequestDataAttributes_1 = require("./CertificateCreateRequestDataAttributes");
/**
 * @export
 */
exports.CertificateCreateRequestDataTypeEnum = {
    Certificates: 'certificates'
};
/**
 * Check if a given object implements the CertificateCreateRequestData interface.
 */
function instanceOfCertificateCreateRequestData(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "attributes" in value;
    return isInstance;
}
exports.instanceOfCertificateCreateRequestData = instanceOfCertificateCreateRequestData;
function CertificateCreateRequestDataFromJSON(json) {
    return CertificateCreateRequestDataFromJSONTyped(json, false);
}
exports.CertificateCreateRequestDataFromJSON = CertificateCreateRequestDataFromJSON;
function CertificateCreateRequestDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'attributes': (0, CertificateCreateRequestDataAttributes_1.CertificateCreateRequestDataAttributesFromJSON)(json['attributes']),
    };
}
exports.CertificateCreateRequestDataFromJSONTyped = CertificateCreateRequestDataFromJSONTyped;
function CertificateCreateRequestDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'attributes': (0, CertificateCreateRequestDataAttributes_1.CertificateCreateRequestDataAttributesToJSON)(value.attributes),
    };
}
exports.CertificateCreateRequestDataToJSON = CertificateCreateRequestDataToJSON;
//# sourceMappingURL=CertificateCreateRequestData.js.map