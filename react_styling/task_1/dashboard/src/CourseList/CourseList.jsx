import CourseListRow from './CourseListRow'
import WithLogging from '../HOC/WithLogging'

function CourseList({ courses = [] }) {
  return (
    <div className="courses mx-auto my-32 w-4/5 h-[29vh]">
      <table id="CourseList" className="w-full border-collapse border border-gray-300">
        {courses.length > 0 ? (
          <>
            <thead>
              <CourseListRow textFirstCell="Available courses" isHeader={true} />
              <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
              {courses.map(course => (
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                />
              ))}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr className="bg-table-header opacity-66">
              <td colSpan="2" className="border border-gray-400 text-center font-bold">
                No course available yet
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}

const CourseListWithLogging = WithLogging(CourseList)
export default CourseListWithLogging