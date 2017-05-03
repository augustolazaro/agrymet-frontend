export const GENERATE_REPORT = 'GENERATE_REPORT'

export function generateReport(reportType) {
  return { type: 'GENERATE_REPORT', reportType }
}
