# Test Plan for Website: http://www.automationpractice.pl/index.php

## Test Objectives
Ensure the website's quality in terms of functionality, appearance, performance, compatibility, security, and API.

---

## 1. Functional Testing (Cypress)
**Goal:** Verify the correctness of the website's functionalities.

**Scope:**
- User registration
- Login/logout
- Adding products to the cart
- Browsing products
- Order completion
- Contact form


---

## 2. Visual Testing (DevTools)
**Goal:** Ensure the website displays correctly across browsers and resolutions.

**Scope:**
- Resolutions (mobile, tablet, desktop)
- Display of key elements (logo, buttons, images)


---

## 3. Performance Testing (JMeter)
**Goal:** Assess the website's speed and stability under various loads.

**Scope:**
- Loading time of the homepage
- Cart performance under load
- Handling concurrent users


---

## 4. Compatibility Testing (BrowserStack)
**Goal:** Verify the website works correctly on different browsers and devices.

**Scope:**
- Browsers: Chrome, Firefox, Safari, Edge
- Operating Systems: Windows, macOS, Android, iOS


---

## 5. Security Testing (OWASP ZAP)
**Goal:** Detect potential vulnerabilities in the website.

**Scope:**
- SQL Injection tests
- Cross-Site Scripting (XSS) tests
- Secure data transmission (HTTPS)


---

## 6. API Testing (Postman)
**Goal:** Verify the correctness of the API used by the website.

**Scope:**
- Endpoints for registration, login, orders
- API response validation (HTTP status codes, data)


---

## Test Schedule
1. **Week 1:** Functional and visual testing.
2. **Week 2:** Performance and compatibility testing.
3. **Week 3:** Security and API testing.
4. **Week 4:** Analysis and reporting.


