import { Router } from "express";
import { CreateCompany } from "./app/Controllers/CreateCompany";
import { CreateProduct } from "./app/Controllers/CreateProduct";
import { CreateCategory } from "./app/Controllers/CreateCategory";
import { CreateOrder } from "./app/Controllers/CreateOrder";
import { GetOrdersByCompany } from "./app/useCases/Order/GetOrdersByCompany";
import { DeleteCompany } from "./app/useCases/Company/DeleteCompany";
import { DeleteProduct } from "./app/useCases/Product/DeleteProduct";
import { DeleteCategory } from "./app/useCases/Category/DeleteCategory";
import { DeleteOrder } from "./app/useCases/Order/DeleteOrder";
import { ListComapanyById } from "./app/useCases/Company/ListComapanyById";
import { ListCompanies } from "./app/useCases/Company/ListCompanies";
import { ListProductById } from "./app/useCases/Product/ListProductbyId";
import { ListProducts } from "./app/useCases/Product/List";
import { ListProductsByCategory } from "./app/useCases/Product/ListProductsByCategory";
import { ListCategoriesByCompany } from "./app/useCases/Category/ListCategoriesByCompany";
import { Login } from "./app/useCases/Auth/Login";
import { UpdateOrderStatus } from "./app/useCases/Order/UpdateOrder";
import { protect } from "./app/Middleware/auth";
import { updateProduct } from "./app/useCases/Product/updateProduct";

export const router = Router();

// Company routes
router.post("/api/companies", CreateCompany);
router.get("/api/companies", ListCompanies);
router.get("/api/companies/:companyId", ListComapanyById);
router.delete("/api/companies/:companyId", DeleteCompany);

// Product routes
router.post("/api/company/:companyId/products", protect, CreateProduct);
router.get(
  "/api/company/:companyId/products/:productId",
  protect,
  ListProductById
);
router.get(
  "/api/company/:companyId/categories/:categoryId/products",
  protect,
  ListProductsByCategory
);
router.get("/api/company/:companyId/products", protect, ListProducts);
router.get("/api/company/:companyId/products/:productId/update", protect, updateProduct);
router.delete(
  "/api/company/:companyId/products/:productId",
  protect,
  DeleteProduct
);

// Category routes
router.post("/api/company/:companyId/categories", protect, CreateCategory);
router.get(
  "/api/company/:companyId/categories",
  protect,
  ListCategoriesByCompany
);
router.delete(
  "/api/company/:companyId/categories/:categoryId",
  protect,
  DeleteCategory
);

// Order routes
router.get("/api/company/:companyId/orders", protect, GetOrdersByCompany);
router.post("/api/company/:companyId/orders", protect, CreateOrder);
router.delete("/api/company/:companyId/orders/:orderId", protect, DeleteOrder);
router.patch(
  "/api/company/:companyId/orders/:orderId",
  protect,
  UpdateOrderStatus
);

// Auth routes
router.post("/api/login", Login);
