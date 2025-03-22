import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: false,
      default: 0
    },
    age: 
      {
        type: Number,
        required: false,
        default: 0
      },
      activityLevel: {
        type: String,
        required: false,
        default: ""
      }
  },
  {
    timestamps: true,
  }
);

//Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//compare password
userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

//export
export default User;
