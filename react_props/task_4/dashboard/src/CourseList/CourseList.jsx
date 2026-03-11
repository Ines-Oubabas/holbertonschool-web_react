import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ courses = [] }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          isHeader={true}
          textFirstCell="Available courses"
          textSecondCell={null}
        />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow
            isHeader={true}
            textFirstCell="No course available yet"
            textSecondCell={null}
          />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              isHeader={false}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

export default CourseList;