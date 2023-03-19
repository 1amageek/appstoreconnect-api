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
exports.UserInvitationCreateRequestDataRelationshipsToJSON = exports.UserInvitationCreateRequestDataRelationshipsFromJSONTyped = exports.UserInvitationCreateRequestDataRelationshipsFromJSON = exports.instanceOfUserInvitationCreateRequestDataRelationships = void 0;
const runtime_1 = require("../runtime");
const UserInvitationCreateRequestDataRelationshipsVisibleApps_1 = require("./UserInvitationCreateRequestDataRelationshipsVisibleApps");
/**
 * Check if a given object implements the UserInvitationCreateRequestDataRelationships interface.
 */
function instanceOfUserInvitationCreateRequestDataRelationships(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUserInvitationCreateRequestDataRelationships = instanceOfUserInvitationCreateRequestDataRelationships;
function UserInvitationCreateRequestDataRelationshipsFromJSON(json) {
    return UserInvitationCreateRequestDataRelationshipsFromJSONTyped(json, false);
}
exports.UserInvitationCreateRequestDataRelationshipsFromJSON = UserInvitationCreateRequestDataRelationshipsFromJSON;
function UserInvitationCreateRequestDataRelationshipsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'visibleApps': !(0, runtime_1.exists)(json, 'visibleApps') ? undefined : (0, UserInvitationCreateRequestDataRelationshipsVisibleApps_1.UserInvitationCreateRequestDataRelationshipsVisibleAppsFromJSON)(json['visibleApps']),
    };
}
exports.UserInvitationCreateRequestDataRelationshipsFromJSONTyped = UserInvitationCreateRequestDataRelationshipsFromJSONTyped;
function UserInvitationCreateRequestDataRelationshipsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'visibleApps': (0, UserInvitationCreateRequestDataRelationshipsVisibleApps_1.UserInvitationCreateRequestDataRelationshipsVisibleAppsToJSON)(value.visibleApps),
    };
}
exports.UserInvitationCreateRequestDataRelationshipsToJSON = UserInvitationCreateRequestDataRelationshipsToJSON;
//# sourceMappingURL=UserInvitationCreateRequestDataRelationships.js.map