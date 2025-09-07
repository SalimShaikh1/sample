
// get
exports.getBalance = async (req, res) => {
  try {
      // const balance = await Balance.create(req.body);
      console.log('test');
      
      res.status(200).json('Test');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


