const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbfoods")

const foodsSeed =
  [
    {
      "reference": "Wheat bread",
      "country": "Australia",
      "ghgEmission": 3.7,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Czech Republic",
      "ghgEmission": 1.4,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Czech Republic",
      "ghgEmission": 1.5,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "France",
      "ghgEmission": 1.5,
      "genre": "Bread"
    },
    {
      "reference": "Wheat and rye bread",
      "country": "France",
      "ghgEmission": 4.5,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "France",
      "ghgEmission": 1.2,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Germany",
      "ghgEmission": 0.7,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Germany",
      "ghgEmission": 0.4,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Germany",
      "ghgEmission": 0.7,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Italy",
      "ghgEmission": 1.9,
      "genre": "Bread"
    },
    {
      "reference": "Wheat and rye bread",
      "country": "Norway",
      "ghgEmission": 1.8,
      "genre": "Bread"
    },
    {
      "reference": "Wheat and rye bread",
      "country": "Portugal",
      "ghgEmission": 2.1,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Portugal",
      "ghgEmission": 1.5,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Spain",
      "ghgEmission": 1.7,
      "genre": "Bread"
    },
    {
      "reference": "Wheat bread",
      "country": "Switzerland",
      "ghgEmission": 0.7,
      "genre": "Bread"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Wheat",
      "country": "Albania",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Belarus",
      "ghgEmission": 4.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Belgium",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Bolivia (Plurinational State of)",
      "ghgEmission": 2.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Bosnia and Herzegovina",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Burundi",
      "ghgEmission": 2.8,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Canada",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Canada",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Canada",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Canada",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Canada",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Chile",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Chile",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 2.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat flour",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Croatia",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Croatia",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Croatia",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Cyprus",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Rye",
      "country": "Czech Republic",
      "ghgEmission": 1,
      "genre": "Rye"
    },
    {
      "reference": "Rye",
      "country": "Czech Republic",
      "ghgEmission": 0.8,
      "genre": "Rye"
    },
    {
      "reference": "Wheat",
      "country": "Democratic People's Republic of Korea",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Denmark",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Denmark",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Denmark",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Egypt",
      "ghgEmission": 2.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Eritrea",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Estonia",
      "ghgEmission": 6.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Estonia",
      "ghgEmission": 5.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Estonia",
      "ghgEmission": 5.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Ethiopia",
      "ghgEmission": 4,
      "genre": "Wheat"
    },
    {
      "reference": "Rye",
      "country": "Finland",
      "ghgEmission": 2.9,
      "genre": "Rye"
    },
    {
      "reference": "Spring wheat",
      "country": "Finland",
      "ghgEmission": 2.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Soft wheat",
      "country": "France",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Soft wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Soft wheat",
      "country": "France",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Soft wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Winter rye",
      "country": "Germany",
      "ghgEmission": 0.9,
      "genre": "Rye"
    },
    {
      "reference": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Rye",
      "country": "Germany",
      "ghgEmission": 0.9,
      "genre": "Rye"
    },
    {
      "reference": "Wheat",
      "country": "Germany",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat flour",
      "country": "Greece",
      "ghgEmission": 1.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat flour",
      "country": "India",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat flour",
      "country": "India",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "India",
      "ghgEmission": 0.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Ireland",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Ireland",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Ireland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Italy",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Italy",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Italy",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Italy",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Italy",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Italy",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Japan",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Japan",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Kenya",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Kyrgyzstan",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Latvia",
      "ghgEmission": 5.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Latvia",
      "ghgEmission": 4.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Latvia",
      "ghgEmission": 4.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Lithuania",
      "ghgEmission": 3.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Lithuania",
      "ghgEmission": 3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Lithuania",
      "ghgEmission": 2.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Luxembourg",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Luxembourg",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Luxembourg",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Mexico",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Mexico",
      "ghgEmission": 2.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Mexico",
      "ghgEmission": 0.5,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Mongolia",
      "ghgEmission": 56,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Mozambique",
      "ghgEmission": 6.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Nepal",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Nepal",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Nepal",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Winter Wheat",
      "country": "Netherlands",
      "ghgEmission": 1.9,
      "genre": "Wheat"
    },
    {
      "reference": "Spring Wheat",
      "country": "Netherlands",
      "ghgEmission": 2.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Netherlands",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Niger",
      "ghgEmission": 2.2,
      "genre": "Wheat"
    },
    {
      "reference": "Rye",
      "country": "Norway",
      "ghgEmission": 1.6,
      "genre": "Rye"
    },
    {
      "reference": "Spring wheat",
      "country": "Norway",
      "ghgEmission": 2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Norway",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Norway",
      "ghgEmission": 2.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Norway",
      "ghgEmission": 2.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Norway",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Pakistan",
      "ghgEmission": 2.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Poland",
      "ghgEmission": 1.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Poland",
      "ghgEmission": 1.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Poland",
      "ghgEmission": 1.7,
      "genre": "Wheat"
    },
    {
      "reference": "Rye",
      "country": "Poland",
      "ghgEmission": 1,
      "genre": "Rye"
    },
    {
      "reference": "Wheat",
      "country": "Portugal",
      "ghgEmission": 1.9,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Rwanda",
      "ghgEmission": 5.7,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Slovenia",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Slovenia",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Slovenia",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Spain",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Sudan (former)",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Winter bread wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 0.9,
      "genre": "Rye"
    },
    {
      "reference": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Rye"
    },
    {
      "reference": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Rye"
    },
    {
      "reference": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Rye"
    },
    {
      "reference": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Rye"
    },
    {
      "reference": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Rye"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Uganda",
      "ghgEmission": 5.6,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.1,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 0.9,
      "genre": "Wheat"
    },
    {
      "reference": "Bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Spring bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Wheat"
    },
    {
      "reference": "Bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.4,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United Republic of Tanzania",
      "ghgEmission": 13.1,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.6,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.8,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.5,
      "genre": "Wheat"
    },
    {
      "reference": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.2,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United States of America",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "United States of America",
      "ghgEmission": 1.3,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Uzbekistan",
      "ghgEmission": 1.8,
      "genre": "Wheat"
    },
    {
      "reference": "Wheat",
      "country": "Zimbabwe",
      "ghgEmission": 0.7,
      "genre": "Wheat"
    },
    {
      "reference": "Maize",
      "country": "Angola",
      "ghgEmission": 27.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Argentina",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Argentina",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Australia",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Belarus",
      "ghgEmission": 3.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Belgium",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Bolivia (Plurinational State of)",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Brazil",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Brazil",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Brazil",
      "ghgEmission": 1.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Brazil",
      "ghgEmission": 2.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Burundi",
      "ghgEmission": 3.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Cambodia",
      "ghgEmission": 7.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Cameroon",
      "ghgEmission": 12.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Canada",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Canada",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Canada",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Canada",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Canada",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Central African Republic",
      "ghgEmission": 8.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Summer maize",
      "country": "China",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 2.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Summer maize",
      "country": "China",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Summer maize",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Summer maize",
      "country": "China",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Summer maize",
      "country": "China",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Costa Rica",
      "ghgEmission": 2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Côte d'Ivoire",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Cuba",
      "ghgEmission": 3.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Cyprus",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Denmark",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Egypt",
      "ghgEmission": 1.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "El Salvador",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Eritrea",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Ethiopia",
      "ghgEmission": 8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "France",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Gabon",
      "ghgEmission": 5.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Germany",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Hungary",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "India",
      "ghgEmission": 3.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 5.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Italy",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Italy",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Italy",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Kenya",
      "ghgEmission": 4.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Kyrgyzstan",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Madagascar",
      "ghgEmission": 9.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Malawi",
      "ghgEmission": 2.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Mali",
      "ghgEmission": 3.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Mexico",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Mexico",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Mexico",
      "ghgEmission": 2.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Mozambique",
      "ghgEmission": 6.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Namibia",
      "ghgEmission": 1.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Nigeria",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Nigeria",
      "ghgEmission": 3.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Panama",
      "ghgEmission": 4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Peru",
      "ghgEmission": 2.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Philippines",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Poland",
      "ghgEmission": 2.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Republic of Moldova",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Romania",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Russian Federation",
      "ghgEmission": 3.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Rwanda",
      "ghgEmission": 5.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Senegal",
      "ghgEmission": 3.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Serbia",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Sierra Leone",
      "ghgEmission": 12.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Slovenia",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Somalia",
      "ghgEmission": 5.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "South Africa",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "South Africa",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Sri Lanka",
      "ghgEmission": 3.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Thailand",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Thailand",
      "ghgEmission": 0.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Togo",
      "ghgEmission": 9.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Uganda",
      "ghgEmission": 5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Ukraine",
      "ghgEmission": 2.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 10,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 15.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 11,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 10.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 6.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.6,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.5,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.4,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Uzbekistan",
      "ghgEmission": 0.9,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Venezuela (Bolivarian Republic of)",
      "ghgEmission": 2.2,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Zambia",
      "ghgEmission": 72.3,
      "genre": "Maize"
    },
    {
      "reference": "Maize",
      "country": "Zimbabwe",
      "ghgEmission": 4.4,
      "genre": "Maize"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Beer",
      "country": "Australia",
      "ghgEmission": 1.5,
      "genre": "Beer"
    },
    {
      "reference": "Beer (Vashon Brewing Company)",
      "country": "United States of America",
      "ghgEmission": 2.6,
      "genre": "Beer"
    },
    {
      "reference": "Beer (Vortex IPA, Fort George Brewery)",
      "country": "United States of America",
      "ghgEmission": 1.4,
      "genre": "Beer"
    },
    {
      "reference": "Beer (Pinnacle Peak Pale Ale, Harmon Brewing Company)",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Beer"
    },
    {
      "reference": "Beer (HUB Lager, Hopworks Urban Brewery)",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Beer"
    },
    {
      "reference": "Beer (Horn Blonde Ale, RAM Brewery)",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Beer"
    },
    {
      "reference": "Beer (Fat Tire® Amber Ale)",
      "country": "United States of America",
      "ghgEmission": 1.5,
      "genre": "Beer"
    },
    {
      "reference": "Barley",
      "country": "Algeria",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Belarus",
      "ghgEmission": 1.5,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Belgium",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Belgium",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Bosnia and Herzegovina",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Bulgaria",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Canada",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Canada",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Cyprus",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Czech Republic",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Denmark",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Denmark",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Finland",
      "ghgEmission": 1.3,
      "genre": "Barley"
    },
    {
      "reference": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Winter malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Winter malting barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "France",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Germany",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Germany",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Germany",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Hungary",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Ireland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Morocco",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Norway",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Norway",
      "ghgEmission": 1.3,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Norway",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Poland",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Republic of Moldova",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Romania",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Russian Federation",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Serbia",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Slovakia",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Spain",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Spain",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Tunisia",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Turkey",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Ukraine",
      "ghgEmission": 1.3,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "United Kingdom",
      "ghgEmission": 1,
      "genre": "Barley"
    },
    {
      "reference": "Spring barley",
      "country": "United Kingdom",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Winter barley",
      "country": "United Kingdom",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "United States of America",
      "ghgEmission": 1.1,
      "genre": "Barley"
    },
    {
      "reference": "Barley",
      "country": "Uzbekistan",
      "ghgEmission": 1.2,
      "genre": "Barley"
    },
    {
      "reference": "Oats",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Oats"
    },
    {
      "reference": "Peeled oats",
      "country": "Belgium",
      "ghgEmission": 0.8,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Canada",
      "ghgEmission": 0.9,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Finland",
      "ghgEmission": 1.1,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Finland",
      "ghgEmission": 2.8,
      "genre": "Oats"
    },
    {
      "reference": "Peeled oats",
      "country": "Netherlands",
      "ghgEmission": 1,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Norway",
      "ghgEmission": 2.2,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Norway",
      "ghgEmission": 2.8,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Norway",
      "ghgEmission": 2,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Portugal",
      "ghgEmission": 1.8,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Sweden",
      "ghgEmission": 1.4,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Sweden",
      "ghgEmission": 1.9,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "Sweden",
      "ghgEmission": 1.4,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "United States of America",
      "ghgEmission": 3.3,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "United States of America",
      "ghgEmission": 2.6,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "United States of America",
      "ghgEmission": 4,
      "genre": "Oats"
    },
    {
      "reference": "Oats",
      "country": "United States of America",
      "ghgEmission": 4.3,
      "genre": "Oats"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 3.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 4.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.7,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 6.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 3.7,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 4.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 6.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 3.9,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 5.7,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 4.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.6,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 3.5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "China",
      "ghgEmission": 2.6,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 8.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 3.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 6.9,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 2.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.7,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.7,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "India",
      "ghgEmission": 1.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 4.9,
      "genre": "Rice"
    },
    {
      "reference": "Long grain rice",
      "country": "Italy",
      "ghgEmission": 1.7,
      "genre": "Rice"
    },
    {
      "reference": "Long grain rice",
      "country": "Italy",
      "ghgEmission": 1.1,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Italy",
      "ghgEmission": 4.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Italy",
      "ghgEmission": 5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.6,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 2.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.5,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.6,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.3,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 4.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.3,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 3.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 9.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Japan",
      "ghgEmission": 7.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Philippines",
      "ghgEmission": 4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Philippines",
      "ghgEmission": 3.2,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Spain",
      "ghgEmission": 3.8,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Spain",
      "ghgEmission": 6.1,
      "genre": "Rice"
    },
    {
      "reference": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 9.3,
      "genre": "Rice"
    },
    {
      "reference": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 3.7,
      "genre": "Rice"
    },
    {
      "reference": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 3.7,
      "genre": "Rice"
    },
    {
      "reference": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 7.7,
      "genre": "Rice"
    },
    {
      "reference": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 13.5,
      "genre": "Rice"
    },
    {
      "reference": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 14.4,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "United States of America",
      "ghgEmission": 2.6,
      "genre": "Rice"
    },
    {
      "reference": "Rice",
      "country": "Vietnam",
      "ghgEmission": 4.2,
      "genre": "Rice"
    },
    {
      "reference": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.6,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.2,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "China",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "China",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "China",
      "ghgEmission": 0.1,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "China",
      "ghgEmission": 0.1,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Cyprus",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "France",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Germany",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Germany",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Germany",
      "ghgEmission": 0.2,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "India",
      "ghgEmission": 0.6,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Israel",
      "ghgEmission": 0.6,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Israel",
      "ghgEmission": 0.6,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Japan",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Japan",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "Japan",
      "ghgEmission": 0.8,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.6,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Norway",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Spain",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "Philippines",
      "ghgEmission": 0.3,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "Philippines",
      "ghgEmission": 0.5,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "Philippines",
      "ghgEmission": 0.5,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Poland",
      "ghgEmission": 0.7,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Peru",
      "ghgEmission": 1.6,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Peru",
      "ghgEmission": 1.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Russian Federation",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Sweden",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "Ukraine",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Potatoes"
    },
    {
      "reference": "Sweet potatoes",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Sweet potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Potatoes"
    },
    {
      "reference": "Potatoes",
      "country": "United States of America",
      "ghgEmission": 0.5,
      "genre": "Potatoes"
    },
    {
      "reference": "Cassava",
      "country": "Angola",
      "ghgEmission": 1.8,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Argentina",
      "ghgEmission": 1,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Benin",
      "ghgEmission": 1,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Brazil",
      "ghgEmission": 0.5,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Burkina Faso",
      "ghgEmission": 7.7,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Burundi",
      "ghgEmission": 0.7,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Cambodia",
      "ghgEmission": 1.6,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Cameroon",
      "ghgEmission": 2.3,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Central African Republic",
      "ghgEmission": 2.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Chad",
      "ghgEmission": 0.2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "China",
      "ghgEmission": 1.8,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Colombia",
      "ghgEmission": 1.2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Congo",
      "ghgEmission": 2.2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Costa Rica",
      "ghgEmission": 1.2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Côte d'Ivoire",
      "ghgEmission": 0.7,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Cuba",
      "ghgEmission": 0.7,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Democratic Republic of the Congo",
      "ghgEmission": 0.2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Ecuador",
      "ghgEmission": 1.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Gabon",
      "ghgEmission": 1.3,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Ghana",
      "ghgEmission": 1.1,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Guinea",
      "ghgEmission": 1.5,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Guinea-Bissau",
      "ghgEmission": 1.5,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "India",
      "ghgEmission": 0.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Indonesia",
      "ghgEmission": 1.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Kenya",
      "ghgEmission": 0.8,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Liberia",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Madagascar",
      "ghgEmission": 1.6,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Malawi",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Mali",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Mozambique",
      "ghgEmission": 1,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Nigeria",
      "ghgEmission": 2.1,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Nigeria",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Paraguay",
      "ghgEmission": 0.7,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Peru",
      "ghgEmission": 2.6,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Philippines",
      "ghgEmission": 0.6,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Rwanda",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Senegal",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Sierra Leone",
      "ghgEmission": 7.3,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Somalia",
      "ghgEmission": 1.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Sri Lanka",
      "ghgEmission": 0.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Sudan (former)",
      "ghgEmission": 2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.6,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.3,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.3,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Togo",
      "ghgEmission": 2.3,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Uganda",
      "ghgEmission": 0.4,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "United Republic of Tanzania",
      "ghgEmission": 1.9,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Venezuela (Bolivarian Republic of)",
      "ghgEmission": 0.5,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Vietnam",
      "ghgEmission": 1.1,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Zambia",
      "ghgEmission": 36.2,
      "genre": "Cassava"
    },
    {
      "reference": "Cassava",
      "country": "Zimbabwe",
      "ghgEmission": 1.6,
      "genre": "Cassava"
    },
    {
      "reference": "Sugar",
      "country": "Argentina",
      "ghgEmission": 2.4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Argentina",
      "ghgEmission": 2.4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Argentina",
      "ghgEmission": 2.3,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Australia",
      "ghgEmission": 1.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Brazil",
      "ghgEmission": 4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Brazil",
      "ghgEmission": 3.4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Brazil",
      "ghgEmission": 3.4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Brazil",
      "ghgEmission": 0.6,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Brazil",
      "ghgEmission": 3.9,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "China",
      "ghgEmission": 2.4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "India",
      "ghgEmission": 1.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "India",
      "ghgEmission": 0.9,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Indonesia",
      "ghgEmission": 4.8,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Japan",
      "ghgEmission": 3.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Malawi",
      "ghgEmission": 2.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Mauritius",
      "ghgEmission": 1.5,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Mauritius",
      "ghgEmission": 0.8,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.5,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.6,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Nepal",
      "ghgEmission": 4,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Pakistan",
      "ghgEmission": 2.6,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "South Africa",
      "ghgEmission": 1.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "South Africa",
      "ghgEmission": 1.9,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Sudan (former)",
      "ghgEmission": 1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Thailand",
      "ghgEmission": 0.7,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Thailand",
      "ghgEmission": 1.5,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Thailand",
      "ghgEmission": 1.1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Thailand",
      "ghgEmission": 1,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "United States of America",
      "ghgEmission": 1.7,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Zambia",
      "ghgEmission": 47.6,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Zambia",
      "ghgEmission": 21.6,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Zambia",
      "ghgEmission": 21.7,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar",
      "country": "Zambia",
      "ghgEmission": 17.3,
      "genre": "Sugar cane"
    },
    {
      "reference": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.6,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.5,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.5,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 5.2,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.8,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "India",
      "ghgEmission": 1.9,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Indonesia",
      "ghgEmission": 8.6,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Indonesia",
      "ghgEmission": 14.5,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.2,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Japan",
      "ghgEmission": 2.2,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Japan",
      "ghgEmission": 2.4,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Japan",
      "ghgEmission": 2.1,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Mexico",
      "ghgEmission": 5.5,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "Thailand",
      "ghgEmission": 1.9,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar cane",
      "country": "United Republic of Tanzania",
      "ghgEmission": 4.5,
      "genre": "Sugar"
    },
    {
      "reference": "Sugar",
      "country": "China",
      "ghgEmission": 1.6,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Germany",
      "ghgEmission": 1.6,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Germany",
      "ghgEmission": 1.7,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Germany",
      "ghgEmission": 1.6,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Germany",
      "ghgEmission": 1,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Netherlands",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Netherlands",
      "ghgEmission": 0.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar",
      "country": "Sweden",
      "ghgEmission": 1.6,
      "genre": "Sugar beet"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Sugar beet",
      "country": "Cyprus",
      "ghgEmission": 2,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "France",
      "ghgEmission": 1.5,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "France",
      "ghgEmission": 2.1,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.7,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Japan",
      "ghgEmission": 2,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Japan",
      "ghgEmission": 2.1,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Japan",
      "ghgEmission": 3.5,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Netherlands",
      "ghgEmission": 2.1,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Netherlands",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "Switzerland",
      "ghgEmission": 1.8,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.8,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.7,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.7,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2.1,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2.1,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.6,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.6,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.5,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.5,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2,
      "genre": "Sugar beet"
    },
    {
      "reference": "Sugar beet",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Sugar beet"
    },
    {
      "reference": "Chickpeas",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Beans"
    },
    {
      "reference": "Lupins",
      "country": "Australia",
      "ghgEmission": 1.5,
      "genre": "Beans"
    },
    {
      "reference": "Chickpeas",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Beans"
    },
    {
      "reference": "Lupins",
      "country": "Australia",
      "ghgEmission": 1.4,
      "genre": "Beans"
    },
    {
      "reference": "Lupins",
      "country": "Belgium",
      "ghgEmission": 1.2,
      "genre": "Beans"
    },
    {
      "reference": "Chickpeas",
      "country": "Canada",
      "ghgEmission": 1.2,
      "genre": "Beans"
    },
    {
      "reference": "Chickpeas",
      "country": "Canada",
      "ghgEmission": 1.4,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.1,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.2,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.1,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.9,
      "genre": "Beans"
    },
    {
      "reference": "Faba beans",
      "country": "France",
      "ghgEmission": 2,
      "genre": "Beans"
    },
    {
      "reference": "Faba beans",
      "country": "France",
      "ghgEmission": 1.3,
      "genre": "Beans"
    },
    {
      "reference": "Spring faba beans",
      "country": "France",
      "ghgEmission": 1.3,
      "genre": "Beans"
    },
    {
      "reference": "Faba beans",
      "country": "France",
      "ghgEmission": 0.9,
      "genre": "Beans"
    },
    {
      "reference": "Faba beans",
      "country": "France",
      "ghgEmission": 1.6,
      "genre": "Beans"
    },
    {
      "reference": "Faba beans",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Beans"
    },
    {
      "reference": "Lupins",
      "country": "Germany",
      "ghgEmission": 1.3,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.1,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.2,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.5,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.5,
      "genre": "Beans"
    },
    {
      "reference": "Runner beans",
      "country": "Greece",
      "ghgEmission": 0.9,
      "genre": "Beans"
    },
    {
      "reference": "Pigeon peas",
      "country": "India",
      "ghgEmission": 1.3,
      "genre": "Beans"
    },
    {
      "reference": "Pigeon peas",
      "country": "India",
      "ghgEmission": 1.3,
      "genre": "Beans"
    },
    {
      "reference": "Pigeon peas",
      "country": "India",
      "ghgEmission": 1.3,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.9,
      "genre": "Beans"
    },
    {
      "reference": "Adzuki bean",
      "country": "Japan",
      "ghgEmission": 2.4,
      "genre": "Beans"
    },
    {
      "reference": "Adzuki bean",
      "country": "Japan",
      "ghgEmission": 2.4,
      "genre": "Beans"
    },
    {
      "reference": "Brown beans",
      "country": "Netherlands",
      "ghgEmission": 5.3,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "Netherlands",
      "ghgEmission": 2,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "Netherlands",
      "ghgEmission": 2.9,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "Netherlands",
      "ghgEmission": 4.5,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "Switzerland",
      "ghgEmission": 1.5,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "Switzerland",
      "ghgEmission": 1.8,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "Turkey",
      "ghgEmission": 3.1,
      "genre": "Beans"
    },
    {
      "reference": "Winter field beans",
      "country": "United Kingdom",
      "ghgEmission": 0.9,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 1.1,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 1.2,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 0.7,
      "genre": "Beans"
    },
    {
      "reference": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Beans"
    },
    {
      "reference": "Lentils",
      "country": "United States of America",
      "ghgEmission": 2.4,
      "genre": "Beans"
    },
    {
      "reference": "Peas",
      "country": "Australia",
      "ghgEmission": 2,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Belgium",
      "ghgEmission": 0.9,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Canada",
      "ghgEmission": 0.7,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Canada",
      "ghgEmission": 0.8,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Canada",
      "ghgEmission": 0.9,
      "genre": "Peas"
    },
    {
      "reference": "Spring peas",
      "country": "Canada",
      "ghgEmission": 0.6,
      "genre": "Peas"
    },
    {
      "reference": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Spring peas",
      "country": "France",
      "ghgEmission": 0.6,
      "genre": "Peas"
    },
    {
      "reference": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Winter peas",
      "country": "France",
      "ghgEmission": 0.4,
      "genre": "Peas"
    },
    {
      "reference": "Winter peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Winter peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 0.6,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 0.7,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 0.5,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 0.6,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 1,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "France",
      "ghgEmission": 0.6,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Germany",
      "ghgEmission": 1.2,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Germany",
      "ghgEmission": 0.9,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Netherlands",
      "ghgEmission": 1.9,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Netherlands",
      "ghgEmission": 2.3,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Portugal",
      "ghgEmission": 1.7,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Spain",
      "ghgEmission": 1.6,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Sweden",
      "ghgEmission": 1.4,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Sweden",
      "ghgEmission": 1.4,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Sweden",
      "ghgEmission": 1.1,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Peas"
    },
    {
      "reference": "Peas",
      "country": "Switzerland",
      "ghgEmission": 1.5,
      "genre": "Peas"
    },
    {
      "reference": "Almonds",
      "country": "Australia",
      "ghgEmission": 3,
      "genre": "Nuts"
    },
    {
      "reference": "Cashew nuts",
      "country": "Brazil",
      "ghgEmission": 10.9,
      "genre": "Nuts"
    },
    {
      "reference": "Cashew nuts",
      "country": "Brazil",
      "ghgEmission": 23.7,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "China",
      "ghgEmission": 1.7,
      "genre": "Nuts"
    },
    {
      "reference": "Pistachios",
      "country": "Greece",
      "ghgEmission": 3.6,
      "genre": "Nuts"
    },
    {
      "reference": "Cashew nuts",
      "country": "India",
      "ghgEmission": -3.4,
      "genre": "Nuts"
    },
    {
      "reference": "Hazelnuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": -8.1,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 8.1,
      "genre": "Nuts"
    },
    {
      "reference": "Hazelnuts",
      "country": "Italy",
      "ghgEmission": 3,
      "genre": "Nuts"
    },
    {
      "reference": "Chestnuts",
      "country": "Portugal",
      "ghgEmission": 3.5,
      "genre": "Nuts"
    },
    {
      "reference": "Chestnuts",
      "country": "Portugal",
      "ghgEmission": 2.1,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds, Hazelnuts, Carob",
      "country": "Spain",
      "ghgEmission": 2.1,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds, Hazelnuts, Carob",
      "country": "Spain",
      "ghgEmission": 2.1,
      "genre": "Nuts"
    },
    {
      "reference": "Walnuts",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "United States of America",
      "ghgEmission": -2.9,
      "genre": "Nuts"
    },
    {
      "reference": "Walnuts",
      "country": "United States of America",
      "ghgEmission": -0.2,
      "genre": "Nuts"
    },
    {
      "reference": "Pistachios",
      "country": "United States of America",
      "ghgEmission": -4.1,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "United States of America",
      "ghgEmission": -1.4,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "United States of America",
      "ghgEmission": 3.7,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "United States of America",
      "ghgEmission": -2,
      "genre": "Nuts"
    },
    {
      "reference": "Almonds",
      "country": "United States of America",
      "ghgEmission": -1.2,
      "genre": "Nuts"
    },
    {
      "reference": "Walnuts",
      "country": "United States of America",
      "ghgEmission": -0.3,
      "genre": "Nuts"
    },
    {
      "reference": "Walnuts",
      "country": "United States of America",
      "ghgEmission": -2.1,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Argentina",
      "ghgEmission": 6.2,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Argentina",
      "ghgEmission": 4.2,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Australia",
      "ghgEmission": 1.9,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Brazil",
      "ghgEmission": 5.6,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "China",
      "ghgEmission": 1.7,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "China",
      "ghgEmission": 1.3,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "China",
      "ghgEmission": 2.1,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "China",
      "ghgEmission": 1.7,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "China",
      "ghgEmission": 3.6,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "China",
      "ghgEmission": 3.4,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "India",
      "ghgEmission": 3.6,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "India",
      "ghgEmission": 2,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 2,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.8,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.7,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.7,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.8,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Nuts"
    },
    {
      "reference": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Nuts"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 0.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 1,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 1.1,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 0.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 1.1,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.6,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.1,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Canada",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Canada",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 1,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "India",
      "ghgEmission": 1.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 0.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Thailand",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3.6,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 2.9,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3.7,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5.3,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 6.2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 7.1,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.8,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.6,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 6,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.7,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.9,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.9,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.5,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.4,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5.4,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.9,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.1,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 8.1,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Canada",
      "ghgEmission": 1.7,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Canada",
      "ghgEmission": 1.7,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 1.8,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 3.4,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 1.8,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 1.8,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 2.1,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "India",
      "ghgEmission": 7.6,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.3,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 2.5,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 2.4,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "Thailand",
      "ghgEmission": 1.8,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.5,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.3,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.1,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 1.8,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2,
      "genre": "Tofu"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.1,
      "genre": "Tofu"
    },
    {
      "reference": "Soybean oil",
      "country": "Argentina",
      "ghgEmission": 7.7,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "China",
      "ghgEmission": 3,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "Brazil",
      "ghgEmission": 4.4,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "Brazil",
      "ghgEmission": 2.9,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "Brazil",
      "ghgEmission": 21.3,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "South Africa",
      "ghgEmission": 3.9,
      "genre": "Oil"
    },
    {
      "reference": "Soybean oil",
      "country": "United States of America",
      "ghgEmission": 2.9,
      "genre": "Oil"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 5.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 5.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 5.6,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 7.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 11.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 12.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 15.1,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 17.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 10.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 10.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 14.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 10.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 12.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 11.2,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 8.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 20.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Canada",
      "ghgEmission": 2.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Canada",
      "ghgEmission": 2.2,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 2.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 2.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "China",
      "ghgEmission": 2.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "India",
      "ghgEmission": 19,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.4,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.8,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 4.6,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 4.2,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "Thailand",
      "ghgEmission": 2.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 4.6,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.5,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.9,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.7,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.2,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3,
      "genre": "Soybeans"
    },
    {
      "reference": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.2,
      "genre": "Soybeans"
    },
    {
      "reference": "Palm oil",
      "country": "Brazil",
      "ghgEmission": 3.6,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Cameroon",
      "ghgEmission": 6.7,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Colombia",
      "ghgEmission": 2.6,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Colombia",
      "ghgEmission": 4.9,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Indonesia",
      "ghgEmission": 7.4,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Indonesia",
      "ghgEmission": 10,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 3.4,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 5.3,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 7.3,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 5.5,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 3.5,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 5.3,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 4.7,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 1,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 2.9,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 1.6,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Thailand",
      "ghgEmission": -0.3,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 1,
      "genre": "Palm Oil"
    },
    {
      "reference": "Palm fruit",
      "country": "Brazil",
      "ghgEmission": 5.1,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 9,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 11.9,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 9.5,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 12.5,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 8.8,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 9.3,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 14.2,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 8.9,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 8.2,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 13,
      "genre": "Palm"
    },
    {
      "reference": "Palm fruit",
      "country": "Malaysia",
      "ghgEmission": 5.3,
      "genre": "Palm"
    },
    {
      "reference": "Sunflower oil",
      "country": "Italy",
      "ghgEmission": 4.5,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Italy",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.1,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.6,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.5,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 3.2,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.9,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.6,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "South Africa",
      "ghgEmission": 3.9,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "South Africa",
      "ghgEmission": 3.3,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Spain",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower oil",
      "country": "Ukraine",
      "ghgEmission": 3,
      "genre": "Oil"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Argentina",
      "ghgEmission": 2.4,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Brazil",
      "ghgEmission": 7.7,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Chile",
      "ghgEmission": 4.5,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "China",
      "ghgEmission": 4.3,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 2.2,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 2.5,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 2.6,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 3.6,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 3.3,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Germany",
      "ghgEmission": 2.6,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 4.1,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 2.9,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 4.3,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 3.4,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 2.8,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 3.9,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Spain",
      "ghgEmission": 3.7,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Switzerland",
      "ghgEmission": 3.8,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Sunflower seeds",
      "country": "Ukraine",
      "ghgEmission": 4.2,
      "genre": "Sunflower seed"
    },
    {
      "reference": "Canola oil",
      "country": "Australia",
      "ghgEmission": 2,
      "genre": "Rapeseed"
    },
    {
      "reference": "Canola oil",
      "country": "Australia",
      "ghgEmission": 2.4,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Australia",
      "ghgEmission": 7.8,
      "genre": "Rapeseed"
    },
    {
      "reference": "Canola oil",
      "country": "Australia",
      "ghgEmission": 3.9,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Belgium",
      "ghgEmission": 3.4,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "China",
      "ghgEmission": 3.8,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Denmark",
      "ghgEmission": 3.6,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "France",
      "ghgEmission": 2.3,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Germany",
      "ghgEmission": 3.1,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Germany",
      "ghgEmission": 3.1,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Ireland",
      "ghgEmission": 3.4,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Italy",
      "ghgEmission": 3.8,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Poland",
      "ghgEmission": 4.3,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Romania",
      "ghgEmission": 3.3,
      "genre": "Rapeseed"
    },
    {
      "reference": "Canola oil",
      "country": "South Africa",
      "ghgEmission": 3.7,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Spain",
      "ghgEmission": 4.4,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "Sweden",
      "ghgEmission": 6.3,
      "genre": "Rapeseed"
    },
    {
      "reference": "Rapeseed oil",
      "country": "United Kingdom",
      "ghgEmission": 2.6,
      "genre": "Rapeseed"
    },
    {
      "reference": "Canola",
      "country": "Australia",
      "ghgEmission": 2.1,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Australia",
      "ghgEmission": 9.5,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 3.5,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 3,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 2.8,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 2.6,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 2.6,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 7.9,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 3.2,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Canada",
      "ghgEmission": 3,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Chile",
      "ghgEmission": 2.8,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Denmark",
      "ghgEmission": 4.9,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Denmark",
      "ghgEmission": 3.5,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.7,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.7,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.3,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.8,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.9,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.5,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.7,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.1,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.9,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "France",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.1,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.1,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Germany",
      "ghgEmission": 2.9,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 2.6,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 3,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 7.1,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 4.9,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.4,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 3.1,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 3.6,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 3.3,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 7.7,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 13.6,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Norway",
      "ghgEmission": 6.2,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "Poland",
      "ghgEmission": 3.9,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Sweden",
      "ghgEmission": 3.6,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Sweden",
      "ghgEmission": 5.5,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Sweden",
      "ghgEmission": 4.4,
      "genre": "Oil"
    },
    {
      "reference": "Spring rapeseed",
      "country": "Sweden",
      "ghgEmission": 4.8,
      "genre": "Oil"
    },
    {
      "reference": "Spring rapeseed",
      "country": "Sweden",
      "ghgEmission": 6.2,
      "genre": "Oil"
    },
    {
      "reference": "Spring rapeseed",
      "country": "Sweden",
      "ghgEmission": 5.4,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 3.7,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 3.7,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 3.8,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 4.4,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "Turkey",
      "ghgEmission": 4.2,
      "genre": "Oil"
    },
    {
      "reference": "Winter rapeseed",
      "country": "United Kingdom",
      "ghgEmission": 4.5,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "United Kingdom",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Rapeseed",
      "country": "United Kingdom",
      "ghgEmission": 3.5,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "United States of America",
      "ghgEmission": 3.1,
      "genre": "Oil"
    },
    {
      "reference": "Canola",
      "country": "United States of America",
      "ghgEmission": 7.7,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Cyprus",
      "ghgEmission": 12.3,
      "genre": "Oil"
    },
    {
      "reference": "Virgin olive oil",
      "country": "France",
      "ghgEmission": 6.3,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Greece",
      "ghgEmission": 3.4,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Greece",
      "ghgEmission": 5.4,
      "genre": "Oil"
    },
    {
      "reference": "Olive oil",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.3,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 1.9,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 2.9,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 4.8,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 4.9,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil (\"GranFruttato\")",
      "country": "Italy",
      "ghgEmission": 2.2,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 20.3,
      "genre": "Oil"
    },
    {
      "reference": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 5.3,
      "genre": "Oil"
    },
    {
      "reference": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 10.7,
      "genre": "Oil"
    },
    {
      "reference": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 3.9,
      "genre": "Oil"
    },
    {
      "reference": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 7.4,
      "genre": "Oil"
    },
    {
      "reference": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 11.3,
      "genre": "Oil"
    },
    {
      "reference": "Extra virgin olive oil",
      "country": "Spain",
      "ghgEmission": 6.1,
      "genre": "Oil"
    },
    {
      "reference": "Olives",
      "country": "Greece",
      "ghgEmission": 5.1,
      "genre": "Olives"
    },
    {
      "reference": "Olives",
      "country": "Italy",
      "ghgEmission": 5.8,
      "genre": "Olives"
    },
    {
      "reference": "Olives",
      "country": "Italy",
      "ghgEmission": 6.9,
      "genre": "Olives"
    },
    {
      "reference": "Olives",
      "country": "Italy",
      "ghgEmission": 3.7,
      "genre": "Olives"
    },
    {
      "reference": "Olives",
      "country": "Italy",
      "ghgEmission": 3.6,
      "genre": "Olives"
    },
    {
      "reference": "Olives",
      "country": "Spain",
      "ghgEmission": 4.2,
      "genre": "Olives"
    },
    {
      "reference": "Olives",
      "country": "Spain",
      "ghgEmission": 2.6,
      "genre": "Olives"
    },
    {
      "reference": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 2.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 2.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Austria",
      "ghgEmission": 1.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Austria",
      "ghgEmission": 0.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 9.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 14.4,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 8.3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 15.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 14.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 9.3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 27,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 8.5,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 29,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 6.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Canada",
      "ghgEmission": 4.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Colombia",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 4.5,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 4.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 4.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 6.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "France",
      "ghgEmission": 2.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "France",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "France",
      "ghgEmission": 3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "France",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Hungary",
      "ghgEmission": 1,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Hungary",
      "ghgEmission": 6.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Italy",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Italy",
      "ghgEmission": 1,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Morocco",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 3.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 1.3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.5,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 1.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 1.3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (round/globe)",
      "country": "Spain",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (loose classic)",
      "country": "Spain",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (vine)",
      "country": "Spain",
      "ghgEmission": 1.2,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (loose classic)",
      "country": "Spain",
      "ghgEmission": 0.9,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (baby plum)",
      "country": "Spain",
      "ghgEmission": 3.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 2.4,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Sweden",
      "ghgEmission": 3.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (round/globe)",
      "country": "Sweden",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (round/globe)",
      "country": "Sweden",
      "ghgEmission": 0.5,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Switzerland",
      "ghgEmission": 1.5,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (vine)",
      "country": "Switzerland",
      "ghgEmission": 1.5,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "Turkey",
      "ghgEmission": 0.4,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (vine)",
      "country": "United Kingdom",
      "ghgEmission": 5.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (loose classic)",
      "country": "United Kingdom",
      "ghgEmission": 2.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes (baby plum)",
      "country": "United Kingdom",
      "ghgEmission": 6.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United Kingdom",
      "ghgEmission": 3,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Tomatoes"
    },
    {
      "reference": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Tomatoes"
    },
    {
      "reference": "Onions",
      "country": "Australia",
      "ghgEmission": 0.5,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Australia",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Leeks",
      "country": "Belgium",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Leeks",
      "country": "Belgium",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Denmark",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Denmark",
      "ghgEmission": 0.7,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "India",
      "ghgEmission": 0.8,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Netherlands",
      "ghgEmission": 0.7,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Netherlands",
      "ghgEmission": 0.7,
      "genre": "Onions"
    },
    {
      "reference": "Leeks",
      "country": "Netherlands",
      "ghgEmission": 0.5,
      "genre": "Onions"
    },
    {
      "reference": "Leeks",
      "country": "Netherlands",
      "ghgEmission": 0.7,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Netherlands",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "New Zealand",
      "ghgEmission": 0.6,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Onions"
    },
    {
      "reference": "Leeks",
      "country": "Sweden",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "Switzerland",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.9,
      "genre": "Onions"
    },
    {
      "reference": "Spring onions",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Onions"
    },
    {
      "reference": "Onions",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Onions"
    },
    {
      "reference": "Carrots",
      "country": "Australia",
      "ghgEmission": 0.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Italy",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Bunched carrots",
      "country": "Netherlands",
      "ghgEmission": 0.6,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Bunched carrots",
      "country": "Netherlands",
      "ghgEmission": 0.6,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Winter carrots",
      "country": "Netherlands",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Winter carrots",
      "country": "Netherlands",
      "ghgEmission": 0.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Netherlands",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Netherlands",
      "ghgEmission": 0.6,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Parsnip",
      "country": "Sweden",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Celeriac",
      "country": "Sweden",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Swede",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Sweden",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Switzerland",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "Switzerland",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "United Kingdom",
      "ghgEmission": 0.3,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Celeriac",
      "country": "United Kingdom",
      "ghgEmission": 1.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Celeriac",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Root Vegetables"
    },
    {
      "reference": "Carrots",
      "country": "United Kingdom",
      "ghgEmission": 0.5,
      "genre": "Root Vegetables"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Broccoli",
      "country": "Australia",
      "ghgEmission": 2.4,
      "genre": "Broccoli"
    },
    {
      "reference": "Cabbage",
      "country": "Australia",
      "ghgEmission": 0.5,
      "genre": "Cabbage"
    },
    {
      "reference": "Cauliflower",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Cauliflower"
    },
    {
      "reference": "Broccoli",
      "country": "Australia",
      "ghgEmission": 0.5,
      "genre": "Broccoli"
    },
    {
      "reference": "Cauliflower",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Cauliflower"
    },
    {
      "reference": "Cabbage",
      "country": "China",
      "ghgEmission": 0.3,
      "genre": "Cabbage"
    },
    {
      "reference": "Chinese cabbage",
      "country": "China",
      "ghgEmission": 0.2,
      "genre": "Cabbage"
    },
    {
      "reference": "Pakchoi",
      "country": "China",
      "ghgEmission": 0.9,
      "genre": "Cabbage"
    },
    {
      "reference": "Cabbage",
      "country": "Czech Republic",
      "ghgEmission": 0.3,
      "genre": "Cabbage"
    },
    {
      "reference": "Cabbage",
      "country": "Czech Republic",
      "ghgEmission": 0.2,
      "genre": "Cabbage"
    },
    {
      "reference": "Cabbage",
      "country": "Japan",
      "ghgEmission": 0.3,
      "genre": "Cabbage"
    },
    {
      "reference": "Chinese cabbage",
      "country": "Netherlands",
      "ghgEmission": 0.3,
      "genre": "Cabbage"
    },
    {
      "reference": "Chinese cabbage",
      "country": "Netherlands",
      "ghgEmission": 0.4,
      "genre": "Cabbage"
    },
    {
      "reference": "Cauliflower",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Cauliflower"
    },
    {
      "reference": "Cauliflower",
      "country": "Spain",
      "ghgEmission": 0.8,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "Spain",
      "ghgEmission": 0.8,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "Spain",
      "ghgEmission": 1,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "Spain",
      "ghgEmission": 1.4,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "Sweden",
      "ghgEmission": 0.8,
      "genre": "Broccoli"
    },
    {
      "reference": "Cauliflower",
      "country": "Sweden",
      "ghgEmission": 0.4,
      "genre": "Cauliflower"
    },
    {
      "reference": "Cabbage",
      "country": "Sweden",
      "ghgEmission": 0.2,
      "genre": "Cabbage"
    },
    {
      "reference": "Cabbage",
      "country": "Switzerland",
      "ghgEmission": 0.3,
      "genre": "Cabbage"
    },
    {
      "reference": "Cabbage",
      "country": "Switzerland",
      "ghgEmission": 0.2,
      "genre": "Cabbages and other brassicas"
    },
    {
      "reference": "Broccoli",
      "country": "Switzerland",
      "ghgEmission": 0.5,
      "genre": "Broccoli"
    },
    {
      "reference": "Cauliflower",
      "country": "Switzerland",
      "ghgEmission": 0.5,
      "genre": "Cauliflower"
    },
    {
      "reference": "Savoy cabbage",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Cabbage"
    },
    {
      "reference": "Savoy cabbage",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Cabbage"
    },
    {
      "reference": "Cauliflower",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Cauliflower"
    },
    {
      "reference": "Broccoli",
      "country": "United Kingdom",
      "ghgEmission": 0.7,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Broccoli"
    },
    {
      "reference": "Broccoli",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Broccoli"
    },
    {
      "reference": "Courgette",
      "country": "Australia",
      "ghgEmission": 1.6,
      "genre": "Squash"
    },
    {
      "reference": "Pumpkins",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Squash"
    },
    {
      "reference": "Cucumber",
      "country": "Australia",
      "ghgEmission": 1,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "China",
      "ghgEmission": 0.3,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "Denmark",
      "ghgEmission": 5.6,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "Denmark",
      "ghgEmission": 5.6,
      "genre": "Cucumber"
    },
    {
      "reference": "Hokkaido pumpkins",
      "country": "Germany",
      "ghgEmission": 0.1,
      "genre": "Squash"
    },
    {
      "reference": "Hokkaido pumpkins",
      "country": "Germany",
      "ghgEmission": 0.3,
      "genre": "Squash"
    },
    {
      "reference": "Hokkaido pumpkins",
      "country": "Germany",
      "ghgEmission": 0.1,
      "genre": "Squash"
    },
    {
      "reference": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.5,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.6,
      "genre": "Cucumber"
    },
    {
      "reference": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.4,
      "genre": "Cucumber"
    },
    {
      "reference": "Pumpkins",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Squash"
    },
    {
      "reference": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Greece",
      "ghgEmission": 0.5,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Greece",
      "ghgEmission": 0.9,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Italy",
      "ghgEmission": 0.7,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Italy",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Lambs lettuce",
      "country": "Italy",
      "ghgEmission": 3,
      "genre": "Lettuce"
    },
    {
      "reference": "Artichokes",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Artichokes"
    },
    {
      "reference": "Chicory",
      "country": "Italy",
      "ghgEmission": 0.8,
      "genre": "Chicory"
    },
    {
      "reference": "Lettuce",
      "country": "Netherlands",
      "ghgEmission": 0.7,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Netherlands",
      "ghgEmission": 0.7,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Artichokes",
      "country": "Spain",
      "ghgEmission": 1.1,
      "genre": "Artichokes"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.5,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Lettuce"
    },
    {
      "reference": "Endive",
      "country": "Spain",
      "ghgEmission": 0.5,
      "genre": "Lettuce"
    },
    {
      "reference": "Endive",
      "country": "Spain",
      "ghgEmission": 0.5,
      "genre": "Lettuce"
    },
    {
      "reference": "Endive",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Endive",
      "country": "Spain",
      "ghgEmission": 0.8,
      "genre": "Lettuce"
    },
    {
      "reference": "Iceberg lettuce",
      "country": "Sweden",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Thailand",
      "ghgEmission": 1.1,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Thailand",
      "ghgEmission": 0.5,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "Uganda",
      "ghgEmission": 12,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 1.1,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 0.5,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 6.8,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 2.9,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United States of America",
      "ghgEmission": 1,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United States of America",
      "ghgEmission": 1.1,
      "genre": "Lettuce"
    },
    {
      "reference": "Iceberg lettuce",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Lettuce"
    },
    {
      "reference": "Lettuce",
      "country": "United States of America",
      "ghgEmission": 0.8,
      "genre": "Lettuce"
    },
    {
      "reference": "French beans and Runner beans",
      "country": "Australia",
      "ghgEmission": 2.2,
      "genre": "Green beans"
    },
    {
      "reference": "Peas",
      "country": "Australia",
      "ghgEmission": 3.8,
      "genre": "Green beans"
    },
    {
      "reference": "Green beans",
      "country": "China",
      "ghgEmission": 0.5,
      "genre": "Green beans"
    },
    {
      "reference": "Runner beans",
      "country": "Kenya",
      "ghgEmission": 12,
      "genre": "Green beans"
    },
    {
      "reference": "Green beans",
      "country": "Spain",
      "ghgEmission": 0.5,
      "genre": "Green beans"
    },
    {
      "reference": "Green beans",
      "country": "Spain",
      "ghgEmission": 2.3,
      "genre": "Green beans"
    },
    {
      "reference": "Green beans",
      "country": "Spain",
      "ghgEmission": 0.7,
      "genre": "Green beans"
    },
    {
      "reference": "French and Sim beans",
      "country": "Uganda",
      "ghgEmission": 12.3,
      "genre": "Green beans"
    },
    {
      "reference": "Runner beans",
      "country": "United Kingdom",
      "ghgEmission": 1.2,
      "genre": "Green beans"
    },
    {
      "reference": "Runner beans",
      "country": "United Kingdom",
      "ghgEmission": 0.9,
      "genre": "Green beans"
    },
    {
      "reference": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "China",
      "ghgEmission": 0.2,
      "genre": "Citrus"
    },
    {
      "reference": "Chinese orange",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Tangerine",
      "country": "China",
      "ghgEmission": 0,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.6,
      "genre": "Citrus"
    },
    {
      "reference": "Blood oranges",
      "country": "Italy",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Lemons",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Citrus"
    },
    {
      "reference": "Lemons",
      "country": "Italy",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Italy",
      "ghgEmission": 0.9,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Italy",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Citrus",
      "country": "Italy",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Clementine",
      "country": "Morocco",
      "ghgEmission": 0.5,
      "genre": "Citrus"
    },
    {
      "reference": "Clementine",
      "country": "Morocco",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Mandarin",
      "country": "Peru",
      "ghgEmission": 2.7,
      "genre": "Citrus"
    },
    {
      "reference": "Mandarins, Oranges",
      "country": "Spain",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Mandarins, Oranges",
      "country": "Spain",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Spain",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Mandarin",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Citrus"
    },
    {
      "reference": "Lemons",
      "country": "Spain",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Citrus",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Citrus"
    },
    {
      "reference": "Citrus",
      "country": "Spain",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.5,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.3,
      "genre": "Citrus"
    },
    {
      "reference": "Bananas",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "China",
      "ghgEmission": 0.6,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Colombia",
      "ghgEmission": 0.7,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Colombia",
      "ghgEmission": 0.7,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Costa Rica",
      "ghgEmission": 0.9,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Costa Rica",
      "ghgEmission": 1.3,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Costa Rica",
      "ghgEmission": 0.7,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 0.5,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 0.7,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1.3,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1.1,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1.2,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 0.8,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Guadeloupe",
      "ghgEmission": 0.8,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "India",
      "ghgEmission": 0.8,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Panama",
      "ghgEmission": 1.6,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Peru",
      "ghgEmission": 0.5,
      "genre": "Bananas"
    },
    {
      "reference": "Bananas",
      "country": "Thailand",
      "ghgEmission": 0.7,
      "genre": "Bananas"
    },
    {
      "reference": "Apples",
      "country": "Canada",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Canada",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Chile",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "China",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Greece",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Greece",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Greece",
      "ghgEmission": 0.6,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "France",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Germany",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Germany",
      "ghgEmission": 0.6,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "New Zealand",
      "ghgEmission": 1.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Peru",
      "ghgEmission": 0.7,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Portugal",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Portugal",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Portugal",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Spain",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Spain",
      "ghgEmission": 0.5,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.2,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.6,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.3,
      "genre": "Apples"
    },
    {
      "reference": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.4,
      "genre": "Apples"
    },
    {
      "reference": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1,
      "genre": "Berries"
    },
    {
      "reference": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1.1,
      "genre": "Berries"
    },
    {
      "reference": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1.5,
      "genre": "Berries"
    },
    {
      "reference": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1,
      "genre": "Berries"
    },
    {
      "reference": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.7,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Netherlands",
      "ghgEmission": 0.8,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Netherlands",
      "ghgEmission": 0.7,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Peru",
      "ghgEmission": 1.5,
      "genre": "Berries"
    },
    {
      "reference": "Raspberries",
      "country": "Spain",
      "ghgEmission": 8.3,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Spain",
      "ghgEmission": 1,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Spain",
      "ghgEmission": 1,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Sweden",
      "ghgEmission": 0.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "Switzerland",
      "ghgEmission": 0.5,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 1.8,
      "genre": "Berries"
    },
    {
      "reference": "Raspberries",
      "country": "United Kingdom",
      "ghgEmission": 8.4,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 1.2,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.4,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.8,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.7,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.9,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.7,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 2.7,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 3.3,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 7.3,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 3.3,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 1,
      "genre": "Berries"
    },
    {
      "reference": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 0.9,
      "genre": "Berries"
    },
    {
      "reference": "Blueberries",
      "country": "United States of America",
      "ghgEmission": 0.7,
      "genre": "Berries"
    },
    {
      "reference": "Blueberries",
      "country": "United States of America",
      "ghgEmission": 0.5,
      "genre": "Berries"
    },
    {
      "reference": "Wine",
      "country": "Canada",
      "ghgEmission": 3.1,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.5,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "France",
      "ghgEmission": 2,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.9,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.7,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "Italy",
      "ghgEmission": 1.8,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "Italy",
      "ghgEmission": 2.2,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Italy",
      "ghgEmission": 2,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Italy",
      "ghgEmission": 1.4,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Italy",
      "ghgEmission": 1,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.2,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.4,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Italy",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Italy",
      "ghgEmission": 1.7,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Italy",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Italy",
      "ghgEmission": 1.7,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Italy",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Italy",
      "ghgEmission": 1.8,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.2,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Portugal",
      "ghgEmission": 4.7,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Romania",
      "ghgEmission": 1.5,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "Spain",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "Spain",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Spain",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Spain",
      "ghgEmission": 4.7,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Spain",
      "ghgEmission": 1.8,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Spain",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Spain",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Wine",
      "country": "Spain",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.2,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.4,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.4,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.1,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.4,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.5,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.9,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.8,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.7,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.9,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 2.1,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.9,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.3,
      "genre": "Wine"
    },
    {
      "reference": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.6,
      "genre": "Wine"
    },
    {
      "reference": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.5,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1.1,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1.1,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1,
      "genre": "Wine"
    },
    {
      "reference": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1,
      "genre": "Wine"
    },
    {
      "reference": "Chinese pear",
      "country": "China",
      "ghgEmission": 0.1,
      "genre": "Pears"
    },
    {
      "reference": "Chinese pear",
      "country": "China",
      "ghgEmission": 0,
      "genre": "Pears"
    },
    {
      "reference": "Chinese pear",
      "country": "China",
      "ghgEmission": 0.3,
      "genre": "Pears"
    },
    {
      "reference": "Chinese pear",
      "country": "China",
      "ghgEmission": 2.2,
      "genre": "Pears"
    },
    {
      "reference": "Chinese pear",
      "country": "China",
      "ghgEmission": 0.1,
      "genre": "Pears"
    },
    {
      "reference": "Pears",
      "country": "China",
      "ghgEmission": 0.4,
      "genre": "Pears"
    },
    {
      "reference": "Pears",
      "country": "Italy",
      "ghgEmission": 0.8,
      "genre": "Pears"
    },
    {
      "reference": "Pears",
      "country": "Portugal",
      "ghgEmission": 0.4,
      "genre": "Pears"
    },
    {
      "reference": "Pears",
      "country": "Switzerland",
      "ghgEmission": 0.4,
      "genre": "Pears"
    },
    {
      "reference": "Peaches",
      "country": "China",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peach / Nectarine",
      "country": "France",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peach / Nectarine",
      "country": "France",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Sweet cherries",
      "country": "Greece",
      "ghgEmission": 1,
      "genre": "Stone fruit"
    },
    {
      "reference": "Sweet cherries",
      "country": "Greece",
      "ghgEmission": 1.4,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Greece",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Greece",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Greece",
      "ghgEmission": 0.7,
      "genre": "Stone fruit"
    },
    {
      "reference": "Nectarines",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.3,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Italy",
      "ghgEmission": 0.7,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Italy",
      "ghgEmission": 1.2,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Peru",
      "ghgEmission": 1.7,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "South Africa",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Peaches",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Stone fruit"
    },
    {
      "reference": "Avocado",
      "country": "Australia",
      "ghgEmission": 0.9,
      "genre": "Avocados"
    },
    {
      "reference": "Avocado",
      "country": "Israel",
      "ghgEmission": 1.5,
      "genre": "Avocados"
    },
    {
      "reference": "Avocado",
      "country": "Mexico",
      "ghgEmission": 1.8,
      "genre": "Avocados"
    },
    {
      "reference": "Avocado",
      "country": "Mexico",
      "ghgEmission": 2.4,
      "genre": "Avocados"
    },
    {
      "reference": "Avocado",
      "country": "Peru",
      "ghgEmission": 4.9,
      "genre": "Avocados"
    },
    {
      "reference": "Pineapples",
      "country": "Costa Rica",
      "ghgEmission": 0.4,
      "genre": "Pineapples"
    },
    {
      "reference": "Pineapples",
      "country": "Costa Rica",
      "ghgEmission": 0.4,
      "genre": "Pineapples"
    },
    {
      "reference": "Pineapples",
      "country": "Ghana",
      "ghgEmission": 0.6,
      "genre": "Pineapples"
    },
    {
      "reference": "Pineapples",
      "country": "Ghana",
      "ghgEmission": 0.6,
      "genre": "Pineapples"
    },
    {
      "reference": "Pineapples",
      "country": "Ghana",
      "ghgEmission": 0.6,
      "genre": "Pineapples"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Kiwi",
      "country": "Greece",
      "ghgEmission": 1.3,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "Italy",
      "ghgEmission": 0.7,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.8,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.9,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.8,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.9,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 1.8,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 1.6,
      "genre": "Kiwi"
    },
    {
      "reference": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 2,
      "genre": "Kiwi"
    },
    {
      "reference": "Melon",
      "country": "Australia",
      "ghgEmission": 0.7,
      "genre": "Melons"
    },
    {
      "reference": "Watermelon",
      "country": "Australia",
      "ghgEmission": 0.8,
      "genre": "Melons"
    },
    {
      "reference": "Canary melon",
      "country": "Brazil",
      "ghgEmission": 2.9,
      "genre": "Melons"
    },
    {
      "reference": "Watermelon",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8,
      "genre": "Melons"
    },
    {
      "reference": "Watermelon",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7,
      "genre": "Melons"
    },
    {
      "reference": "Watermelon",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1,
      "genre": "Melons"
    },
    {
      "reference": "Melon",
      "country": "Spain",
      "ghgEmission": 0.6,
      "genre": "Melons"
    },
    {
      "reference": "Coffee beans",
      "country": "Brazil",
      "ghgEmission": 4.7,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Brazil",
      "ghgEmission": 7.4,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 15.6,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 9.9,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 11.4,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.3,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.6,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.3,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 6.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 8.6,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 9.7,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Indonesia",
      "ghgEmission": 84.6,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 29.3,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 30.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 31,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 21.2,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 37.9,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 31.4,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 34.4,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 29.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 64.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "El Salvador",
      "ghgEmission": 20.5,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Guatemala",
      "ghgEmission": 19.1,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 33.4,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 28.5,
      "genre": "Coffee"
    },
    {
      "reference": "Coffee beans",
      "country": "Vietnam",
      "ghgEmission": 6.5,
      "genre": "Coffee"
    },
    {
      "reference": "Chocolate",
      "country": "Ecuador",
      "ghgEmission": 1.8,
      "genre": "Chocolate"
    },
    {
      "reference": "Chocolate",
      "country": "Ecuador",
      "ghgEmission": 3,
      "genre": "Chocolate"
    },
    {
      "reference": "Chocolate",
      "country": "Ghana",
      "ghgEmission": -3.7,
      "genre": "Chocolate"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "reference",
      "country": "reference",
      "ghgEmission": "reference",
      "genre": "reference"
    },
    {
      "reference": "Cocoa",
      "country": "Brazil",
      "ghgEmission": 10.7,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Brazil",
      "ghgEmission": 3.4,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Colombia",
      "ghgEmission": 11.7,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Colombia",
      "ghgEmission": 9.5,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Colombia",
      "ghgEmission": 5.5,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Côte d'Ivoire",
      "ghgEmission": 4.9,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Ecuador",
      "ghgEmission": 1.8,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 2,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 2.3,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 3.5,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 2.8,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Ghana",
      "ghgEmission": -3.9,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 257.9,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 134,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 119.1,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 116.6,
      "genre": "Cocoa beans"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 49.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 51.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 50.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 61.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 44.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 45.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 44.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 38,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 41.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 50.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 50.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 46.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 44.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 52.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Australia",
      "ghgEmission": 50.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 93.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 167.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 206.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 126.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 86.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 93.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 85.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 112.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 205.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 55.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 374.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 266.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 145.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 111.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 77.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 187.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 86.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 432,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 171.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 131,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 100.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Brazil",
      "ghgEmission": 142.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 75.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 86.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 93.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 51,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 48.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 82.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 78,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 52,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 53.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 41.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 43.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Chile",
      "ghgEmission": 104.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Chile",
      "ghgEmission": 77.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 57.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 44.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 44,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 43.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 43.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 42,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 47.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 48.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 48.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 47.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 48,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 45.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 48.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 48.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 46.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 51.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 53.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 55.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 50.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 50.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 295.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 306.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 225.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 248.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 365.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 315.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 278.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Indonesia",
      "ghgEmission": 309.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Ireland",
      "ghgEmission": 36.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Ireland",
      "ghgEmission": 36.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Ireland",
      "ghgEmission": 35.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Ireland",
      "ghgEmission": 46,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 43.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 50.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 55.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Switzerland",
      "ghgEmission": 57.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Switzerland",
      "ghgEmission": 55.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 47.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 49.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 38.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 44.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 62.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 61.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 62.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 71.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 76.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 78.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 56.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 36.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 48,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United States of America",
      "ghgEmission": 49,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Uruguay",
      "ghgEmission": 74.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Uruguay",
      "ghgEmission": 64.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Uruguay",
      "ghgEmission": 55.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Uruguay",
      "ghgEmission": 74.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Uruguay",
      "ghgEmission": 65.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 10.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Canada",
      "ghgEmission": 9.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 21.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 27.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 20.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 32,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 20.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 20.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 25.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "China",
      "ghgEmission": 19.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 21.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 19.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 33,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 24.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Denmark",
      "ghgEmission": 23.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 73.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 55,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 53.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 46.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 51.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "France",
      "ghgEmission": 46,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Germany",
      "ghgEmission": 35.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Mexico",
      "ghgEmission": 26.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Mexico",
      "ghgEmission": 41.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Netherlands",
      "ghgEmission": 40.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Netherlands",
      "ghgEmission": 14.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Norway",
      "ghgEmission": 43.4,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Norway",
      "ghgEmission": 47.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Norway",
      "ghgEmission": 45.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Romania",
      "ghgEmission": 19.8,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 38.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 36.9,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 38.1,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 39.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 32.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Sweden",
      "ghgEmission": 24.5,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Switzerland",
      "ghgEmission": 33.7,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "Switzerland",
      "ghgEmission": 36.3,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 26.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 23.6,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 19,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 17.2,
      "genre": "Meat"
    },
    {
      "reference": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 43,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 45.2,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 61.6,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 49,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 57.3,
      "genre": "Meat"
    },
    {
      "reference": "Mutton",
      "country": "Australia",
      "ghgEmission": 32,
      "genre": "Meat"
    },
    {
      "reference": "Mutton",
      "country": "Australia",
      "ghgEmission": 29.8,
      "genre": "Meat"
    },
    {
      "reference": "Goat and kid meat",
      "country": "Australia",
      "ghgEmission": 21.8,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 37,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 29,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 28.8,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 34.3,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 34.7,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 34.2,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 55.4,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 26.2,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Australia",
      "ghgEmission": 31.7,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 39.5,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 45.2,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 44.1,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 40.5,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 39.3,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 36.7,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "France",
      "ghgEmission": 72.1,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "France",
      "ghgEmission": 67.9,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "France",
      "ghgEmission": 56.8,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "France",
      "ghgEmission": 38.7,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "France",
      "ghgEmission": 40.8,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 43.1,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 58.4,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 40.2,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 47.6,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "Netherlands",
      "ghgEmission": 61.1,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "New Zealand",
      "ghgEmission": 47.3,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "New Zealand",
      "ghgEmission": 24.5,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "Sweden",
      "ghgEmission": 37,
      "genre": "Meat"
    },
    {
      "reference": "Lamb and mutton",
      "country": "United Kingdom",
      "ghgEmission": 45.7,
      "genre": "Meat"
    },
    {
      "reference": "Lamb",
      "country": "United Kingdom",
      "ghgEmission": 29.1,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Australia",
      "ghgEmission": 16.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Australia",
      "ghgEmission": 12.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Austria",
      "ghgEmission": 11,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Brazil",
      "ghgEmission": 8.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Brazil",
      "ghgEmission": 7.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Brazil",
      "ghgEmission": 22.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Canada",
      "ghgEmission": 8.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Canada",
      "ghgEmission": 9.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Cuba",
      "ghgEmission": 20.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 9.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 10.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 9.4,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 10,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 10.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 8.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 6.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 6.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Denmark",
      "ghgEmission": 8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 10.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 12.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 13.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 15.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 13.1,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 8.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 10.1,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 9.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 8.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "France",
      "ghgEmission": 8.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 9.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 9.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 9.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 8.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 12.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 11.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 8.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 7.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 6.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Germany",
      "ghgEmission": 7.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Italy",
      "ghgEmission": 12.4,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Mexico",
      "ghgEmission": 18.1,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Mexico",
      "ghgEmission": 13.1,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 9.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 22.4,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 6.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.4,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Portugal",
      "ghgEmission": 10.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Spain",
      "ghgEmission": 12.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Spain",
      "ghgEmission": 12.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 15.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 16.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 16.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 16.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 9.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 11.5,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 19.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 11.8,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Sweden",
      "ghgEmission": 10.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Switzerland",
      "ghgEmission": 11.6,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Switzerland",
      "ghgEmission": 11.7,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Switzerland",
      "ghgEmission": 10.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 7.1,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 7.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.3,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 13.4,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 13.2,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.9,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "United States of America",
      "ghgEmission": 12,
      "genre": "Meat"
    },
    {
      "reference": "Pork",
      "country": "Vietnam",
      "ghgEmission": 27.6,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Australia",
      "ghgEmission": 15.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Australia",
      "ghgEmission": 5.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Australia",
      "ghgEmission": 7.3,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Australia",
      "ghgEmission": 6.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Australia",
      "ghgEmission": 5.2,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Brazil",
      "ghgEmission": 5.3,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Brazil",
      "ghgEmission": 4,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Brazil",
      "ghgEmission": 20.4,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Brazil",
      "ghgEmission": 13.8,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Canada",
      "ghgEmission": 5.8,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Canada",
      "ghgEmission": 4.7,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "Canada",
      "ghgEmission": 5.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Finland",
      "ghgEmission": 21,
      "genre": "Meat"
    },
    {
      "reference": "Goose (foie gras)",
      "country": "France",
      "ghgEmission": 47.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 10.3,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 9.8,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 9.2,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 9.1,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 11.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 16.1,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 9,
      "genre": "Meat"
    },
    {
      "reference": "Duck",
      "country": "France",
      "ghgEmission": 14.1,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "France",
      "ghgEmission": 17.5,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "France",
      "ghgEmission": 23.3,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 6.1,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 7.5,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 8.6,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "France",
      "ghgEmission": 8.1,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Malaysia",
      "ghgEmission": 9.2,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Malaysia",
      "ghgEmission": 9.5,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Netherlands",
      "ghgEmission": 5.8,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Netherlands",
      "ghgEmission": 7.9,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Norway",
      "ghgEmission": 8.9,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Russian Federation",
      "ghgEmission": 5.6,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Sweden",
      "ghgEmission": 5.5,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Switzerland",
      "ghgEmission": 5,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Switzerland",
      "ghgEmission": 6.6,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Switzerland",
      "ghgEmission": 6.8,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "United Kingdom",
      "ghgEmission": 9.7,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "United Kingdom",
      "ghgEmission": 11.1,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "United Kingdom",
      "ghgEmission": 14.9,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 13.5,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 12.2,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 13,
      "genre": "Meat"
    },
    {
      "reference": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 11.6,
      "genre": "Meat"
    },
    {
      "reference": "Chicken",
      "country": "Vietnam",
      "ghgEmission": 19.5,
      "genre": "Meat"
    },
    {
      "reference": "Goat's milk",
      "country": "Australia",
      "ghgEmission": 8.3,
      "genre": "Milk"
    },
    {
      "reference": "Sheep's milk",
      "country": "Australia",
      "ghgEmission": 6.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 2.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 4.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 4.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 8.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 5.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 3.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 3.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 1.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow and buffalo milk",
      "country": "India",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 3.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 3.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 3.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.5,
      "genre": "Milk"
    },
    {
      "reference": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 3.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 3.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 4.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Mexico",
      "ghgEmission": 2.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 3.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 3.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 14.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 6.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Romania",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 1.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.6,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.4,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 1.5,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 1.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.7,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 1.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 3.1,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 3,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 2.9,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 2.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 1.8,
      "genre": "Milk"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 2.2,
      "genre": "Milk"
    },
    {
      "reference": "Cow's cheese (Emmental)",
      "country": "Finland",
      "ghgEmission": 16,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "France",
      "ghgEmission": 29.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Germany",
      "ghgEmission": 20.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Italy",
      "ghgEmission": 18.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Netherlands",
      "ghgEmission": 12,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese (Gouda)",
      "country": "Netherlands",
      "ghgEmission": 9.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Netherlands",
      "ghgEmission": 11.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "New Zealand",
      "ghgEmission": 14.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Romania",
      "ghgEmission": 10.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Sweden",
      "ghgEmission": 16.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese",
      "country": "Switzerland",
      "ghgEmission": 21.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 16.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's cheese (Mozzarella)",
      "country": "United States of America",
      "ghgEmission": 16.5,
      "genre": "Cheese"
    },
    {
      "reference": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 17.1,
      "genre": "Cheese"
    },
    {
      "reference": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 15.9,
      "genre": "Cheese"
    },
    {
      "reference": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 14.5,
      "genre": "Cheese"
    },
    {
      "reference": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 13.1,
      "genre": "Cheese"
    },
    {
      "reference": "Goat's milk",
      "country": "Australia",
      "ghgEmission": 71.3,
      "genre": "Cheese"
    },
    {
      "reference": "Sheep's milk",
      "country": "Australia",
      "ghgEmission": 57.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 16.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 15.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 15,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 14.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 14.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 13.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 12.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 12.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 20.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 15.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 22.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 36.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 35.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 68.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 46.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 27.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 22.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 16.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 12,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 14.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 14.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 14.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 16.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 16.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 15.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 27,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 29.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 21.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 30.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 21.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 22.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 27.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 20.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 26.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 12.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 16.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 16.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 21.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 18.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 22.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "China",
      "ghgEmission": 23.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 31.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 28,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 20.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 16.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 22.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 18.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 23.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 15.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 15.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 18.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 18.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 17.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 16.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 17.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 16.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 14.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "France",
      "ghgEmission": 14.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 17.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 9.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 13.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 13.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow and buffalo milk",
      "country": "India",
      "ghgEmission": 22.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 12,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 13.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 11.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 15.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 16.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 17.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 18,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 17.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 17.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 19,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 26.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 19.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 16.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 15,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 27.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 26.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 18.8,
      "genre": "Cheese"
    },
    {
      "reference": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 17.7,
      "genre": "Cheese"
    },
    {
      "reference": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 24.2,
      "genre": "Cheese"
    },
    {
      "reference": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 27,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 30.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 25.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 23.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 37.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Mexico",
      "ghgEmission": 21,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 16,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 17.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 20.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 24.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 20.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 14.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 12.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 9.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 10.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 11.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 12.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 22.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 26.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 25.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 150.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 59.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 17.6,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 13.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 34.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 31.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 28.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 15.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 9.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 14.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 15.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 17.1,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 23,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 19.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 18.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 19.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 17.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 9.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 10.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 14,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 12.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 16.8,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 16.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 11.9,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 23.5,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 20.7,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 16.2,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 14.4,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 13.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 12.3,
      "genre": "Cheese"
    },
    {
      "reference": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 16,
      "genre": "Cheese"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Canada",
      "ghgEmission": 3,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Czech Republic",
      "ghgEmission": 8.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Czech Republic",
      "ghgEmission": 6.5,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 4.9,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 4.6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 4.6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 5.8,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 5.8,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 2.6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 3.7,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 3.8,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 5.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 5.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 5.5,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 6.6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 6,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Sweden",
      "ghgEmission": 4.2,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Sweden",
      "ghgEmission": 3.3,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "Sweden",
      "ghgEmission": 2.9,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 3.8,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 4.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 4.4,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 5.8,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "United States of America",
      "ghgEmission": 5.9,
      "genre": "Eggs"
    },
    {
      "reference": "Chicken's eggs",
      "country": "United States of America",
      "ghgEmission": 2.9,
      "genre": "Eggs"
    },
    {
      "reference": "Grass carp, silver carp, big head carp, common carp, catfish",
      "country": "Brazil",
      "ghgEmission": 34.8,
      "genre": "Fish"
    },
    {
      "reference": "Grass carp, silver carp, big head carp, common carp, catfish",
      "country": "Brazil",
      "ghgEmission": 32.3,
      "genre": "Fish"
    },
    {
      "reference": "Grass carp, silver carp, big head carp, common carp, catfish",
      "country": "Brazil",
      "ghgEmission": 32,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 87.8,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 40.4,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 34.9,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 28,
      "genre": "Fish"
    },
    {
      "reference": "Grass carp",
      "country": "China",
      "ghgEmission": 24.2,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "China",
      "ghgEmission": 14.2,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "China",
      "ghgEmission": 17,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "China",
      "ghgEmission": 13.2,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "China",
      "ghgEmission": 16.7,
      "genre": "Fish"
    },
    {
      "reference": "Brook trout, brown trout, rainbow trout, arctic char",
      "country": "Denmark",
      "ghgEmission": 10.6,
      "genre": "Fish"
    },
    {
      "reference": "Rainbow trout",
      "country": "France",
      "ghgEmission": 10.6,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "France",
      "ghgEmission": 8.8,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "France",
      "ghgEmission": 9.8,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "France",
      "ghgEmission": 8.8,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "France",
      "ghgEmission": 9.4,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "France",
      "ghgEmission": 8.8,
      "genre": "Fish"
    },
    {
      "reference": "Brook trout, brown trout, rainbow trout, arctic char",
      "country": "France",
      "ghgEmission": 13.6,
      "genre": "Fish"
    },
    {
      "reference": "Trout (large)",
      "country": "France",
      "ghgEmission": 8.3,
      "genre": "Fish"
    },
    {
      "reference": "Trout (small)",
      "country": "France",
      "ghgEmission": 6.9,
      "genre": "Fish"
    },
    {
      "reference": "Sea bass, sea bream",
      "country": "France",
      "ghgEmission": 13.3,
      "genre": "Fish"
    },
    {
      "reference": "Salmon",
      "country": "France",
      "ghgEmission": 8.1,
      "genre": "Fish"
    },
    {
      "reference": "Common carp, tench, roach, perch, sander, pike",
      "country": "France",
      "ghgEmission": 39,
      "genre": "Fish"
    },
    {
      "reference": "Common carp, tench, roach, perch, pike",
      "country": "France",
      "ghgEmission": 68.7,
      "genre": "Fish"
    },
    {
      "reference": "Common carp",
      "country": "Indonesia",
      "ghgEmission": 5.5,
      "genre": "Fish"
    },
    {
      "reference": "Common carp",
      "country": "Indonesia",
      "ghgEmission": 6.6,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Indonesia",
      "ghgEmission": 20.6,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Indonesia",
      "ghgEmission": 31.6,
      "genre": "Fish"
    },
    {
      "reference": "Rainbow trout",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 5.2,
      "genre": "Fish"
    },
    {
      "reference": "Rainbow trout",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 18.4,
      "genre": "Fish"
    },
    {
      "reference": "Salmon",
      "country": "Norway",
      "ghgEmission": 7.5,
      "genre": "Fish"
    },
    {
      "reference": "Salmon",
      "country": "Norway",
      "ghgEmission": 7.4,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "Peru",
      "ghgEmission": 15.3,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "Peru",
      "ghgEmission": 14.1,
      "genre": "Fish"
    },
    {
      "reference": "Trout",
      "country": "Peru",
      "ghgEmission": 14.9,
      "genre": "Fish"
    },
    {
      "reference": "Tambaqui",
      "country": "Peru",
      "ghgEmission": 31.4,
      "genre": "Fish"
    },
    {
      "reference": "Tambaqui",
      "country": "Peru",
      "ghgEmission": 29.1,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Peru",
      "ghgEmission": 31.1,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Peru",
      "ghgEmission": 32.4,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Peru",
      "ghgEmission": 24.3,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Thailand",
      "ghgEmission": 20.1,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia",
      "country": "Thailand",
      "ghgEmission": 18,
      "genre": "Fish"
    },
    {
      "reference": "Sea bass",
      "country": "Tunisia",
      "ghgEmission": 28.9,
      "genre": "Fish"
    },
    {
      "reference": "Sea bass",
      "country": "Tunisia",
      "ghgEmission": 44.2,
      "genre": "Fish"
    },
    {
      "reference": "Salmon",
      "country": "United Kingdom",
      "ghgEmission": 8.7,
      "genre": "Fish"
    },
    {
      "reference": "Salmon",
      "country": "United Kingdom",
      "ghgEmission": 8.3,
      "genre": "Fish"
    },
    {
      "reference": "Pangasius",
      "country": "Vietnam",
      "ghgEmission": 12.8,
      "genre": "Fish"
    },
    {
      "reference": "Pangasius",
      "country": "Vietnam",
      "ghgEmission": 13.5,
      "genre": "Fish"
    },
    {
      "reference": "Pangasius",
      "country": "Vietnam",
      "ghgEmission": 12.9,
      "genre": "Fish"
    },
    {
      "reference": "Pangasius",
      "country": "Vietnam",
      "ghgEmission": 13.6,
      "genre": "Fish"
    },
    {
      "reference": "Pangasius",
      "country": "Vietnam",
      "ghgEmission": 12,
      "genre": "Fish"
    },
    {
      "reference": "Tilapia, kissing gourami, giant gourami, silver barb, common carp, silver carp, striped catﬁsh",
      "country": "Vietnam",
      "ghgEmission": 35.1,
      "genre": "Fish"
    },
    {
      "reference": "Giant river prawn",
      "country": "Bangladesh",
      "ghgEmission": 82.8,
      "genre": "Shellfish"
    },
    {
      "reference": "Giant river prawn",
      "country": "Bangladesh",
      "ghgEmission": 94.6,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Bangladesh",
      "ghgEmission": 17.5,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Bangladesh",
      "ghgEmission": 48.1,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Bangladesh",
      "ghgEmission": 30.9,
      "genre": "Shellfish"
    },
    {
      "reference": "Giant river prawn",
      "country": "Bangladesh",
      "ghgEmission": 43.6,
      "genre": "Shellfish"
    },
    {
      "reference": "Amazon river prawn",
      "country": "Brazil",
      "ghgEmission": 87.7,
      "genre": "Shellfish"
    },
    {
      "reference": "Amazon river prawn",
      "country": "Brazil",
      "ghgEmission": 69.6,
      "genre": "Shellfish"
    },
    {
      "reference": "Giant giver prawn",
      "country": "Brazil",
      "ghgEmission": 48.5,
      "genre": "Shellfish"
    },
    {
      "reference": "Giant giver prawn",
      "country": "Brazil",
      "ghgEmission": 38.3,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "China",
      "ghgEmission": 12.9,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "China",
      "ghgEmission": 8.3,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "China",
      "ghgEmission": 15.1,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "China",
      "ghgEmission": 16.3,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "Thailand",
      "ghgEmission": 21.8,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "Thailand",
      "ghgEmission": 19.1,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Vietnam",
      "ghgEmission": 17.3,
      "genre": "Shellfish"
    },
    {
      "reference": "Shrimp",
      "country": "Vietnam",
      "ghgEmission": 14,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Vietnam",
      "ghgEmission": 16.9,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Vietnam",
      "ghgEmission": 62.4,
      "genre": "Shellfish"
    },
    {
      "reference": "Tiger prawn",
      "country": "Vietnam",
      "ghgEmission": 99,
      "genre": "Shellfish"
    }
  ];



db.Foods
  .remove({})
  .then(() => db.Foods.collection.insertMany(foodsSeed)).catch(err=> console.log(err))

  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });