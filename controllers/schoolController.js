const db = require("../config/db");
const getDistance = require("../utils/distance");

// Add School API
exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Validation
  if (!name || !address || latitude == null || longitude == null) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  // Insert query
  const sql = `
    INSERT INTO schools (name, address, latitude, longitude)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        error: err
      });
    }

    res.status(201).json({
      message: " School added successfully",
      id: result.insertId
    });
  });
};

// List Schools API

exports.listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  // Validation
  if (!latitude || !longitude) {
    return res.status(400).json({
      message: "Latitude and Longitude are required"
    });
  }

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database error",
        error: err
      });
    }

    // Add distance to each school
    const schoolsWithDistance = results.map((school) => {
      const distance = getDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    // Sort by distance
    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  });
};