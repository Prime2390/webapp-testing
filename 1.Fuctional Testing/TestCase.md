<h1>Test Cases: User Registration (TC001)</h1>

<h2>TC001.1: Register a new user with valid data</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC001.1</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that a user can register with valid data.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter a unique email address and click "Create an account".</li>
                <li>Fill in personal details: first name, last name, password, and date of birth.</li>
                <li>Click "Register".</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The message "Your account has been created" is displayed on the screen.</td>
    </tr>
</table>

<h2>TC001.2: Attempt to register with an already registered email address</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC001.2</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system prevents creating an account with an already registered email address.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter an already registered email address.</li>
                <li>Click "Create an account".</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The message "An account using this email address has already been registered" is displayed on the screen.</td>
    </tr>
</table>

<h1>Test Cases: User Login (TC002)</h1>

<h2>TC002.1: Login with correct data</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC002.1</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the user can log in with valid credentials.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter a valid email: <code>dominikbernas@gazeta.pl</code>.</li>
                <li>Enter the correct password: <code>Szedok2390</code>.</li>
                <li>Click the "Login" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The user is logged in and sees a message: "Welcome to your account. Here you can manage all of your personal information and orders."</td>
    </tr>
</table>

<h2>TC002.2: Attempt login with only an email</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC002.2</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system prompts for a password when only an email is entered.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter a valid email (randomly generated).</li>
                <li>Leave the password field empty and click the "Login" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>An error message is displayed: "Password is required."</td>
    </tr>
</table>

<h2>TC002.3: Attempt login with an incorrect email</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC002.3</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system rejects login with an invalid email address.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter an invalid email (randomly generated).</li>
                <li>Enter the correct password: <code>Szedok2390</code>.</li>
                <li>Click the "Login" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>An error message is displayed: "Authentication failed."</td>
    </tr>
</table>

<h2>TC002.4: Attempt login with an incorrect password</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC002.4</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system rejects login with an invalid password.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter a valid email: <code>dominikbernas@gazeta.pl</code>.</li>
                <li>Enter an incorrect password (randomly generated).</li>
                <li>Click the "Login" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>An error message is displayed: "Authentication failed."</td>
    </tr>
</table>

<h1>Test Case: User Login and Logout (TC003)</h1>

<h2>TC003.1: Successful login and logout</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC003.1</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the user can log in with valid credentials, view their account, and log out successfully.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php?id_category=7&controller=category</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Enter a valid email: <code>dominikbernas@gazeta.pl</code>.</li>
                <li>Enter the correct password: <code>Szedok2390</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Verify that the account information page is visible and contains the message: "Welcome to your account. Here you can manage all of your personal information and orders."</li>
                <li>Click the "Logout" button.</li>
                <li>Verify that the user is redirected to the authentication page and the URL contains <code>/index.php?controller=authentication&back=my-account</code>.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The user logs in successfully, sees their account information, and logs out successfully, being redirected to the authentication page.</td>
    </tr>
</table>

<h1>Test Cases: Password Recovery (TC004)</h1>

<h2>TC004.1: Recover password with a valid email</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC004.1</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system sends a password recovery email when a valid email address is provided.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Click the "Forgot your password?" link.</li>
                <li>Enter a valid email address: <code>dominikbernas@gmail.com</code>.</li>
                <li>Click the "Retrieve Password" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>A confirmation message is displayed: "A confirmation email has been sent to your address: Dominikbernas@gmail.com."</td>
    </tr>
</table>

<h2>TC004.2: Recover password with an invalid email</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC004.2</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system displays an error when an invalid email address is provided.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Login" button.</li>
                <li>Click the "Forgot your password?" link.</li>
                <li>Enter an invalid email address (randomly generated).</li>
                <li>Click the "Retrieve Password" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>An error message is displayed: "There is no account registered for this email address."</td>
    </tr>
</table>

<h1>Test Cases: Contact Form (TC005)</h1>

<h2>TC005.1: Submit contact form with all data correctly filled</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC005.1</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the contact form is submitted successfully when all required data is provided.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Contact Us" link.</li>
                <li>Select "Webmaster" from the Subject dropdown.</li>
                <li>Enter a valid email address: <code>dominikbernas@gazeta.pl</code>.</li>
                <li>Enter an order reference: <code>Dress</code>.</li>
                <li>Type a message: "The dress is too small and does not look like the picture".</li>
                <li>Click the "Send" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>A success message is displayed: "Your message has been successfully sent to our team."</td>
    </tr>
</table>

<h2>TC005.2: Submit contact form without an email</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC005.2</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system shows an error when the email field is left empty.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Contact Us" link.</li>
                <li>Select "Webmaster" from the Subject dropdown.</li>
                <li>Enter an order reference: <code>Dress</code>.</li>
                <li>Type a message: "The dress is too small and does not look like the picture".</li>
                <li>Click the "Send" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>An error message is displayed: "Invalid email address."</td>
    </tr>
</table>

<h2>TC005.3: Submit contact form without a message</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC005.3</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that the system shows an error when the message field is left empty.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Contact Us" link.</li>
                <li>Select "Webmaster" from the Subject dropdown.</li>
                <li>Enter a valid email address: <code>dominikbernas@gazeta.pl</code>.</li>
                <li>Enter an order reference: <code>Dress</code>.</li>
                <li>Click the "Send" button without typing a message.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>An error message is displayed: "The message cannot be blank."</td>
    </tr>
</table>

<h1>Test Cases: Home Page Button Functionality (TC006)</h1>

<h2>TC006.1: Verify "Women" button functionality</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC006.1</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that clicking the "Women" button redirects to the correct category page.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Women" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The URL contains <code>/index.php?id_category=3&controller=category</code>.</td>
    </tr>
</table>

<h2>TC006.2: Verify "Dresses" button functionality</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC006.2</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that clicking the "Dresses" button redirects to the correct category page.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "Dresses" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The URL contains <code>/index.php?id_category=8&controller=category</code>.</td>
    </tr>
</table>

<h2>TC006.3: Verify "T-Shirts" button functionality</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC006.3</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that clicking the "T-Shirts" button redirects to the correct category page.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the "T-Shirts" button.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>The URL contains <code>/index.php?id_category=5&controller=category</code>.</td>
    </tr>
</table>

<h2>TC006.4: Verify additional button functionality</h2>
<table>
    <tr>
        <th>Identifier</th>
        <td>TC006.4</td>
    </tr>
    <tr>
        <th>Description</th>
        <td>Verify that clicking the additional button (4th in menu) does not produce any errors.</td>
    </tr>
    <tr>
        <th>Steps</th>
        <td>
            <ol>
                <li>Open the page <code>http://www.automationpractice.pl/index.php</code>.</li>
                <li>Click the 4th button in the menu.</li>
            </ol>
        </td>
    </tr>
    <tr>
        <th>Expected Result</th>
        <td>No errors occur, and the page behaves as expected.</td>
    </tr>
</table>
