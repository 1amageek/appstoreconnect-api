"use strict";
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
const client_1 = require("./client");
const client = new client_1.AppStoreConnectClient({
    issuerId: "e51c72d5-1b85-4849-88b4-221743d14dd6",
    privateKeyId: "6DZSVNFMMD",
    privateKey: `-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgaG8eJVpmXE4XtqRh\nxMNIDm1sEYBSzKUkLCe7LJYalJ6gCgYIKoZIzj0DAQehRANCAASAlVdVtf4iwWxO\nec/tCFwU+8/kSIbx/g/wkNhAgP3yV3X43dg0UX+0UL3REo9TqcZLU3cnMemRpL54\nDNRk4GM1\n-----END PRIVATE KEY-----`
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const resourceID = "1611581708";
    const bundleID = "inc.stamp.too.debug.Clip";
    try {
        const response = yield client.getAppsApi().appsAppClipsGetToManyRelated({ id: resourceID, filterBundleId: [bundleID] });
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
    // console.log(response.response)
});
main();
//# sourceMappingURL=index.js.map