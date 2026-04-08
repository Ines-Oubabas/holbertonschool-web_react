import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  row: {
    backgroundColor: '#f5f5f5ab',
  },
});

export default function CourseListRow({
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
  isSelected = false,
  onChangeRow,
  changeRow,
  id,
}) {
  const rowStyle = isHeader ? styles.headerRow : styles.row;

  const handleChange =
    typeof onChangeRow === 'function'
      ? onChangeRow
      : typeof changeRow === 'function'
      ? changeRow
      : () => {};

  return isHeader ? (
    <tr className={css(rowStyle)}>
      {textSecondCell === null ? (
        <th colSpan="2">{textFirstCell}</th>
      ) : (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )}
    </tr>
  ) : (
    <tr className={css(rowStyle)}>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(event) => handleChange(id, event.target.checked)}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
}
