export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await fetch("https://script.google.com/macros/s/AKfycbxuWd_ZBjj-ozqcTJm0kWOeRVA9_l7kvORw8fgUHOCetOpxPiGzs4d6rHMla3hUugiUaA/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
    } catch (e) {}
  }
  res.status(200).json({ status: "ok" });
}
