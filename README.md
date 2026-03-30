## Project Overview: Threaded, a Fashion E-commerce Store

This repository serves as the core engine for Threaded, a modern Fashion E-commerce ecosystem. To ensure a clean separation of concerns, the project is divided into three specialized modules:

- **Client Side** **-**
The React-based user interface. A high-performance, responsive storefront built with React.js and Tailwind CSS. It features a dynamic product catalog and an interactive shopping cart with Stripe integration, and real-time order tracking for a seamless customer journey.

- **Server Side** **-**
The Node.js API and database layer. A robust RESTful API powered by Node.js and Express.js. It manages secure user authentication via JWT, handles complex business logic for orders and payments, and uses MongoDB with Mongoose for scalable data persistence.

- **Admin Side** **-**
The internal dashboard for managing data. A secure, role-based management portal that gives administrators full CRUD control over the product catalog. It includes integrated Cloudinary support for image uploads and a dedicated interface to update and sync order statuses in real time.

## Central Documentation
The Business Requirements Document (BRD) is maintained to ensure a single source of truth.
  - [Business Requirements Document](<docs/BRD - E-Commerce & Admin Management System.md>)

## Related Repositories
  - Client Side: [View Client Repository](https://github.com/ThR-202IV/e-commerce-FE)
  - Admin Side: [View Admin Repository](https://github.com/ThR-202IV/e-commerce-Admin)
