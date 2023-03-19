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
import * as runtime from '../runtime';
import type { InAppPurchaseContentResponse } from '../models';
export interface InAppPurchaseContentsGetInstanceRequest {
    id: string;
    fieldsInAppPurchaseContents?: Array<InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum>;
    include?: Array<InAppPurchaseContentsGetInstanceIncludeEnum>;
}
/**
 *
 */
export declare class InAppPurchaseContentsApi extends runtime.BaseAPI {
    /**
     */
    inAppPurchaseContentsGetInstanceRaw(requestParameters: InAppPurchaseContentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseContentResponse>>;
    /**
     */
    inAppPurchaseContentsGetInstance(requestParameters: InAppPurchaseContentsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseContentResponse>;
}
/**
 * @export
 */
export type InAppPurchaseContentsGetInstanceFieldsInAppPurchaseContentsEnum = 'fileName' | 'fileSize' | 'inAppPurchaseV2' | 'lastModifiedDate' | 'url';
/**
 * @export
 */
export type InAppPurchaseContentsGetInstanceIncludeEnum = 'inAppPurchaseV2';
