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
/**
 * 
 * @export
 * @interface ReviewSubmissionUpdateRequestDataAttributes
 */
export interface ReviewSubmissionUpdateRequestDataAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof ReviewSubmissionUpdateRequestDataAttributes
     */
    submitted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ReviewSubmissionUpdateRequestDataAttributes
     */
    canceled?: boolean;
}

/**
 * Check if a given object implements the ReviewSubmissionUpdateRequestDataAttributes interface.
 */
export function instanceOfReviewSubmissionUpdateRequestDataAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReviewSubmissionUpdateRequestDataAttributesFromJSON(json: any): ReviewSubmissionUpdateRequestDataAttributes {
    return ReviewSubmissionUpdateRequestDataAttributesFromJSONTyped(json, false);
}

export function ReviewSubmissionUpdateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReviewSubmissionUpdateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'submitted': !exists(json, 'submitted') ? undefined : json['submitted'],
        'canceled': !exists(json, 'canceled') ? undefined : json['canceled'],
    };
}

export function ReviewSubmissionUpdateRequestDataAttributesToJSON(value?: ReviewSubmissionUpdateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'submitted': value.submitted,
        'canceled': value.canceled,
    };
}
