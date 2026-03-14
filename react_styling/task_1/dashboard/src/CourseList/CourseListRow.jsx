import React from 'react'

export default function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  return (
    <tr className={isHeader ? 'bg-table-header opacity-[0.66]' : 'bg-table-rows opacity-[0.45]'}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className="text-center">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="text-center">{textFirstCell}</th>
            <th className="text-center">{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className="pl-2">{textFirstCell}</td>
          <td className="pl-2">{textSecondCell}</td>
        </>
      )}
    </tr>
  )
}

