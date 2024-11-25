const { defaults } = require("joi");
const mongoose = require ("mongoose");



const listingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image : { 
        filename: String,
        url: {
            type: String,
            default: "https://images.pexels.com/photos/17644421/pexels-photo-17644421/free-photo-of-seagulls-flying-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            set : (v) => v === "" ? "https://images.pexels.com/photos/17644421/pexels-photo-17644421/free-photo-of-seagulls-flying-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1": v,
        }
      },
    price: { type: Number, required: true },
    
    location: { type: String, required: true },
    country: { type: String, required: true },
});

  
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
//model or class
