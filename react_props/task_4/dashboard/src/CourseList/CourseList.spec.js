import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseList from './CourseList';

describe('CourseList', () => {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  test('renders 5 different rows when it receives an array of courses objects', () => {
    const { container } = render(<CourseList courses={listCourses} />);
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(5);
  });

  test('renders 3 rows when it receives an empty array', () => {
    const { container } = render(<CourseList courses={[]} />);
    const rows = container.querySelectorAll('tr');
    expect(rows).toHaveLength(3);
  });
});