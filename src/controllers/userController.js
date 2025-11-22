
const me = (req, res) => {
  try {
    return res.json({ status: true, user: req.user })

  } catch(err) {
      return res.status(500).json({ error: err.message })
  }
}

const getUsers = (req,res) => {
  try{
    const sql = `
    SELECT * FROM users
    `

    db.query(sql, (err, result) => {
      if(err) return res.status(501).json({ status: false, error: err.message })
      return res.json({ result })
    })
  }catch(e){
    console.log(e)
  }
}

const profile = (req, res) => {
  try {
    return res.json({ status: true })
  } catch(err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = { me, getUsers, profile }