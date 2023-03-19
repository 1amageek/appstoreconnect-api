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

import {
    ErrorSourceParameter,
    instanceOfErrorSourceParameter,
    ErrorSourceParameterFromJSON,
    ErrorSourceParameterFromJSONTyped,
    ErrorSourceParameterToJSON,
} from './ErrorSourceParameter';
import {
    ErrorSourcePointer,
    instanceOfErrorSourcePointer,
    ErrorSourcePointerFromJSON,
    ErrorSourcePointerFromJSONTyped,
    ErrorSourcePointerToJSON,
} from './ErrorSourcePointer';

/**
 * @type ErrorResponseErrorsInnerSource
 * 
 * @export
 */
export type ErrorResponseErrorsInnerSource = ErrorSourceParameter | ErrorSourcePointer;

export function ErrorResponseErrorsInnerSourceFromJSON(json: any): ErrorResponseErrorsInnerSource {
    return ErrorResponseErrorsInnerSourceFromJSONTyped(json, false);
}

export function ErrorResponseErrorsInnerSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponseErrorsInnerSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ErrorSourceParameterFromJSONTyped(json, true), ...ErrorSourcePointerFromJSONTyped(json, true) };
}

export function ErrorResponseErrorsInnerSourceToJSON(value?: ErrorResponseErrorsInnerSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfErrorSourceParameter(value)) {
        return ErrorSourceParameterToJSON(value as ErrorSourceParameter);
    }
    if (instanceOfErrorSourcePointer(value)) {
        return ErrorSourcePointerToJSON(value as ErrorSourcePointer);
    }

    return {};
}
