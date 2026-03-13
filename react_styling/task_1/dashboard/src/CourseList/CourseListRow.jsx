import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th
            colSpan="2"
            className="border border-gray-400 bg-table-header/66 text-center"
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="border border-gray-400 bg-table-header/66 text-center">
              {textFirstCell}
            </th>
            <th className="border border-gray-400 bg-table-header/66 text-center">
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr>
      <td className="border border-gray-400 bg-table-rows/45 pl-2">
        {textFirstCell}
      </td>
      <td className="border border-gray-400 bg-table-rows/45 pl-2">
        {textSecondCell}
      </td>
    </tr>
  );
}