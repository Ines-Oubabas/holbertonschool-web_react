import CourseListRow from './CourseListRow'
import WithLogging from '../HOC/WithLogging'

function CourseList({ courses = [] }) {
  return (
    <div className="courses">
      <table id="CourseList" className="w-full border-collapse">
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
              <td colSpan="2" className="text-center font-bold">
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

