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
exports.UserInvitationCreateRequestDataAttributesToJSON = exports.UserInvitationCreateRequestDataAttributesFromJSONTyped = exports.UserInvitationCreateRequestDataAttributesFromJSON = exports.instanceOfUserInvitationCreateRequestDataAttributes = void 0;
const runtime_1 = require("../runtime");
const UserRole_1 = require("./UserRole");
/**
 * Check if a given object implements the UserInvitationCreateRequestDataAttributes interface.
 */
function instanceOfUserInvitationCreateRequestDataAttributes(value) {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "roles" in value;
    return isInstance;
}
exports.instanceOfUserInvitationCreateRequestDataAttributes = instanceOfUserInvitationCreateRequestDataAttributes;
function UserInvitationCreateRequestDataAttributesFromJSON(json) {
    return UserInvitationCreateRequestDataAttributesFromJSONTyped(json, false);
}
exports.UserInvitationCreateRequestDataAttributesFromJSON = UserInvitationCreateRequestDataAttributesFromJSON;
function UserInvitationCreateRequestDataAttributesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': json['email'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'roles': (json['roles'].map(UserRole_1.UserRoleFromJSON)),
        'allAppsVisible': !(0, runtime_1.exists)(json, 'allAppsVisible') ? undefined : json['allAppsVisible'],
        'provisioningAllowed': !(0, runtime_1.exists)(json, 'provisioningAllowed') ? undefined : json['provisioningAllowed'],
    };
}
exports.UserInvitationCreateRequestDataAttributesFromJSONTyped = UserInvitationCreateRequestDataAttributesFromJSONTyped;
function UserInvitationCreateRequestDataAttributesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'roles': (value.roles.map(UserRole_1.UserRoleToJSON)),
        'allAppsVisible': value.allAppsVisible,
        'provisioningAllowed': value.provisioningAllowed,
    };
}
exports.UserInvitationCreateRequestDataAttributesToJSON = UserInvitationCreateRequestDataAttributesToJSON;
//# sourceMappingURL=UserInvitationCreateRequestDataAttributes.js.map