export default class SharedAPI {
  static async logout(req, res) {
    req.session.destroy((err) => {
      if (err) throw err;

      res.status(200).json({
        status: "Success",
        message: "Successfully logged out."
      })
    })
  }

  static async computeYearsBetweenTwoDates(patientBirthdate, yearNow) {
    const yearOfBirth = patientBirthdate.getFullYear();
    const patientAge = yearNow - yearOfBirth;

    return patientAge;
  }
}