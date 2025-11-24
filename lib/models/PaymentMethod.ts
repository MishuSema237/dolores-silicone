import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPaymentMethod extends Document {
    name: string;
    details: string;
    logoUrl?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const PaymentMethodSchema = new Schema<IPaymentMethod>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        logoUrl: {
            type: String,
            required: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const PaymentMethod: Model<IPaymentMethod> =
    mongoose.models.PaymentMethod ||
    mongoose.model<IPaymentMethod>("PaymentMethod", PaymentMethodSchema);

export default PaymentMethod;
