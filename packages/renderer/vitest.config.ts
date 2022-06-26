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

import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

/**
 * Config for global end-to-end tests
 * placed in project root tests folder
 * @type {import('vite').UserConfig}
 * @see https://vitest.dev/config/
 */
const config = mergeConfig(viteConfig, {
  test: {
    globalSetup: ["./tests/global-setup.ts"],
    setupFiles: ["../../tests/setup-tests.ts"],
    environment: "jsdom",
    include: ["./src/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      reporter: ["html"],
    },
  },
});

export default config;
