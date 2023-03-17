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
import { PagedDocumentLinks } from './pagedDocumentLinks';
import { PagingInformation } from './pagingInformation';
import { ReviewSubmissionItem } from './reviewSubmissionItem';
import { ReviewSubmissionItemsResponseIncludedInner } from './reviewSubmissionItemsResponseIncludedInner';

export class ReviewSubmissionItemsResponse {
    'data': Array<ReviewSubmissionItem>;
    'included'?: Array<ReviewSubmissionItemsResponseIncludedInner>;
    'links': PagedDocumentLinks;
    'meta'?: PagingInformation;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ReviewSubmissionItem>"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<ReviewSubmissionItemsResponseIncludedInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "PagedDocumentLinks"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PagingInformation"
        }    ];

    static getAttributeTypeMap() {
        return ReviewSubmissionItemsResponse.attributeTypeMap;
    }
}

