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
import type { DocumentLinks } from './DocumentLinks';
import type { SubscriptionOfferCode } from './SubscriptionOfferCode';
import type { SubscriptionOfferCodeOneTimeUseCode } from './SubscriptionOfferCodeOneTimeUseCode';
/**
 *
 * @export
 * @interface SubscriptionOfferCodeOneTimeUseCodeResponse
 */
export interface SubscriptionOfferCodeOneTimeUseCodeResponse {
    /**
     *
     * @type {SubscriptionOfferCodeOneTimeUseCode}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    data: SubscriptionOfferCodeOneTimeUseCode;
    /**
     *
     * @type {Array<SubscriptionOfferCode>}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    included?: Array<SubscriptionOfferCode>;
    /**
     *
     * @type {DocumentLinks}
     * @memberof SubscriptionOfferCodeOneTimeUseCodeResponse
     */
    links: DocumentLinks;
}
/**
 * Check if a given object implements the SubscriptionOfferCodeOneTimeUseCodeResponse interface.
 */
export declare function instanceOfSubscriptionOfferCodeOneTimeUseCodeResponse(value: object): boolean;
export declare function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSON(json: any): SubscriptionOfferCodeOneTimeUseCodeResponse;
export declare function SubscriptionOfferCodeOneTimeUseCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionOfferCodeOneTimeUseCodeResponse;
export declare function SubscriptionOfferCodeOneTimeUseCodeResponseToJSON(value?: SubscriptionOfferCodeOneTimeUseCodeResponse | null): any;
