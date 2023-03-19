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
exports.BetaTesterInvitationsApi = void 0;
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
class BetaTesterInvitationsApi extends runtime.BaseAPI {
    /**
     */
    betaTesterInvitationsCreateInstanceRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.betaTesterInvitationCreateRequest === null || requestParameters.betaTesterInvitationCreateRequest === undefined) {
                throw new runtime.RequiredError('betaTesterInvitationCreateRequest', 'Required parameter requestParameters.betaTesterInvitationCreateRequest was null or undefined when calling betaTesterInvitationsCreateInstance.');
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
                path: `/v1/betaTesterInvitations`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.BetaTesterInvitationCreateRequestToJSON)(requestParameters.betaTesterInvitationCreateRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.BetaTesterInvitationResponseFromJSON)(jsonValue));
        });
    }
    /**
     */
    betaTesterInvitationsCreateInstance(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.betaTesterInvitationsCreateInstanceRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.BetaTesterInvitationsApi = BetaTesterInvitationsApi;
//# sourceMappingURL=BetaTesterInvitationsApi.js.map