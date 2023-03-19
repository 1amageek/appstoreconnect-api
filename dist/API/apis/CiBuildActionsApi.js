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
exports.CiBuildActionsApi = void 0;
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
class CiBuildActionsApi extends runtime.BaseAPI {
    /**
     */
    ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsArtifactsGetToManyRelated.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsCiArtifacts) {
                queryParameters['fields[ciArtifacts]'] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
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
                path: `/v1/ciBuildActions/{id}/artifacts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CiArtifactsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    ciBuildActionsArtifactsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsBuildRunGetToOneRelated.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsScmGitReferences) {
                queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiBuildRuns) {
                queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiWorkflows) {
                queryParameters['fields[ciWorkflows]'] = requestParameters.fieldsCiWorkflows.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsScmPullRequests) {
                queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiProducts) {
                queryParameters['fields[ciProducts]'] = requestParameters.fieldsCiProducts.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsBuilds) {
                queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limitBuilds !== undefined) {
                queryParameters['limit[builds]'] = requestParameters.limitBuilds;
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
                path: `/v1/ciBuildActions/{id}/buildRun`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CiBuildRunResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    ciBuildActionsBuildRunGetToOneRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    ciBuildActionsGetInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsGetInstance.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsCiBuildActions) {
                queryParameters['fields[ciBuildActions]'] = requestParameters.fieldsCiBuildActions.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.include) {
                queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiIssues) {
                queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiBuildRuns) {
                queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiTestResults) {
                queryParameters['fields[ciTestResults]'] = requestParameters.fieldsCiTestResults.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.fieldsCiArtifacts) {
                queryParameters['fields[ciArtifacts]'] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/ciBuildActions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CiBuildActionResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    ciBuildActionsGetInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ciBuildActionsGetInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsIssuesGetToManyRelated.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsCiIssues) {
                queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
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
                path: `/v1/ciBuildActions/{id}/issues`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CiIssuesResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    ciBuildActionsIssuesGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     */
    ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ciBuildActionsTestResultsGetToManyRelated.');
            }
            const queryParameters = {};
            if (requestParameters.fieldsCiTestResults) {
                queryParameters['fields[ciTestResults]'] = requestParameters.fieldsCiTestResults.join(runtime.COLLECTION_FORMATS["csv"]);
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
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
                path: `/v1/ciBuildActions/{id}/testResults`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.CiTestResultsResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    ciBuildActionsTestResultsGetToManyRelated(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.CiBuildActionsApi = CiBuildActionsApi;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//# sourceMappingURL=CiBuildActionsApi.js.map