# Bug Report: Dropdown Misalignment in "Contact" Page

---

### **Title:**
Dropdown Misalignment in the "Contact" Page

---

### **Description:**
In the "Contact" page, the dropdown list for the "Subject Heading" field is displayed in the wrong location. Instead of appearing directly below the field, it shows up in a distant part of the page, causing confusion for users. This issue is especially noticeable on tablets and mobile phones.

---

### **Steps to Reproduce:**
1. Navigate to the "Contact" page on a tablet or mobile phone.
2. Click on the "Subject Heading" dropdown list.
3. Observe the position of the dropdown menu.

---

### **Expected Result:**
The dropdown menu should appear directly below the "Subject Heading" field, in line with the field’s position, providing a smooth and intuitive user experience.

---

### **Actual Result:**
The dropdown menu is displayed in a different part of the page, far from the "Subject Heading" field. This misalignment is particularly problematic on tablets and mobile devices, negatively impacting usability in responsive mode.

---

### **Screenshot:**
The attached screenshot illustrates the issue with the dropdown menu's position.  
![Screenshot]([2.png]https://github.com/Prime2390/webapp-testing/blob/main/2.Visual%20Testing/Bugs/1.png)

---

### **Environment:**
- **Operating Systems:** iOS 16, Android 13  
- **Browsers:** Safari Mobile, Chrome Mobile  
- **Devices:** iPhone 13, Samsung Galaxy S22, iPad Air  
- **Screen Resolutions:** 375x667, 768x1024  
- **Additional Notes:** Tested in responsive mode with no plugins affecting CSS.

---

### **Priority:**
Medium — This issue affects the usability of the contact form on mobile and tablet devices, creating a significant user inconvenience.

---

### **Proposed Solution:**
1. Review the CSS styles responsible for dropdown positioning.  

# Bug Report: Responsiveness Issues with Interface Elements on Mobile Devices

---

### **Title:**
Responsiveness Issues with Interface Elements on Mobile Devices

---

### **Description:**
On mobile devices, some interface elements, such as the navigation menu and buttons, do not scale properly. This issue impacts the navigation and usability of the website, as elements may be difficult to click or appear partially off-screen.

---

### **Steps to Reproduce:**
1. Open the [Automation Practice](http://www.automationpractice.pl/index.php) website on a mobile device (or in browser responsive mode).  
2. Inspect the navigation menu and buttons.  
3. Check their usability and visibility at smaller resolutions, such as 375x667 (a typical smartphone resolution).  

---

### **Expected Result:**
Interface elements (navigation menu, buttons) should be properly scaled and fully visible on smaller screens, allowing users to interact with the website's features comfortably.

---

### **Actual Result:**
- **Navigation Menu:** Partially shifted off-screen, making some menu items inaccessible.  
- **Buttons:** Appear too small, making them difficult to tap. In some cases, buttons overlap with other elements or are completely hidden.  

---

### **Environment:**
- **Operating System:** Android 13, iOS 16  
- **Browser:** Chrome Mobile, Safari Mobile  
- **Devices:** Samsung Galaxy S22, iPhone 13  
- **Screen Resolutions:** 375x667, 414x896  
- **Mode:** Responsive/Mobile  

---

### **Priority:**
High — This issue significantly impacts the user experience, especially for mobile users, who represent a critical portion of website traffic.

---

### **Proposed Solution:**
1. Implement responsive CSS styles (`@media queries`) to adjust the size and position of interface elements for smaller screens.  
2. Increase the minimum size of clickable elements, such as buttons, following UX guidelines (e.g., 48x48 px).  
3. Test the fixes on various mobile devices and in browser responsive modes.  
4. Ensure that elements like dropdown menus and buttons are fully visible and function correctly.  

---

# Bug Report: Inactive Social Media Links in the "Follow us" Section

---

### **Title:**
Inactive Social Media Links in the "Follow us" Section

---

### **Description:**
The social media links (Facebook, Twitter, RSS) in the "Follow us" section of the website footer are inactive or lead to unavailable pages. This issue prevents users from accessing the brand's official social media profiles.

---

### **Steps to Reproduce:**
1. Navigate to the homepage of [Automation Practice](http://www.automationpractice.pl/index.php).
2. Scroll down to the footer and locate the "Follow us" section.
3. Click on the social media icons (Facebook, Twitter, RSS).
4. Observe that the links are either inactive or redirect to incorrect pages.

---

### **Expected Result:**
The links in the "Follow us" section should direct users to active and correct social media profiles, such as:
- **Facebook:** The official Facebook page.
- **Twitter:** The official Twitter profile.
- **RSS:** A functional RSS feed with website updates.

---

### **Actual Result:**
- **Facebook:** The link does not lead to any active page.  
- **Twitter:** The link is inactive or redirects to an error page.  
- **RSS:** The RSS feed is unavailable or not functioning properly.

---

### **Screenshot:**
The screenshot below shows the "Follow us" section with inactive social media links.  
![Screenshot]((https://github.com/Prime2390/webapp-testing/blob/main/2.Visual%20Testing/Bugs/2.png))

---

### **Environment:**
- **Operating System:** Windows 11, macOS Ventura  
- **Browser:** Chrome 117, Firefox 116, Safari 16  
- **Devices:** Desktop, Laptop  

---

### **Priority:**
Medium — The issue does not affect core website functionality but limits user engagement with the brand on social media platforms.

---

### **Proposed Solution:**
1. Update the social media links in the "Follow us" section to point to active pages:  
   - **Facebook:** Link to the official Facebook page.  
   - **Twitter:** Link to the official Twitter profile.  
   - **RSS:** Provide a working RSS feed URL.  

---

# Bug Report: Empty Page in the "Information" Section

---

### **Title:**
Empty Page Displayed in the "Information" Section

---

### **Description:**
The "Information" section of the website redirects to an empty page with the error message "This page does not exist." This issue prevents users from accessing important content that should be available under this section.

---

### **Steps to Reproduce:**
1. Navigate to the [Automation Practice](http://www.automationpractice.pl/index.php) website.  
2. Click on the "Information" section or any related link in the menu.  
3. Observe that the page displays an error message instead of the expected content.  

---

### **Expected Result:**
The "Information" section should load correctly, displaying relevant content, such as company details, terms and conditions, or FAQs.

---

### **Actual Result:**
An error message is displayed: "This page does not exist," and the page remains empty.  

---

### **Screenshot:**
The attached screenshot shows the error message when accessing the "Information" section.  
![Screenshot]([3.png](https://github.com/Prime2390/webapp-testing/blob/main/2.Visual%20Testing/Bugs/3.png))

---

### **Environment:**
- **Operating System:** Windows 11, macOS Ventura  
- **Browser:** Chrome 117, Firefox 116, Safari 16  
- **Devices:** Desktop, Laptop, Mobile Devices  

---

### **Priority:**
High — This issue directly impacts user experience by preventing access to potentially critical information about the website.

---






