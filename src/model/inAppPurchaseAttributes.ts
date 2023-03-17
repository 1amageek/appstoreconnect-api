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

import { RequestFile } from './models';

export class InAppPurchaseAttributes {
    'referenceName'?: string;
    'productId'?: string;
    'inAppPurchaseType'?: InAppPurchaseAttributes.InAppPurchaseTypeEnum;
    'state'?: InAppPurchaseAttributes.StateEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "referenceName",
            "baseName": "referenceName",
            "type": "string"
        },
        {
            "name": "productId",
            "baseName": "productId",
            "type": "string"
        },
        {
            "name": "inAppPurchaseType",
            "baseName": "inAppPurchaseType",
            "type": "InAppPurchaseAttributes.InAppPurchaseTypeEnum"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InAppPurchaseAttributes.StateEnum"
        }    ];

    static getAttributeTypeMap() {
        return InAppPurchaseAttributes.attributeTypeMap;
    }
}

export namespace InAppPurchaseAttributes {
    export enum InAppPurchaseTypeEnum {
        AutomaticallyRenewableSubscription = <any> 'AUTOMATICALLY_RENEWABLE_SUBSCRIPTION',
        NonConsumable = <any> 'NON_CONSUMABLE',
        Consumable = <any> 'CONSUMABLE',
        NonRenewingSubscription = <any> 'NON_RENEWING_SUBSCRIPTION',
        FreeSubscription = <any> 'FREE_SUBSCRIPTION'
    }
    export enum StateEnum {
        Created = <any> 'CREATED',
        DeveloperSignedOff = <any> 'DEVELOPER_SIGNED_OFF',
        DeveloperActionNeeded = <any> 'DEVELOPER_ACTION_NEEDED',
        DeletionInProgress = <any> 'DELETION_IN_PROGRESS',
        Approved = <any> 'APPROVED',
        Deleted = <any> 'DELETED',
        RemovedFromSale = <any> 'REMOVED_FROM_SALE',
        DeveloperRemovedFromSale = <any> 'DEVELOPER_REMOVED_FROM_SALE',
        WaitingForUpload = <any> 'WAITING_FOR_UPLOAD',
        ProcessingContent = <any> 'PROCESSING_CONTENT',
        Replaced = <any> 'REPLACED',
        Rejected = <any> 'REJECTED',
        WaitingForScreenshot = <any> 'WAITING_FOR_SCREENSHOT',
        PrepareForSubmission = <any> 'PREPARE_FOR_SUBMISSION',
        MissingMetadata = <any> 'MISSING_METADATA',
        ReadyToSubmit = <any> 'READY_TO_SUBMIT',
        WaitingForReview = <any> 'WAITING_FOR_REVIEW',
        InReview = <any> 'IN_REVIEW',
        PendingDeveloperRelease = <any> 'PENDING_DEVELOPER_RELEASE'
    }
}
