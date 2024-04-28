import mongoose from 'mongoose';


const ProductsSchema = new mongoose.Schema(
    {
        product_id: {
          type: String,
          required: [true, "Product ID is required"],
          unique: true
        },
        name: {
          type: String,
          required: [true, "Product name is required"],
          trim: true
        },
        brand: {
          type: String,
          required: [true, "Brand name is required"],
          trim: true
        },
        description: {
          type: String,
          required: [true, "Product description is required"],
          trim: true
        },
        category: {
          type: String,
          required: [true, "Product category is required"],
          trim: true
        },
        price: {
          type: "Number",
          required: [true, "Product price is required"]
        },
        weight: {
          type: String,
          required: [true, "Product weight is required"],
          trim: true
        },
        ingredients: {
          type: [String],
          required: [true, "Ingredients list is required"]
        },
        nutrition_facts: {
          serving_size: {
            type: String,
            required: [true, "Serving size is required"],
            trim: true
          },
          servings_per_container: {
            type: Number,
            required: [true, "Servings per container is required"]
          },
          calories: {
            type: Number,
            required: [true, "Calories are required"]
          },
          total_fat: {
            type: String,
            required: [true, "Total fat is required"],
            trim: true
          },
          saturated_fat: {
            type: String,
            required: [true, "Saturated fat is required"],
            trim: true
          },
          cholesterol: {
            type: String,
            required: [true, "Cholesterol is required"],
            trim: true
          },
          sodium: {
            type: String,
            required: [true, "Sodium content is required"],
            trim: true
          },
          total_carbohydrate: {
            type: String,
            required: [true, "Total carbohydrate is required"],
            trim: true
          },
          dietary_fiber: {
            type: String,
            required: [true, "Dietary fiber is required"],
            trim: true
          },
          sugars: {
            type: String,
            required: [true, "Sugar content is required"],
            trim: true
          },
          protein: {
            type: String,
            required: [true, "Protein content is required"],
            trim: true
          },
          calcium: {
            type: String,
            required: [true, "Calcium content is required"],
            trim: true
          },
          iron: {
            type: String,
            required: [true, "Iron content is required"],
            trim: true
          },
          potassium: {
            type: String,
            required: [true, "Potassium content is required"],
            trim: true
          }
        },
        allergens: {
          type: [String],
          required: [true, "Allergens list is required"]
        },
        expiry_date: {
          type: String,
          required: [true, "Expiry date is required"],
          trim: true
        },
        manufacture_date: {
          type: String,
          required: [true, "Manufacture date is required"],
          trim: true
        }
      }
      
)

const Products = mongoose.model('Product', ProductsSchema)

export default Products