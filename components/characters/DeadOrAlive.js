export default function DeadOrAlive(status) {
  return `<small class="text-muted">${generateStatus(status)}</small>`;
}

const generateStatus = (status) => {
  return status === "Alive" ? "✅ Alive" : "❌ Dead";
};
