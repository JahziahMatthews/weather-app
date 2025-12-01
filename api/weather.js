export default async function gateway(req, res) {
    const { city } = req.query

    if (!city){
        return res.status(400)
    }

    try {
        const response = await fetch(`

        `)
        
        const data = response.json()
        
    } catch (e) {
        
    }
}