import mongoose from "mongoose";

export interface IPaymentMethod {
    name: string;
    details: string;
    logoUrl?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const PaymentMethodSchema = new mongoose.Schema<IPaymentMethod>(
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

const PaymentMethod = (mongoose.models.PaymentMethod as mongoose.Model<IPaymentMethod>) ||
    mongoose.model<IPaymentMethod>("PaymentMethod", PaymentMethodSchema);

export default PaymentMethod;
