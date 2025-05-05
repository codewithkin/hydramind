export async function adjustIntake(req, res) {
  try {
    // Get the userId, amount and timeStamp from the request body
    const { temperature } = req.body;
    if (!temperature) {
      console.log("Temperature missing");
    }
    // Return dummy response
    res.status(200).json({
      message: "Yes, you made a request to the adjust intake route",
    });
  } catch (e) {
    console.log("An error occured while adjusting intake: ", e);
    res.status(500).send("An error occured while adjusting intake");
  }
}
