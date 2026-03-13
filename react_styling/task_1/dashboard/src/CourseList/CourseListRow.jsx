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
            className="bg-table-header/66 border border-gray-400 text-center"
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="bg-table-header/66 border border-gray-400 text-center">
              {textFirstCell}
            </th>
            <th className="bg-table-header/66 border border-gray-400 text-center">
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr>
      <td className="bg-table-rows/45 border border-gray-400 pl-2">
        {textFirstCell}
      </td>
      <td className="bg-table-rows/45 border border-gray-400 pl-2">
        {textSecondCell}
      </td>
    </tr>
  );
}