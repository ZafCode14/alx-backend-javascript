export default function getStudentsIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.reduce((sum) => sum + 1, 0);
}
