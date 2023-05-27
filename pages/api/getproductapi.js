export default async function handler(req, res) {
    let products = await fetch('http://localhost:3001/products')
    let data = await products.json()
    res.status(200).json({ name: data })
}