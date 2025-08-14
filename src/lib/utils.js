export function formatDate(dateStr) {
const d = new Date(dateStr);
return d.toLocaleDateString('mr-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}