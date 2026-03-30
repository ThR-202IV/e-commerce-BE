**Project Name:** Threaded Fashion Store

**Project Type:** End-to-End E-commerce Solution

**Role:** Business Analyst & Full-Stack Developer


### **1. Executive Summary**
The goal of this project is to deliver a scalable, full-stack e-commerce solution that bridges the gap between customer shopping experiences and backend administrative operations. The system provides a secure environment for users to browse and purchase products while offering administrators a centralized dashboard for inventory and order lifecycle management.
### **2. Project Scope**
Through a mock discovery phase, I identified that the scope must include the development of two primary interfaces:
1.	Client-Side Interface: Dynamic catalog, secure checkout, and real-time order tracking to ensure a seamless, order fulfillment experience.
2.	Administrative Dashboard: Role-based access control (RBAC), inventory CRUD operations, and order fulfillment management for streamlining the 'click-to-delivery’ cycle.

### **3. User Stories and Acceptance Criteria**

### 🛒 Interface 1: Client-Side

**1.	User Authentication**
-	User Story
    -	As a Customer, I want to create an account and log in securely using my email, so that my cart and order history are saved across sessions.
-	Acceptance Criteria
    -	Users must be able to register using a unique email address and a password that is at least 8 characters, including one number.
    -	Passwords must be hashed using Bcrypt before being saved to the database; raw passwords must never be stored.
    -	Upon successful login, the system must issue a JSON Web Token (JWT) to be stored in the browser for session persistence.
    -	The system must display clear error messages for invalid credentials, such as "Incorrect email or password," to prevent account enumeration.
    -	Once logged in, the user’s name or profile icon must be visible in the navigation bar to indicate an active session.
    -	Users must be able to log out, which should invalidate the local token and redirect the user to the home page.


**2.	Dynamic Product Discovery**
-	User Story
    -	As a Customer, I want to browse a dynamic product catalog with real-time search and category filtering, so that I can find the items I want to purchase quickly and easily.
-	Acceptance Criteria
    -	The search bar must be visible on all catalog pages.
    -	Implement a debounced search function that dynamically updates the UI after a 3-character input without a full-page refresh. 
    -	The system must search across multiple attributes, including Product Name, Brand, and Short Description.
    -	Users must be able to select one or multiple categories simultaneously (multi-select).
    -	Product cards in the dynamic view must display an image, name, price, and "Add to Cart" button at a minimum.
    -	The system must display the total number of items found (e.g., "Showing 20 of 45 items

**3.	Shopping Cart Management**
-	User Story
    -	As a Customer, I want to add, remove, and adjust item quantities in a persistent cart, so that I can review my total costs before checking out.
-	Acceptance Criteria
    -	Users must be able to add a product to the cart from the product catalog or product detail page, with a visual confirmation (e.g., a mini-cart" update).
    -	The system must persist cart data for logged-in users across multiple sessions and devices.
    -	Functionality to increment or decrement item quantities directly within the cart view, with the "Total Price" updating instantly.
    -	Users must be able to remove an individual item entirely or "Clear Cart" with a single action.
    -	The cart must display a summary breakdown including the Subtotal, Estimated Tax, Shipping Fees (if applicable), and the Final Total. 

**4.	Secure Integrated Checkout**
-	User Story 
    -	As a Customer, I want to complete my order through a secure, integrated payment gateway, so that I can finalize my purchase without leaving the application.
-	Acceptance Criteria
    -	The payment interface must be fully embedded within the application to ensure the user never leaves the site during the checkout process.
    -	The system must support multiple payment methods, including Credit/Debit cards (Visa, Mastercard)
    -	The application must never store raw card numbers or CVV codes; all sensitive data must be tokenized by the payment provider.
    -	The "Pay" button must disable automatically after the first click to prevent duplicate transactions or multiple charges. 
    -	Generate a unique Transaction ID that is logged and mapped to the specific Order ID for all transaction attempts.
    -	Upon a successful transaction, the user must be automatically redirected to a "Thank You" or "Order Confirmation" page within the application.
    -	Upon payment failure, a specific, user-friendly error message must be displayed (e.g., "Insufficient Funds" or "Incorrect CVV") while retaining all other checkout information.

### 💻 Interface 2: Admin Side
**1.	Role-Based Access Control (RBAC)**
-	User Story
    -	As a System Owner, I want to restrict the dashboard to authorized personnel only, so that sensitive business data and inventory settings are protected from the public.
-	Acceptance Criteria
    -	The system must require a valid username and password to access the dashboard URL.
    -	Unauthenticated users attempting to access the dashboard link directly must be  redirected to the Login Page.
    -	Grant access only to users assigned the "System Owner" or "Authorized Personnel" roles.
    -	Users with unauthorized roles (e.g., "Standard User") must receive an "Access Denied" message when attempting to view the dashboard.
    -	Secure sensitive data and inventory settings from both the UI and source code until a valid session is established.
    -	The dashboard session must automatically expire after 15 minutes of inactivity, requiring the user to re-authenticate.

**2.	Inventory CRUD Operations**
-	User Story
    -	As an Admin, I want to perform Create, Read, Update, and Delete (CRUD) operations on the inventory, so that I can manage the menu offerings in real-time without technical assistance.
-	Acceptance Criteria
    -	Admin can create new items with mandatory Name, Description, Price, and Category fields through a "Create New Item" interface.
    -	Validate if all mandatory fields are completed and the Price is a positive numerical value before allowing a new item to be saved.
    -	Display a searchable and filterable list of all current inventory items to the Admin.
    -	Admin can view or edit any existing inventory item details.
    -	Admin can update item fields with changes reflecting on the menu in real-time.
    -	Provide a "Delete" option for each inventory item to remove it from the menu offerings.
    -	Trigger a confirmation pop-up (e.g., "Are you sure you want to delete this item?") before a record is permanently deleted.
    -	Log Admin User ID and the timestamp for every Create, Update, or Delete action for audit purposes.

**3.	Order Fulfillment Management**
-	User Story 
    -	As an Admin, I want to view and update the status of all active orders, so that I can manage the fulfillment workflow and provide the customer with real-time updates.
-	Acceptance Criteria
    -	Provide a dedicated "Order Management" dashboard accessible only to users with Admin permissions.
    -	Dashboard must list active orders with ID, Customer, Timestamp, and Status.
    -	Admins can filter the order list by specific statuses (e.g., Pending, In Progress etc.).
    -	Admin can select an individual order to view its full details, including itemized contents and special instructions.
    -	Admin can manually update an order's status via a dropdown or toggle interface (e.g., moving from "Pending" to "In Progress").
    -	Order status updates trigger real-time email or push notifications to customers.
    -	Status transitions must follow a logical workflow (e.g., an order cannot be "Completed" before it is "In Progress"). 
    -	Display confirmation message upon successful status update.


