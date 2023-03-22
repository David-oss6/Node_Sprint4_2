const getPruebas = async (req, res) => {
  if (process.env.DATABASE === "mysql") {
    console.log("users")
    res.send("users")
  }
}

module.exports = getPruebas
