import CourseListRow from './CourseListRow'
import WithLogging from '../HOC/WithLogging'

function CourseList({ courses = [] }) {
  return (
    <div className="courses my-32 w-4/5 max-[520px]:my-8 max-[520px]:w-full max-[520px]:overflow-x-auto mx-auto h-[29vh]">
      <table id="CourseList" className="w-full min-w-[280px] border-collapse border border-gray-300">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))
          ) : (
            <CourseListRow textFirstCell="No course available yet" />
          )}
        </tbody>
      </table>
    </div>
  )
}

const CourseListWithLogging = WithLogging(CourseList)
export default CourseListWithLogging