// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { ipcRenderer } from "electron";
import { exposeInMainWorld } from "./exposeInMainWorld";
import { IpcChannels } from "./types";
import type { DownloadBackupInput } from "./types";

// Export for types in contracts.d.ts
export const haveno = {
  downloadBackup: async (data: DownloadBackupInput): Promise<void> =>
    ipcRenderer.invoke(IpcChannels.DownloadBackup, data),

  getBackupData: async (): Promise<Uint8Array> =>
    ipcRenderer.invoke(IpcChannels.RestoreBackup),

  downloadQRCode: async (qrCode: string): Promise<void> =>
    ipcRenderer.invoke(IpcChannels.DownloadQRCode, qrCode),
};

exposeInMainWorld("haveno", haveno);