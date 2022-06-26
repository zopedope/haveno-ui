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

import { describe, expect, it, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyWalletTransactions } from "./MyWalletTransactions";
import { AppProviders } from "@atoms/AppProviders";

describe("organisms::MyWalletMoneroBalance", () => {
  beforeAll(() => {
    vi.mock("@hooks/haveno/useXmrTxs", () => ({
      useXmrTxs: () => ({
        isLoading: false,
        isSuccess: true,
        data: [
          {
            timestamp: 1653593643913,
            height: "1.334423",
            fee: "3.33",
            isConfirmed: true,
            isLocked: false,
            hash: "HASHADDRESS",
            incomingTransfersList: [
              {
                amount: "10000",
                accountIndex: 1,
                subaddressIndex: 1,
                address: "INCOMINGADDRESS",
                numSuggestedConfirmations: 100,
              },
            ],
            outgoingTransfer: {},
            metadata: "",
          },
        ],
      }),
    }));
  });

  it("renders without exploding.", () => {
    const { asFragment, unmount } = render(
      <AppProviders>
        <MyWalletTransactions />
      </AppProviders>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it("renders date detail correctly.", () => {
    const { unmount } = render(
      <AppProviders>
        <MyWalletTransactions />
      </AppProviders>
    );
    expect(screen.queryByText("May 26, 2022")).toBeInTheDocument();
    unmount();
  });

  it("renders time detail correctly.", () => {
    const { unmount } = render(
      <AppProviders>
        <MyWalletTransactions />
      </AppProviders>
    );
    expect(screen.queryByText("7:34 PM")).toBeInTheDocument();
    unmount();
  });
});
