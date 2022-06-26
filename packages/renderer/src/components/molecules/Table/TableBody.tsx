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

import { Fragment } from "react";
import { useTableContext } from "./use-table-context";

export function TableBody() {
  const {
    table,
    props: { rowSubComponent, onRowClick },
  } = useTableContext();

  return (
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <Fragment key={row.id}>
          <tr
            key={row.id}
            onClick={() => {
              row.toggleExpanded();
              onRowClick && onRowClick(row);
            }}
          >
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                style={{
                  width: cell.column.getSize(),
                  textAlign: cell.column.columnDef?.meta?.textAlign,
                }}
              >
                {cell.renderCell()}
              </td>
            ))}
          </tr>
          {row.getIsExpanded() && rowSubComponent ? (
            <tr key={`${row.id}-subcomponent`}>
              <td colSpan={row.getVisibleCells()?.length}>
                {rowSubComponent({ row })}
              </td>
            </tr>
          ) : null}
        </Fragment>
      ))}
    </tbody>
  );
}
