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

import { exists, mapValues } from '../runtime';
import type { CiTestStatus } from './CiTestStatus';
import {
    CiTestStatusFromJSON,
    CiTestStatusFromJSONTyped,
    CiTestStatusToJSON,
} from './CiTestStatus';

/**
 * 
 * @export
 * @interface CiTestResultAttributesDestinationTestResultsInner
 */
export interface CiTestResultAttributesDestinationTestResultsInner {
    /**
     * 
     * @type {string}
     * @memberof CiTestResultAttributesDestinationTestResultsInner
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof CiTestResultAttributesDestinationTestResultsInner
     */
    deviceName?: string;
    /**
     * 
     * @type {string}
     * @memberof CiTestResultAttributesDestinationTestResultsInner
     */
    osVersion?: string;
    /**
     * 
     * @type {CiTestStatus}
     * @memberof CiTestResultAttributesDestinationTestResultsInner
     */
    status?: CiTestStatus;
    /**
     * 
     * @type {number}
     * @memberof CiTestResultAttributesDestinationTestResultsInner
     */
    duration?: number;
}

/**
 * Check if a given object implements the CiTestResultAttributesDestinationTestResultsInner interface.
 */
export function instanceOfCiTestResultAttributesDestinationTestResultsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CiTestResultAttributesDestinationTestResultsInnerFromJSON(json: any): CiTestResultAttributesDestinationTestResultsInner {
    return CiTestResultAttributesDestinationTestResultsInnerFromJSONTyped(json, false);
}

export function CiTestResultAttributesDestinationTestResultsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiTestResultAttributesDestinationTestResultsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'deviceName': !exists(json, 'deviceName') ? undefined : json['deviceName'],
        'osVersion': !exists(json, 'osVersion') ? undefined : json['osVersion'],
        'status': !exists(json, 'status') ? undefined : CiTestStatusFromJSON(json['status']),
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
    };
}

export function CiTestResultAttributesDestinationTestResultsInnerToJSON(value?: CiTestResultAttributesDestinationTestResultsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'deviceName': value.deviceName,
        'osVersion': value.osVersion,
        'status': CiTestStatusToJSON(value.status),
        'duration': value.duration,
    };
}

