import React from "react";
import WithLogging from "../HOC/WithLogging";
import CourseListRow from "./CourseListRow";

function CourseList({ courses = [] }) {
  return (
    <div className="mx-auto my-8 w-[80%]">
      <table id="CourseList" className="w-full">
        {courses.length > 0 ? (
          <>
            <thead>
              <CourseListRow
                isHeader={true}
                textFirstCell="Available courses"
              />
              <CourseListRow
                isHeader={true}
                textFirstCell="Course name"
                textSecondCell="Credit"
              />
            </thead>
            <tbody>
              {courses.map((course) => (
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
            <CourseListRow
              isHeader={true}
              textFirstCell="No course available yet"
            />
          </tbody>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);