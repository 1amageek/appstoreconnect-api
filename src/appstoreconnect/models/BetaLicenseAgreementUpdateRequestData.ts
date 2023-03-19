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
import type { BetaLicenseAgreementAttributes } from './BetaLicenseAgreementAttributes';
import {
    BetaLicenseAgreementAttributesFromJSON,
    BetaLicenseAgreementAttributesFromJSONTyped,
    BetaLicenseAgreementAttributesToJSON,
} from './BetaLicenseAgreementAttributes';

/**
 * 
 * @export
 * @interface BetaLicenseAgreementUpdateRequestData
 */
export interface BetaLicenseAgreementUpdateRequestData {
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreementUpdateRequestData
     */
    type: BetaLicenseAgreementUpdateRequestDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof BetaLicenseAgreementUpdateRequestData
     */
    id: string;
    /**
     * 
     * @type {BetaLicenseAgreementAttributes}
     * @memberof BetaLicenseAgreementUpdateRequestData
     */
    attributes?: BetaLicenseAgreementAttributes;
}


/**
 * @export
 */
export const BetaLicenseAgreementUpdateRequestDataTypeEnum = {
    BetaLicenseAgreements: 'betaLicenseAgreements'
} as const;
export type BetaLicenseAgreementUpdateRequestDataTypeEnum = typeof BetaLicenseAgreementUpdateRequestDataTypeEnum[keyof typeof BetaLicenseAgreementUpdateRequestDataTypeEnum];


/**
 * Check if a given object implements the BetaLicenseAgreementUpdateRequestData interface.
 */
export function instanceOfBetaLicenseAgreementUpdateRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function BetaLicenseAgreementUpdateRequestDataFromJSON(json: any): BetaLicenseAgreementUpdateRequestData {
    return BetaLicenseAgreementUpdateRequestDataFromJSONTyped(json, false);
}

export function BetaLicenseAgreementUpdateRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BetaLicenseAgreementUpdateRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': !exists(json, 'attributes') ? undefined : BetaLicenseAgreementAttributesFromJSON(json['attributes']),
    };
}

export function BetaLicenseAgreementUpdateRequestDataToJSON(value?: BetaLicenseAgreementUpdateRequestData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': BetaLicenseAgreementAttributesToJSON(value.attributes),
    };
}

