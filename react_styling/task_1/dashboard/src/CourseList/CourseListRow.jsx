import React from "react";

export default function CourseListRow({
  isHeader = false,
  textFirstCell = "",
  textSecondCell = null,
}) {
  if (isHeader) {
    return (
      <tr className="bg-table-header/66">
        {textSecondCell === null ? (
          <th
            colSpan="2"
            className="border border-gray-400 text-center"
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="border border-gray-400 text-center">
              {textFirstCell}
            </th>
            <th className="border border-gray-400 text-center">
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr className="bg-table-rows/45">
      <td className="border border-gray-400 pl-2">{textFirstCell}</td>
      <td className="border border-gray-400 pl-2">{textSecondCell}</td>
    </tr>
  );
}