// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ProMonitor from "../../model/ProMonitor"
export default function handler(req, res) {
  res.send("hello")
  let a = new ProMonitor("Carlos","Math","viernes 2 a 5","nil","nil")
  res.send(a)
}
