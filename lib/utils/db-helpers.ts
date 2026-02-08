import connectDB from "@/lib/db/mongodb";
import Product from "@/lib/models/Product";
import Order from "@/lib/models/Order";
import Customer from "@/lib/models/Customer";
import GalleryItem from "@/lib/models/GalleryItem";
import ContentBlock from "@/lib/models/ContentBlock";

// Helper to ensure DB connection before operations
export async function withDB<T>(
  operation: () => Promise<T>,
  fallbackValue?: T
): Promise<T> {
  try {
    await connectDB();
    return await operation();
  } catch (error) {
    console.error("Database operation failed:", error);
    if (fallbackValue !== undefined) {
      return fallbackValue;
    }
    throw error;
  }
}

// Product helpers
export async function getProducts(filters?: {
  status?: string;
  featured?: boolean;
  limit?: number;
  category?: string;
  excludeId?: string;
}) {
  return withDB(async () => {
    const query: any = {};
    if (filters?.status) query.status = filters.status;
    if (filters?.featured !== undefined) query.featured = filters.featured;
    if (filters?.category) query.category = filters.category;
    if (filters?.excludeId) query._id = { $ne: filters.excludeId };

    let queryBuilder = Product.find(query).sort({ createdAt: -1 });
    if (filters?.limit) {
      queryBuilder = queryBuilder.limit(filters.limit);
    }
    const products = await queryBuilder.lean().exec();
    return JSON.parse(JSON.stringify(products));
  }, []);
}

export async function getProductBySlug(slug: string) {
  return withDB(async () => {
    const product = await Product.findOne({ slug, status: "active" }).lean().exec();
    return JSON.parse(JSON.stringify(product));
  });
}

export async function getProductById(id: string) {
  return withDB(async () => {
    const product = await Product.findById(id).lean().exec();
    return JSON.parse(JSON.stringify(product));
  });
}

// Order helpers
export async function createOrder(orderData: any) {
  return withDB(() => {
    const order = new Order(orderData);
    return order.save();
  });
}

export async function getOrderByReference(reference: string) {
  return withDB(() => Order.findOne({ orderReference: reference }).exec());
}

export async function getOrders(filters?: {
  status?: string;
  email?: string;
  limit?: number;
}) {
  return withDB(async () => {
    const query: any = {};
    if (filters?.status) query.status = filters.status;
    if (filters?.email) query["customer.email"] = filters.email;

    let queryBuilder = Order.find(query).sort({ createdAt: -1 });
    if (filters?.limit) {
      queryBuilder = queryBuilder.limit(filters.limit);
    }
    return queryBuilder.exec();
  });
}

export async function updateOrderStatus(
  orderId: string,
  status: string,
  note?: string,
  triggeredBy?: string
) {
  return withDB(async () => {
    const order = await Order.findById(orderId);
    if (!order) throw new Error("Order not found");

    order.status = status as any;
    if (note || triggeredBy) {
      order.statusHistory.push({
        status,
        timestamp: new Date(),
        note,
        triggeredBy,
      });
    }
    return order.save();
  });
}

// Customer helpers
export async function findOrCreateCustomer(customerData: {
  name: string;
  email: string;
  phone?: string;
}) {
  return withDB(async () => {
    let customer = await Customer.findOne({ email: customerData.email });
    if (!customer) {
      customer = new Customer(customerData);
      await customer.save();
    }
    return customer;
  });
}

// Gallery helpers
export async function getGalleryItems(filters?: {
  featured?: boolean;
  tags?: string[];
  limit?: number;
}) {
  return withDB(async () => {
    const query: any = {};
    if (filters?.featured !== undefined) query.featured = filters.featured;
    if (filters?.tags && filters.tags.length > 0) {
      query.tags = { $in: filters.tags };
    }

    let queryBuilder = GalleryItem.find(query)
      .sort({ order: 1, createdAt: -1 });
    if (filters?.limit) {
      queryBuilder = queryBuilder.limit(filters.limit);
    }
    const items = await queryBuilder.lean().exec();
    return JSON.parse(JSON.stringify(items));
  }, []);
}

// Content block helpers
export async function getContentBlock(key: string) {
  return withDB(() =>
    ContentBlock.findOne({ key, active: true }).exec()
  );
}

export async function getContentBlocks(type?: string) {
  return withDB(async () => {
    const query: any = { active: true };
    if (type) query.type = type;
    return ContentBlock.find(query).sort({ order: 1 }).exec();
  }, []);
}

