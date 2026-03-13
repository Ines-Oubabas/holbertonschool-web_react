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
            className="border border-gray-400 text-center bg-table-header/66"
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="border border-gray-400 text-center bg-table-header/66">
              {textFirstCell}
            </th>
            <th className="border border-gray-400 text-center bg-table-header/66">
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr>
      <td className="border border-gray-400 pl-2 bg-table-rows/45">
        {textFirstCell}
      </td>
      <td className="border border-gray-400 pl-2 bg-table-rows/45">
        {textSecondCell}
      </td>
    </tr>
  );
}