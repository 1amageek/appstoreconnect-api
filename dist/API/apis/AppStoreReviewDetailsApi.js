"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppStoreReviewDetailsApi = void 0;
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
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class AppStoreReviewDetailsApi extends runtime.BaseAPI {
    /**
     */
    appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppStoreReviewDetails) {
                queryParameters['fields[appStoreReviewDetails]'] = requestParameters.fieldsAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreReviewAttachments) {
                queryParameters['fields[appStoreReviewAttachments]'] = requestParameters.fieldsAppStoreReviewAttachments.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.include) {
                queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itcBearerToken", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/appStoreReviewDetails/{id}/appStoreReviewAttachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppStoreReviewAttachmentsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreReviewDetailsAppStoreReviewAttachmentsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appStoreReviewDetailsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.appStoreReviewDetailCreateRequest === null || requestParameters.appStoreReviewDetailCreateRequest === undefined) {
                throw new runtime.RequiredError('appStoreReviewDetailCreateRequest', 'Required parameter requestParameters.appStoreReviewDetailCreateRequest was null or undefined when calling appStoreReviewDetailsCreateInstance.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itcBearerToken", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/appStoreReviewDetails`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AppStoreReviewDetailCreateRequestToJSON)(requestParameters.appStoreReviewDetailCreateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppStoreReviewDetailResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreReviewDetailsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreReviewDetailsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appStoreReviewDetailsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreReviewDetailsGetInstance.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsAppStoreReviewDetails) {
                queryParameters['fields[appStoreReviewDetails]'] = requestParameters.fieldsAppStoreReviewDetails.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsAppStoreReviewAttachments) {
                queryParameters['fields[appStoreReviewAttachments]'] = requestParameters.fieldsAppStoreReviewAttachments.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitAppStoreReviewAttachments !== undefined) {
                queryParameters['limit[appStoreReviewAttachments]'] = requestParameters.limitAppStoreReviewAttachments;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itcBearerToken", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/appStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppStoreReviewDetailResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreReviewDetailsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreReviewDetailsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    appStoreReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling appStoreReviewDetailsUpdateInstance.');
            }
            if (requestParameters.appStoreReviewDetailUpdateRequest === null || requestParameters.appStoreReviewDetailUpdateRequest === undefined) {
                throw new runtime.RequiredError('appStoreReviewDetailUpdateRequest', 'Required parameter requestParameters.appStoreReviewDetailUpdateRequest was null or undefined when calling appStoreReviewDetailsUpdateInstance.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("itcBearerToken", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/appStoreReviewDetails/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'PATCH',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.AppStoreReviewDetailUpdateRequestToJSON)(requestParameters.appStoreReviewDetailUpdateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AppStoreReviewDetailResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    appStoreReviewDetailsUpdateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.appStoreReviewDetailsUpdateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AppStoreReviewDetailsApi = AppStoreReviewDetailsApi;
;
;
;
;
;
;
//# sourceMappingURL=AppStoreReviewDetailsApi.js.map