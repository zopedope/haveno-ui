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

export const updateTableCell = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>,
  rowIndex: number,
  columnId: string,
  value: unknown
) => {
  return data.map((row, index) => {
    if (index === rowIndex) {
      return {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...data[rowIndex]!,
        [columnId]: value,
      };
    }
    return row;
  });
};
