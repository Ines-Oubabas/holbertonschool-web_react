import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  test('renders one th with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
        </tbody>
      </table>
    );

    const th = container.querySelectorAll('th');
    expect(th).toHaveLength(1);
    expect(th[0]).toHaveAttribute('colspan', '2');
    expect(th[0]).toHaveTextContent('Available courses');
  });

  test('renders two th cells when isHeader is true and textSecondCell is not null', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </tbody>
      </table>
    );

    const th = container.querySelectorAll('th');
    expect(th).toHaveLength(2);
  });

  test('renders two td cells when isHeader is false', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow
            textFirstCell="ES6"
            textSecondCell="60"
          />
        </tbody>
      </table>
    );

    const td = container.querySelectorAll('td');
    expect(td).toHaveLength(2);
  });
});