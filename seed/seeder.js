const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/dbfoods")

const foodsSeed =
  [
    {
      "reference": "Narayanaswamy et al. (2004)",
      "product": "Wheat bread",
      "country": "Australia",
      "ghgEmission": 3.7
    },
    {
      "reference": "Moudrý Jr et al. (2013b)",
      "product": "Wheat bread",
      "country": "Czech Republic",
      "ghgEmission": 1.4
    },
    {
      "reference": "Moudrý Jr et al. (2013b)",
      "product": "Wheat bread",
      "country": "Czech Republic",
      "ghgEmission": 1.5
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat bread",
      "country": "France",
      "ghgEmission": 1.5
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat and rye bread",
      "country": "France",
      "ghgEmission": 4.5
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat bread",
      "country": "France",
      "ghgEmission": 1.2
    },
    {
      "reference": "Braschkat et al. (2003)",
      "product": "Wheat bread",
      "country": "Germany",
      "ghgEmission": 0.7
    },
    {
      "reference": "Braschkat et al. (2003)",
      "product": "Wheat bread",
      "country": "Germany",
      "ghgEmission": 0.4
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Wheat bread",
      "country": "Germany",
      "ghgEmission": 0.7
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat bread",
      "country": "Italy",
      "ghgEmission": 1.9
    },
    {
      "reference": "Korsaeth et al. (2012)",
      "product": "Wheat and rye bread",
      "country": "Norway",
      "ghgEmission": 1.8
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat and rye bread",
      "country": "Portugal",
      "ghgEmission": 2.1
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat bread",
      "country": "Portugal",
      "ghgEmission": 1.5
    },
    {
      "reference": "Kulak et al. (2015)",
      "product": "Wheat bread",
      "country": "Spain",
      "ghgEmission": 1.7
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Wheat bread",
      "country": "Switzerland",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Albania",
      "ghgEmission": 1.1
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Barton et al. (2014)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Barton et al. (2014)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Biswas et al. (2008)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Biswas et al. (2010)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 1.2
    },
    {
      "reference": "Brock et al. (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Eady et al. (2012)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Grant et al. (2008)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Maraseni and Cockfield (2011)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Muir et al. (2013)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Muir et al. (2013)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Muir et al. (2013)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Ridoutt et al. (2013)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Ridoutt et al. (2013)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Ridoutt et al. (2013)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Wang and Dalal (2015)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Wang and Dalal (2015)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Wang and Dalal (2015)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Wang and Dalal (2015)",
      "product": "Wheat",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Belarus",
      "ghgEmission": 4.7
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Wheat",
      "country": "Belgium",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Bolivia (Plurinational State of)",
      "ghgEmission": 2.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Bosnia and Herzegovina",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Burundi",
      "ghgEmission": 2.8
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Spring wheat",
      "country": "Canada",
      "ghgEmission": 1.2
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Spring wheat",
      "country": "Canada",
      "ghgEmission": 1.3
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Spring wheat",
      "country": "Canada",
      "ghgEmission": 1.3
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Wheat",
      "country": "Canada",
      "ghgEmission": 1
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Wheat",
      "country": "Canada",
      "ghgEmission": 1
    },
    {
      "reference": "Huerta et al. (2012)",
      "product": "Wheat",
      "country": "Chile",
      "ghgEmission": 1.3
    },
    {
      "reference": "Huerta et al. (2012)",
      "product": "Wheat",
      "country": "Chile",
      "ghgEmission": 1.1
    },
    {
      "reference": "Chen et al. (2014)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Chen et al. (2014)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Cheng et al. (2015)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Ha et al. (2015)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.2
    },
    {
      "reference": "Wang et al. (2014)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 2
    },
    {
      "reference": "Wang et al. (2014)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 2.2
    },
    {
      "reference": "Wang et al. (2016b)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Wheat flour",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yan et al. (2014)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.7
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.5
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Wheat",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.7
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.6
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Winter wheat",
      "country": "China",
      "ghgEmission": 1.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Croatia",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Croatia",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Croatia",
      "ghgEmission": 1.1
    },
    {
      "reference": "Christoforou et al. (2016)",
      "product": "Winter wheat",
      "country": "Cyprus",
      "ghgEmission": 1.3
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Rye",
      "country": "Czech Republic",
      "ghgEmission": 1
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Rye",
      "country": "Czech Republic",
      "ghgEmission": 0.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Democratic People's Republic of Korea",
      "ghgEmission": 1.5
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Denmark",
      "ghgEmission": 1.1
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Denmark",
      "ghgEmission": 1.3
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1.7
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1.7
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1.2
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Winter wheat",
      "country": "Denmark",
      "ghgEmission": 1
    },
    {
      "reference": "Mogensen et al. (2014)",
      "product": "Wheat",
      "country": "Denmark",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Egypt",
      "ghgEmission": 2.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Eritrea",
      "ghgEmission": 0.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Estonia",
      "ghgEmission": 6.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Estonia",
      "ghgEmission": 5.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Estonia",
      "ghgEmission": 5.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Ethiopia",
      "ghgEmission": 4
    },
    {
      "reference": "Rajaniemi et al. (2011)",
      "product": "Rye",
      "country": "Finland",
      "ghgEmission": 2.9
    },
    {
      "reference": "Rajaniemi et al. (2011)",
      "product": "Spring wheat",
      "country": "Finland",
      "ghgEmission": 2.1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Soft wheat",
      "country": "France",
      "ghgEmission": 1.1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Soft wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Soft wheat",
      "country": "France",
      "ghgEmission": 1.2
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Soft wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Naudin et al. (2014)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Naudin et al. (2014)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 0.8
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 1.1
    },
    {
      "reference": "van der Werf et al. (2005)",
      "product": "Winter wheat",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Wheat",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.5
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.3
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.3
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.1
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.4
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Winter rye",
      "country": "Germany",
      "ghgEmission": 0.9
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Germany",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Wheat",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Rye",
      "country": "Germany",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Wheat",
      "country": "Germany",
      "ghgEmission": 0.9
    },
    {
      "reference": "Zygouras et al. (2005); Achten and van Acker (2016)",
      "product": "Wheat flour",
      "country": "Greece",
      "ghgEmission": 1.8
    },
    {
      "reference": "Aryal et al. (2015)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 0.9
    },
    {
      "reference": "Aryal et al. (2015)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 0.7
    },
    {
      "reference": "Pathak et al. (2012a); Pathak et al. (2012b)",
      "product": "Wheat flour",
      "country": "India",
      "ghgEmission": 0.9
    },
    {
      "reference": "Pathak et al. (2012a); Pathak et al. (2012b)",
      "product": "Wheat flour",
      "country": "India",
      "ghgEmission": 0.9
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 1
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 1
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 1
    },
    {
      "reference": "Sapkota et al. (2014)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 0.8
    },
    {
      "reference": "Sapkota et al. (2014)",
      "product": "Wheat",
      "country": "India",
      "ghgEmission": 0.4
    },
    {
      "reference": "Fallahpour et al. (2012)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.8
    },
    {
      "reference": "Fallahpour et al. (2012)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.2
    },
    {
      "reference": "Ghahderijani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.7
    },
    {
      "reference": "Ghahderijani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3
    },
    {
      "reference": "Ghahderijani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.1
    },
    {
      "reference": "Ghahderijani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Mirasi et al. (2015)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.4
    },
    {
      "reference": "Mohammadi et al. (2014)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Sami et al. (2014)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.7
    },
    {
      "reference": "Soltani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3
    },
    {
      "reference": "Soltani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.9
    },
    {
      "reference": "Soltani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Soltani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Soltani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.5
    },
    {
      "reference": "Soltani et al. (2013)",
      "product": "Wheat",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Ireland",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Ireland",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Ireland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Goglio et al. (2012)",
      "product": "Winter wheat",
      "country": "Italy",
      "ghgEmission": 1
    },
    {
      "reference": "Goglio et al. (2012)",
      "product": "Winter wheat",
      "country": "Italy",
      "ghgEmission": 1.1
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Italy",
      "ghgEmission": 1
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Italy",
      "ghgEmission": 1.1
    },
    {
      "reference": "Noya et al. (2015)",
      "product": "Wheat",
      "country": "Italy",
      "ghgEmission": 1.1
    },
    {
      "reference": "Tamburini et al. (2015)",
      "product": "Wheat",
      "country": "Italy",
      "ghgEmission": 1.1
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Winter wheat",
      "country": "Japan",
      "ghgEmission": 1.6
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Winter wheat",
      "country": "Japan",
      "ghgEmission": 1.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Kenya",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Kyrgyzstan",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Latvia",
      "ghgEmission": 5.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Latvia",
      "ghgEmission": 4.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Latvia",
      "ghgEmission": 4.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Lithuania",
      "ghgEmission": 3.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Lithuania",
      "ghgEmission": 3
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Lithuania",
      "ghgEmission": 2.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Luxembourg",
      "ghgEmission": 1.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Luxembourg",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Luxembourg",
      "ghgEmission": 1.4
    },
    {
      "reference": "Dendooven et al. (2014)",
      "product": "Wheat",
      "country": "Mexico",
      "ghgEmission": 0.9
    },
    {
      "reference": "Dendooven et al. (2014)",
      "product": "Wheat",
      "country": "Mexico",
      "ghgEmission": 2.4
    },
    {
      "reference": "Dendooven et al. (2014)",
      "product": "Wheat",
      "country": "Mexico",
      "ghgEmission": 0.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Mongolia",
      "ghgEmission": 56
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Mozambique",
      "ghgEmission": 6.8
    },
    {
      "reference": "Sah et al. (2014)",
      "product": "Wheat",
      "country": "Nepal",
      "ghgEmission": 1.7
    },
    {
      "reference": "Sah et al. (2014)",
      "product": "Wheat",
      "country": "Nepal",
      "ghgEmission": 1.7
    },
    {
      "reference": "Sah et al. (2014)",
      "product": "Wheat",
      "country": "Nepal",
      "ghgEmission": 1.5
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Winter Wheat",
      "country": "Netherlands",
      "ghgEmission": 1.9
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Spring Wheat",
      "country": "Netherlands",
      "ghgEmission": 2.7
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Wheat",
      "country": "Netherlands",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Niger",
      "ghgEmission": 2.2
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Rye",
      "country": "Norway",
      "ghgEmission": 1.6
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Spring wheat",
      "country": "Norway",
      "ghgEmission": 2
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Winter wheat",
      "country": "Norway",
      "ghgEmission": 1.7
    },
    {
      "reference": "Korsaeth et al. (2012)",
      "product": "Spring wheat",
      "country": "Norway",
      "ghgEmission": 2.3
    },
    {
      "reference": "Korsaeth et al. (2012)",
      "product": "Winter wheat",
      "country": "Norway",
      "ghgEmission": 2.2
    },
    {
      "reference": "Roer et al. (2012)",
      "product": "Wheat",
      "country": "Norway",
      "ghgEmission": 1.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Pakistan",
      "ghgEmission": 2.9
    },
    {
      "reference": "Borzęcka-Walker et al. (2011)",
      "product": "Wheat",
      "country": "Poland",
      "ghgEmission": 1.8
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Poland",
      "ghgEmission": 1.9
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Wheat",
      "country": "Poland",
      "ghgEmission": 1.7
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Rye",
      "country": "Poland",
      "ghgEmission": 1
    },
    {
      "reference": "Rosado et al. (2013)",
      "product": "Wheat",
      "country": "Portugal",
      "ghgEmission": 1.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Rwanda",
      "ghgEmission": 5.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Slovenia",
      "ghgEmission": 1.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Slovenia",
      "ghgEmission": 1.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Slovenia",
      "ghgEmission": 1.4
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Wheat",
      "country": "Spain",
      "ghgEmission": 1.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Sudan (former)",
      "ghgEmission": 1.3
    },
    {
      "reference": "Bernesson et al. (2006)",
      "product": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.2
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.1
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.4
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.2
    },
    {
      "reference": "Tidåker et al. (2007)",
      "product": "Winter wheat",
      "country": "Sweden",
      "ghgEmission": 1.4
    },
    {
      "reference": "Charles et al. (2006)",
      "product": "Winter bread wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 0.9
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rye",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter wheat",
      "country": "Switzerland",
      "ghgEmission": 1.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Spring wheat",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Uganda",
      "ghgEmission": 5.6
    },
    {
      "reference": "Glithero et al. (2012)",
      "product": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Guo (2012)",
      "product": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 0.9
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Winter wheat",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Punter et al. (2004)",
      "product": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.1
    },
    {
      "reference": "Punter et al. (2004)",
      "product": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.2
    },
    {
      "reference": "Röder et al. (2014)",
      "product": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Wheat",
      "country": "United Kingdom",
      "ghgEmission": 0.9
    },
    {
      "reference": "Williams et al. (2006); Williams et al. (2010)",
      "product": "Bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Williams et al. (2006); Williams et al. (2010)",
      "product": "Bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Winter bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.2
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Spring bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Bread wheat",
      "country": "United Kingdom",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "United Republic of Tanzania",
      "ghgEmission": 13.1
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.5
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.6
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.8
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.5
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Winter wheat",
      "country": "United States of America",
      "ghgEmission": 1.2
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Wheat",
      "country": "United States of America",
      "ghgEmission": 1.3
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Wheat",
      "country": "United States of America",
      "ghgEmission": 1.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Uzbekistan",
      "ghgEmission": 1.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Wheat",
      "country": "Zimbabwe",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Angola",
      "ghgEmission": 27.4
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "Argentina",
      "ghgEmission": 1.4
    },
    {
      "reference": "Teixeira et al. (2007)",
      "product": "Maize",
      "country": "Argentina",
      "ghgEmission": 1.3
    },
    {
      "reference": "Maraseni et al. (2007)",
      "product": "Maize",
      "country": "Australia",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Belarus",
      "ghgEmission": 3.5
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Maize",
      "country": "Belgium",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Bolivia (Plurinational State of)",
      "ghgEmission": 1.3
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Maize",
      "country": "Brazil",
      "ghgEmission": 1.4
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Maize",
      "country": "Brazil",
      "ghgEmission": 1.4
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "Brazil",
      "ghgEmission": 1.6
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Maize",
      "country": "Brazil",
      "ghgEmission": 2.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Burundi",
      "ghgEmission": 3.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Cambodia",
      "ghgEmission": 7.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Cameroon",
      "ghgEmission": 12.4
    },
    {
      "reference": "Jayasundara et al. (2014)",
      "product": "Maize",
      "country": "Canada",
      "ghgEmission": 0.7
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Maize",
      "country": "Canada",
      "ghgEmission": 0.8
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Maize",
      "country": "Canada",
      "ghgEmission": 0.7
    },
    {
      "reference": "Ma et al. (2012)",
      "product": "Maize",
      "country": "Canada",
      "ghgEmission": 0.9
    },
    {
      "reference": "Ma et al. (2012)",
      "product": "Maize",
      "country": "Canada",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Central African Republic",
      "ghgEmission": 8.1
    },
    {
      "reference": "Chen et al. (2014)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1
    },
    {
      "reference": "Chen et al. (2014)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.2
    },
    {
      "reference": "Cheng et al. (2015)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Ha et al. (2015)",
      "product": "Summer maize",
      "country": "China",
      "ghgEmission": 0.9
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 2.3
    },
    {
      "reference": "Wang et al. (2014)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Wang et al. (2014)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.5
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 0.9
    },
    {
      "reference": "Yan et al. (2014)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.1
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 0.9
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yang and Chen (2013)",
      "product": "Maize",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Summer maize",
      "country": "China",
      "ghgEmission": 1.4
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Summer maize",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Summer maize",
      "country": "China",
      "ghgEmission": 1.1
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Summer maize",
      "country": "China",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Costa Rica",
      "ghgEmission": 2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Côte d'Ivoire",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Cuba",
      "ghgEmission": 3.2
    },
    {
      "reference": "Christoforou et al. (2016)",
      "product": "Maize",
      "country": "Cyprus",
      "ghgEmission": 0.9
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Maize",
      "country": "Denmark",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Egypt",
      "ghgEmission": 1.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "El Salvador",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Eritrea",
      "ghgEmission": 0.7
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "Ethiopia",
      "ghgEmission": 8
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 0.8
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 0.8
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "van der Werf et al. (2005)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 0.8
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Maize",
      "country": "France",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Gabon",
      "ghgEmission": 5.4
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Maize",
      "country": "Germany",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Maize",
      "country": "Hungary",
      "ghgEmission": 1
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "India",
      "ghgEmission": 3.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Sami et al. (2014)",
      "product": "Maize",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 5.1
    },
    {
      "reference": "Goglio et al. (2012)",
      "product": "Maize",
      "country": "Italy",
      "ghgEmission": 1
    },
    {
      "reference": "Noya et al. (2015)",
      "product": "Maize",
      "country": "Italy",
      "ghgEmission": 1.1
    },
    {
      "reference": "Noya et al. (2015)",
      "product": "Maize",
      "country": "Italy",
      "ghgEmission": 1
    },
    {
      "reference": "Noya et al. (2015)",
      "product": "Maize",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "Noya et al. (2015)",
      "product": "Maize",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "Noya et al. (2015)",
      "product": "Maize",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Kenya",
      "ghgEmission": 4.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Kyrgyzstan",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Madagascar",
      "ghgEmission": 9.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Malawi",
      "ghgEmission": 2.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Mali",
      "ghgEmission": 3.4
    },
    {
      "reference": "Dendooven et al. (2012); Govaerts et al. (2005); Beuchelt et al. (2015)",
      "product": "Maize",
      "country": "Mexico",
      "ghgEmission": 0.9
    },
    {
      "reference": "Dendooven et al. (2012); Govaerts et al. (2005); Beuchelt et al. (2015)",
      "product": "Maize",
      "country": "Mexico",
      "ghgEmission": 0.8
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "Mexico",
      "ghgEmission": 2.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Mozambique",
      "ghgEmission": 6.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Namibia",
      "ghgEmission": 1.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Nigeria",
      "ghgEmission": 0.7
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "Nigeria",
      "ghgEmission": 3.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Panama",
      "ghgEmission": 4
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Maize",
      "country": "Peru",
      "ghgEmission": 2.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Philippines",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Poland",
      "ghgEmission": 2.2
    },
    {
      "reference": "Teixeira et al. (2007)",
      "product": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.7
    },
    {
      "reference": "Teixeira et al. (2007)",
      "product": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.9
    },
    {
      "reference": "Teixeira et al. (2007)",
      "product": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.7
    },
    {
      "reference": "Teixeira et al. (2007)",
      "product": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.9
    },
    {
      "reference": "Teixeira et al. (2007)",
      "product": "Maize",
      "country": "Portugal",
      "ghgEmission": 0.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Republic of Moldova",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Romania",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Russian Federation",
      "ghgEmission": 3.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Rwanda",
      "ghgEmission": 5.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Senegal",
      "ghgEmission": 3.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Serbia",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Sierra Leone",
      "ghgEmission": 12.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Slovenia",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Somalia",
      "ghgEmission": 5.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "South Africa",
      "ghgEmission": 0.9
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "South Africa",
      "ghgEmission": 1.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Sri Lanka",
      "ghgEmission": 3.5
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Maize",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Thailand",
      "ghgEmission": 1
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Maize",
      "country": "Thailand",
      "ghgEmission": 0.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Togo",
      "ghgEmission": 9.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Uganda",
      "ghgEmission": 5
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Ukraine",
      "ghgEmission": 2.4
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Maize",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Maize",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Maize",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 10
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 15.9
    },
    {
      "reference": "Plassmann et al. (2014)",
      "product": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 11
    },
    {
      "reference": "Plassmann et al. (2014)",
      "product": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 10.9
    },
    {
      "reference": "Plassmann et al. (2014)",
      "product": "Maize",
      "country": "United Republic of Tanzania",
      "ghgEmission": 6.5
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.3
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.6
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.4
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.6
    },
    {
      "reference": "Archer and Halvorson (2010)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Archer and Halvorson (2010)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.5
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Grassini and Cassman (2012)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.1
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.1
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.5
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Kim et al. (2009)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Murphy and Kendall (2013)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.3
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.3
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.4
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 1.4
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Maize",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Uzbekistan",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Venezuela (Bolivarian Republic of)",
      "ghgEmission": 2.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Zambia",
      "ghgEmission": 72.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Maize",
      "country": "Zimbabwe",
      "ghgEmission": 4.4
    },
    {
      "reference": "Narayanaswamy et al. (2004)",
      "product": "Beer",
      "country": "Australia",
      "ghgEmission": 1.5
    },
    {
      "reference": "Lalonde et al. (2013)",
      "product": "Beer (Vashon Brewing Company)",
      "country": "United States of America",
      "ghgEmission": 2.6
    },
    {
      "reference": "Lalonde et al. (2013)",
      "product": "Beer (Vortex IPA, Fort George Brewery)",
      "country": "United States of America",
      "ghgEmission": 1.4
    },
    {
      "reference": "Lalonde et al. (2013)",
      "product": "Beer (Pinnacle Peak Pale Ale, Harmon Brewing Company)",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Lalonde et al. (2013)",
      "product": "Beer (HUB Lager, Hopworks Urban Brewery)",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Lalonde et al. (2013)",
      "product": "Beer (Horn Blonde Ale, RAM Brewery)",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "The Climate Conservancy (2008)",
      "product": "Beer (Fat Tire® Amber Ale)",
      "country": "United States of America",
      "ghgEmission": 1.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Algeria",
      "ghgEmission": 1.2
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Barley",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Eady et al. (2012)",
      "product": "Barley",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Maraseni and Cockfield (2011)",
      "product": "Barley",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Belarus",
      "ghgEmission": 1.5
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Barley",
      "country": "Belgium",
      "ghgEmission": 1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Barley",
      "country": "Belgium",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Bosnia and Herzegovina",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Bulgaria",
      "ghgEmission": 1.1
    },
    {
      "reference": "Gan et al. (2012a)",
      "product": "Spring barley",
      "country": "Canada",
      "ghgEmission": 1
    },
    {
      "reference": "Gan et al. (2012a)",
      "product": "Spring barley",
      "country": "Canada",
      "ghgEmission": 1.1
    },
    {
      "reference": "Christoforou et al. (2016)",
      "product": "Winter barley",
      "country": "Cyprus",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Czech Republic",
      "ghgEmission": 1.1
    },
    {
      "reference": "Dalgaard et al. (2008)",
      "product": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1.1
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Spring barley",
      "country": "Denmark",
      "ghgEmission": 1.1
    },
    {
      "reference": "Mogensen et al. (2014)",
      "product": "Barley",
      "country": "Denmark",
      "ghgEmission": 1.1
    },
    {
      "reference": "Niero et al. (2015)",
      "product": "Barley",
      "country": "Denmark",
      "ghgEmission": 1.1
    },
    {
      "reference": "Rajaniemi et al. (2011)",
      "product": "Barley",
      "country": "Finland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Summer malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter malting barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Garcia-Launay et al. (2014)",
      "product": "Spring barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Barley",
      "country": "France",
      "ghgEmission": 1.1
    },
    {
      "reference": "van der Werf et al. (2005)",
      "product": "Barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Barley",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Winter barley",
      "country": "Germany",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Barley",
      "country": "Germany",
      "ghgEmission": 1.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Barley",
      "country": "Germany",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Hungary",
      "ghgEmission": 1.2
    },
    {
      "reference": "Fallahpour et al. (2012)",
      "product": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.1
    },
    {
      "reference": "Fallahpour et al. (2012)",
      "product": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Mobtaker et al. (2010); Mobtaker et al. (2013)",
      "product": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Mohammadi et al. (2014)",
      "product": "Barley",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Ireland",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Morocco",
      "ghgEmission": 1.2
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Barley",
      "country": "Norway",
      "ghgEmission": 1.2
    },
    {
      "reference": "Korsaeth et al. (2012)",
      "product": "Barley",
      "country": "Norway",
      "ghgEmission": 1.3
    },
    {
      "reference": "Roer et al. (2012)",
      "product": "Barley",
      "country": "Norway",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Poland",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Republic of Moldova",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Romania",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Russian Federation",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Serbia",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Slovakia",
      "ghgEmission": 1.1
    },
    {
      "reference": "Bartzas et al. (2015)",
      "product": "Barley",
      "country": "Spain",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Barley",
      "country": "Spain",
      "ghgEmission": 1.1
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.1
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.2
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.1
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Barley",
      "country": "Sweden",
      "ghgEmission": 1.1
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Summer barley",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Tunisia",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Turkey",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Ukraine",
      "ghgEmission": 1.3
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Winter barley",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Winter barley",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Spring barley",
      "country": "United Kingdom",
      "ghgEmission": 1
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Spring barley",
      "country": "United Kingdom",
      "ghgEmission": 1.1
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Winter barley",
      "country": "United Kingdom",
      "ghgEmission": 1.1
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Barley",
      "country": "United States of America",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Barley",
      "country": "Uzbekistan",
      "ghgEmission": 1.2
    },
    {
      "reference": "Eady et al. (2012)",
      "product": "Oats",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peeled oats",
      "country": "Belgium",
      "ghgEmission": 0.8
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Oats",
      "country": "Canada",
      "ghgEmission": 0.9
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Oats",
      "country": "Finland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Rajaniemi et al. (2011)",
      "product": "Oats",
      "country": "Finland",
      "ghgEmission": 2.8
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peeled oats",
      "country": "Netherlands",
      "ghgEmission": 1
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Oats",
      "country": "Norway",
      "ghgEmission": 2.2
    },
    {
      "reference": "Korsaeth et al. (2012)",
      "product": "Oats",
      "country": "Norway",
      "ghgEmission": 2.8
    },
    {
      "reference": "Roer et al. (2012)",
      "product": "Oats",
      "country": "Norway",
      "ghgEmission": 2
    },
    {
      "reference": "Rosado et al. (2013)",
      "product": "Oats",
      "country": "Portugal",
      "ghgEmission": 1.8
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Oats",
      "country": "Sweden",
      "ghgEmission": 1.4
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Oats",
      "country": "Sweden",
      "ghgEmission": 1.9
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Oats",
      "country": "Sweden",
      "ghgEmission": 1.4
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Oats",
      "country": "United States of America",
      "ghgEmission": 3.3
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Oats",
      "country": "United States of America",
      "ghgEmission": 2.6
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Oats",
      "country": "United States of America",
      "ghgEmission": 4
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Oats",
      "country": "United States of America",
      "ghgEmission": 4.3
    },
    {
      "reference": "Chen et al. (2014)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 3.8
    },
    {
      "reference": "Chen et al. (2014)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 4
    },
    {
      "reference": "Cheng et al. (2015)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 4.1
    },
    {
      "reference": "Liu et al. (2016)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.7
    },
    {
      "reference": "Wang et al. (2010)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 5
    },
    {
      "reference": "Xu et al. (2013)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 6.2
    },
    {
      "reference": "Xu et al. (2013)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 5
    },
    {
      "reference": "Xu et al. (2013)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 3.7
    },
    {
      "reference": "Xu et al. (2013)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 4.2
    },
    {
      "reference": "Xu et al. (2013)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 6.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.2
    },
    {
      "reference": "Xue et al. (2014)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 3.9
    },
    {
      "reference": "Xue et al. (2014)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 5.7
    },
    {
      "reference": "Xue et al. (2014)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 4.4
    },
    {
      "reference": "Yan et al. (2014)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.4
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.6
    },
    {
      "reference": "Yan et al. (2015a)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.5
    },
    {
      "reference": "Yan et al. (2015b)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 3.5
    },
    {
      "reference": "Yan et al. (2015b)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.8
    },
    {
      "reference": "Yan et al. (2015b)",
      "product": "Rice",
      "country": "China",
      "ghgEmission": 2.6
    },
    {
      "reference": "Datta et al. (2011)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 8.4
    },
    {
      "reference": "Gathorne-Hardy et al. (2013)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 3.1
    },
    {
      "reference": "Gathorne-Hardy et al. (2013)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 6.9
    },
    {
      "reference": "Pathak et al. (2012a); Pathak et al. (2012b)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.1
    },
    {
      "reference": "Pathak et al. (2012a); Pathak et al. (2012b)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.5
    },
    {
      "reference": "Pathak et al. (2013)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.4
    },
    {
      "reference": "Pathak et al. (2013)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.8
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 2.1
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 2
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.7
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.7
    },
    {
      "reference": "Saharawat et al. (2012)",
      "product": "Rice",
      "country": "India",
      "ghgEmission": 1.8
    },
    {
      "reference": "Mohammadi et al. (2015)",
      "product": "Rice",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.1
    },
    {
      "reference": "Mohammadi et al. (2015)",
      "product": "Rice",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.4
    },
    {
      "reference": "Mohammadi et al. (2015)",
      "product": "Rice",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 4.9
    },
    {
      "reference": "Fusi et al. (2014a)",
      "product": "Long grain rice",
      "country": "Italy",
      "ghgEmission": 1.7
    },
    {
      "reference": "Fusi et al. (2014a)",
      "product": "Long grain rice",
      "country": "Italy",
      "ghgEmission": 1.1
    },
    {
      "reference": "Blengini and Busto (2009)",
      "product": "Rice",
      "country": "Italy",
      "ghgEmission": 4.4
    },
    {
      "reference": "Blengini and Busto (2009)",
      "product": "Rice",
      "country": "Italy",
      "ghgEmission": 5
    },
    {
      "reference": "Harada et al. (2007)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.6
    },
    {
      "reference": "Harada et al. (2007)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 2.8
    },
    {
      "reference": "Harada et al. (2007)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.5
    },
    {
      "reference": "Hatcho et al. (2012)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.5
    },
    {
      "reference": "Hatcho et al. (2012)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.2
    },
    {
      "reference": "Hokazono and Hayashi (2012)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.6
    },
    {
      "reference": "Hokazono and Hayashi (2012)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.3
    },
    {
      "reference": "Hokazono and Hayashi (2012)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 4.2
    },
    {
      "reference": "Hokazono et al. (2009)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.4
    },
    {
      "reference": "Hokazono et al. (2009)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.3
    },
    {
      "reference": "Hokazono et al. (2009)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 3.8
    },
    {
      "reference": "Koga and Tajima (2011)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 9.2
    },
    {
      "reference": "Koga and Tajima (2011)",
      "product": "Rice",
      "country": "Japan",
      "ghgEmission": 7.8
    },
    {
      "reference": "Bautista and Saito (2015)",
      "product": "Rice",
      "country": "Philippines",
      "ghgEmission": 4
    },
    {
      "reference": "Bautista and Saito (2015)",
      "product": "Rice",
      "country": "Philippines",
      "ghgEmission": 3.2
    },
    {
      "reference": "Aguilera et al. (2015a)",
      "product": "Rice",
      "country": "Spain",
      "ghgEmission": 3.8
    },
    {
      "reference": "Aguilera et al. (2015a)",
      "product": "Rice",
      "country": "Spain",
      "ghgEmission": 6.1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 9.3
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 3.7
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 3.7
    },
    {
      "reference": "Thanawong et al. (2014)",
      "product": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 7.7
    },
    {
      "reference": "Thanawong et al. (2014)",
      "product": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 13.5
    },
    {
      "reference": "Thanawong et al. (2014)",
      "product": "Jasmine rice",
      "country": "Thailand",
      "ghgEmission": 14.4
    },
    {
      "reference": "Brodt et al. (2014)",
      "product": "Rice",
      "country": "United States of America",
      "ghgEmission": 2.6
    },
    {
      "reference": "Phong et al. (2011)",
      "product": "Rice",
      "country": "Viet Nam",
      "ghgEmission": 4.2
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.6
    },
    {
      "reference": "Norton et al. (2008)",
      "product": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.5
    },
    {
      "reference": "Norton et al. (2008)",
      "product": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.4
    },
    {
      "reference": "Norton et al. (2008)",
      "product": "Potatoes",
      "country": "Australia",
      "ghgEmission": 0.5
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.5
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Haverkort et al. (2014)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.4
    },
    {
      "reference": "Sandaña and Kalazich (2015)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.2
    },
    {
      "reference": "Sandaña and Kalazich (2015)",
      "product": "Potatoes",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Potatoes",
      "country": "China",
      "ghgEmission": 0.5
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sweet potatoes",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Potatoes",
      "country": "China",
      "ghgEmission": 0.5
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Sweet potatoes",
      "country": "China",
      "ghgEmission": 0.1
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Sweet potatoes",
      "country": "China",
      "ghgEmission": 0.1
    },
    {
      "reference": "Christoforou et al. (2016)",
      "product": "Potatoes",
      "country": "Cyprus",
      "ghgEmission": 0.4
    },
    {
      "reference": "Moudrý Jr et al. (2013a)",
      "product": "Potatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Moudrý Jr et al. (2013a)",
      "product": "Potatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4
    },
    {
      "reference": "Knudsen et al. (2014)",
      "product": "Potatoes",
      "country": "Denmark",
      "ghgEmission": 0.4
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Potatoes",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Potatoes",
      "country": "France",
      "ghgEmission": 0.4
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Potatoes",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Potatoes",
      "country": "Germany",
      "ghgEmission": 0.5
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Potatoes",
      "country": "Germany",
      "ghgEmission": 0.4
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Potatoes",
      "country": "Germany",
      "ghgEmission": 0.2
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Potatoes",
      "country": "India",
      "ghgEmission": 0.6
    },
    {
      "reference": "Bakhtiari et al. (2015)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "Khoshnevisan et al. (2014b)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7
    },
    {
      "reference": "Khoshnevisan et al. (2014b)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "Khoshnevisan et al. (2014b)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4
    },
    {
      "reference": "Pishgar-Komleh et al. (2012)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "Pishgar-Komleh et al. (2012)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4
    },
    {
      "reference": "Pishgar-Komleh et al. (2012)",
      "product": "Potatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Potatoes",
      "country": "Israel",
      "ghgEmission": 0.6
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Potatoes",
      "country": "Israel",
      "ghgEmission": 0.6
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Potatoes",
      "country": "Japan",
      "ghgEmission": 0.4
    },
    {
      "reference": "Uchida and Hayashi (2012)",
      "product": "Potatoes",
      "country": "Japan",
      "ghgEmission": 0.3
    },
    {
      "reference": "Uchida and Hayashi (2012)",
      "product": "Sweet potatoes",
      "country": "Japan",
      "ghgEmission": 0.8
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.5
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.6
    },
    {
      "reference": "Haverkort and Hillier (2011)",
      "product": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.4
    },
    {
      "reference": "Haverkort and Hillier (2011)",
      "product": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.5
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Potatoes",
      "country": "Netherlands",
      "ghgEmission": 0.5
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Potatoes",
      "country": "Norway",
      "ghgEmission": 0.5
    },
    {
      "reference": "Cayambe et al. (2015)",
      "product": "Potatoes",
      "country": "Spain",
      "ghgEmission": 0.3
    },
    {
      "reference": "Flores et al. (2016)",
      "product": "Sweet potatoes",
      "country": "Philippines",
      "ghgEmission": 0.3
    },
    {
      "reference": "Flores et al. (2016)",
      "product": "Sweet potatoes",
      "country": "Philippines",
      "ghgEmission": 0.5
    },
    {
      "reference": "Flores et al. (2016)",
      "product": "Sweet potatoes",
      "country": "Philippines",
      "ghgEmission": 0.5
    },
    {
      "reference": "Borzęcka-Walker et al. (2011)",
      "product": "Potatoes",
      "country": "Poland",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Potatoes",
      "country": "Peru",
      "ghgEmission": 1.6
    },
    {
      "reference": "Cayambe et al. (2015)",
      "product": "Potatoes",
      "country": "Peru",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Potatoes",
      "country": "Russian Federation",
      "ghgEmission": 0.4
    },
    {
      "reference": "Mattsson and Wallén (2003)",
      "product": "Potatoes",
      "country": "Sweden",
      "ghgEmission": 0.4
    },
    {
      "reference": "Röös et al. (2010)",
      "product": "Potatoes",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Potatoes",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Potatoes",
      "country": "Ukraine",
      "ghgEmission": 0.5
    },
    {
      "reference": "Hillier et al. (2009)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Potatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sweet potatoes",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "Zaher et al. (2016)",
      "product": "Potatoes",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "Zaher et al. (2016)",
      "product": "Potatoes",
      "country": "United States of America",
      "ghgEmission": 0.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Angola",
      "ghgEmission": 1.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Argentina",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Benin",
      "ghgEmission": 1
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Brazil",
      "ghgEmission": 0.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Burkina Faso",
      "ghgEmission": 7.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Burundi",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Cambodia",
      "ghgEmission": 1.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Cameroon",
      "ghgEmission": 2.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Central African Republic",
      "ghgEmission": 2.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Chad",
      "ghgEmission": 0.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "China",
      "ghgEmission": 1.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Colombia",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Congo",
      "ghgEmission": 2.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Costa Rica",
      "ghgEmission": 1.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Côte d'Ivoire",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Cuba",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Democratic Republic of the Congo",
      "ghgEmission": 0.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Ecuador",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Gabon",
      "ghgEmission": 1.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Ghana",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Guinea",
      "ghgEmission": 1.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Guinea-Bissau",
      "ghgEmission": 1.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "India",
      "ghgEmission": 0.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Indonesia",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Kenya",
      "ghgEmission": 0.8
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Liberia",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Madagascar",
      "ghgEmission": 1.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Malawi",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Mali",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Mozambique",
      "ghgEmission": 1
    },
    {
      "reference": "BMZ Federal Ministry for Economic Cooperation and Development (2014)",
      "product": "Cassava",
      "country": "Nigeria",
      "ghgEmission": 2.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Nigeria",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Paraguay",
      "ghgEmission": 0.7
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Peru",
      "ghgEmission": 2.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Philippines",
      "ghgEmission": 0.6
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Rwanda",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Senegal",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Sierra Leone",
      "ghgEmission": 7.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Somalia",
      "ghgEmission": 1.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Sri Lanka",
      "ghgEmission": 0.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Sudan (former)",
      "ghgEmission": 2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.6
    },
    {
      "reference": "Silalertruksa and Gheewala (2009)",
      "product": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.3
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.3
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Cassava",
      "country": "Thailand",
      "ghgEmission": 0.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Togo",
      "ghgEmission": 2.3
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Uganda",
      "ghgEmission": 0.4
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "United Republic of Tanzania",
      "ghgEmission": 1.9
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Venezuela (Bolivarian Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Viet Nam",
      "ghgEmission": 1.1
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Zambia",
      "ghgEmission": 36.2
    },
    {
      "reference": "FAO (2014)",
      "product": "Cassava",
      "country": "Zimbabwe",
      "ghgEmission": 1.6
    },
    {
      "reference": "Acreche and Valeiro (2013); Hun et al. (2016)",
      "product": "Sugar",
      "country": "Argentina",
      "ghgEmission": 2.4
    },
    {
      "reference": "Acreche and Valeiro (2013); Hun et al. (2016)",
      "product": "Sugar",
      "country": "Argentina",
      "ghgEmission": 2.4
    },
    {
      "reference": "Mele et al. (2011)",
      "product": "Sugar",
      "country": "Argentina",
      "ghgEmission": 2.3
    },
    {
      "reference": "Renouf et al. (2011); Renouf et al. (2010)",
      "product": "Sugar",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Renouf et al. (2011); Renouf et al. (2010)",
      "product": "Sugar",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Renouf et al. (2011); Renouf et al. (2010)",
      "product": "Sugar",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Australia",
      "ghgEmission": 1.1
    },
    {
      "reference": "de Figueiredo et al. (2010)",
      "product": "Sugar",
      "country": "Brazil",
      "ghgEmission": 4
    },
    {
      "reference": "de Figueiredo and La Scala Jr (2011)",
      "product": "Sugar",
      "country": "Brazil",
      "ghgEmission": 3.4
    },
    {
      "reference": "de Figueiredo and La Scala Jr (2011)",
      "product": "Sugar",
      "country": "Brazil",
      "ghgEmission": 3.4
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Sugar",
      "country": "Brazil",
      "ghgEmission": 0.6
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Brazil",
      "ghgEmission": 3.9
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Sugar",
      "country": "China",
      "ghgEmission": 2.4
    },
    {
      "reference": "Soam et al. (2015)",
      "product": "Sugar",
      "country": "India",
      "ghgEmission": 1.1
    },
    {
      "reference": "Soam et al. (2015)",
      "product": "Sugar",
      "country": "India",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Indonesia",
      "ghgEmission": 4.8
    },
    {
      "reference": "Uchida and Hayashi (2012)",
      "product": "Sugar",
      "country": "Japan",
      "ghgEmission": 3.1
    },
    {
      "reference": "Dunkelberg et al. (2014)",
      "product": "Sugar",
      "country": "Malawi",
      "ghgEmission": 2.1
    },
    {
      "reference": "Plassmann et al. (2010)",
      "product": "Sugar",
      "country": "Mauritius",
      "ghgEmission": 1.5
    },
    {
      "reference": "Ramjeawon (2004)",
      "product": "Sugar",
      "country": "Mauritius",
      "ghgEmission": 0.8
    },
    {
      "reference": "García et al. (2016)",
      "product": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.5
    },
    {
      "reference": "García et al. (2016)",
      "product": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.1
    },
    {
      "reference": "García et al. (2016)",
      "product": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.6
    },
    {
      "reference": "García et al. (2016)",
      "product": "Sugar",
      "country": "Mexico",
      "ghgEmission": 2.4
    },
    {
      "reference": "Khatiwada and Silveira (2011)",
      "product": "Sugar",
      "country": "Nepal",
      "ghgEmission": 4
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Pakistan",
      "ghgEmission": 2.6
    },
    {
      "reference": "Mashoko et al. (2010)",
      "product": "Sugar",
      "country": "South Africa",
      "ghgEmission": 1.1
    },
    {
      "reference": "van der Laan et al. (2015)",
      "product": "Sugar",
      "country": "South Africa",
      "ghgEmission": 1.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Sudan (former)",
      "ghgEmission": 1
    },
    {
      "reference": "Silalertruksa et al. (2017)",
      "product": "Sugar",
      "country": "Thailand",
      "ghgEmission": 0.7
    },
    {
      "reference": "Yuttitham et al. (2011)",
      "product": "Sugar",
      "country": "Thailand",
      "ghgEmission": 1.5
    },
    {
      "reference": "Yuttitham et al. (2011)",
      "product": "Sugar",
      "country": "Thailand",
      "ghgEmission": 1.1
    },
    {
      "reference": "Yuttitham et al. (2011)",
      "product": "Sugar",
      "country": "Thailand",
      "ghgEmission": 1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "United States of America",
      "ghgEmission": 1.7
    },
    {
      "reference": "Plassmann et al. (2010)",
      "product": "Sugar",
      "country": "Zambia",
      "ghgEmission": 47.6
    },
    {
      "reference": "Plassmann et al. (2010)",
      "product": "Sugar",
      "country": "Zambia",
      "ghgEmission": 21.6
    },
    {
      "reference": "Plassmann et al. (2010)",
      "product": "Sugar",
      "country": "Zambia",
      "ghgEmission": 21.7
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Sugar",
      "country": "Zambia",
      "ghgEmission": 17.3
    },
    {
      "reference": "de Oliveira Bordonal et al. (2013)",
      "product": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.6
    },
    {
      "reference": "de Oliveira Bordonal et al. (2013)",
      "product": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.5
    },
    {
      "reference": "de Oliveira Bordonal et al. (2013)",
      "product": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.5
    },
    {
      "reference": "Macedo et al. (2004)",
      "product": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 5.2
    },
    {
      "reference": "Tsiropoulos et al. (2014)",
      "product": "Sugar cane",
      "country": "Brazil",
      "ghgEmission": 4.8
    },
    {
      "reference": "Tsiropoulos et al. (2014)",
      "product": "Sugar cane",
      "country": "India",
      "ghgEmission": 1.9
    },
    {
      "reference": "Frieden et al. (2011)",
      "product": "Sugar cane",
      "country": "Indonesia",
      "ghgEmission": 8.6
    },
    {
      "reference": "Khatiwada et al. (2016)",
      "product": "Sugar cane",
      "country": "Indonesia",
      "ghgEmission": 14.5
    },
    {
      "reference": "Sefeedpari et al. (2014)",
      "product": "Sugar cane",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.2
    },
    {
      "reference": "Nakashima and Ishikawa (2016)",
      "product": "Sugar cane",
      "country": "Japan",
      "ghgEmission": 2.2
    },
    {
      "reference": "Nakashima and Ishikawa (2016)",
      "product": "Sugar cane",
      "country": "Japan",
      "ghgEmission": 2.4
    },
    {
      "reference": "Nakashima and Ishikawa (2016)",
      "product": "Sugar cane",
      "country": "Japan",
      "ghgEmission": 2.1
    },
    {
      "reference": "Frieden et al. (2011)",
      "product": "Sugar cane",
      "country": "Mexico",
      "ghgEmission": 5.5
    },
    {
      "reference": "Nguyen and Hermansen (2012)",
      "product": "Sugar cane",
      "country": "Thailand",
      "ghgEmission": 1.9
    },
    {
      "reference": "Eshton and Katima (2015)",
      "product": "Sugar cane",
      "country": "United Republic of Tanzania",
      "ghgEmission": 4.5
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Sugar",
      "country": "China",
      "ghgEmission": 1.6
    },
    {
      "reference": "Brentrup et al. (2001)",
      "product": "Sugar",
      "country": "Germany",
      "ghgEmission": 1.6
    },
    {
      "reference": "Brentrup et al. (2001)",
      "product": "Sugar",
      "country": "Germany",
      "ghgEmission": 1.7
    },
    {
      "reference": "Brentrup et al. (2001)",
      "product": "Sugar",
      "country": "Germany",
      "ghgEmission": 1.6
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Germany",
      "ghgEmission": 1
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Sugar",
      "country": "Netherlands",
      "ghgEmission": 1.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sugar",
      "country": "Netherlands",
      "ghgEmission": 0.9
    },
    {
      "reference": "Flysjö et al. (2008)",
      "product": "Sugar",
      "country": "Sweden",
      "ghgEmission": 1.6
    },
    {
      "reference": "Christoforou et al. (2016)",
      "product": "Sugar beet",
      "country": "Cyprus",
      "ghgEmission": 2
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Sugar beet",
      "country": "France",
      "ghgEmission": 1.5
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Sugar beet",
      "country": "France",
      "ghgEmission": 2.1
    },
    {
      "reference": "Salehi et al. (2014)",
      "product": "Sugar beet",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2
    },
    {
      "reference": "Yousefi et al. (2014)",
      "product": "Sugar beet",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.7
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Sugar beet",
      "country": "Japan",
      "ghgEmission": 2
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Sugar beet",
      "country": "Japan",
      "ghgEmission": 2.1
    },
    {
      "reference": "Uchida and Hayashi (2012)",
      "product": "Sugar beet",
      "country": "Japan",
      "ghgEmission": 3.5
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Sugar beet",
      "country": "Netherlands",
      "ghgEmission": 2.1
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Sugar beet",
      "country": "Netherlands",
      "ghgEmission": 1.9
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Sugar beet",
      "country": "Switzerland",
      "ghgEmission": 1.8
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.8
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.7
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.7
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2.1
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2.1
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.9
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.6
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.6
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.5
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 1.5
    },
    {
      "reference": "Tzilivakis et al. (2005)",
      "product": "Sugar beet",
      "country": "United Kingdom",
      "ghgEmission": 2
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Sugar beet",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Chickpeas",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Eady et al. (2012)",
      "product": "Lupins",
      "country": "Australia",
      "ghgEmission": 1.5
    },
    {
      "reference": "Maraseni and Cockfield (2011)",
      "product": "Chickpeas",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Lupins",
      "country": "Australia",
      "ghgEmission": 1.4
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Lupins",
      "country": "Belgium",
      "ghgEmission": 1.2
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Chickpeas",
      "country": "Canada",
      "ghgEmission": 1.2
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Chickpeas",
      "country": "Canada",
      "ghgEmission": 1.4
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.1
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.2
    },
    {
      "reference": "MacWilliam et al. (2014)",
      "product": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Lentils",
      "country": "Canada",
      "ghgEmission": 1.9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Faba beans",
      "country": "France",
      "ghgEmission": 2
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Faba beans",
      "country": "France",
      "ghgEmission": 1.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Spring faba beans",
      "country": "France",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Faba beans",
      "country": "France",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Faba beans",
      "country": "France",
      "ghgEmission": 1.6
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Faba beans",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Lupins",
      "country": "Germany",
      "ghgEmission": 1.3
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.1
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.2
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.5
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 1.5
    },
    {
      "reference": "Abeliotis et al. (2013)",
      "product": "Runner beans",
      "country": "Greece",
      "ghgEmission": 0.9
    },
    {
      "reference": "Pratibha et al. (2015)",
      "product": "Pigeon peas",
      "country": "India",
      "ghgEmission": 1.3
    },
    {
      "reference": "Pratibha et al. (2015)",
      "product": "Pigeon peas",
      "country": "India",
      "ghgEmission": 1.3
    },
    {
      "reference": "Pratibha et al. (2015)",
      "product": "Pigeon peas",
      "country": "India",
      "ghgEmission": 1.3
    },
    {
      "reference": "Moraditochaee et al. (2014)",
      "product": "Lentils",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.9
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Adzuki bean",
      "country": "Japan",
      "ghgEmission": 2.4
    },
    {
      "reference": "Koga et al. (2006); Nakashima (2010)",
      "product": "Adzuki bean",
      "country": "Japan",
      "ghgEmission": 2.4
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Brown beans",
      "country": "Netherlands",
      "ghgEmission": 5.3
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Field beans",
      "country": "Netherlands",
      "ghgEmission": 2
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Field beans",
      "country": "Netherlands",
      "ghgEmission": 2.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Field beans",
      "country": "Netherlands",
      "ghgEmission": 4.5
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Field beans",
      "country": "Switzerland",
      "ghgEmission": 1.5
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Field beans",
      "country": "Switzerland",
      "ghgEmission": 1.8
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Lentils",
      "country": "Turkey",
      "ghgEmission": 3.1
    },
    {
      "reference": "Glithero et al. (2012)",
      "product": "Winter field beans",
      "country": "United Kingdom",
      "ghgEmission": 0.9
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 1.1
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 1.2
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 0.7
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Field beans",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Lentils",
      "country": "United States of America",
      "ghgEmission": 2.4
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peas",
      "country": "Australia",
      "ghgEmission": 2
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Peas",
      "country": "Belgium",
      "ghgEmission": 0.9
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Peas",
      "country": "Canada",
      "ghgEmission": 0.7
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Peas",
      "country": "Canada",
      "ghgEmission": 0.8
    },
    {
      "reference": "Gan et al. (2011)",
      "product": "Peas",
      "country": "Canada",
      "ghgEmission": 0.9
    },
    {
      "reference": "MacWilliam et al. (2014)",
      "product": "Spring peas",
      "country": "Canada",
      "ghgEmission": 0.6
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Spring peas",
      "country": "France",
      "ghgEmission": 0.6
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Spring peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter peas",
      "country": "France",
      "ghgEmission": 0.4
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 0.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Naudin et al. (2014)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 0.7
    },
    {
      "reference": "Naudin et al. (2014)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 0.5
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Nguyen et al. (2012b)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 0.6
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peas",
      "country": "France",
      "ghgEmission": 0.6
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Peas",
      "country": "Germany",
      "ghgEmission": 1.2
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peas",
      "country": "Germany",
      "ghgEmission": 0.9
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Peas",
      "country": "Netherlands",
      "ghgEmission": 1.9
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Peas",
      "country": "Netherlands",
      "ghgEmission": 2.3
    },
    {
      "reference": "Rosado et al. (2015)",
      "product": "Peas",
      "country": "Portugal",
      "ghgEmission": 1.7
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Peas",
      "country": "Spain",
      "ghgEmission": 1.6
    },
    {
      "reference": "Flysjö et al. (2008)",
      "product": "Peas",
      "country": "Sweden",
      "ghgEmission": 1.4
    },
    {
      "reference": "Flysjö et al. (2008)",
      "product": "Peas",
      "country": "Sweden",
      "ghgEmission": 1.4
    },
    {
      "reference": "Flysjö et al. (2008)",
      "product": "Peas",
      "country": "Sweden",
      "ghgEmission": 1.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Peas",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Peas",
      "country": "Switzerland",
      "ghgEmission": 1.5
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Almonds",
      "country": "Australia",
      "ghgEmission": 3
    },
    {
      "reference": "de Figueirêdo et al. (2016)",
      "product": "Cashew nuts",
      "country": "Brazil",
      "ghgEmission": 10.9
    },
    {
      "reference": "de Figueirêdo et al. (2016)",
      "product": "Cashew nuts",
      "country": "Brazil",
      "ghgEmission": 23.7
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Almonds",
      "country": "China",
      "ghgEmission": 1.7
    },
    {
      "reference": "Bartzas et al. (2016)",
      "product": "Pistachios",
      "country": "Greece",
      "ghgEmission": 3.6
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Cashew nuts",
      "country": "India",
      "ghgEmission": -3.4
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2013)",
      "product": "Hazelnuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": -8.1
    },
    {
      "reference": "Salehi et al. (2016)",
      "product": "Almonds",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 8.1
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Hazelnuts",
      "country": "Italy",
      "ghgEmission": 3
    },
    {
      "reference": "Rosa et al. (2017)",
      "product": "Chestnuts",
      "country": "Portugal",
      "ghgEmission": 3.5
    },
    {
      "reference": "Rosa et al. (2017)",
      "product": "Chestnuts",
      "country": "Portugal",
      "ghgEmission": 2.1
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Almonds, Hazelnuts, Carob",
      "country": "Spain",
      "ghgEmission": 2.1
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Almonds, Hazelnuts, Carob",
      "country": "Spain",
      "ghgEmission": 2.1
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Walnuts",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Kendall et al. (2015)",
      "product": "Almonds",
      "country": "United States of America",
      "ghgEmission": -2.9
    },
    {
      "reference": "Marvinney et al. (2014)",
      "product": "Walnuts",
      "country": "United States of America",
      "ghgEmission": -0.2
    },
    {
      "reference": "Marvinney et al. (2014)",
      "product": "Pistachios",
      "country": "United States of America",
      "ghgEmission": -4.1
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Almonds",
      "country": "United States of America",
      "ghgEmission": -1.4
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Almonds",
      "country": "United States of America",
      "ghgEmission": 3.7
    },
    {
      "reference": "Venkat (2012)",
      "product": "Almonds",
      "country": "United States of America",
      "ghgEmission": -2
    },
    {
      "reference": "Venkat (2012)",
      "product": "Almonds",
      "country": "United States of America",
      "ghgEmission": -1.2
    },
    {
      "reference": "Venkat (2012)",
      "product": "Walnuts",
      "country": "United States of America",
      "ghgEmission": -0.3
    },
    {
      "reference": "Venkat (2012)",
      "product": "Walnuts",
      "country": "United States of America",
      "ghgEmission": -2.1
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Peanuts",
      "country": "Argentina",
      "ghgEmission": 6.2
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peanuts",
      "country": "Argentina",
      "ghgEmission": 4.2
    },
    {
      "reference": "Maraseni et al. (2007)",
      "product": "Peanuts",
      "country": "Australia",
      "ghgEmission": 1.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peanuts",
      "country": "Brazil",
      "ghgEmission": 5.6
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Peanuts",
      "country": "China",
      "ghgEmission": 1.7
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Peanuts",
      "country": "China",
      "ghgEmission": 1.3
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peanuts",
      "country": "China",
      "ghgEmission": 2.1
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Peanuts",
      "country": "China",
      "ghgEmission": 1.7
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Peanuts",
      "country": "China",
      "ghgEmission": 3.6
    },
    {
      "reference": "Yang et al. (2014)",
      "product": "Peanuts",
      "country": "China",
      "ghgEmission": 3.4
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Peanuts",
      "country": "India",
      "ghgEmission": 3.6
    },
    {
      "reference": "Schmidt (2015)",
      "product": "Peanuts",
      "country": "India",
      "ghgEmission": 2
    },
    {
      "reference": "Nikkhah et al. (2015)",
      "product": "Peanuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nikkhah et al. (2015)",
      "product": "Peanuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nikkhah et al. (2015)",
      "product": "Peanuts",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.3
    },
    {
      "reference": "McCarty et al. (2012)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 2
    },
    {
      "reference": "McCarty et al. (2012)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.8
    },
    {
      "reference": "McCarty et al. (2012)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "McCarty et al. (2012)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.7
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.7
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.8
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "Torres et al. (2015)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Peanuts",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 0.9
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 1
    },
    {
      "reference": "Dalgaard et al. (2008)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 1.1
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 0.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 1.1
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3
    },
    {
      "reference": "Castanheira and Freire (2013); Cavalett and Ortega (2009)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.4
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.6
    },
    {
      "reference": "Cavalett and Ortega (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.7
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.5
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3
    },
    {
      "reference": "Maciel et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.7
    },
    {
      "reference": "Matsuura et al. (2016)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.9
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.9
    },
    {
      "reference": "Prudêncio da Silva et al. (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.8
    },
    {
      "reference": "Prudêncio da Silva et al. (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 0.8
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.4
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.3
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.9
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Soybeans",
      "country": "Canada",
      "ghgEmission": 0.7
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Soybeans",
      "country": "Canada",
      "ghgEmission": 0.7
    },
    {
      "reference": "Cheng et al. (2015)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 0.7
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 1
    },
    {
      "reference": "Knudsen et al. (2010)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 0.7
    },
    {
      "reference": "Knudsen et al. (2010)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 0.7
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 0.8
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "India",
      "ghgEmission": 1.8
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Mohammadi et al. (2014)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 0.9
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 0.8
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Soybeans",
      "country": "Thailand",
      "ghgEmission": 0.7
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Pollack and Greig (2010)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3
    },
    {
      "reference": "Dalgaard et al. (2008)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3.6
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 2.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 3.7
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5
    },
    {
      "reference": "Castanheira and Freire (2013); Cavalett and Ortega (2009)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5.3
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 6.2
    },
    {
      "reference": "Cavalett and Ortega (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 7.1
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.8
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.6
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 6
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.7
    },
    {
      "reference": "Maciel et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 1.9
    },
    {
      "reference": "Matsuura et al. (2016)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.9
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.5
    },
    {
      "reference": "Prudêncio da Silva et al. (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2
    },
    {
      "reference": "Prudêncio da Silva et al. (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.4
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5.4
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.9
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 4.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 8.1
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Soybeans",
      "country": "Canada",
      "ghgEmission": 1.7
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Soybeans",
      "country": "Canada",
      "ghgEmission": 1.7
    },
    {
      "reference": "Cheng et al. (2015)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 1.8
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 3.4
    },
    {
      "reference": "Knudsen et al. (2010)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 1.8
    },
    {
      "reference": "Knudsen et al. (2010)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 1.8
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 2.1
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "India",
      "ghgEmission": 7.6
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.3
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.2
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.2
    },
    {
      "reference": "Mohammadi et al. (2014)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 2.5
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 2.4
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Soybeans",
      "country": "Thailand",
      "ghgEmission": 1.8
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.5
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.2
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.3
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.1
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2
    },
    {
      "reference": "Pollack and Greig (2010)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.2
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 1.8
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.1
    },
    {
      "reference": "Dalgaard et al. (2008)",
      "product": "Soybean oil",
      "country": "Argentina",
      "ghgEmission": 7.7
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Soybean oil",
      "country": "China",
      "ghgEmission": 3
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Soybean oil",
      "country": "Brazil",
      "ghgEmission": 4.4
    },
    {
      "reference": "Nguyen et al. (2012b); Prudêncio da Silva et al. (2010)",
      "product": "Soybean oil",
      "country": "Brazil",
      "ghgEmission": 2.9
    },
    {
      "reference": "van der Werf et al. (2005)",
      "product": "Soybean oil",
      "country": "Brazil",
      "ghgEmission": 21.3
    },
    {
      "reference": "Rajaeifar et al. (2014b); Mousavi-Avval et al. (2011a)",
      "product": "Soybean oil",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.4
    },
    {
      "reference": "Stephenson et al. (2010)",
      "product": "Soybean oil",
      "country": "South Africa",
      "ghgEmission": 3.9
    },
    {
      "reference": "Krieger and Knowlton (2014)",
      "product": "Soybean oil",
      "country": "United States of America",
      "ghgEmission": 2.9
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 5.7
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 5.9
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 5.6
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "Argentina",
      "ghgEmission": 7.8
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 11.7
    },
    {
      "reference": "Castanheira and Freire (2013); Cavalett and Ortega (2009)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 12.5
    },
    {
      "reference": "Castanheira and Freire (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 15.1
    },
    {
      "reference": "Cavalett and Ortega (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 17.5
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 10.9
    },
    {
      "reference": "de Alvarenga (2010)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 10.5
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 14.4
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 10.8
    },
    {
      "reference": "Maciel et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 2.3
    },
    {
      "reference": "Matsuura et al. (2016)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 5.4
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 12.8
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 11.2
    },
    {
      "reference": "Raucci et al. (2015)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 8.9
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "Brazil",
      "ghgEmission": 20.4
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Soybeans",
      "country": "Canada",
      "ghgEmission": 2.3
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Soybeans",
      "country": "Canada",
      "ghgEmission": 2.2
    },
    {
      "reference": "Cheng et al. (2015)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 2.3
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 7
    },
    {
      "reference": "Knudsen et al. (2010)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 2.4
    },
    {
      "reference": "Knudsen et al. (2010)",
      "product": "Soybeans",
      "country": "China",
      "ghgEmission": 2.3
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "India",
      "ghgEmission": 19
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.8
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.5
    },
    {
      "reference": "Mohammadi et al. (2013)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.4
    },
    {
      "reference": "Mohammadi et al. (2014)",
      "product": "Soybeans",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.8
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 4.6
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Soybeans",
      "country": "Switzerland",
      "ghgEmission": 4.2
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Soybeans",
      "country": "Thailand",
      "ghgEmission": 2.5
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 4.6
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.5
    },
    {
      "reference": "Adom et al. (2012)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.9
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.7
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.2
    },
    {
      "reference": "Jungbluth et al. (2007)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 2.3
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Soybeans",
      "country": "United States of America",
      "ghgEmission": 3.2
    },
    {
      "reference": "de Souza et al. (2010)",
      "product": "Palm oil",
      "country": "Brazil",
      "ghgEmission": 3.6
    },
    {
      "reference": "Achten et al. (2010)",
      "product": "Palm oil",
      "country": "Cameroon",
      "ghgEmission": 6.7
    },
    {
      "reference": "Castanheira et al. (2014)",
      "product": "Palm oil",
      "country": "Colombia",
      "ghgEmission": 2.6
    },
    {
      "reference": "Garcia-Nunez (2015)",
      "product": "Palm oil",
      "country": "Colombia",
      "ghgEmission": 4.9
    },
    {
      "reference": "Mathews and Ardiyanto (2015)",
      "product": "Palm oil",
      "country": "Indonesia",
      "ghgEmission": 7.4
    },
    {
      "reference": "Siregar et al. (2015)",
      "product": "Palm oil",
      "country": "Indonesia",
      "ghgEmission": 10
    },
    {
      "reference": "Choo et al. (2011)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 3.4
    },
    {
      "reference": "Pehnelt and Vietze (2013b)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 5.3
    },
    {
      "reference": "Schmidt (2010); Nguyen et al. (2012b)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 7.3
    },
    {
      "reference": "Stichnothe and Schuchardt (2011)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 5.5
    },
    {
      "reference": "Stichnothe and Schuchardt (2011)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 3.5
    },
    {
      "reference": "Yee et al. (2009); de Souza et al. (2010)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 5.3
    },
    {
      "reference": "Yusoff and Hansen (2007); de Souza et al. (2010); Dalgaard et al. (2008)",
      "product": "Palm oil",
      "country": "Malaysia",
      "ghgEmission": 4.7
    },
    {
      "reference": "Pleanjai and Gheewala (2009); de Souza et al. (2010)",
      "product": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 1
    },
    {
      "reference": "Saswattecha et al. (2015)",
      "product": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 2.9
    },
    {
      "reference": "Saswattecha et al. (2015)",
      "product": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 1.6
    },
    {
      "reference": "Saswattecha et al. (2015)",
      "product": "Palm oil",
      "country": "Thailand",
      "ghgEmission": -0.3
    },
    {
      "reference": "Thamsiriroj and Murphy (2009)",
      "product": "Palm oil",
      "country": "Thailand",
      "ghgEmission": 1
    },
    {
      "reference": "Delivand and Gnansounou (2013)",
      "product": "Palm fruit",
      "country": "Brazil",
      "ghgEmission": 5.1
    },
    {
      "reference": "Bessou et al. (2016)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 9
    },
    {
      "reference": "Frieden et al. (2011)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 11.9
    },
    {
      "reference": "Harsono et al. (2012)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 9.5
    },
    {
      "reference": "Harsono et al. (2012)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 12.5
    },
    {
      "reference": "Harsono et al. (2012)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 8.8
    },
    {
      "reference": "Harsono et al. (2012)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 9.3
    },
    {
      "reference": "Harsono et al. (2012)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 14.2
    },
    {
      "reference": "Harsono et al. (2012)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 8.9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 8.2
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Palm fruit",
      "country": "Indonesia",
      "ghgEmission": 13
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Palm fruit",
      "country": "Malaysia",
      "ghgEmission": 5.3
    },
    {
      "reference": "Spinelli et al. (2012)",
      "product": "Sunflower oil",
      "country": "Italy",
      "ghgEmission": 4.5
    },
    {
      "reference": "Spinelli et al. (2013)",
      "product": "Sunflower oil",
      "country": "Italy",
      "ghgEmission": 3.4
    },
    {
      "reference": "Figueiredo et al. (2017); Figueiredo et al. (2012)",
      "product": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.1
    },
    {
      "reference": "Figueiredo et al. (2017); Figueiredo et al. (2012)",
      "product": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.6
    },
    {
      "reference": "Figueiredo et al. (2017); Figueiredo et al. (2012)",
      "product": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.5
    },
    {
      "reference": "Figueiredo et al. (2017); Figueiredo et al. (2012)",
      "product": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 3.2
    },
    {
      "reference": "Figueiredo et al. (2017); Figueiredo et al. (2012)",
      "product": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.9
    },
    {
      "reference": "Figueiredo et al. (2017); Figueiredo et al. (2012)",
      "product": "Sunflower oil",
      "country": "Portugal",
      "ghgEmission": 2.6
    },
    {
      "reference": "Stephenson et al. (2010)",
      "product": "Sunflower oil",
      "country": "South Africa",
      "ghgEmission": 3.9
    },
    {
      "reference": "Stephenson et al. (2010)",
      "product": "Sunflower oil",
      "country": "South Africa",
      "ghgEmission": 3.3
    },
    {
      "reference": "Hetherington (2014)",
      "product": "Sunflower oil",
      "country": "Spain",
      "ghgEmission": 3.4
    },
    {
      "reference": "Schmidt (2015)",
      "product": "Sunflower oil",
      "country": "Ukraine",
      "ghgEmission": 3
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sunflower seeds",
      "country": "Argentina",
      "ghgEmission": 2.4
    },
    {
      "reference": "Matsuura et al. (2016)",
      "product": "Sunflower seeds",
      "country": "Brazil",
      "ghgEmission": 7.7
    },
    {
      "reference": "Iriarte et al. (2010)",
      "product": "Sunflower seeds",
      "country": "Chile",
      "ghgEmission": 4.5
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sunflower seeds",
      "country": "China",
      "ghgEmission": 4.3
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 2.2
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 2.5
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 2.6
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 3.6
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sunflower seeds",
      "country": "France",
      "ghgEmission": 3.3
    },
    {
      "reference": "Küstermann et al. (2008)",
      "product": "Sunflower seeds",
      "country": "Germany",
      "ghgEmission": 2.6
    },
    {
      "reference": "Goglio et al. (2012)",
      "product": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 4.1
    },
    {
      "reference": "Spugnoli et al. (2012)",
      "product": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 2.9
    },
    {
      "reference": "Spugnoli et al. (2012)",
      "product": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 4.3
    },
    {
      "reference": "Spugnoli et al. (2012)",
      "product": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 3.4
    },
    {
      "reference": "Spugnoli et al. (2012)",
      "product": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 2.8
    },
    {
      "reference": "Spugnoli et al. (2012)",
      "product": "Sunflower seeds",
      "country": "Italy",
      "ghgEmission": 3.9
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Sunflower seeds",
      "country": "Spain",
      "ghgEmission": 3.7
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Sunflower seeds",
      "country": "Switzerland",
      "ghgEmission": 3.8
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Sunflower seeds",
      "country": "Ukraine",
      "ghgEmission": 4.2
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Canola oil",
      "country": "Australia",
      "ghgEmission": 2
    },
    {
      "reference": "Grant et al. (2008)",
      "product": "Canola oil",
      "country": "Australia",
      "ghgEmission": 2.4
    },
    {
      "reference": "Narayanaswamy et al. (2004)",
      "product": "Rapeseed oil",
      "country": "Australia",
      "ghgEmission": 7.8
    },
    {
      "reference": "Rustandi and Wu (2010)",
      "product": "Canola oil",
      "country": "Australia",
      "ghgEmission": 3.9
    },
    {
      "reference": "Meul et al. (2012)",
      "product": "Rapeseed oil",
      "country": "Belgium",
      "ghgEmission": 3.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Rapeseed oil",
      "country": "China",
      "ghgEmission": 3.8
    },
    {
      "reference": "Schmidt (2010)",
      "product": "Rapeseed oil",
      "country": "Denmark",
      "ghgEmission": 3.6
    },
    {
      "reference": "Garcia-Launay et al. (2014)",
      "product": "Rapeseed oil",
      "country": "France",
      "ghgEmission": 2.3
    },
    {
      "reference": "Hetherington (2014)",
      "product": "Rapeseed oil",
      "country": "Germany",
      "ghgEmission": 3.1
    },
    {
      "reference": "Pehnelt and Vietze (2013a)",
      "product": "Rapeseed oil",
      "country": "Germany",
      "ghgEmission": 3.1
    },
    {
      "reference": "Thamsiriroj and Murphy (2009)",
      "product": "Rapeseed oil",
      "country": "Ireland",
      "ghgEmission": 3.4
    },
    {
      "reference": "D'Avino et al. (2015)",
      "product": "Rapeseed oil",
      "country": "Italy",
      "ghgEmission": 3.8
    },
    {
      "reference": "Pehnelt and Vietze (2013a)",
      "product": "Rapeseed oil",
      "country": "Poland",
      "ghgEmission": 4.3
    },
    {
      "reference": "Pehnelt and Vietze (2013a)",
      "product": "Rapeseed oil",
      "country": "Romania",
      "ghgEmission": 3.3
    },
    {
      "reference": "Stephenson et al. (2010)",
      "product": "Canola oil",
      "country": "South Africa",
      "ghgEmission": 3.7
    },
    {
      "reference": "Esteban et al. (2011)",
      "product": "Rapeseed oil",
      "country": "Spain",
      "ghgEmission": 4.4
    },
    {
      "reference": "Bernesson et al. (2004)",
      "product": "Rapeseed oil",
      "country": "Sweden",
      "ghgEmission": 6.3
    },
    {
      "reference": "Mortimer and Elsayed (2006)",
      "product": "Rapeseed oil",
      "country": "United Kingdom",
      "ghgEmission": 2.6
    },
    {
      "reference": "Eady et al. (2012)",
      "product": "Canola",
      "country": "Australia",
      "ghgEmission": 2.1
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Canola",
      "country": "Australia",
      "ghgEmission": 9.5
    },
    {
      "reference": "Gan et al. (2012b)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 3.5
    },
    {
      "reference": "Gan et al. (2012b)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 3
    },
    {
      "reference": "Gan et al. (2012b)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 3.4
    },
    {
      "reference": "MacWilliam et al. (2016)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 2.8
    },
    {
      "reference": "MacWilliam et al. (2016)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 2.6
    },
    {
      "reference": "MacWilliam et al. (2016)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 2.6
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 7.9
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 3.2
    },
    {
      "reference": "Pelletier et al. (2008)",
      "product": "Canola",
      "country": "Canada",
      "ghgEmission": 3
    },
    {
      "reference": "Iriarte et al. (2010)",
      "product": "Rapeseed",
      "country": "Chile",
      "ghgEmission": 2.8
    },
    {
      "reference": "Dalgaard et al. (2008)",
      "product": "Rapeseed",
      "country": "Denmark",
      "ghgEmission": 4.9
    },
    {
      "reference": "Mogensen et al. (2014)",
      "product": "Rapeseed",
      "country": "Denmark",
      "ghgEmission": 3.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.7
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.7
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.3
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.4
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.8
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.9
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.5
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.7
    },
    {
      "reference": "Carrouée et al. (2012)",
      "product": "Winter rapeseed",
      "country": "France",
      "ghgEmission": 3.4
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.1
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.9
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Rapeseed",
      "country": "France",
      "ghgEmission": 3.4
    },
    {
      "reference": "van der Werf (2004)",
      "product": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.1
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Rapeseed",
      "country": "France",
      "ghgEmission": 4.1
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rapeseed",
      "country": "Germany",
      "ghgEmission": 2.9
    },
    {
      "reference": "Nemecek et al. (2008)",
      "product": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 3.4
    },
    {
      "reference": "Neufeldt and Schäfer (2008)",
      "product": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 2.6
    },
    {
      "reference": "Queirós et al. (2015); Jungbluth et al. (2007)",
      "product": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 3.4
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Rapeseed",
      "country": "Germany",
      "ghgEmission": 3
    },
    {
      "reference": "Khojastehpour et al. (2015)",
      "product": "Canola",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 7.1
    },
    {
      "reference": "Khojastehpour et al. (2015)",
      "product": "Canola",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 4.9
    },
    {
      "reference": "Mohammadi et al. (2014)",
      "product": "Canola",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 2.4
    },
    {
      "reference": "Palmieri et al. (2014)",
      "product": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 3.1
    },
    {
      "reference": "Palmieri et al. (2014)",
      "product": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 3.6
    },
    {
      "reference": "Palmieri et al. (2014)",
      "product": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 3.3
    },
    {
      "reference": "Palmieri et al. (2014)",
      "product": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 7.7
    },
    {
      "reference": "Palmieri et al. (2014)",
      "product": "Rapeseed",
      "country": "Italy",
      "ghgEmission": 13.6
    },
    {
      "reference": "Bonesmo et al. (2012)",
      "product": "Rapeseed",
      "country": "Norway",
      "ghgEmission": 6.2
    },
    {
      "reference": "Queirós et al. (2015); Borzęcka-Walker et al. (2013)",
      "product": "Rapeseed",
      "country": "Poland",
      "ghgEmission": 3.9
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Winter rapeseed",
      "country": "Sweden",
      "ghgEmission": 3.6
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Winter rapeseed",
      "country": "Sweden",
      "ghgEmission": 5.5
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Winter rapeseed",
      "country": "Sweden",
      "ghgEmission": 4.4
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Spring rapeseed",
      "country": "Sweden",
      "ghgEmission": 4.8
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Spring rapeseed",
      "country": "Sweden",
      "ghgEmission": 6.2
    },
    {
      "reference": "Flysjö et al. (2008); Sikfoder.se (2015)",
      "product": "Spring rapeseed",
      "country": "Sweden",
      "ghgEmission": 5.4
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 3.7
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 3.7
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 3.8
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Winter rapeseed",
      "country": "Switzerland",
      "ghgEmission": 4.4
    },
    {
      "reference": "Khojastehpour et al. (2015)",
      "product": "Canola",
      "country": "Turkey",
      "ghgEmission": 4.2
    },
    {
      "reference": "Glithero et al. (2012)",
      "product": "Winter rapeseed",
      "country": "United Kingdom",
      "ghgEmission": 4.5
    },
    {
      "reference": "Williams et al. (2006); Williams et al. (2010)",
      "product": "Rapeseed",
      "country": "United Kingdom",
      "ghgEmission": 3.4
    },
    {
      "reference": "Williams et al. (2006); Williams et al. (2010)",
      "product": "Rapeseed",
      "country": "United Kingdom",
      "ghgEmission": 3.5
    },
    {
      "reference": "Camargo et al. (2013)",
      "product": "Canola",
      "country": "United States of America",
      "ghgEmission": 3.1
    },
    {
      "reference": "Gustafson et al. (2014)",
      "product": "Canola",
      "country": "United States of America",
      "ghgEmission": 7.7
    },
    {
      "reference": "Avraamides and Fatta (2006)",
      "product": "Extra virgin olive oil",
      "country": "Cyprus",
      "ghgEmission": 12.3
    },
    {
      "reference": "Busset et al. (2012); OiLCA (2016)",
      "product": "Virgin olive oil",
      "country": "France",
      "ghgEmission": 6.3
    },
    {
      "reference": "Nileas Group, Peza Union and Mirabello Union (2012)",
      "product": "Extra virgin olive oil",
      "country": "Greece",
      "ghgEmission": 3.4
    },
    {
      "reference": "Georgiou et al. (2006)",
      "product": "Extra virgin olive oil",
      "country": "Greece",
      "ghgEmission": 5.4
    },
    {
      "reference": "Rajaeifar et al. (2014a)",
      "product": "Olive oil",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 3.3
    },
    {
      "reference": "Apolio (2010)",
      "product": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 1.9
    },
    {
      "reference": "Assoproli Bari (2014)",
      "product": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 2.9
    },
    {
      "reference": "Iraldo et al. (2014)",
      "product": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 4.8
    },
    {
      "reference": "Fantozzi et al. (2015)",
      "product": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 4.9
    },
    {
      "reference": "Monini S.p.A. (2013)",
      "product": "Extra virgin olive oil (\"GranFruttato\")",
      "country": "Italy",
      "ghgEmission": 2.2
    },
    {
      "reference": "Rinaldi et al. (2014)",
      "product": "Extra virgin olive oil",
      "country": "Italy",
      "ghgEmission": 20.3
    },
    {
      "reference": "Figueiredo et al. (2013a)",
      "product": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 5.3
    },
    {
      "reference": "Figueiredo et al. (2013a)",
      "product": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 10.7
    },
    {
      "reference": "Figueiredo et al. (2013a)",
      "product": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 3.9
    },
    {
      "reference": "Figueiredo et al. (2013a)",
      "product": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 7.4
    },
    {
      "reference": "Figueiredo et al. (2013a)",
      "product": "Virgin olive oil",
      "country": "Portugal",
      "ghgEmission": 11.3
    },
    {
      "reference": "Cortés (2006)",
      "product": "Extra virgin olive oil",
      "country": "Spain",
      "ghgEmission": 6.1
    },
    {
      "reference": "Kaltsas et al. (2007)",
      "product": "Olives",
      "country": "Greece",
      "ghgEmission": 5.1
    },
    {
      "reference": "De Gennaro et al. (2012)",
      "product": "Olives",
      "country": "Italy",
      "ghgEmission": 5.8
    },
    {
      "reference": "De Gennaro et al. (2012)",
      "product": "Olives",
      "country": "Italy",
      "ghgEmission": 6.9
    },
    {
      "reference": "Pergola et al. (2013a)",
      "product": "Olives",
      "country": "Italy",
      "ghgEmission": 3.7
    },
    {
      "reference": "Pergola et al. (2013a)",
      "product": "Olives",
      "country": "Italy",
      "ghgEmission": 3.6
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Olives",
      "country": "Spain",
      "ghgEmission": 4.2
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Olives",
      "country": "Spain",
      "ghgEmission": 2.6
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Page et al. (2012)",
      "product": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Page et al. (2012)",
      "product": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 0.6
    },
    {
      "reference": "Page et al. (2012)",
      "product": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 2.2
    },
    {
      "reference": "Page et al. (2012)",
      "product": "Tomatoes",
      "country": "Australia",
      "ghgEmission": 2.6
    },
    {
      "reference": "Theurl et al. (2014)",
      "product": "Tomatoes",
      "country": "Austria",
      "ghgEmission": 1.7
    },
    {
      "reference": "Theurl et al. (2014)",
      "product": "Tomatoes",
      "country": "Austria",
      "ghgEmission": 0.2
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 9.8
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 14.4
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 8.3
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 15.9
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 14.7
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 9.3
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 27
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 8.5
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 29
    },
    {
      "reference": "Perrin (2013)",
      "product": "Tomatoes",
      "country": "Benin",
      "ghgEmission": 6.2
    },
    {
      "reference": "Dias et al. (2017)",
      "product": "Tomatoes",
      "country": "Canada",
      "ghgEmission": 4.2
    },
    {
      "reference": "He et al. (2016)",
      "product": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "He et al. (2016)",
      "product": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.6
    },
    {
      "reference": "Yan et al. (2014)",
      "product": "Tomatoes",
      "country": "China",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bojacá et al. (2014)",
      "product": "Tomatoes",
      "country": "Colombia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Tomatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.6
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Tomatoes",
      "country": "Czech Republic",
      "ghgEmission": 0.6
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 4.5
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 4.6
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 4.6
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Tomatoes",
      "country": "Denmark",
      "ghgEmission": 6.7
    },
    {
      "reference": "Boulard et al. (2011); Payen et al. (2015)",
      "product": "Tomatoes",
      "country": "France",
      "ghgEmission": 2.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Tomatoes",
      "country": "France",
      "ghgEmission": 0.8
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Tomatoes",
      "country": "France",
      "ghgEmission": 3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Tomatoes",
      "country": "France",
      "ghgEmission": 0.7
    },
    {
      "reference": "Torrellas et al. (2012b)",
      "product": "Tomatoes",
      "country": "Hungary",
      "ghgEmission": 1
    },
    {
      "reference": "Torrellas et al. (2012b)",
      "product": "Tomatoes",
      "country": "Hungary",
      "ghgEmission": 6.2
    },
    {
      "reference": "Khoshnevisan et al. (2014a)",
      "product": "Tomatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Mirasi et al. (2015)",
      "product": "Tomatoes",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Del Borghi et al. (2014)",
      "product": "Tomatoes",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "Tamburini et al. (2015)",
      "product": "Tomatoes",
      "country": "Italy",
      "ghgEmission": 0.6
    },
    {
      "reference": "Theurl et al. (2014)",
      "product": "Tomatoes",
      "country": "Italy",
      "ghgEmission": 1
    },
    {
      "reference": "Payen et al. (2015)",
      "product": "Tomatoes",
      "country": "Morocco",
      "ghgEmission": 0.7
    },
    {
      "reference": "Antón et al. (2010)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.9
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 3.8
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 1.3
    },
    {
      "reference": "Torrellas et al. (2012b)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.9
    },
    {
      "reference": "Vermeulen and van der Lans (2011)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.3
    },
    {
      "reference": "Vermeulen and van der Lans (2011)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 2.5
    },
    {
      "reference": "Vermeulen and van der Lans (2011)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 1.2
    },
    {
      "reference": "Vermeulen and van der Lans (2011)",
      "product": "Tomatoes",
      "country": "Netherlands",
      "ghgEmission": 1.3
    },
    {
      "reference": "Martínez-Blanco et al. (2011)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.9
    },
    {
      "reference": "Martínez-Blanco et al. (2011)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Martínez-Blanco et al. (2011)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Martínez-Blanco et al. (2011)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Martínez-Blanco et al. (2014)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Martínez-Blanco et al. (2014)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.9
    },
    {
      "reference": "Muñoz et al. (2007)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Muñoz et al. (2007)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Tomatoes (round/globe)",
      "country": "Spain",
      "ghgEmission": 0.8
    },
    {
      "reference": "Theurl et al. (2014)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 0.9
    },
    {
      "reference": "Torrellas et al. (2012b)",
      "product": "Tomatoes (loose classic)",
      "country": "Spain",
      "ghgEmission": 0.8
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Tomatoes (vine)",
      "country": "Spain",
      "ghgEmission": 1.2
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Tomatoes (loose classic)",
      "country": "Spain",
      "ghgEmission": 0.9
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Tomatoes (baby plum)",
      "country": "Spain",
      "ghgEmission": 3.7
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Tomatoes",
      "country": "Spain",
      "ghgEmission": 2.4
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Tomatoes",
      "country": "Sweden",
      "ghgEmission": 3.6
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Tomatoes (round/globe)",
      "country": "Sweden",
      "ghgEmission": 0.6
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Tomatoes (round/globe)",
      "country": "Sweden",
      "ghgEmission": 0.5
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Tomatoes",
      "country": "Switzerland",
      "ghgEmission": 1.5
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Tomatoes (vine)",
      "country": "Switzerland",
      "ghgEmission": 1.5
    },
    {
      "reference": "Karakaya and Özilgen (2011)",
      "product": "Tomatoes",
      "country": "Turkey",
      "ghgEmission": 0.4
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Tomatoes (vine)",
      "country": "United Kingdom",
      "ghgEmission": 5.8
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Tomatoes (loose classic)",
      "country": "United Kingdom",
      "ghgEmission": 2.6
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Tomatoes (baby plum)",
      "country": "United Kingdom",
      "ghgEmission": 6.7
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Tomatoes",
      "country": "United Kingdom",
      "ghgEmission": 3
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Tomatoes",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Brodt et al. (2013)",
      "product": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Brodt et al. (2013)",
      "product": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Brodt et al. (2013)",
      "product": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Jones et al. (2012)",
      "product": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Jones et al. (2012)",
      "product": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Tomatoes",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Onions",
      "country": "Australia",
      "ghgEmission": 0.5
    },
    {
      "reference": "Norton et al. (2008)",
      "product": "Onions",
      "country": "Australia",
      "ghgEmission": 0.3
    },
    {
      "reference": "de Backer et al. (2009)",
      "product": "Leeks",
      "country": "Belgium",
      "ghgEmission": 0.3
    },
    {
      "reference": "de Backer et al. (2009)",
      "product": "Leeks",
      "country": "Belgium",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Onions",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Onions",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Onions",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Onions",
      "country": "Denmark",
      "ghgEmission": 0.3
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Onions",
      "country": "Denmark",
      "ghgEmission": 0.7
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Onions",
      "country": "India",
      "ghgEmission": 0.8
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Onions",
      "country": "Netherlands",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Onions",
      "country": "Netherlands",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Leeks",
      "country": "Netherlands",
      "ghgEmission": 0.5
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Leeks",
      "country": "Netherlands",
      "ghgEmission": 0.7
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Onions",
      "country": "Netherlands",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Onions",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Saunders et al. (2006)",
      "product": "Onions",
      "country": "New Zealand",
      "ghgEmission": 0.6
    },
    {
      "reference": "Martínez-Blanco et al. (2014)",
      "product": "Onions",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Martínez-Blanco et al. (2014)",
      "product": "Onions",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Onions",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Leeks",
      "country": "Sweden",
      "ghgEmission": 0.3
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Onions",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Onions",
      "country": "Switzerland",
      "ghgEmission": 0.3
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Saunders et al. (2006)",
      "product": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Onions",
      "country": "United Kingdom",
      "ghgEmission": 0.9
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Spring onions",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Gretz et al. (2011)",
      "product": "Onions",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Carrots",
      "country": "Australia",
      "ghgEmission": 0.5
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Carrots",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Carrots",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.4
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.4
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.5
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.5
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Carrots",
      "country": "Denmark",
      "ghgEmission": 0.5
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Carrots",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Carrots",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Carrots",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Carrots",
      "country": "Italy",
      "ghgEmission": 0.4
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Bunched carrots",
      "country": "Netherlands",
      "ghgEmission": 0.6
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Bunched carrots",
      "country": "Netherlands",
      "ghgEmission": 0.6
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Winter carrots",
      "country": "Netherlands",
      "ghgEmission": 0.4
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Winter carrots",
      "country": "Netherlands",
      "ghgEmission": 0.5
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Carrots",
      "country": "Netherlands",
      "ghgEmission": 0.4
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Carrots",
      "country": "Netherlands",
      "ghgEmission": 0.6
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Carrots",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Parsnip",
      "country": "Sweden",
      "ghgEmission": 0.4
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Celeriac",
      "country": "Sweden",
      "ghgEmission": 0.3
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Swede",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Fogelberg and Carlsson-Kanyama (2006)",
      "product": "Carrots",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Röös and Karlsson (2013)",
      "product": "Carrots",
      "country": "Sweden",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Carrots",
      "country": "Switzerland",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Carrots",
      "country": "Switzerland",
      "ghgEmission": 0.3
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Carrots",
      "country": "United Kingdom",
      "ghgEmission": 0.3
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Celeriac",
      "country": "United Kingdom",
      "ghgEmission": 1.5
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Celeriac",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Carrots",
      "country": "United Kingdom",
      "ghgEmission": 0.5
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Broccoli",
      "country": "Australia",
      "ghgEmission": 2.4
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Cabbage",
      "country": "Australia",
      "ghgEmission": 0.5
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Cauliflower",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Norton et al. (2008)",
      "product": "Broccoli",
      "country": "Australia",
      "ghgEmission": 0.5
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Cauliflower",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Cabbage",
      "country": "China",
      "ghgEmission": 0.3
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Chinese cabbage",
      "country": "China",
      "ghgEmission": 0.2
    },
    {
      "reference": "Yan et al. (2014)",
      "product": "Pakchoi",
      "country": "China",
      "ghgEmission": 0.9
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Cabbage",
      "country": "Czech Republic",
      "ghgEmission": 0.3
    },
    {
      "reference": "Moudrý Jr et al. (2013c)",
      "product": "Cabbage",
      "country": "Czech Republic",
      "ghgEmission": 0.2
    },
    {
      "reference": "Koga et al. (2006)",
      "product": "Cabbage",
      "country": "Japan",
      "ghgEmission": 0.3
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Chinese cabbage",
      "country": "Netherlands",
      "ghgEmission": 0.3
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Chinese cabbage",
      "country": "Netherlands",
      "ghgEmission": 0.4
    },
    {
      "reference": "Martínez-Blanco et al. (2014)",
      "product": "Cauliflower",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Martínez-Blanco et al. (2014)",
      "product": "Cauliflower",
      "country": "Spain",
      "ghgEmission": 0.8
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Broccoli",
      "country": "Spain",
      "ghgEmission": 0.8
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Broccoli",
      "country": "Spain",
      "ghgEmission": 1
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Broccoli",
      "country": "Spain",
      "ghgEmission": 1.4
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Broccoli",
      "country": "Sweden",
      "ghgEmission": 0.8
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Cauliflower",
      "country": "Sweden",
      "ghgEmission": 0.4
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Cabbage",
      "country": "Sweden",
      "ghgEmission": 0.2
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Cabbage",
      "country": "Switzerland",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2005)",
      "product": "Cabbage",
      "country": "Switzerland",
      "ghgEmission": 0.2
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Broccoli",
      "country": "Switzerland",
      "ghgEmission": 0.5
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Cauliflower",
      "country": "Switzerland",
      "ghgEmission": 0.5
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Savoy cabbage",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Savoy cabbage",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Cauliflower",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Broccoli",
      "country": "United Kingdom",
      "ghgEmission": 0.7
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Broccoli",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Venkat (2012)",
      "product": "Broccoli",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Venkat (2012)",
      "product": "Broccoli",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Courgette",
      "country": "Australia",
      "ghgEmission": 1.6
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Pumpkins",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Cucumber",
      "country": "Australia",
      "ghgEmission": 1
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Cucumber",
      "country": "China",
      "ghgEmission": 0.3
    },
    {
      "reference": "Yan et al. (2014)",
      "product": "Cucumber",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Cucumber",
      "country": "Denmark",
      "ghgEmission": 5.6
    },
    {
      "reference": "Halberg et al. (2006)",
      "product": "Cucumber",
      "country": "Denmark",
      "ghgEmission": 5.6
    },
    {
      "reference": "Schäfer and Blanke (2012)",
      "product": "Hokkaido pumpkins",
      "country": "Germany",
      "ghgEmission": 0.1
    },
    {
      "reference": "Schäfer and Blanke (2012)",
      "product": "Hokkaido pumpkins",
      "country": "Germany",
      "ghgEmission": 0.3
    },
    {
      "reference": "Schäfer and Blanke (2012)",
      "product": "Hokkaido pumpkins",
      "country": "Germany",
      "ghgEmission": 0.1
    },
    {
      "reference": "Bolandnazar et al. (2014)",
      "product": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "Khoshnevisan et al. (2014a)",
      "product": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7
    },
    {
      "reference": "Pishgar-Komleh et al. (2013)",
      "product": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.5
    },
    {
      "reference": "Pishgar-Komleh et al. (2013)",
      "product": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.6
    },
    {
      "reference": "Pishgar-Komleh et al. (2013)",
      "product": "Cucumber",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.4
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Pumpkins",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "Hall et al. (2014)",
      "product": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.4
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "Maraseni et al. (2012)",
      "product": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.6
    },
    {
      "reference": "Maraseni et al. (2012)",
      "product": "Lettuce",
      "country": "Australia",
      "ghgEmission": 0.6
    },
    {
      "reference": "Foteinis and Chatzisymeon (2016)",
      "product": "Lettuce",
      "country": "Greece",
      "ghgEmission": 0.5
    },
    {
      "reference": "Foteinis and Chatzisymeon (2016)",
      "product": "Lettuce",
      "country": "Greece",
      "ghgEmission": 0.9
    },
    {
      "reference": "Bartzas et al. (2015)",
      "product": "Lettuce",
      "country": "Italy",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bartzas et al. (2015)",
      "product": "Lettuce",
      "country": "Italy",
      "ghgEmission": 0.6
    },
    {
      "reference": "Fusi et al. (2016)",
      "product": "Lambs lettuce",
      "country": "Italy",
      "ghgEmission": 3
    },
    {
      "reference": "Lo Giudice et al. (2014)",
      "product": "Artichokes",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "Tamburini et al. (2015)",
      "product": "Chicory",
      "country": "Italy",
      "ghgEmission": 0.8
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Lettuce",
      "country": "Netherlands",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Lettuce",
      "country": "Netherlands",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bartzas et al. (2015)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Artichokes",
      "country": "Spain",
      "ghgEmission": 1.1
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.5
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Lettuce",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Endive",
      "country": "Spain",
      "ghgEmission": 0.5
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Endive",
      "country": "Spain",
      "ghgEmission": 0.5
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Endive",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Romero-Gámez et al. (2014)",
      "product": "Endive",
      "country": "Spain",
      "ghgEmission": 0.8
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Iceberg lettuce",
      "country": "Sweden",
      "ghgEmission": 0.4
    },
    {
      "reference": "Wongwai et al. (2014)",
      "product": "Lettuce",
      "country": "Thailand",
      "ghgEmission": 1.1
    },
    {
      "reference": "Wongwai et al. (2014)",
      "product": "Lettuce",
      "country": "Thailand",
      "ghgEmission": 0.5
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "Uganda",
      "ghgEmission": 12
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 1.1
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 0.5
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 6.8
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Lettuce",
      "country": "United Kingdom",
      "ghgEmission": 2.9
    },
    {
      "reference": "Emery and Brown (2016)",
      "product": "Lettuce",
      "country": "United States of America",
      "ghgEmission": 1
    },
    {
      "reference": "Plawecki et al. (2014)",
      "product": "Lettuce",
      "country": "United States of America",
      "ghgEmission": 1.1
    },
    {
      "reference": "Venkat (2012)",
      "product": "Iceberg lettuce",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Venkat (2012)",
      "product": "Lettuce",
      "country": "United States of America",
      "ghgEmission": 0.8
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "French beans and Runner beans",
      "country": "Australia",
      "ghgEmission": 2.2
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Peas",
      "country": "Australia",
      "ghgEmission": 3.8
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Green beans",
      "country": "China",
      "ghgEmission": 0.5
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Runner beans",
      "country": "Kenya",
      "ghgEmission": 12
    },
    {
      "reference": "Romero-Gámez et al. (2012)",
      "product": "Green beans",
      "country": "Spain",
      "ghgEmission": 0.5
    },
    {
      "reference": "Romero-Gámez et al. (2012)",
      "product": "Green beans",
      "country": "Spain",
      "ghgEmission": 2.3
    },
    {
      "reference": "Romero-Gámez et al. (2012)",
      "product": "Green beans",
      "country": "Spain",
      "ghgEmission": 0.7
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "French and Sim beans",
      "country": "Uganda",
      "ghgEmission": 12.3
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Runner beans",
      "country": "United Kingdom",
      "ghgEmission": 1.2
    },
    {
      "reference": "Milà i Canals et al. (2008)",
      "product": "Runner beans",
      "country": "United Kingdom",
      "ghgEmission": 0.9
    },
    {
      "reference": "Knudsen et al. (2011)",
      "product": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.3
    },
    {
      "reference": "Knudsen et al. (2011)",
      "product": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.4
    },
    {
      "reference": "Knudsen et al. (2011)",
      "product": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.4
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Oranges",
      "country": "Brazil",
      "ghgEmission": 0.3
    },
    {
      "reference": "Yan et al. (2016)",
      "product": "Oranges",
      "country": "China",
      "ghgEmission": 0.2
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Chinese orange",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Tangerine",
      "country": "China",
      "ghgEmission": 0
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2014)",
      "product": "Oranges",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2014)",
      "product": "Oranges",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.6
    },
    {
      "reference": "Lo Giudice et al. (2013)",
      "product": "Blood oranges",
      "country": "Italy",
      "ghgEmission": 0.4
    },
    {
      "reference": "Pergola et al. (2013b)",
      "product": "Lemons",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "Pergola et al. (2013b)",
      "product": "Lemons",
      "country": "Italy",
      "ghgEmission": 0.3
    },
    {
      "reference": "Pergola et al. (2013b)",
      "product": "Oranges",
      "country": "Italy",
      "ghgEmission": 0.9
    },
    {
      "reference": "Pergola et al. (2013b)",
      "product": "Oranges",
      "country": "Italy",
      "ghgEmission": 0.3
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Citrus",
      "country": "Italy",
      "ghgEmission": 0.4
    },
    {
      "reference": "Bessou et al. (2016)",
      "product": "Clementine",
      "country": "Morocco",
      "ghgEmission": 0.5
    },
    {
      "reference": "Koch and Salou (2015); Basset-Mens et al. (2014)",
      "product": "Clementine",
      "country": "Morocco",
      "ghgEmission": 0.4
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Mandarin",
      "country": "Peru",
      "ghgEmission": 2.7
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Mandarins, Oranges",
      "country": "Spain",
      "ghgEmission": 0.3
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Mandarins, Oranges",
      "country": "Spain",
      "ghgEmission": 0.3
    },
    {
      "reference": "Doublet et al. (2013a)",
      "product": "Oranges",
      "country": "Spain",
      "ghgEmission": 0.3
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Oranges",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Mandarin",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Lemons",
      "country": "Spain",
      "ghgEmission": 0.3
    },
    {
      "reference": "Ribal et al. (2016)",
      "product": "Citrus",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Ribal et al. (2016)",
      "product": "Citrus",
      "country": "Spain",
      "ghgEmission": 0.3
    },
    {
      "reference": "Dwivedi et al. (2012)",
      "product": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.5
    },
    {
      "reference": "Dwivedi et al. (2012)",
      "product": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.3
    },
    {
      "reference": "Vellinga et al. (2013)",
      "product": "Oranges",
      "country": "United States of America",
      "ghgEmission": 0.3
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Bananas",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Yan et al. (2016)",
      "product": "Bananas",
      "country": "China",
      "ghgEmission": 0.6
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Bananas",
      "country": "Colombia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Bananas",
      "country": "Colombia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Eitner et al. (2012)",
      "product": "Bananas",
      "country": "Costa Rica",
      "ghgEmission": 0.9
    },
    {
      "reference": "Luske (2010)",
      "product": "Bananas",
      "country": "Costa Rica",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Bananas",
      "country": "Costa Rica",
      "ghgEmission": 0.7
    },
    {
      "reference": "Eitner et al. (2012)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1
    },
    {
      "reference": "Eitner et al. (2012)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 0.5
    },
    {
      "reference": "Graefe et al. (2011)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 0.7
    },
    {
      "reference": "Iriarte et al. (2014)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1.3
    },
    {
      "reference": "Roibás et al. (2015); Roibás et al. (2016)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1
    },
    {
      "reference": "Roibás et al. (2015); Roibás et al. (2016)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1
    },
    {
      "reference": "Roibás et al. (2015); Roibás et al. (2016)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1
    },
    {
      "reference": "Roibás et al. (2015); Roibás et al. (2016)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1.1
    },
    {
      "reference": "Roibás et al. (2015); Roibás et al. (2016)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1.2
    },
    {
      "reference": "Roibás et al. (2015); Roibás et al. (2016)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 1
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Bananas",
      "country": "Ecuador",
      "ghgEmission": 0.8
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Bananas",
      "country": "Guadeloupe",
      "ghgEmission": 0.8
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Bananas",
      "country": "India",
      "ghgEmission": 0.8
    },
    {
      "reference": "Eitner et al. (2012)",
      "product": "Bananas",
      "country": "Panama",
      "ghgEmission": 1.6
    },
    {
      "reference": "Eitner et al. (2012)",
      "product": "Bananas",
      "country": "Peru",
      "ghgEmission": 0.5
    },
    {
      "reference": "Soni et al. (2013)",
      "product": "Bananas",
      "country": "Thailand",
      "ghgEmission": 0.7
    },
    {
      "reference": "Keyes et al. (2015)",
      "product": "Apples",
      "country": "Canada",
      "ghgEmission": 0.4
    },
    {
      "reference": "Keyes et al. (2015)",
      "product": "Apples",
      "country": "Canada",
      "ghgEmission": 0.5
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Apples",
      "country": "Chile",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Apples",
      "country": "China",
      "ghgEmission": 0.5
    },
    {
      "reference": "Yan et al. (2016)",
      "product": "Apples",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Xu and Lan (2016)",
      "product": "Apples",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Kehagias et al. (2015)",
      "product": "Apples",
      "country": "Greece",
      "ghgEmission": 0.5
    },
    {
      "reference": "Kehagias et al. (2015)",
      "product": "Apples",
      "country": "Greece",
      "ghgEmission": 0.5
    },
    {
      "reference": "Kehagias et al. (2015)",
      "product": "Apples",
      "country": "Greece",
      "ghgEmission": 0.6
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.2
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.2
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.2
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.2
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.2
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.2
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Alaphilippe et al. (2013)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Alaphilippe et al. (2016)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Alaphilippe et al. (2016)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.4
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Apples",
      "country": "France",
      "ghgEmission": 0.3
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Germany",
      "ghgEmission": 0.4
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Germany",
      "ghgEmission": 0.6
    },
    {
      "reference": "Cerutti et al. (2013)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.5
    },
    {
      "reference": "Cerutti et al. (2013)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.5
    },
    {
      "reference": "Cerutti et al. (2013)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.5
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3
    },
    {
      "reference": "Tamburini et al. (2015)",
      "product": "Apples",
      "country": "Italy",
      "ghgEmission": 0.3
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.3
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.5
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.5
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Milà i Canals (2003)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.4
    },
    {
      "reference": "Saunders et al. (2006)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 0.5
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Apples",
      "country": "New Zealand",
      "ghgEmission": 1.2
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Apples",
      "country": "Peru",
      "ghgEmission": 0.7
    },
    {
      "reference": "Figueiredo et al. (2013b)",
      "product": "Apples",
      "country": "Portugal",
      "ghgEmission": 0.3
    },
    {
      "reference": "Figueiredo et al. (2013b)",
      "product": "Apples",
      "country": "Portugal",
      "ghgEmission": 0.4
    },
    {
      "reference": "Figueiredo et al. (2013b)",
      "product": "Apples",
      "country": "Portugal",
      "ghgEmission": 0.4
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Spain",
      "ghgEmission": 0.4
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Spain",
      "ghgEmission": 0.5
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Hayer et al. (2008)",
      "product": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Mouron et al. (2006)",
      "product": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.3
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Apples",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Saunders et al. (2006)",
      "product": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.2
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.2
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Apples",
      "country": "United Kingdom",
      "ghgEmission": 0.2
    },
    {
      "reference": "Cerutti et al. (2013)",
      "product": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.3
    },
    {
      "reference": "Venkat (2012)",
      "product": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Venkat (2012)",
      "product": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.6
    },
    {
      "reference": "Venkat (2012)",
      "product": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.3
    },
    {
      "reference": "Venkat (2012)",
      "product": "Apples",
      "country": "United States of America",
      "ghgEmission": 0.4
    },
    {
      "reference": "Cordes et al. (2016)",
      "product": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1
    },
    {
      "reference": "Cordes et al. (2016)",
      "product": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1.1
    },
    {
      "reference": "Cordes et al. (2016)",
      "product": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1.5
    },
    {
      "reference": "Cordes et al. (2016)",
      "product": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1
    },
    {
      "reference": "Cordes et al. (2016)",
      "product": "Blueberries",
      "country": "Chile",
      "ghgEmission": 1.6
    },
    {
      "reference": "Khoshnevisan et al. (2013)",
      "product": "Strawberries",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.6
    },
    {
      "reference": "Khoshnevisan et al. (2013)",
      "product": "Strawberries",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1.7
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Strawberries",
      "country": "Netherlands",
      "ghgEmission": 0.8
    },
    {
      "reference": "Bos et al. (2014)",
      "product": "Strawberries",
      "country": "Netherlands",
      "ghgEmission": 0.7
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Strawberries",
      "country": "Peru",
      "ghgEmission": 1.5
    },
    {
      "reference": "Foster et al. (2014)",
      "product": "Raspberries",
      "country": "Spain",
      "ghgEmission": 8.3
    },
    {
      "reference": "REWE Group (2009)",
      "product": "Strawberries",
      "country": "Spain",
      "ghgEmission": 1
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Strawberries",
      "country": "Spain",
      "ghgEmission": 1
    },
    {
      "reference": "Davis et al. (2011)",
      "product": "Strawberries",
      "country": "Sweden",
      "ghgEmission": 0.6
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Strawberries",
      "country": "Switzerland",
      "ghgEmission": 0.5
    },
    {
      "reference": "Lillywhite et al. (2007)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 1.8
    },
    {
      "reference": "Foster et al. (2014)",
      "product": "Raspberries",
      "country": "United Kingdom",
      "ghgEmission": 8.4
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 1.2
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.4
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.8
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.7
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.9
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.6
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.7
    },
    {
      "reference": "Warner et al. (2010)",
      "product": "Strawberries",
      "country": "United Kingdom",
      "ghgEmission": 0.5
    },
    {
      "reference": "Tabatabaie and Murthy (2016)",
      "product": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 2.7
    },
    {
      "reference": "Tabatabaie and Murthy (2016)",
      "product": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 3.3
    },
    {
      "reference": "Tabatabaie and Murthy (2016)",
      "product": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 7.3
    },
    {
      "reference": "Tabatabaie and Murthy (2016)",
      "product": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 3.3
    },
    {
      "reference": "Venkat (2012)",
      "product": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 1
    },
    {
      "reference": "Venkat (2012)",
      "product": "Strawberries",
      "country": "United States of America",
      "ghgEmission": 0.9
    },
    {
      "reference": "Venkat (2012)",
      "product": "Blueberries",
      "country": "United States of America",
      "ghgEmission": 0.7
    },
    {
      "reference": "Venkat (2012)",
      "product": "Blueberries",
      "country": "United States of America",
      "ghgEmission": 0.5
    },
    {
      "reference": "Point et al. (2012)",
      "product": "Wine",
      "country": "Canada",
      "ghgEmission": 3.1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.5
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Wine grapes",
      "country": "France",
      "ghgEmission": 2
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.6
    },
    {
      "reference": "Rouault et al. (2016)",
      "product": "Wine grapes",
      "country": "France",
      "ghgEmission": 1.7
    },
    {
      "reference": "Bartocci et al. (2017)",
      "product": "Wine grapes",
      "country": "Italy",
      "ghgEmission": 1.8
    },
    {
      "reference": "Bartocci et al. (2017)",
      "product": "Wine grapes",
      "country": "Italy",
      "ghgEmission": 2.2
    },
    {
      "reference": "Bosco et al. (2011)",
      "product": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.6
    },
    {
      "reference": "Bosco et al. (2011)",
      "product": "Red wine",
      "country": "Italy",
      "ghgEmission": 2
    },
    {
      "reference": "Bosco et al. (2011)",
      "product": "White wine",
      "country": "Italy",
      "ghgEmission": 1.4
    },
    {
      "reference": "Bosco et al. (2011)",
      "product": "Red wine",
      "country": "Italy",
      "ghgEmission": 1
    },
    {
      "reference": "Bosco et al. (2013)",
      "product": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.2
    },
    {
      "reference": "Carta (2009) in Vázquez-Rowe et al. (2013)",
      "product": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.4
    },
    {
      "reference": "Carta (2009) in Vázquez-Rowe et al. (2013)",
      "product": "Wine",
      "country": "Italy",
      "ghgEmission": 1.6
    },
    {
      "reference": "Falcone et al. (2016)",
      "product": "Wine",
      "country": "Italy",
      "ghgEmission": 1.7
    },
    {
      "reference": "Falcone et al. (2016)",
      "product": "Wine",
      "country": "Italy",
      "ghgEmission": 1.6
    },
    {
      "reference": "Falcone et al. (2016)",
      "product": "Wine",
      "country": "Italy",
      "ghgEmission": 1.7
    },
    {
      "reference": "Falcone et al. (2016)",
      "product": "Wine",
      "country": "Italy",
      "ghgEmission": 1.6
    },
    {
      "reference": "Fusi et al. (2014b)",
      "product": "White wine",
      "country": "Italy",
      "ghgEmission": 1.8
    },
    {
      "reference": "Rugani et al. (2009) in Vázquez-Rowe et al. (2013)",
      "product": "Red wine",
      "country": "Italy",
      "ghgEmission": 1.2
    },
    {
      "reference": "Neto et al. (2013)",
      "product": "White wine",
      "country": "Portugal",
      "ghgEmission": 4.7
    },
    {
      "reference": "Comandaru et al. (2012)",
      "product": "White wine",
      "country": "Romania",
      "ghgEmission": 1.5
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Wine grapes",
      "country": "Spain",
      "ghgEmission": 1.3
    },
    {
      "reference": "Aguilera et al. (2015b)",
      "product": "Wine grapes",
      "country": "Spain",
      "ghgEmission": 1.3
    },
    {
      "reference": "Meneses et al. (2016)",
      "product": "Red wine",
      "country": "Spain",
      "ghgEmission": 1.6
    },
    {
      "reference": "Vázquez-Rowe et al. (2012a)",
      "product": "Wine",
      "country": "Spain",
      "ghgEmission": 4.7
    },
    {
      "reference": "Vázquez-Rowe et al. (2012b)",
      "product": "Wine",
      "country": "Spain",
      "ghgEmission": 1.8
    },
    {
      "reference": "Villanueva-Rey et al. (2014)",
      "product": "Wine",
      "country": "Spain",
      "ghgEmission": 1.3
    },
    {
      "reference": "Villanueva-Rey et al. (2014)",
      "product": "Wine",
      "country": "Spain",
      "ghgEmission": 1.3
    },
    {
      "reference": "Villanueva-Rey et al. (2014)",
      "product": "Wine",
      "country": "Spain",
      "ghgEmission": 1.6
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.2
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.4
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.4
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.4
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.6
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.5
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.9
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.8
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.7
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.9
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 2.1
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.9
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.6
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.3
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "Red wine",
      "country": "Switzerland",
      "ghgEmission": 1.6
    },
    {
      "reference": "Wettstein et al. (2016)",
      "product": "White wine",
      "country": "Switzerland",
      "ghgEmission": 1.5
    },
    {
      "reference": "Venkat (2012)",
      "product": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1.1
    },
    {
      "reference": "Venkat (2012)",
      "product": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1.1
    },
    {
      "reference": "Venkat (2012)",
      "product": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1
    },
    {
      "reference": "Venkat (2012)",
      "product": "Wine grapes",
      "country": "United States of America",
      "ghgEmission": 1
    },
    {
      "reference": "Liu et al. (2010)",
      "product": "Chinese pear",
      "country": "China",
      "ghgEmission": 0.1
    },
    {
      "reference": "Liu et al. (2010)",
      "product": "Chinese pear",
      "country": "China",
      "ghgEmission": 0
    },
    {
      "reference": "Liu et al. (2010)",
      "product": "Chinese pear",
      "country": "China",
      "ghgEmission": 0.3
    },
    {
      "reference": "Liu et al. (2010)",
      "product": "Chinese pear",
      "country": "China",
      "ghgEmission": 2.2
    },
    {
      "reference": "Liu et al. (2010)",
      "product": "Chinese pear",
      "country": "China",
      "ghgEmission": 0.1
    },
    {
      "reference": "Yan et al. (2016)",
      "product": "Pears",
      "country": "China",
      "ghgEmission": 0.4
    },
    {
      "reference": "Tamburini et al. (2015)",
      "product": "Pears",
      "country": "Italy",
      "ghgEmission": 0.8
    },
    {
      "reference": "Figueiredo et al. (2013b)",
      "product": "Pears",
      "country": "Portugal",
      "ghgEmission": 0.4
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Pears",
      "country": "Switzerland",
      "ghgEmission": 0.4
    },
    {
      "reference": "Yan et al. (2016)",
      "product": "Peaches",
      "country": "China",
      "ghgEmission": 0.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Peach / Nectarine",
      "country": "France",
      "ghgEmission": 0.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Peach / Nectarine",
      "country": "France",
      "ghgEmission": 0.6
    },
    {
      "reference": "Litskas et al. (2011)",
      "product": "Sweet cherries",
      "country": "Greece",
      "ghgEmission": 1
    },
    {
      "reference": "Litskas et al. (2011)",
      "product": "Sweet cherries",
      "country": "Greece",
      "ghgEmission": 1.4
    },
    {
      "reference": "Michos et al. (2012)",
      "product": "Peaches",
      "country": "Greece",
      "ghgEmission": 0.6
    },
    {
      "reference": "Michos et al. (2012)",
      "product": "Peaches",
      "country": "Greece",
      "ghgEmission": 0.6
    },
    {
      "reference": "Michos et al. (2012)",
      "product": "Peaches",
      "country": "Greece",
      "ghgEmission": 0.7
    },
    {
      "reference": "Qasemi-Kordkheili and Nabavi-Pelesaraei (2014)",
      "product": "Nectarines",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.3
    },
    {
      "reference": "De Menna et al. (2015)",
      "product": "Peaches",
      "country": "Italy",
      "ghgEmission": 0.7
    },
    {
      "reference": "Ingrao et al. (2015)",
      "product": "Peaches",
      "country": "Italy",
      "ghgEmission": 1.2
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Peaches",
      "country": "Peru",
      "ghgEmission": 1.7
    },
    {
      "reference": "Nemecek et al. (2011a)",
      "product": "Peaches",
      "country": "South Africa",
      "ghgEmission": 0.6
    },
    {
      "reference": "Vinyes et al. (2015)",
      "product": "Peaches",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "ALCAS (2012)",
      "product": "Avocado",
      "country": "Australia",
      "ghgEmission": 0.9
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Avocado",
      "country": "Israel",
      "ghgEmission": 1.5
    },
    {
      "reference": "Astier et al. (2014)",
      "product": "Avocado",
      "country": "Mexico",
      "ghgEmission": 1.8
    },
    {
      "reference": "Astier et al. (2014)",
      "product": "Avocado",
      "country": "Mexico",
      "ghgEmission": 2.4
    },
    {
      "reference": "Bartl et al. (2012)",
      "product": "Avocado",
      "country": "Peru",
      "ghgEmission": 4.9
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Pineapples",
      "country": "Costa Rica",
      "ghgEmission": 0.4
    },
    {
      "reference": "Ingwersen (2012)",
      "product": "Pineapples",
      "country": "Costa Rica",
      "ghgEmission": 0.4
    },
    {
      "reference": "Cudjoe Adebah et al. (2010)",
      "product": "Pineapples",
      "country": "Ghana",
      "ghgEmission": 0.6
    },
    {
      "reference": "Cudjoe Adebah et al. (2010)",
      "product": "Pineapples",
      "country": "Ghana",
      "ghgEmission": 0.6
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Pineapples",
      "country": "Ghana",
      "ghgEmission": 0.6
    },
    {
      "reference": "Zeus (2011)",
      "product": "Kiwi",
      "country": "Greece",
      "ghgEmission": 1.3
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2016b)",
      "product": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2016b)",
      "product": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.5
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2016b)",
      "product": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7
    },
    {
      "reference": "Nikkhah et al. (2016)",
      "product": "Kiwi",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Stoessel et al. (2012)",
      "product": "Kiwi",
      "country": "Italy",
      "ghgEmission": 0.7
    },
    {
      "reference": "Müller et al. (2015)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.8
    },
    {
      "reference": "Müller et al. (2015)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.9
    },
    {
      "reference": "Müller et al. (2015)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.8
    },
    {
      "reference": "Müller et al. (2015)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 0.9
    },
    {
      "reference": "Mithraratne et al. (2010)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 1.8
    },
    {
      "reference": "Mithraratne et al. (2010)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 1.6
    },
    {
      "reference": "Mithraratne et al. (2010)",
      "product": "Kiwi",
      "country": "New Zealand",
      "ghgEmission": 2
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Melon",
      "country": "Australia",
      "ghgEmission": 0.7
    },
    {
      "reference": "Maraseni et al. (2010)",
      "product": "Watermelon",
      "country": "Australia",
      "ghgEmission": 0.8
    },
    {
      "reference": "de Figueirêdo et al. (2013)",
      "product": "Canary melon",
      "country": "Brazil",
      "ghgEmission": 2.9
    },
    {
      "reference": "Khoshnevisan et al. (2015)",
      "product": "Watermelon",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.8
    },
    {
      "reference": "Mohammadi-Barsari et al. (2016)",
      "product": "Watermelon",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 0.7
    },
    {
      "reference": "Nabavi-Pelesaraei et al. (2016a)",
      "product": "Watermelon",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 1
    },
    {
      "reference": "Martin-Gorriz et al. (2014)",
      "product": "Melon",
      "country": "Spain",
      "ghgEmission": 0.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Coffee beans",
      "country": "Brazil",
      "ghgEmission": 4.7
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Coffee beans",
      "country": "Brazil",
      "ghgEmission": 7.4
    },
    {
      "reference": "Andrade et al. (2014)",
      "product": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 15.6
    },
    {
      "reference": "Andrade et al. (2014)",
      "product": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 9.9
    },
    {
      "reference": "Andrade et al. (2014)",
      "product": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 11.4
    },
    {
      "reference": "Segura and Andrade (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.1
    },
    {
      "reference": "Segura and Andrade (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.3
    },
    {
      "reference": "Segura and Andrade (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.6
    },
    {
      "reference": "Segura and Andrade (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.3
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 6.1
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 7.1
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 8.6
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Costa Rica",
      "ghgEmission": 9.7
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Coffee beans",
      "country": "Indonesia",
      "ghgEmission": 84.6
    },
    {
      "reference": "Maina et al. (2014)",
      "product": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 29.3
    },
    {
      "reference": "Maina et al. (2014)",
      "product": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 30.1
    },
    {
      "reference": "Maina et al. (2014)",
      "product": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 31
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Coffee beans",
      "country": "Kenya",
      "ghgEmission": 21.2
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 37.9
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 31.4
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 34.4
    },
    {
      "reference": "Noponen et al. (2012)",
      "product": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 29.1
    },
    {
      "reference": "Rahn et al. (2014)",
      "product": "Coffee beans",
      "country": "Nicaragua",
      "ghgEmission": 64.1
    },
    {
      "reference": "van Rikxoort et al. (2014)",
      "product": "Coffee beans",
      "country": "El Salvador",
      "ghgEmission": 20.5
    },
    {
      "reference": "van Rikxoort et al. (2014)",
      "product": "Coffee beans",
      "country": "Guatemala",
      "ghgEmission": 19.1
    },
    {
      "reference": "van Rikxoort et al. (2014)",
      "product": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 33.4
    },
    {
      "reference": "van Rikxoort et al. (2014)",
      "product": "Coffee beans",
      "country": "Colombia",
      "ghgEmission": 28.5
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Coffee beans",
      "country": "Viet Nam",
      "ghgEmission": 6.5
    },
    {
      "reference": "Neira (2016)",
      "product": "Chocolate",
      "country": "Ecuador",
      "ghgEmission": 1.8
    },
    {
      "reference": "Neira (2016)",
      "product": "Chocolate",
      "country": "Ecuador",
      "ghgEmission": 3
    },
    {
      "reference": "Ntiamoah and Afrane (2008)",
      "product": "Chocolate",
      "country": "Ghana",
      "ghgEmission": -3.7
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Cocoa",
      "country": "Brazil",
      "ghgEmission": 10.7
    },
    {
      "reference": "Schroth et al. (2016)",
      "product": "Cocoa",
      "country": "Brazil",
      "ghgEmission": 3.4
    },
    {
      "reference": "Ortiz-Rodríguez et al. (2014)",
      "product": "Cocoa",
      "country": "Colombia",
      "ghgEmission": 11.7
    },
    {
      "reference": "Ortiz-Rodríguez et al. (2016)",
      "product": "Cocoa",
      "country": "Colombia",
      "ghgEmission": 9.5
    },
    {
      "reference": "Ortiz-Rodríguez et al. (2016)",
      "product": "Cocoa",
      "country": "Colombia",
      "ghgEmission": 5.5
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Cocoa",
      "country": "Côte d'Ivoire",
      "ghgEmission": 4.9
    },
    {
      "reference": "Eitner et al. (2012)",
      "product": "Cocoa",
      "country": "Ecuador",
      "ghgEmission": 1.8
    },
    {
      "reference": "Afrane et al. (2013); Borg and Selmer (2012)",
      "product": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 2
    },
    {
      "reference": "Afrane et al. (2013); Borg and Selmer (2012)",
      "product": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 2.3
    },
    {
      "reference": "Afrane et al. (2013); Borg and Selmer (2012)",
      "product": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 3.5
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Cocoa",
      "country": "Ghana",
      "ghgEmission": 2.8
    },
    {
      "reference": "Wiltshire et al. (2009)",
      "product": "Cocoa",
      "country": "Ghana",
      "ghgEmission": -3.9
    },
    {
      "reference": "Nemecek et al. (2015)",
      "product": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 257.9
    },
    {
      "reference": "Utomo et al. (2016)",
      "product": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 134
    },
    {
      "reference": "Utomo et al. (2016)",
      "product": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 119.1
    },
    {
      "reference": "Utomo et al. (2016)",
      "product": "Cocoa",
      "country": "Indonesia",
      "ghgEmission": 116.6
    },
    {
      "reference": "Ridoutt et al. (2011); Ridoutt et al. (2012); Ridoutt et al. (2014)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 49.2
    },
    {
      "reference": "Ridoutt et al. (2011); Ridoutt et al. (2012); Ridoutt et al. (2014)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 51.6
    },
    {
      "reference": "Ridoutt et al. (2011); Ridoutt et al. (2012); Ridoutt et al. (2014)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 50.9
    },
    {
      "reference": "Ridoutt et al. (2011); Ridoutt et al. (2012); Ridoutt et al. (2014)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 61.6
    },
    {
      "reference": "Ridoutt et al. (2011); Ridoutt et al. (2012); Ridoutt et al. (2014)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 44.4
    },
    {
      "reference": "Ridoutt et al. (2011); Ridoutt et al. (2012); Ridoutt et al. (2014)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 45.1
    },
    {
      "reference": "Wiedemann et al. (2015b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 44.6
    },
    {
      "reference": "Wiedemann et al. (2015b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 38
    },
    {
      "reference": "Wiedemann et al. (2015b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 41.4
    },
    {
      "reference": "Wiedemann et al. (2016b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 50.5
    },
    {
      "reference": "Wiedemann et al. (2016b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 50.2
    },
    {
      "reference": "Wiedemann et al. (2016b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 46.4
    },
    {
      "reference": "Wiedemann et al. (2016b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 44.9
    },
    {
      "reference": "Wiedemann et al. (2016b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 52.4
    },
    {
      "reference": "Wiedemann et al. (2016b)",
      "product": "Beef",
      "country": "Australia",
      "ghgEmission": 50.3
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 93.7
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 167.8
    },
    {
      "reference": "Cardoso et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 206.5
    },
    {
      "reference": "Cardoso et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 126.2
    },
    {
      "reference": "Cardoso et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 86.4
    },
    {
      "reference": "Cardoso et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 93.6
    },
    {
      "reference": "Cardoso et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 85.5
    },
    {
      "reference": "Cederberg et al. (2009)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 112.8
    },
    {
      "reference": "Dick et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 205.3
    },
    {
      "reference": "Dick et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 55.8
    },
    {
      "reference": "Mazzetto et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 374.2
    },
    {
      "reference": "Mazzetto et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 266.4
    },
    {
      "reference": "Mazzetto et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 145.3
    },
    {
      "reference": "Mazzetto et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 111.7
    },
    {
      "reference": "Mazzetto et al. (2015)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 77.9
    },
    {
      "reference": "Pashei Kamali et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 187.4
    },
    {
      "reference": "Pashei Kamali et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 86.6
    },
    {
      "reference": "Pashei Kamali et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 432
    },
    {
      "reference": "Pashei Kamali et al. (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 171.8
    },
    {
      "reference": "Schroeder et al. (2012)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 131
    },
    {
      "reference": "Siqueira and Duru (2016)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 100.5
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Beef",
      "country": "Brazil",
      "ghgEmission": 142.3
    },
    {
      "reference": "Alemu et al. (2016)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 75.7
    },
    {
      "reference": "Alemu et al. (2016)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 86.7
    },
    {
      "reference": "Alemu et al. (2016)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 93.8
    },
    {
      "reference": "Basarab et al. (2012)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 51
    },
    {
      "reference": "Basarab et al. (2012)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 48.2
    },
    {
      "reference": "Basarab et al. (2012)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 82.4
    },
    {
      "reference": "Basarab et al. (2012)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 78
    },
    {
      "reference": "Beauchemin et al. (2011)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 52
    },
    {
      "reference": "Legesse et al. (2016)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 53.5
    },
    {
      "reference": "Vergé et al. (2008)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 41.1
    },
    {
      "reference": "Vergé et al. (2008)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 43.7
    },
    {
      "reference": "Celis et al. (2013)",
      "product": "Beef",
      "country": "Chile",
      "ghgEmission": 104.8
    },
    {
      "reference": "Celis et al. (2013)",
      "product": "Beef",
      "country": "Chile",
      "ghgEmission": 77.3
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 57.5
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 44.1
    },
    {
      "reference": "Nguyen et al. (2012a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 44
    },
    {
      "reference": "Nguyen et al. (2012a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 43.9
    },
    {
      "reference": "Nguyen et al. (2012a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 43.6
    },
    {
      "reference": "Nguyen et al. (2012a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 42
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 47.9
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 48.2
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 48.1
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 47.1
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 48
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 45.2
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 48.7
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 48.3
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 46.6
    },
    {
      "reference": "Nguyen et al. (2013b)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 51.5
    },
    {
      "reference": "Veysset et al. (2011)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 53.6
    },
    {
      "reference": "Veysset et al. (2011)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 55.7
    },
    {
      "reference": "Veysset et al. (2011)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 50.3
    },
    {
      "reference": "Veysset et al. (2011)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 50.8
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 295.7
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 306.2
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 225.7
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 248.7
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 365.4
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 315.2
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 278.4
    },
    {
      "reference": "Widi et al. (2015)",
      "product": "Beef",
      "country": "Indonesia",
      "ghgEmission": 309.2
    },
    {
      "reference": "Casey and Holden (2006a); Blonk et al. (2008)",
      "product": "Beef",
      "country": "Ireland",
      "ghgEmission": 36.5
    },
    {
      "reference": "Casey and Holden (2006a); Blonk et al. (2008)",
      "product": "Beef",
      "country": "Ireland",
      "ghgEmission": 36.7
    },
    {
      "reference": "Casey and Holden (2006a); Blonk et al. (2008)",
      "product": "Beef",
      "country": "Ireland",
      "ghgEmission": 35.1
    },
    {
      "reference": "Foley et al. (2011)",
      "product": "Beef",
      "country": "Ireland",
      "ghgEmission": 46
    },
    {
      "reference": "Cederberg and Darelius (2000)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 43.2
    },
    {
      "reference": "Cederberg and Nilsson (2004b)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 50.2
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 55.8
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Beef",
      "country": "Switzerland",
      "ghgEmission": 57.3
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Beef",
      "country": "Switzerland",
      "ghgEmission": 55.9
    },
    {
      "reference": "Schroeder et al. (2012)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 47.6
    },
    {
      "reference": "Schroeder et al. (2012)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 49.1
    },
    {
      "reference": "Capper (2012)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 38.7
    },
    {
      "reference": "Capper (2012)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 44.9
    },
    {
      "reference": "Capper (2012)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 62.9
    },
    {
      "reference": "Pelletier et al. (2010)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 61.6
    },
    {
      "reference": "Pelletier et al. (2010)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 62.5
    },
    {
      "reference": "Pelletier et al. (2010)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 71.8
    },
    {
      "reference": "Phetteplace et al. (2001)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 76.6
    },
    {
      "reference": "Roop et al. (2013)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 78.7
    },
    {
      "reference": "Roop et al. (2013)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 56.4
    },
    {
      "reference": "Rotz et al. (2013)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 36.3
    },
    {
      "reference": "White et al. (2014)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 48
    },
    {
      "reference": "White et al. (2015)",
      "product": "Beef",
      "country": "United States of America",
      "ghgEmission": 49
    },
    {
      "reference": "Picasso et al. (2014)",
      "product": "Beef",
      "country": "Uruguay",
      "ghgEmission": 74.3
    },
    {
      "reference": "Picasso et al. (2014)",
      "product": "Beef",
      "country": "Uruguay",
      "ghgEmission": 64.9
    },
    {
      "reference": "Picasso et al. (2014)",
      "product": "Beef",
      "country": "Uruguay",
      "ghgEmission": 55.9
    },
    {
      "reference": "Picasso et al. (2014)",
      "product": "Beef",
      "country": "Uruguay",
      "ghgEmission": 74.6
    },
    {
      "reference": "Picasso et al. (2014)",
      "product": "Beef",
      "country": "Uruguay",
      "ghgEmission": 65.4
    },
    {
      "reference": "Jayasundara and Wagner-Riddle (2014)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 10.7
    },
    {
      "reference": "Mc Geough et al. (2012)",
      "product": "Beef",
      "country": "Canada",
      "ghgEmission": 9.6
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 21.9
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 27.8
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 20.6
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 32
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 20.4
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 20.7
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 25.6
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Beef",
      "country": "China",
      "ghgEmission": 19.6
    },
    {
      "reference": "Kristensen et al. (2011)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 21.6
    },
    {
      "reference": "Kristensen et al. (2011)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 19.6
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 33
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 24.4
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Denmark",
      "ghgEmission": 23.2
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 73.9
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 55
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 53.2
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 46.7
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 51.8
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Beef",
      "country": "France",
      "ghgEmission": 46
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Beef",
      "country": "Germany",
      "ghgEmission": 35.8
    },
    {
      "reference": "Huerta et al. (2016)",
      "product": "Beef",
      "country": "Mexico",
      "ghgEmission": 26.8
    },
    {
      "reference": "Huerta et al. (2016)",
      "product": "Beef",
      "country": "Mexico",
      "ghgEmission": 41.9
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Beef",
      "country": "Netherlands",
      "ghgEmission": 40.7
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Beef",
      "country": "Netherlands",
      "ghgEmission": 14.9
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Beef",
      "country": "Norway",
      "ghgEmission": 43.4
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Beef",
      "country": "Norway",
      "ghgEmission": 47.2
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Beef",
      "country": "Norway",
      "ghgEmission": 45.8
    },
    {
      "reference": "Doublet et al. (2013b)",
      "product": "Beef",
      "country": "Romania",
      "ghgEmission": 19.8
    },
    {
      "reference": "Cederberg and Darelius (2000)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 38.2
    },
    {
      "reference": "Cederberg and Darelius (2000)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 36.9
    },
    {
      "reference": "Cederberg and Darelius (2000)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 38.1
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 39.7
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 32.6
    },
    {
      "reference": "Mogensen et al. (2015)",
      "product": "Beef",
      "country": "Sweden",
      "ghgEmission": 24.5
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Beef",
      "country": "Switzerland",
      "ghgEmission": 33.7
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Beef",
      "country": "Switzerland",
      "ghgEmission": 36.3
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 26.6
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 23.6
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 19
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 17.2
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Beef",
      "country": "United Kingdom",
      "ghgEmission": 43
    },
    {
      "reference": "Bell et al. (2012)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 45.2
    },
    {
      "reference": "Bell et al. (2012)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 61.6
    },
    {
      "reference": "Bell et al. (2012)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 49
    },
    {
      "reference": "Bell et al. (2012)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 57.3
    },
    {
      "reference": "Biswas et al. (2010)",
      "product": "Mutton",
      "country": "Australia",
      "ghgEmission": 32
    },
    {
      "reference": "Biswas et al. (2010)",
      "product": "Mutton",
      "country": "Australia",
      "ghgEmission": 29.8
    },
    {
      "reference": "Michael (2011)",
      "product": "Goat and kid meat",
      "country": "Australia",
      "ghgEmission": 21.8
    },
    {
      "reference": "Michael (2011)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 37
    },
    {
      "reference": "Wiedemann et al. (2015a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 29
    },
    {
      "reference": "Wiedemann et al. (2015a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 28.8
    },
    {
      "reference": "Wiedemann et al. (2015c)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 34.3
    },
    {
      "reference": "Wiedemann et al. (2015c)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 34.7
    },
    {
      "reference": "Wiedemann et al. (2015c)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 34.2
    },
    {
      "reference": "Wiedemann et al. (2015c)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 55.4
    },
    {
      "reference": "Wiedemann et al. (2015c)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 26.2
    },
    {
      "reference": "Wiedemann et al. (2015c)",
      "product": "Lamb",
      "country": "Australia",
      "ghgEmission": 31.7
    },
    {
      "reference": "Wiedemann et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 39.5
    },
    {
      "reference": "Wiedemann et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 45.2
    },
    {
      "reference": "Wiedemann et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 44.1
    },
    {
      "reference": "Wiedemann et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 40.5
    },
    {
      "reference": "Wiedemann et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 39.3
    },
    {
      "reference": "Wiedemann et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Australia",
      "ghgEmission": 36.7
    },
    {
      "reference": "Dakpo et al. (2013)",
      "product": "Lamb",
      "country": "France",
      "ghgEmission": 72.1
    },
    {
      "reference": "Dakpo et al. (2013)",
      "product": "Lamb",
      "country": "France",
      "ghgEmission": 67.9
    },
    {
      "reference": "Dollé et al. (2011)",
      "product": "Lamb",
      "country": "France",
      "ghgEmission": 56.8
    },
    {
      "reference": "Dollé et al. (2011)",
      "product": "Lamb",
      "country": "France",
      "ghgEmission": 38.7
    },
    {
      "reference": "Dollé et al. (2011)",
      "product": "Lamb",
      "country": "France",
      "ghgEmission": 40.8
    },
    {
      "reference": "O'Brien et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 43.1
    },
    {
      "reference": "O'Brien et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 58.4
    },
    {
      "reference": "O'Brien et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 40.2
    },
    {
      "reference": "O'Brien et al. (2016a)",
      "product": "Lamb and mutton",
      "country": "Ireland",
      "ghgEmission": 47.6
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Lamb",
      "country": "Netherlands",
      "ghgEmission": 61.1
    },
    {
      "reference": "Wiedemann et al. (2015a)",
      "product": "Lamb and mutton",
      "country": "New Zealand",
      "ghgEmission": 47.3
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Lamb",
      "country": "New Zealand",
      "ghgEmission": 24.5
    },
    {
      "reference": "Wallman et al. (2011)",
      "product": "Lamb and mutton",
      "country": "Sweden",
      "ghgEmission": 37
    },
    {
      "reference": "Wiedemann et al. (2015a)",
      "product": "Lamb and mutton",
      "country": "United Kingdom",
      "ghgEmission": 45.7
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Lamb",
      "country": "United Kingdom",
      "ghgEmission": 29.1
    },
    {
      "reference": "Wiedemann et al. (2010)",
      "product": "Pork",
      "country": "Australia",
      "ghgEmission": 16.6
    },
    {
      "reference": "Wiedemann et al. (2010)",
      "product": "Pork",
      "country": "Australia",
      "ghgEmission": 12.9
    },
    {
      "reference": "Winkler et al. (2016)",
      "product": "Pork",
      "country": "Austria",
      "ghgEmission": 11
    },
    {
      "reference": "Cherubini et al. (2015)",
      "product": "Pork",
      "country": "Brazil",
      "ghgEmission": 8.6
    },
    {
      "reference": "Cherubini et al. (2015)",
      "product": "Pork",
      "country": "Brazil",
      "ghgEmission": 7.7
    },
    {
      "reference": "Spies (2003)",
      "product": "Pork",
      "country": "Brazil",
      "ghgEmission": 22.7
    },
    {
      "reference": "Vergé et al. (2009a)",
      "product": "Pork",
      "country": "Canada",
      "ghgEmission": 8.7
    },
    {
      "reference": "Vergé et al. (2009a)",
      "product": "Pork",
      "country": "Canada",
      "ghgEmission": 9.2
    },
    {
      "reference": "Gutiérrez et al. (2016)",
      "product": "Pork",
      "country": "Cuba",
      "ghgEmission": 20.7
    },
    {
      "reference": "Halberg et al. (2010)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 9.5
    },
    {
      "reference": "Halberg et al. (2010)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 10.7
    },
    {
      "reference": "Halberg et al. (2010)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 9.4
    },
    {
      "reference": "Jakobsen et al. (2015)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 10
    },
    {
      "reference": "Jakobsen et al. (2015)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 10.2
    },
    {
      "reference": "Jakobsen et al. (2015)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 8.6
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 6.8
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 6.6
    },
    {
      "reference": "Nguyen et al. (2011)",
      "product": "Pork",
      "country": "Denmark",
      "ghgEmission": 8
    },
    {
      "reference": "Basset-Mens and van der Werf (2005)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 10.2
    },
    {
      "reference": "Basset-Mens and van der Werf (2005)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 12.6
    },
    {
      "reference": "Basset-Mens and van der Werf (2005)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 13.9
    },
    {
      "reference": "Espagnol and Demartini (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 15.2
    },
    {
      "reference": "Espagnol and Demartini (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 13.1
    },
    {
      "reference": "Garcia-Launay et al. (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 8.6
    },
    {
      "reference": "Garcia-Launay et al. (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 10.1
    },
    {
      "reference": "Garcia-Launay et al. (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 8
    },
    {
      "reference": "Garcia-Launay et al. (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 9.5
    },
    {
      "reference": "Garrigues et al. (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 8.2
    },
    {
      "reference": "Garrigues et al. (2014)",
      "product": "Pork",
      "country": "France",
      "ghgEmission": 8.2
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 9.6
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 9.3
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 9.2
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 8.6
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 12.5
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 11.3
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 8.3
    },
    {
      "reference": "Hirschfeld et al. (2008)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 7.7
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 6.8
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "Germany",
      "ghgEmission": 7.7
    },
    {
      "reference": "Bava et al. (2017)",
      "product": "Pork",
      "country": "Italy",
      "ghgEmission": 12.4
    },
    {
      "reference": "Perez (2009)",
      "product": "Pork",
      "country": "Mexico",
      "ghgEmission": 18.1
    },
    {
      "reference": "Perez (2009)",
      "product": "Pork",
      "country": "Mexico",
      "ghgEmission": 13.1
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 9.8
    },
    {
      "reference": "Dolman et al. (2012)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 22.4
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 6.9
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7
    },
    {
      "reference": "van Zanten et al. (2015)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.5
    },
    {
      "reference": "van Zanten et al. (2015)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.5
    },
    {
      "reference": "van Zanten et al. (2015)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.5
    },
    {
      "reference": "van Zanten et al. (2015)",
      "product": "Pork",
      "country": "Netherlands",
      "ghgEmission": 7.4
    },
    {
      "reference": "González-García et al. (2015)",
      "product": "Pork",
      "country": "Portugal",
      "ghgEmission": 10.3
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Pork",
      "country": "Spain",
      "ghgEmission": 12.3
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Pork",
      "country": "Spain",
      "ghgEmission": 12.8
    },
    {
      "reference": "Carlsson et al. (2009a)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 15.7
    },
    {
      "reference": "Cederberg and Darelius (2001)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 16.8
    },
    {
      "reference": "Cederberg and Nilsson (2004a)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 16.3
    },
    {
      "reference": "Cederberg and Nilsson (2004a)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 16.8
    },
    {
      "reference": "Sasu-Boakye et al. (2014)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 9.2
    },
    {
      "reference": "Sasu-Boakye et al. (2014)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 11.5
    },
    {
      "reference": "Strid Eriksson et al. (2005)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 19.2
    },
    {
      "reference": "Strid Eriksson et al. (2005)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 11.8
    },
    {
      "reference": "Strid Eriksson et al. (2005)",
      "product": "Pork",
      "country": "Sweden",
      "ghgEmission": 10.7
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Pork",
      "country": "Switzerland",
      "ghgEmission": 11.6
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Pork",
      "country": "Switzerland",
      "ghgEmission": 11.7
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Pork",
      "country": "Switzerland",
      "ghgEmission": 10.9
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 7.1
    },
    {
      "reference": "Kool et al. (2009)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 7.2
    },
    {
      "reference": "Perez (2009)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.3
    },
    {
      "reference": "Perez (2009)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.9
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.9
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 13.4
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 13.2
    },
    {
      "reference": "Williams et al. (2006)",
      "product": "Pork",
      "country": "United Kingdom",
      "ghgEmission": 12.9
    },
    {
      "reference": "Stone et al. (2012)",
      "product": "Pork",
      "country": "United States of America",
      "ghgEmission": 12
    },
    {
      "reference": "Phong et al. (2011)",
      "product": "Pork",
      "country": "Viet Nam",
      "ghgEmission": 27.6
    },
    {
      "reference": "Bengtsson and Seddon (2013)",
      "product": "Chicken",
      "country": "Australia",
      "ghgEmission": 15.7
    },
    {
      "reference": "Hall et al. (2014)",
      "product": "Chicken",
      "country": "Australia",
      "ghgEmission": 5.7
    },
    {
      "reference": "Wiedemann et al. (2017)",
      "product": "Chicken",
      "country": "Australia",
      "ghgEmission": 7.3
    },
    {
      "reference": "Wiedemann et al. (2017)",
      "product": "Chicken",
      "country": "Australia",
      "ghgEmission": 6.7
    },
    {
      "reference": "Wiedemann et al. (2017)",
      "product": "Chicken",
      "country": "Australia",
      "ghgEmission": 5.2
    },
    {
      "reference": "Prudêncio da Silva et al. (2014)",
      "product": "Chicken",
      "country": "Brazil",
      "ghgEmission": 5.3
    },
    {
      "reference": "Prudêncio da Silva et al. (2014)",
      "product": "Chicken",
      "country": "Brazil",
      "ghgEmission": 4
    },
    {
      "reference": "Spies (2003)",
      "product": "Chicken",
      "country": "Brazil",
      "ghgEmission": 20.4
    },
    {
      "reference": "Williams et al. (2008)",
      "product": "Chicken",
      "country": "Brazil",
      "ghgEmission": 13.8
    },
    {
      "reference": "Vergé et al. (2009b)",
      "product": "Chicken",
      "country": "Canada",
      "ghgEmission": 5.8
    },
    {
      "reference": "Vergé et al. (2009b)",
      "product": "Chicken",
      "country": "Canada",
      "ghgEmission": 4.7
    },
    {
      "reference": "Vergé et al. (2009b)",
      "product": "Turkey",
      "country": "Canada",
      "ghgEmission": 5.7
    },
    {
      "reference": "Katajajuuri et al. (2006)",
      "product": "Chicken",
      "country": "Finland",
      "ghgEmission": 21
    },
    {
      "reference": "Arroyo et al. (2013)",
      "product": "Goose (foie gras)",
      "country": "France",
      "ghgEmission": 47.7
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 10.3
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 9.8
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 9.2
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 9.1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 11.7
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 16.1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Duck",
      "country": "France",
      "ghgEmission": 14.1
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Turkey",
      "country": "France",
      "ghgEmission": 17.5
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Turkey",
      "country": "France",
      "ghgEmission": 23.3
    },
    {
      "reference": "Prudêncio da Silva et al. (2014)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 6.1
    },
    {
      "reference": "Prudêncio da Silva et al. (2014)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 7.5
    },
    {
      "reference": "Seguin et al. (2011)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 8.6
    },
    {
      "reference": "Seguin et al. (2011)",
      "product": "Chicken",
      "country": "France",
      "ghgEmission": 8.1
    },
    {
      "reference": "Spahat (2014)",
      "product": "Chicken",
      "country": "Malaysia",
      "ghgEmission": 9.2
    },
    {
      "reference": "Spahat (2014)",
      "product": "Chicken",
      "country": "Malaysia",
      "ghgEmission": 9.5
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Chicken",
      "country": "Netherlands",
      "ghgEmission": 5.8
    },
    {
      "reference": "Scholten et al. (2014)",
      "product": "Chicken",
      "country": "Netherlands",
      "ghgEmission": 7.9
    },
    {
      "reference": "Ellingsen and Aanondsen (2006)",
      "product": "Chicken",
      "country": "Norway",
      "ghgEmission": 8.9
    },
    {
      "reference": "Samardžić et al. (2014)",
      "product": "Chicken",
      "country": "Russian Federation",
      "ghgEmission": 5.6
    },
    {
      "reference": "Widheden et al. (2001)",
      "product": "Chicken",
      "country": "Sweden",
      "ghgEmission": 5.5
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Chicken",
      "country": "Switzerland",
      "ghgEmission": 5
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Chicken",
      "country": "Switzerland",
      "ghgEmission": 6.6
    },
    {
      "reference": "Alig et al. (2012)",
      "product": "Chicken",
      "country": "Switzerland",
      "ghgEmission": 6.8
    },
    {
      "reference": "Leinonen et al. (2012a)",
      "product": "Chicken",
      "country": "United Kingdom",
      "ghgEmission": 9.7
    },
    {
      "reference": "Leinonen et al. (2012a)",
      "product": "Chicken",
      "country": "United Kingdom",
      "ghgEmission": 11.1
    },
    {
      "reference": "Leinonen et al. (2012a)",
      "product": "Chicken",
      "country": "United Kingdom",
      "ghgEmission": 14.9
    },
    {
      "reference": "Leinonen et al. (2016)",
      "product": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 13.5
    },
    {
      "reference": "Leinonen et al. (2016)",
      "product": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 12.2
    },
    {
      "reference": "Leinonen et al. (2016)",
      "product": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 13
    },
    {
      "reference": "Leinonen et al. (2016)",
      "product": "Turkey",
      "country": "United Kingdom",
      "ghgEmission": 11.6
    },
    {
      "reference": "Phong et al. (2011)",
      "product": "Chicken",
      "country": "Viet Nam",
      "ghgEmission": 19.5
    },
    {
      "reference": "Michael (2011)",
      "product": "Goat's milk",
      "country": "Australia",
      "ghgEmission": 8.3
    },
    {
      "reference": "Michael (2011)",
      "product": "Sheep's milk",
      "country": "Australia",
      "ghgEmission": 6.8
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2.2
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2.1
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2.1
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 2
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 1.9
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 1.9
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 1.8
    },
    {
      "reference": "Mathot et al. (2014)",
      "product": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 2.7
    },
    {
      "reference": "Meul et al. (2014)",
      "product": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 2.1
    },
    {
      "reference": "Cunha et al. (2016)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 3.1
    },
    {
      "reference": "Cunha et al. (2016)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 4.7
    },
    {
      "reference": "Olszensvski (2011)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 4.4
    },
    {
      "reference": "Seó (2015)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 8.1
    },
    {
      "reference": "Velazco-Bedoya (2015)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 5.7
    },
    {
      "reference": "Arsenault et al. (2009)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 3.4
    },
    {
      "reference": "Arsenault et al. (2009)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.9
    },
    {
      "reference": "Jayasundara and Wagner-Riddle (2014)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.2
    },
    {
      "reference": "Mc Geough et al. (2012)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 1.7
    },
    {
      "reference": "Samson et al. (2012)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 1.8
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.2
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.2
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 2.1
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.4
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.7
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.8
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.8
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.8
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.9
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.5
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.7
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.5
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 1.9
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.3
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.3
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.9
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 2.6
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 3.1
    },
    {
      "reference": "Rivera et al. (2014)",
      "product": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 4
    },
    {
      "reference": "Rivera et al. (2014)",
      "product": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 3.6
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.7
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.3
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 3
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.4
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 3.1
    },
    {
      "reference": "Kristensen et al. (2011)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.2
    },
    {
      "reference": "Kristensen et al. (2011)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 2.1
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.2
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.2
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.4
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2.2
    },
    {
      "reference": "van der Werf et al. (2009)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2
    },
    {
      "reference": "van der Werf et al. (2009)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 2
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 2.2
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 2.3
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 1.5
    },
    {
      "reference": "Zehetmeier et al. (2014)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 1.9
    },
    {
      "reference": "Zehetmeier et al. (2014)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 1.9
    },
    {
      "reference": "Garg et al. (2016)",
      "product": "Cow and buffalo milk",
      "country": "India",
      "ghgEmission": 2.9
    },
    {
      "reference": "O'Brien et al. (2012)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 1.7
    },
    {
      "reference": "O'Brien et al. (2012)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 1.9
    },
    {
      "reference": "O'Brien et al. (2014)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 1.7
    },
    {
      "reference": "O'Brien et al. (2016b)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 2.1
    },
    {
      "reference": "Yan et al. (2013)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 2.1
    },
    {
      "reference": "Battini et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4
    },
    {
      "reference": "Bava et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2
    },
    {
      "reference": "Fantin et al. (2012)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4
    },
    {
      "reference": "Guerci et al. (2013a)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.4
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.5
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 3.3
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.6
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.2
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.1
    },
    {
      "reference": "Guerci et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 3.4
    },
    {
      "reference": "Guerci et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 3.3
    },
    {
      "reference": "Penati et al. (2013); Penati et al. (2010)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 2.5
    },
    {
      "reference": "Vagnoni et al. (2015)",
      "product": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 2.4
    },
    {
      "reference": "Vagnoni et al. (2015)",
      "product": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 3.1
    },
    {
      "reference": "Vagnoni et al. (2015)",
      "product": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 3.4
    },
    {
      "reference": "Udo et al. (2016)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 3.7
    },
    {
      "reference": "Udo et al. (2016)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 3.1
    },
    {
      "reference": "Udo et al. (2016)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 2.9
    },
    {
      "reference": "Weiler et al. (2014)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 4.4
    },
    {
      "reference": "Rivas-García et al. (2015)",
      "product": "Cow's milk",
      "country": "Mexico",
      "ghgEmission": 2.8
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 1.9
    },
    {
      "reference": "Broekema and Kramer (2014)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2
    },
    {
      "reference": "Thomassen et al. (2008)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2.8
    },
    {
      "reference": "Thomassen et al. (2008)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 3.1
    },
    {
      "reference": "Thomassen et al. (2009)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2.7
    },
    {
      "reference": "van Middelaar et al. (2011)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 2.1
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.8
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.4
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.5
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.7
    },
    {
      "reference": "Flysjö et al. (2011a)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.8
    },
    {
      "reference": "Saunders and Barber (2007); Wells (2001)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 1.3
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 2.9
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 3.4
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 3.3
    },
    {
      "reference": "Bartl et al. (2011)",
      "product": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 14.6
    },
    {
      "reference": "Bartl et al. (2011)",
      "product": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 6.1
    },
    {
      "reference": "Doublet et al. (2013b)",
      "product": "Cow's milk",
      "country": "Romania",
      "ghgEmission": 2.4
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.3
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 1.7
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.6
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.4
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 2.1
    },
    {
      "reference": "Del Prado et al. (2013)",
      "product": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 2.1
    },
    {
      "reference": "Iribarren et al. (2011)",
      "product": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 1.5
    },
    {
      "reference": "Cederberg and Flysjö (2004)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2
    },
    {
      "reference": "Cederberg and Flysjö (2004)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.1
    },
    {
      "reference": "Cederberg and Flysjö (2004)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.3
    },
    {
      "reference": "Cederberg and Mattsson (2000)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 3
    },
    {
      "reference": "Cederberg and Mattsson (2000)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.6
    },
    {
      "reference": "Cederberg et al. (2007)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.5
    },
    {
      "reference": "Cederberg et al. (2007)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.6
    },
    {
      "reference": "Flysjö et al. (2011a)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 2.4
    },
    {
      "reference": "Sasu-Boakye et al. (2014)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 1.5
    },
    {
      "reference": "Sasu-Boakye et al. (2014)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 1.7
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 1.8
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 2.3
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 2.2
    },
    {
      "reference": "Schader et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 2
    },
    {
      "reference": "Schader et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 1.8
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.3
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.2
    },
    {
      "reference": "O'Brien et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 1.7
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 3
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.7
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2.2
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 2
    },
    {
      "reference": "Aguirre-Villegas et al. (2015)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 1.9
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 3.1
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 3
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 2.9
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 2.8
    },
    {
      "reference": "O'Brien et al. (2014)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 1.8
    },
    {
      "reference": "Phetteplace et al. (2001)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 2.2
    },
    {
      "reference": "Voutilainen et al. (2003)",
      "product": "Cow's cheese (Emmental)",
      "country": "Finland",
      "ghgEmission": 16
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's cheese",
      "country": "France",
      "ghgEmission": 29.6
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's cheese",
      "country": "Germany",
      "ghgEmission": 20.6
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's cheese",
      "country": "Italy",
      "ghgEmission": 18.5
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Cow's cheese",
      "country": "Netherlands",
      "ghgEmission": 12
    },
    {
      "reference": "Broekema and Kramer (2014)",
      "product": "Cow's cheese (Gouda)",
      "country": "Netherlands",
      "ghgEmission": 9.6
    },
    {
      "reference": "van Middelaar et al. (2011)",
      "product": "Cow's cheese",
      "country": "Netherlands",
      "ghgEmission": 11.7
    },
    {
      "reference": "Basset-Mens et al. (2007); Basset-Mens et al. (2009)",
      "product": "Cow's cheese",
      "country": "New Zealand",
      "ghgEmission": 14.3
    },
    {
      "reference": "Doublet et al. (2013b)",
      "product": "Cow's cheese",
      "country": "Romania",
      "ghgEmission": 10.5
    },
    {
      "reference": "Berlin (2002)",
      "product": "Cow's cheese",
      "country": "Sweden",
      "ghgEmission": 16.5
    },
    {
      "reference": "Bystricky et al. (2014)",
      "product": "Cow's cheese",
      "country": "Switzerland",
      "ghgEmission": 21.8
    },
    {
      "reference": "Kim et al. (2013)",
      "product": "Cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 16.1
    },
    {
      "reference": "Kim et al. (2013)",
      "product": "Cow's cheese (Mozzarella)",
      "country": "United States of America",
      "ghgEmission": 16.5
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 17.1
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 15.9
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 14.5
    },
    {
      "reference": "Capper and Cady (2012)",
      "product": "Milk for cow's cheese (Cheddar)",
      "country": "United States of America",
      "ghgEmission": 13.1
    },
    {
      "reference": "Michael (2011)",
      "product": "Goat's milk",
      "country": "Australia",
      "ghgEmission": 71.3
    },
    {
      "reference": "Michael (2011)",
      "product": "Sheep's milk",
      "country": "Australia",
      "ghgEmission": 57.9
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 16.6
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 15.1
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 15
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 14.3
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 14.7
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 13.6
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 12.9
    },
    {
      "reference": "Hörtenhuber et al. (2010)",
      "product": "Cow's milk",
      "country": "Austria",
      "ghgEmission": 12.4
    },
    {
      "reference": "Mathot et al. (2014)",
      "product": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 20.7
    },
    {
      "reference": "Meul et al. (2014)",
      "product": "Cow's milk",
      "country": "Belgium",
      "ghgEmission": 15.1
    },
    {
      "reference": "Cunha et al. (2016)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 22.7
    },
    {
      "reference": "Cunha et al. (2016)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 36.9
    },
    {
      "reference": "Olszensvski (2011)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 35.3
    },
    {
      "reference": "Seó (2015)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 68.2
    },
    {
      "reference": "Velazco-Bedoya (2015)",
      "product": "Cow's milk",
      "country": "Brazil",
      "ghgEmission": 46.6
    },
    {
      "reference": "Arsenault et al. (2009)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 27.3
    },
    {
      "reference": "Arsenault et al. (2009)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 22.7
    },
    {
      "reference": "Jayasundara and Wagner-Riddle (2014)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 16.4
    },
    {
      "reference": "Mc Geough et al. (2012)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 12
    },
    {
      "reference": "Samson et al. (2012)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 14.1
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 14.6
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 14.4
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 16.6
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 16.4
    },
    {
      "reference": "Vergé et al. (2007)",
      "product": "Cow's milk",
      "country": "Canada",
      "ghgEmission": 15.5
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 27
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 29.4
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 21.8
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 30.9
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 21.3
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 22.2
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 27.5
    },
    {
      "reference": "Wang et al. (2016a)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 20.8
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 26.7
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 12.9
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 16.1
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 16.6
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 21.7
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 18.8
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 22.7
    },
    {
      "reference": "Wilkes and Wang (2009)",
      "product": "Cow's milk",
      "country": "China",
      "ghgEmission": 23.5
    },
    {
      "reference": "Rivera et al. (2014)",
      "product": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 31.3
    },
    {
      "reference": "Rivera et al. (2014)",
      "product": "Cow's milk",
      "country": "Colombia",
      "ghgEmission": 28
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 20.2
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 16.6
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 22.7
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 18.2
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 23.9
    },
    {
      "reference": "Kristensen et al. (2011)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 15.7
    },
    {
      "reference": "Kristensen et al. (2011)",
      "product": "Cow's milk",
      "country": "Denmark",
      "ghgEmission": 15.3
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 18.1
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 18.3
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 17.7
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 16.2
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 17.5
    },
    {
      "reference": "Nguyen et al. (2013a)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 16.1
    },
    {
      "reference": "van der Werf et al. (2009)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 14.1
    },
    {
      "reference": "van der Werf et al. (2009)",
      "product": "Cow's milk",
      "country": "France",
      "ghgEmission": 14.3
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 17.3
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 9.4
    },
    {
      "reference": "Zehetmeier et al. (2014)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 13.8
    },
    {
      "reference": "Zehetmeier et al. (2014)",
      "product": "Cow's milk",
      "country": "Germany",
      "ghgEmission": 13.1
    },
    {
      "reference": "Garg et al. (2016)",
      "product": "Cow and buffalo milk",
      "country": "India",
      "ghgEmission": 22.3
    },
    {
      "reference": "O'Brien et al. (2012)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 12
    },
    {
      "reference": "O'Brien et al. (2012)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 13.9
    },
    {
      "reference": "O'Brien et al. (2014)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 11.7
    },
    {
      "reference": "O'Brien et al. (2016b)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 15.8
    },
    {
      "reference": "Yan et al. (2013)",
      "product": "Cow's milk",
      "country": "Ireland",
      "ghgEmission": 16.2
    },
    {
      "reference": "Battini et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 17.7
    },
    {
      "reference": "Bava et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 18
    },
    {
      "reference": "Fantin et al. (2012)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 17.9
    },
    {
      "reference": "Guerci et al. (2013a)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 17.8
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 19
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 26.6
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 19.7
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 16.7
    },
    {
      "reference": "Guerci et al. (2013b)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 15
    },
    {
      "reference": "Guerci et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 27.5
    },
    {
      "reference": "Guerci et al. (2014)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 26.6
    },
    {
      "reference": "Penati et al. (2013); Penati et al. (2010)",
      "product": "Cow's milk",
      "country": "Italy",
      "ghgEmission": 18.8
    },
    {
      "reference": "Vagnoni et al. (2015)",
      "product": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 17.7
    },
    {
      "reference": "Vagnoni et al. (2015)",
      "product": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 24.2
    },
    {
      "reference": "Vagnoni et al. (2015)",
      "product": "Sheep's milk",
      "country": "Italy",
      "ghgEmission": 27
    },
    {
      "reference": "Udo et al. (2016)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 30.1
    },
    {
      "reference": "Udo et al. (2016)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 25.1
    },
    {
      "reference": "Udo et al. (2016)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 23.2
    },
    {
      "reference": "Weiler et al. (2014)",
      "product": "Cow's milk",
      "country": "Kenya",
      "ghgEmission": 37.2
    },
    {
      "reference": "Rivas-García et al. (2015)",
      "product": "Cow's milk",
      "country": "Mexico",
      "ghgEmission": 21
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 16
    },
    {
      "reference": "Broekema and Kramer (2014)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 17.8
    },
    {
      "reference": "Thomassen et al. (2008)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 20.8
    },
    {
      "reference": "Thomassen et al. (2008)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 24.2
    },
    {
      "reference": "Thomassen et al. (2009)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 20.4
    },
    {
      "reference": "van Middelaar et al. (2011)",
      "product": "Cow's milk",
      "country": "Netherlands",
      "ghgEmission": 14.9
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 12.8
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 9.3
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 10.3
    },
    {
      "reference": "Basset-Mens et al. (2009)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 11.8
    },
    {
      "reference": "Flysjö et al. (2011a)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 12.8
    },
    {
      "reference": "Saunders and Barber (2007); Wells (2001)",
      "product": "Cow's milk",
      "country": "New Zealand",
      "ghgEmission": 9
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 22.1
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 26.7
    },
    {
      "reference": "Roer et al. (2013); Johansen et al. (2013)",
      "product": "Cow's milk",
      "country": "Norway",
      "ghgEmission": 25.8
    },
    {
      "reference": "Bartl et al. (2011)",
      "product": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 150.5
    },
    {
      "reference": "Bartl et al. (2011)",
      "product": "Cow's milk",
      "country": "Peru",
      "ghgEmission": 59.8
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 17.6
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 13.8
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 34.4
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 31.7
    },
    {
      "reference": "Notten et al. (2011)",
      "product": "Cow's milk",
      "country": "South Africa",
      "ghgEmission": 28.5
    },
    {
      "reference": "Del Prado et al. (2013)",
      "product": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 15.1
    },
    {
      "reference": "Iribarren et al. (2011)",
      "product": "Cow's milk",
      "country": "Spain",
      "ghgEmission": 9.9
    },
    {
      "reference": "Cederberg and Flysjö (2004)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 14.7
    },
    {
      "reference": "Cederberg and Flysjö (2004)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 15.4
    },
    {
      "reference": "Cederberg and Flysjö (2004)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 17.1
    },
    {
      "reference": "Cederberg and Mattsson (2000)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 23
    },
    {
      "reference": "Cederberg and Mattsson (2000)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 19.8
    },
    {
      "reference": "Cederberg et al. (2007)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 18.9
    },
    {
      "reference": "Cederberg et al. (2007)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 19.7
    },
    {
      "reference": "Flysjö et al. (2011a)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 17.8
    },
    {
      "reference": "Sasu-Boakye et al. (2014)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 9.9
    },
    {
      "reference": "Sasu-Boakye et al. (2014)",
      "product": "Cow's milk",
      "country": "Sweden",
      "ghgEmission": 10.5
    },
    {
      "reference": "Schader et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 14
    },
    {
      "reference": "Schader et al. (2014)",
      "product": "Cow's milk",
      "country": "Switzerland",
      "ghgEmission": 12.2
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 16.8
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 16.5
    },
    {
      "reference": "O'Brien et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 11.9
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 23.5
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 20.7
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 16.2
    },
    {
      "reference": "Ross et al. (2014)",
      "product": "Cow's milk",
      "country": "United Kingdom",
      "ghgEmission": 14.4
    },
    {
      "reference": "Aguirre-Villegas et al. (2015)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 13.3
    },
    {
      "reference": "O'Brien et al. (2014)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 12.3
    },
    {
      "reference": "Phetteplace et al. (2001)",
      "product": "Cow's milk",
      "country": "United States of America",
      "ghgEmission": 16
    },
    {
      "reference": "Vergé et al. (2009b)",
      "product": "Chicken's eggs",
      "country": "Canada",
      "ghgEmission": 3
    },
    {
      "reference": "Moudrý Jr et al. (2014)",
      "product": "Chicken's eggs",
      "country": "Czech Republic",
      "ghgEmission": 8.4
    },
    {
      "reference": "Moudrý Jr et al. (2014)",
      "product": "Chicken's eggs",
      "country": "Czech Republic",
      "ghgEmission": 6.5
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 4.9
    },
    {
      "reference": "Baumgartner et al. (2008)",
      "product": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 4.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 4.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 5.8
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 5.8
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Chicken's eggs",
      "country": "France",
      "ghgEmission": 2.6
    },
    {
      "reference": "Blonk et al. (2008)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 3.7
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 3.8
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.4
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.4
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.6
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4.6
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 5.4
    },
    {
      "reference": "Dekker et al. (2011)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 5.4
    },
    {
      "reference": "Mollenhorst et al. (2006)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 5.5
    },
    {
      "reference": "Mollenhorst et al. (2006)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 6
    },
    {
      "reference": "Mollenhorst et al. (2006)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 6.6
    },
    {
      "reference": "Mollenhorst et al. (2006)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 6
    },
    {
      "reference": "Scholten et al. (2014)",
      "product": "Chicken's eggs",
      "country": "Netherlands",
      "ghgEmission": 4
    },
    {
      "reference": "Carlsson et al. (2009b)",
      "product": "Chicken's eggs",
      "country": "Sweden",
      "ghgEmission": 4.2
    },
    {
      "reference": "Sonesson et al. (2008)",
      "product": "Chicken's eggs",
      "country": "Sweden",
      "ghgEmission": 3.3
    },
    {
      "reference": "Sonesson et al. (2008)",
      "product": "Chicken's eggs",
      "country": "Sweden",
      "ghgEmission": 2.9
    },
    {
      "reference": "Leinonen et al. (2012b)",
      "product": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 3.8
    },
    {
      "reference": "Leinonen et al. (2012b)",
      "product": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 4.4
    },
    {
      "reference": "Leinonen et al. (2012b)",
      "product": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 4.4
    },
    {
      "reference": "Leinonen et al. (2012b)",
      "product": "Chicken's eggs",
      "country": "United Kingdom",
      "ghgEmission": 5.8
    },
    {
      "reference": "Pelletier et al. (2013)",
      "product": "Chicken's eggs",
      "country": "United States of America",
      "ghgEmission": 5.9
    },
    {
      "reference": "Pelletier et al. (2014)",
      "product": "Chicken's eggs",
      "country": "United States of America",
      "ghgEmission": 2.9
    },
    {
      "reference": "Casaca (2008)",
      "product": "Grass carp, silver carp, big head carp, common carp, catfish",
      "country": "Brazil",
      "ghgEmission": 34.8
    },
    {
      "reference": "Casaca (2008)",
      "product": "Grass carp, silver carp, big head carp, common carp, catfish",
      "country": "Brazil",
      "ghgEmission": 32.3
    },
    {
      "reference": "Casaca (2008)",
      "product": "Grass carp, silver carp, big head carp, common carp, catfish",
      "country": "Brazil",
      "ghgEmission": 32
    },
    {
      "reference": "Efole Ewoukem et al. (2012)",
      "product": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 87.8
    },
    {
      "reference": "Efole Ewoukem et al. (2012)",
      "product": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 40.4
    },
    {
      "reference": "Efole Ewoukem et al. (2012)",
      "product": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 34.9
    },
    {
      "reference": "Efole Ewoukem et al. (2012)",
      "product": "Tilapia, African catfish",
      "country": "Cameroon",
      "ghgEmission": 28
    },
    {
      "reference": "Astudillo et al. (2015)",
      "product": "Grass carp",
      "country": "China",
      "ghgEmission": 24.2
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tilapia",
      "country": "China",
      "ghgEmission": 14.2
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tilapia",
      "country": "China",
      "ghgEmission": 17
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tilapia",
      "country": "China",
      "ghgEmission": 13.2
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tilapia",
      "country": "China",
      "ghgEmission": 16.7
    },
    {
      "reference": "Roque d'Orbcastel et al. (2009)",
      "product": "Brook trout, brown trout, rainbow trout, arctic char",
      "country": "Denmark",
      "ghgEmission": 10.6
    },
    {
      "reference": "Aubin et al. (2009)",
      "product": "Rainbow trout",
      "country": "France",
      "ghgEmission": 10.6
    },
    {
      "reference": "Boissy et al. (2011)",
      "product": "Trout",
      "country": "France",
      "ghgEmission": 8.8
    },
    {
      "reference": "Boissy et al. (2011)",
      "product": "Trout",
      "country": "France",
      "ghgEmission": 9.8
    },
    {
      "reference": "Chen et al. (2015)",
      "product": "Trout",
      "country": "France",
      "ghgEmission": 8.8
    },
    {
      "reference": "Chen et al. (2015)",
      "product": "Trout",
      "country": "France",
      "ghgEmission": 9.4
    },
    {
      "reference": "Chen et al. (2015)",
      "product": "Trout",
      "country": "France",
      "ghgEmission": 8.8
    },
    {
      "reference": "Roque d'Orbcastel et al. (2009)",
      "product": "Brook trout, brown trout, rainbow trout, arctic char",
      "country": "France",
      "ghgEmission": 13.6
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Trout (large)",
      "country": "France",
      "ghgEmission": 8.3
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Trout (small)",
      "country": "France",
      "ghgEmission": 6.9
    },
    {
      "reference": "Koch and Salou (2015)",
      "product": "Sea bass, sea bream",
      "country": "France",
      "ghgEmission": 13.3
    },
    {
      "reference": "Wilfart et al. (2013)",
      "product": "Salmon",
      "country": "France",
      "ghgEmission": 8.1
    },
    {
      "reference": "Wilfart et al. (2013)",
      "product": "Common carp, tench, roach, perch, sander, pike",
      "country": "France",
      "ghgEmission": 39
    },
    {
      "reference": "Wilfart et al. (2013)",
      "product": "Common carp, tench, roach, perch, pike",
      "country": "France",
      "ghgEmission": 68.7
    },
    {
      "reference": "Mungkung et al. (2013)",
      "product": "Common carp",
      "country": "Indonesia",
      "ghgEmission": 5.5
    },
    {
      "reference": "Mungkung et al. (2013)",
      "product": "Common carp",
      "country": "Indonesia",
      "ghgEmission": 6.6
    },
    {
      "reference": "Mungkung et al. (2013)",
      "product": "Tilapia",
      "country": "Indonesia",
      "ghgEmission": 20.6
    },
    {
      "reference": "Mungkung et al. (2013)",
      "product": "Tilapia",
      "country": "Indonesia",
      "ghgEmission": 31.6
    },
    {
      "reference": "Dekamin et al. (2015)",
      "product": "Rainbow trout",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 5.2
    },
    {
      "reference": "Dekamin et al. (2015)",
      "product": "Rainbow trout",
      "country": "Iran (Islamic Republic of)",
      "ghgEmission": 18.4
    },
    {
      "reference": "Blonk et al. (2009)",
      "product": "Salmon",
      "country": "Norway",
      "ghgEmission": 7.5
    },
    {
      "reference": "Ellingsen et al. (2009)",
      "product": "Salmon",
      "country": "Norway",
      "ghgEmission": 7.4
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Trout",
      "country": "Peru",
      "ghgEmission": 15.3
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Trout",
      "country": "Peru",
      "ghgEmission": 14.1
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Trout",
      "country": "Peru",
      "ghgEmission": 14.9
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Tambaqui",
      "country": "Peru",
      "ghgEmission": 31.4
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Tambaqui",
      "country": "Peru",
      "ghgEmission": 29.1
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Tilapia",
      "country": "Peru",
      "ghgEmission": 31.1
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Tilapia",
      "country": "Peru",
      "ghgEmission": 32.4
    },
    {
      "reference": "Avadí et al. (2015)",
      "product": "Tilapia",
      "country": "Peru",
      "ghgEmission": 24.3
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tilapia",
      "country": "Thailand",
      "ghgEmission": 20.1
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tilapia",
      "country": "Thailand",
      "ghgEmission": 18
    },
    {
      "reference": "Jerbi et al. (2012)",
      "product": "Sea bass",
      "country": "Tunisia",
      "ghgEmission": 28.9
    },
    {
      "reference": "Jerbi et al. (2012)",
      "product": "Sea bass",
      "country": "Tunisia",
      "ghgEmission": 44.2
    },
    {
      "reference": "Boissy et al. (2011)",
      "product": "Salmon",
      "country": "United Kingdom",
      "ghgEmission": 8.7
    },
    {
      "reference": "Boissy et al. (2011)",
      "product": "Salmon",
      "country": "United Kingdom",
      "ghgEmission": 8.3
    },
    {
      "reference": "Blonk et al. (2009)",
      "product": "Pangasius",
      "country": "Viet Nam",
      "ghgEmission": 12.8
    },
    {
      "reference": "Blonk et al. (2009)",
      "product": "Pangasius",
      "country": "Viet Nam",
      "ghgEmission": 13.5
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Pangasius",
      "country": "Viet Nam",
      "ghgEmission": 12.9
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Pangasius",
      "country": "Viet Nam",
      "ghgEmission": 13.6
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Pangasius",
      "country": "Viet Nam",
      "ghgEmission": 12
    },
    {
      "reference": "Phong et al. (2011)",
      "product": "Tilapia, kissing gourami, giant gourami, silver barb, common carp, silver carp, striped catﬁsh",
      "country": "Viet Nam",
      "ghgEmission": 35.1
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Giant river prawn",
      "country": "Bangladesh",
      "ghgEmission": 82.8
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Giant river prawn",
      "country": "Bangladesh",
      "ghgEmission": 94.6
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tiger prawn",
      "country": "Bangladesh",
      "ghgEmission": 17.5
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tiger prawn",
      "country": "Bangladesh",
      "ghgEmission": 48.1
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tiger prawn",
      "country": "Bangladesh",
      "ghgEmission": 30.9
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Giant river prawn",
      "country": "Bangladesh",
      "ghgEmission": 43.6
    },
    {
      "reference": "Santos et al. (2015)",
      "product": "Amazon river prawn",
      "country": "Brazil",
      "ghgEmission": 87.7
    },
    {
      "reference": "Santos et al. (2015)",
      "product": "Amazon river prawn",
      "country": "Brazil",
      "ghgEmission": 69.6
    },
    {
      "reference": "Santos et al. (2015)",
      "product": "Giant giver prawn",
      "country": "Brazil",
      "ghgEmission": 48.5
    },
    {
      "reference": "Santos et al. (2015)",
      "product": "Giant giver prawn",
      "country": "Brazil",
      "ghgEmission": 38.3
    },
    {
      "reference": "Cao (2012)",
      "product": "Shrimp",
      "country": "China",
      "ghgEmission": 12.9
    },
    {
      "reference": "Cao (2012)",
      "product": "Shrimp",
      "country": "China",
      "ghgEmission": 8.3
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Shrimp",
      "country": "China",
      "ghgEmission": 15.1
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Shrimp",
      "country": "China",
      "ghgEmission": 16.3
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Shrimp",
      "country": "Thailand",
      "ghgEmission": 21.8
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Shrimp",
      "country": "Thailand",
      "ghgEmission": 19.1
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tiger prawn",
      "country": "Viet Nam",
      "ghgEmission": 17.3
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Shrimp",
      "country": "Viet Nam",
      "ghgEmission": 14
    },
    {
      "reference": "Henriksson et al. (2014a)",
      "product": "Tiger prawn",
      "country": "Viet Nam",
      "ghgEmission": 16.9
    },
    {
      "reference": "Jonell and Henriksson (2015)",
      "product": "Tiger prawn",
      "country": "Viet Nam",
      "ghgEmission": 62.4
    },
    {
      "reference": "Jonell and Henriksson (2015)",
      "product": "Tiger prawn",
      "country": "Viet Nam",
      "ghgEmission": 99
    }
  ];



db.Foods
  .deleteMany({})
  .then(() => db.Foods.collection.insertMany(foodsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });