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
    App,
    instanceOfApp,
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import {
    BundleId,
    instanceOfBundleId,
    BundleIdFromJSON,
    BundleIdFromJSONTyped,
    BundleIdToJSON,
} from './BundleId';
import {
    ScmRepository,
    instanceOfScmRepository,
    ScmRepositoryFromJSON,
    ScmRepositoryFromJSONTyped,
    ScmRepositoryToJSON,
} from './ScmRepository';

/**
 * @type CiProductsResponseIncludedInner
 * 
 * @export
 */
export type CiProductsResponseIncludedInner = App | BundleId | ScmRepository;

export function CiProductsResponseIncludedInnerFromJSON(json: any): CiProductsResponseIncludedInner {
    return CiProductsResponseIncludedInnerFromJSONTyped(json, false);
}

export function CiProductsResponseIncludedInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CiProductsResponseIncludedInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    // @ts-ignore
    return { ...AppFromJSONTyped(json, true), ...BundleIdFromJSONTyped(json, true), ...ScmRepositoryFromJSONTyped(json, true) };
}

export function CiProductsResponseIncludedInnerToJSON(value?: CiProductsResponseIncludedInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfApp(value)) {
        return AppToJSON(value as App);
    }
    if (instanceOfBundleId(value)) {
        return BundleIdToJSON(value as BundleId);
    }
    if (instanceOfScmRepository(value)) {
        return ScmRepositoryToJSON(value as ScmRepository);
    }

    return {};
}

